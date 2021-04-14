import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray100};

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    border-bottom: none;
    padding-bottom: 0;
    display: flex;
    flex: 1;
    align-items: center;
    margin: 0 1rem;
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    flex: 1;
    margin: 0;
    justify-content: flex-start;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  border-left: 1px solid ${({ theme }) => theme.gray100};
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.8rem;
  color: ${({ active, theme }) => (active ? theme.colorWhite : theme.gray200)};
  background-color: ${({ active, theme }) =>
    active ? theme.colorPrimary : theme.gray100};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.4rem 1rem;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: ${({ active, theme }) => !active && theme.colorSecondary};
    color: #ffffff;
  }
  &:focus{
    outline:none;
    border: 2px solid blue;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    margin-right: 0.8rem;
    font-size: 1rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.2rem;
    margin-right: 1.5rem;
  }
`;
