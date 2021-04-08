import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Table from "../components/Table";
import EmptyHistory from '../components/EmptyData/EmptyHistory'
import Spinner from "../components/Spinner";
import { getUserHistory } from "../service/userApi";
import { useUser } from "../context/user/UserContext";

const History = () => {
  const [history, setHistory] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const {
    state: { user },
  } = useUser();

    useEffect(() => {
      setIsloading(true);
      getUserHistory()
        .then((data) => {
          setHistory(data);
          setIsloading(false);
        })
        .catch(() => {
          setIsloading(false);
          setError("Error: Failed to load user history");
        });
    }, []);

  const userHasProducts = history.length > 0;

  return (
    <>
      <Hero title={`${user.name}'s redeem history`} />
      <Layout>
        {isLoading ? (
          <Spinner />
        ) : userHasProducts ? (
          <Table history={history} />
        ) : (
          <EmptyHistory />
        )}
      </Layout>
    </>
  );
};

export default History;
