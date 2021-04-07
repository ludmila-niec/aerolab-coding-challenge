import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-top: 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
  margin-left: 1rem;
  &:focus {
    outline: none;
    border: 2px solid blue;
    border-radius: 50px;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding-right: 1rem;
    border-right: 1px solid ${({ theme }) => theme.gray100};
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.2rem;
  }
`;
