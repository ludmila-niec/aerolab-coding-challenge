import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  height: 8vh;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 20;
`;

const FloatLogo = keyframes`
0% {transform: translateY(5px)}
50% {transform: rotateZ(10deg); transform:translateX(10px)}
`;

const showUserMenu = keyframes`
0% {transform:translateY(-10px); opacity:0}
50% { opacity:1}
`;

export const Navbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;

  & #logo {
    & > svg {
      animation: ${FloatLogo} 8s linear infinite;
      animation-direction: alternate;
    }
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  &#points-container {
    background-color: ${({ theme }) => theme.gray100};
    padding: 0.3rem 0.5rem;
    border-radius: 50px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  position: relative;
  cursor: pointer;
`;

export const Username = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
  margin-right: 0.5rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.2rem;
  }
`;

// user menu
export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  top: 40px;
  width: 130px;
  padding: 1rem;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  animation: ${showUserMenu} 0.2s linear;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.gray200};
  &:hover {
    color: ${({ theme }) => theme.colorSecondary};
  }
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  color: ${({ theme }) => theme.gray300};
  background-color: ${({ theme }) => theme.gray100};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
  margin: 0 0.3rem;
  &#plus-sign {
    font-size: 1.4rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.2rem;

    &#plus-sign {
      font-size: 1.6rem;
    }
  }
`;
