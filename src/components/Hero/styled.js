import styled, { keyframes } from "styled-components";

const showHero = keyframes`
from {opacity:0}
to {opacity:1}
`;

const SlideTitle = keyframes`
from {transform: translateX(-50%)}
`;

export const Container = styled.div`
  min-height: 125px;
  position: relative;
  margin-top: 4rem;
  animation: ${showHero} 0.8s;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    min-height: 256px;
    margin-top: 4rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    min-height: 340px;
    /* margin-top: 4rem; */
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    min-height: 475px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 8%;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  animation: ${SlideTitle} 2s;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 2.5rem;
    left: 8%;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 3.5rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    left: 7%;
  }
`;
