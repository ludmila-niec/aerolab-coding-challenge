import styled from "styled-components";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 2rem 0;
  max-height:75vh;
`;

export const CardStyled = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  width: 80%;
  margin: 1rem;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  p:first-of-type {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  p:last-of-type {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  & > svg {
    min-height:100px;
  }
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colorPrimary};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  transition: 0.4s;
  cursor: pointer;
  margin-top: 1rem;
  display: block;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colorSecondary};
  }
`;
