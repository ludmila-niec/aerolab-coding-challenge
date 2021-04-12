import styled, { keyframes } from "styled-components";

const showName = keyframes`
from {transform: translateY(150px)}
`;

const FloatLogo = keyframes`
0% {transform: translateY(15px)}
40% {transform: rotateZ(4deg);}
`;

const showError = keyframes`
from {transform: translateY(-100%)}
`

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    167.96deg,
    rgba(21, 219, 255, 0.2754) 0%,
    rgba(37, 187, 241, 0.34) 88.73%
  );
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  font-size: 3rem;
  font-weight: 600;
  overflow-y: hidden;
  transform: translateY(150px);
  .hello {
    color: #ffffff;
  }

  .name {
    color: ${({ theme }) => theme.colorSecondary};
    height: 70px;
    animation: ${showName} 2s;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size:4rem;
    transform: translateY(160px);
    .name {
      height: 80px;
    }
  }

  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    font-size: 5rem;
    padding:0 4rem;
    transform: translateY(200px);
    .name {
      height: 100px;
    }
  }

  @media ${({theme}) => theme.mediaQuery.mediaLg}{
      flex-direction: row;
      .name{
          margin-left:1rem;
      }
  }
`;

export const WrapperLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  & svg {
    animation: ${FloatLogo} 2s linear infinite;
    animation-direction: alternate;
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > svg {
      height: 120px;
      width: 120px;
    }
  }
  @media ${({ theme }) => theme.mediaQuery.mediaMd} {
    & > svg {
      height: 150px;
      width: 150px;
    }
  }

  @media ${({theme}) => theme.mediaQuery.mediaLg}{
      top:65%;
  }
`;

export const WrapperError = styled.div`
height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;
animation: ${showError} 1s;
.error-oops{
    color: #FFFFFF;
}
.error-message{
    color:${({theme}) => theme.colorSecondary};
    margin-left:1rem;
}
`

export const Text = styled.p`
text-align:center;
font-size:1.2rem;
margin-top: 3rem;

@media ${({theme}) => theme.mediaQuery.mediaMd}{
    font-size: 1.5rem;
}
`
