import React, { useEffect } from "react";
import Intro from "../components/Intro";
import { useUser } from "../context/user/UserContext";
import { useHistory } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    167.96deg,
    rgba(21, 219, 255, 0.2754) 0%,
    rgba(37, 187, 241, 0.34) 88.73%
  );
`;

const showError = keyframes`
from {transform: translateY(-100%)}
`;

const WrapperError = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  animation: ${showError} 1s;
  .error-oops {
    color: #ffffff;
  }
  .error-message {
    color: ${({ theme }) => theme.colorSecondary};
    margin-left: 1rem;
  }
`;

const Welcome = () => {
  const {
    state: { user, loading, error },
  } = useUser();
  const history = useHistory();

  useEffect(() => {
    if (user.name) {
      setTimeout(() => {
        history.push("/home");
      }, 3000);
    }
  }, [user, history]);

  if (error) {
    return (
      <Container>
        <WrapperError>
          <span className="error-oops">Oops,</span>
          <span className="error-message">something went wrong =/</span>
        </WrapperError>
      </Container>
    );
  }
  return <Intro user={user} loading={loading} />;
};

export default Welcome;
