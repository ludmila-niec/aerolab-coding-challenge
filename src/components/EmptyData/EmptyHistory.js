import React from 'react'
import Logo from "../../components/icons/Logo";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const FloatAnimation = keyframes`
0% {transform: rotateZ(5deg) }
50% {transform: rotateZ(0deg) }
100% {transform: rotateZ(-10deg)}
`;

const Container = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  & > svg {
    animation: ${FloatAnimation} 2s linear infinite;
    animation-direction: alternate;
    filter: drop-shadow(2px 15px 24px rgba(0, 0, 0, 0.1));
    -webkit-filter: drop-shadow(2px 15px 24px rgba(0, 0, 0, 0.1));
  }

  @media ${({theme}) => theme.mediaQuery.mediaSm}{
    font-size:1.3rem;
  }

  @media ${({theme}) => theme.mediaQuery.mediaMd}{
    height: 500px;
    font-size:1.6rem;
  }
`;

const LinkStyled = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colorPrimary};
  border-radius: 50px;
  padding: 0.8rem 1.6rem;
  &:hover {
    background-color: ${({ theme }) => theme.colorSecondary};
  }
`;

const EmptyHistory = () => {
    return (
        <Container>
        <h2>You haven't redeem any products yet</h2>
        <Logo width="70px" height="70px" />
        <LinkStyled to="/home">Check out the catalog</LinkStyled>
      </Container>
    )
}

export default EmptyHistory
