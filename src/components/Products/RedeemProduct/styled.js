import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  min-height: 500px;
  max-height: 75vh;
  overflow-y: auto;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    height: 520px;
    margin: 2rem;
    padding: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray300};
  font-weight: 600;
  text-align: center;
  margin: 1rem 0;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  min-height: 182px;
  min-width: 252px;
  border-radius: 5px;

  & > img {
    height: 100%;
    width: 100%;
  }
`;

const ImageZoom = keyframes`
50%{
  transform: scale(0.9)
}
`;

export const Image = styled.img`
  animation: ${ImageZoom} 2.5s ease-in-out infinite;
`;
export const CostWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  & > p {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.gray300};
    margin-right: 0.5rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  width: 80%;
  margin-top: 2rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    width: 50%;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    flex-direction: row-reverse;
    button:last-of-type {
      margin-right: 2rem;
    }
  }
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.1rem;
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

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    width: 40%;
    margin-bottom: 0;
    &.btn__history {
      width: 60%;
      margin-right: 0px !important;
    }
  }

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colorSecondary : theme.gray300};
  }
`;

export const ButtonLink = styled(Link)`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.1rem;
  color: #ffffff;
  text-decoration: none;
  background-color: ${({ primary, theme }) =>
    primary ? theme.colorPrimary : theme.gray200};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  transition: 0.4s;
  cursor: pointer;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colorSecondary : theme.gray300};
  }
`;
