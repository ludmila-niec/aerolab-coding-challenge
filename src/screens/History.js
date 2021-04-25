import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Table from "../components/Table";
import EmptyHistory from "../components/EmptyData/EmptyHistory";
import Spinner from "../components/Spinner";
import { getUserHistory } from "../service/userApi";
import { useUser } from "../context/user/UserContext";
import { STATUS } from "../service/status";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;

  & .error-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  & .error {
    font-size: 1rem;
    font-style: italic;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 300px;
    & .error-title {
      font-size: 2rem;
    }

    & .error {
      font-size: 1.8rem;
    }
  }
`;

const History = () => {
  const [history, setHistory] = useState([]);
  const [status, setStatus] = useState(STATUS.PENDING);

  const {
    state: { user },
  } = useUser();

  useEffect(() => {
    getUserHistory()
      .then((data) => {
        setHistory(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(() => {
        setStatus(STATUS.REJECTED);
      });
  }, []);

  const userHasProducts = history.length > 0;

  if (status === STATUS.PENDING) {
    return (
      <>
        <Hero title={`${user.name}'s redeem history`} />
        <Layout>
          <Container>
            <Spinner />
          </Container>
        </Layout>
      </>
    );
  }

  if (status === STATUS.REJECTED) {
    return (
      <>
        <Hero title={`${user.name}'s redeem history`} />
        <Layout>
          <Container>
            <h3 className="error-title">Something went wrong</h3>
            <p className="error">Failed to load user's history</p>
          </Container>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Hero title={`${user.name}'s redeem history`} />
      <Layout>
        {userHasProducts ? <Table history={history} /> : <EmptyHistory />}
      </Layout>
    </>
  );
};

export default History;
