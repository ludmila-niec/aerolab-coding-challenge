import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding: 3rem 4rem;
  }
  @media ${({theme}) => theme.mediaQuery.mediaMd}{
    padding: 3rem;
  }
  @media ${({theme}) => theme.mediaQuery.mediaLg}{
    padding: 4rem 6rem;
  }
`;
