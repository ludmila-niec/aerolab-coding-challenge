import styled, { keyframes } from "styled-components";

const Spin = keyframes`
from{
    transform : rotate(0deg)
}
to{ transform : rotate(360deg) }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

export const Ring = styled.div`
  width: ${({ width }) => width || "50px"};
  height: ${({ height }) => height || "50px"};
  border-radius: 50%;
  border: 5px solid ${({ theme }) => theme.colorPrimary};
  border-color: ${({ theme }) => theme.colorSecondary + " transparent"};
  animation: ${Spin} 1.1s linear infinite;
`;
