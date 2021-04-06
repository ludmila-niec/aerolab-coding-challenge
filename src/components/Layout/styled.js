import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding: 3rem 4rem;
  }
`;
