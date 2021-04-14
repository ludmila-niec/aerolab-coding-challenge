import styled, { keyframes } from "styled-components";

export const showText = keyframes`
from{ transform: translateY(100%)}
`;
export const floatAnimation = keyframes`
0% {transform:translateX(-30%)}
20% {transform: rotateZ(2deg) }
50% {transform: rotateZ(0deg) }
100% {transform: rotateZ(-3deg)}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  & > p {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 1.5rem;
    animation: ${showText} 1s;
  }
  & > svg {
    animation: ${floatAnimation} 4s linear;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    & > p {
      font-size: 3rem;
      margin-top: 2.5rem;
    }
    & > svg {
      height: 76px;
      width: 79px;
    }

    @media ${({ theme }) => theme.mediaQuery.mediaLg} {
      flex-direction: row;
      align-items: baseline;

      & > p {
        margin-top: 0;
        margin-left: 2rem;
      }
    }
  }
`;