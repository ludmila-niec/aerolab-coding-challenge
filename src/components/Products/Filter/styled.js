import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};
`;

export const WrapperFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.8rem;
  color: ${({ active, theme }) => (active ? theme.colorWhite : theme.gray200)};
  background-color: ${({ active, theme }) =>
    active ? theme.colorPrimary : theme.gray100};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.4rem 1rem;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${({ active, theme }) => !active && theme.colorSecondary};
  }
`;
