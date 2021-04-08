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
