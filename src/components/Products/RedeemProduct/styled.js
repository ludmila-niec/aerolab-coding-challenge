import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.gray300};
  font-weight: 600;
  text-align: center;
  margin: 2rem 0;
`;

export const ImageWrapper = styled.div`
  min-height: 182px;
  min-width: 252px;
  border-radius: 5px;
  margin-bottom: 1rem;

  & > img {
    height: 80%;
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`;
export const CostWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  & > p {
    font-size: 2rem;
    color:${({theme}) => theme.gray300};
    margin-right: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 2rem 0;
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colorPrimary : theme.gray200};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  transition: 0.4s;
  cursor: pointer;
  margin-bottom: 1rem;
  width: 100%;
`;
