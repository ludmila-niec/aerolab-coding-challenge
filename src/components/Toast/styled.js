import styled, { keyframes } from "styled-components";

const showAlert = keyframes`
0% {opacity:0};
50% { 
  bottom:10%;
}
`;
export const Container = styled.div`
  position: absolute;
  z-index: 25;
  bottom:-50%;
  left:50%;
  transform: translateX(-50%);
  padding: 1rem;
  width: 90%;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: ${({ theme, color }) =>
    color === "success"
      ? theme.colorSuccess
      : color === "error"
      ? theme.colorError
      : theme.gray200};
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  animation: ${showAlert} 4s cubic-bezier(0, 1.15, 0.62, 0.91);
  animation-direction: alternate;
  animation-fill-mode: forwards;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.2rem;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    width: 50%;
  }
`;
