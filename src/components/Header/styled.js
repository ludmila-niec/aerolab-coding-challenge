import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 8vh;
  width: 100%;
  background-color: #ffffff;
`;

export const Navbar = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.2rem;
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Username = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
  margin-right:1rem;
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.gray300};
  background-color: ${({ theme }) => theme.gray100};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  display: flex;
  align-items: center;
  & > p {
    margin: 0 0.3rem;
  }
  p:last-of-type{
    font-size: 1.4rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
`;