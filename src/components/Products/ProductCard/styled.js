import styled, { keyframes } from "styled-components";

const onLoadProduct = keyframes`
from {opacity:0;}
to {opacity:1; }
`;

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  position: relative;
  transition: all 0.4s;
  animation: ${onLoadProduct} 3s cubic-bezier(0.18, 0.89, 0.32, 1.28)
    ${({ index }) => index * 0.05 + "s"};

  &:focus{
    outline:2px solid blue;
  }
  & > svg {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
  }
`;

export const WrapperImg = styled.div`
  flex: 1;
  & > img {
    min-height: 182px;
    min-width: 252px;
    background-color: ${({ theme }) => theme.gray100};
    height: 100%;
    width: 100%;
  }
`;

export const WrapperInfo = styled.div`
  align-self: flex-start;
  padding: 1rem;
  text-transform: capitalize;
  p:first-of-type {
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
  p:last-of-type {
    font-size: 1rem;
    color: ${({ theme }) => theme.gray300};
  }
`;

export const Overlay = styled.div`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(21, 219, 255, 0.486) 0%,
    rgba(21, 219, 255, 0.765) 0.01%,
    rgba(37, 187, 241, 0.9) 100%
  );
  border-radius: 5px;
  box-shadow: 9px 9px 19px 3px rgba(0, 0, 0, 0.28);

  & > svg {
    position: absolute;
    top: -1%;
    right: -2%;
    margin: 1rem;
  }
`;

export const WrapperValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 2rem 0;

  & > p {
    font-size: 2.5em;
    color: #ffffff;
    margin-right: 0.6rem;
  }
`;

export const Button = styled.button`
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray300};
  background-color: ${({ theme }) => theme.colorBg};
  box-shadow: none;
  border: none;
  border-radius: 50px;
  padding: 0.8rem;
  width: 80%;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.gray200};
    color: ${({ theme }) => theme.gray100};
  }
`;

export const Divider = styled.hr`
  border: 1px solid ${({ theme }) => theme.gray100};
  width: 90%;
`;

export const Badge = styled.span`
  position: absolute;
  top: -1%;
  right: -2%;
  margin: 1rem;
  background-color: rgba(97, 97, 97, 0.8);
  color: #ffffff;
  display: flex;
  align-items: end;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  & > svg {
    margin-left: 0.5rem;
  }
`;
