import styled, {keyframes} from "styled-components";

const showNavigation = keyframes`
from {opacity:0}
to {opacity:1};
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${showNavigation} .8s;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.gray100};
  }
`;

export const WrapperBottom = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 1rem;
`;

export const WrapperFlex = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  & > p {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2rem;
  }

  & .error {
    font-size: 1rem;
    margin: 0;
    font-style: italic;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > p {
      font-size: 2rem;
    }
    & .error {
      font-size: 1.8rem;
    }
  }
`;
