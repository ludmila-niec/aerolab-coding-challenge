import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  place-items:center;
  grid-gap: 2rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
