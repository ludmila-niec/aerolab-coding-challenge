import styled, { keyframes } from "styled-components";

const showProducts = keyframes`
from {opacity:0; transform: translateY(100%)}
to { opacity: 1}
`;

export const Container = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 1.5rem;
  animation: ${showProducts} 0.8s ease;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
