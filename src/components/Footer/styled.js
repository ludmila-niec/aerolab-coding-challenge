import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #ffffff;

  @media ${({theme}) => theme.mediaQuery.mediaSm}{
      flex-direction:row;
  }
  @media ${({theme}) => theme.mediaQuery.mediaLg}{
    padding:1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &.author {
    margin-bottom: 2rem;
  }

  & > a.links{
    &:hover{
      & > svg{
      fill: ${({theme}) => theme.gray300}
    }
    }
    & > svg{
      fill: ${({theme}) => theme.gray200}
    }
  }

  @media ${({theme}) => theme.mediaQuery.mediaSm}{
      &.author{
        margin-bottom:0;
      }
  }

`;

