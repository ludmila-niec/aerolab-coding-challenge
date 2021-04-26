import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-top: 0;
    width:auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    position: absolute;
    right: 0;
    top: 3px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  margin-left: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    & > svg {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.2rem;
  }
`;
