import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-top: 0;

    & > svg {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding-right: 1rem;
    border-right: 1px solid ${({ theme }) => theme.gray100};
  }
`;
