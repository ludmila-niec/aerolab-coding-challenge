import styled, { keyframes } from "styled-components";

const showTable = keyframes`
from {opacity:0; transform: translateY(10%)}
`;

export const TableStyled = styled.table`
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  animation: ${showTable} 0.8s;
  th,
  td {
    border: 1px solid ${({ theme }) => theme.gray100};
  }
  border-collapse: collapse;
  & #redeem-title {
    display: none;
  }
  & .redeem-id {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & #redeem-title {
      display: table-cell;
    }
    & .redeem-id {
      display: table-cell;
    }
  }
`;
export const TableHeading = styled.th`
  background: linear-gradient(
    180deg,
    rgba(21, 219, 255, 0.81) 0%,
    #25bbf1 109.68%
  );
  color: #ffffff;
  font-weight: 600;
  padding: 0.5rem 0.5rem 0.5rem 0.8rem;
  text-align: left;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.6rem;
    padding-left: 1.5rem;
  }
`;

export const TableBody = styled.tbody`
  tr {
    height: 120px;
  }
  td {
    padding: 0.8rem;
  }
  & .date,
  .redeem-id {
    font-size: 0.8rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    tr {
      height: 200px;
    }
    td {
      padding: 1.5rem;
    }
    & .date,
    .redeem-id {
      font-size: 1.2rem;
    }
  }
`;

export const TextWrapped = styled.p`
  max-width: 100px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    max-width: fit-content;
  }
`;

export const ProductDetail = styled.div`
  margin-left: 0.5rem;
  & > p:first-of-type {
    color: ${({ theme }) => theme.gray300};
  }
  & > p:last-of-type {
    font-size: 0.9rem;
    font-style: italic;
    margin-bottom: 0.2rem;
  }

  & .cost {
    margin-right: 0.5rem;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 1.5rem;
    margin-left: 1.5rem;
    & > p:last-of-type {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const WrapperFlex = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Image = styled.img`
  width: 80px;
  min-height: 57px;
  height: auto;
  background-color: ${({ theme }) => theme.gray100};

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    width: 100px;
    min-height: 72px;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    width: 150px;
    min-height: 108px;
  }
`;
export const Button = styled.button`
  margin: 0 auto;
  position: sticky;
  opacity: 0;
  bottom: 50px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colorPrimary};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.5rem 1.5rem;
  transition: 0.4s;
  cursor: pointer;
  margin-top: 1rem;
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colorSecondary};
  }
`;
