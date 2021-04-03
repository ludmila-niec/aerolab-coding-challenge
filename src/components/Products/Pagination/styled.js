import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray300};
`;
