import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    101.24% 101.24% at 0% -1.24%,
    rgba(255, 255, 255, 0.43) 0%,
    #ffffff 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  justify-content: center;
  align-items:flex-start;
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colorBg};
  border-radius: 5px;
  margin-top: 6rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);

  @media ${({theme}) => theme.mediaQuery.mediaSm}{
    margin-top:10rem;
    width:95%;
  }
`;

export const Header = styled.div`
  background: linear-gradient(
    180deg,
    rgba(21, 219, 255, 0.81) 0%,
    #25bbf1 109.68%
  );
  position: relative;
  border-radius:5px 5px 0 0;
  & > h3 {
    font-size: 1.5rem;
    color: #ffffff;
    text-align: center;
    padding: 0.8rem;
  }

  & > button {
    position: absolute;
    right: 0;
    top: 0;
    bottom:0;
    padding: 1rem;
    box-shadow: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  @media ${({theme}) => theme.mediaQuery.mediaSm}{
    & > h3{
      font-size:2rem;
    }
  }
`;
