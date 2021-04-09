import styled, { keyframes } from "styled-components";

// const coinRotate = keyframes`
// 50% {transform: rotateY(180deg);}
// `;
const coinRotate = keyframes`
30% {transform: translateY(10px)}
50% {transform: translateY(-30px);}
75% {transform: translateY(-30px);}
100% {transform: rotateY(180deg)}

`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 2rem 0;
  max-height: 75vh;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    flex-direction: row;
    padding: 1rem 0;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    justify-content: space-evenly;
    padding: 2rem;
  }
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
    color: ${({ theme }) => theme.gray300};
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
  p:last-of-type {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  & > svg {
    min-height: 100px;
    animation: ${coinRotate} 2s ease 0.2s 2;
    animation-direction:alternate
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    width: 40%;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    width: 30%;
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

export const WrapperLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  & > p {
    font-size: 1.5rem;
    text-align: center;
    padding: 2rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > p {
      font-size: 2.5rem;
    }
  }
`;
