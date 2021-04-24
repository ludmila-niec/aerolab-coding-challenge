import styled, {keyframes} from "styled-components";

const showHero = keyframes`
from {opacity:0}
to {opacity:1}
`

const SlideTitle = keyframes`
from {left:-20%}
`

export const Container = styled.div`
  position: relative;
  margin-top:4rem;
  animation: ${showHero} .8s;
  @media ${({theme}) => theme.mediaQuery.mediaSm}{
    margin-top:5rem;
  }
  @media ${({theme}) => theme.mediaQuery.mediaMd}{
    margin-top: 4rem;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Title = styled.h1`
  position: absolute;
  bottom:10%;
  left:8%;
  font-size: 1.5rem;
  font-weight:600;
  color: #FFFFFF;
  animation: ${SlideTitle} 2s;

 @media ${({theme}) => theme.mediaQuery.mediaSm}{
   font-size:2.5rem;
   left:8%;
 }
 @media ${({theme}) => theme.mediaQuery.mediaMd}{
   font-size:3.5rem;
 }
 @media ${({theme}) => theme.mediaQuery.mediaLg}{
   left:7%;
 }
`;
