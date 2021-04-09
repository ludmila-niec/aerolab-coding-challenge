import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;

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
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};
`;

export const LoadingContainer = styled.div`
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

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > p {
      font-size: 2rem;
    }
  }
`;
