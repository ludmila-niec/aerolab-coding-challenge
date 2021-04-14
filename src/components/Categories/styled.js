import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";

const showCategories = keyframes`
from {opacity:0}
to {opacity:1};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  padding: 1rem 0;
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  animation: ${showCategories} .8s;
  & div:last-of-type {
    border-right: 0;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    padding: 1.5rem 0;
  }
  @media ${({ theme }) => theme.mediaQuery.mediaLg} {
    padding: 2rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  border-right: 2px solid ${({ theme }) => theme.gray100};
`;

export const Subtitle = styled.h3`
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    font-size: 1.5rem;
  }
`;

export const CategoryName = styled.p`
  display: none;
  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    display: block;
    text-align: center;
  }
`;

export const LinkStyled = styled(Link)`
display:block;
margin:0 auto;
color:${({theme}) => theme.gray200};
text-decoration:none;
  & > svg {
    fill: ${({ theme }) => theme.gray200};
  }
  &:hover {
    & > svg {
      fill: ${({ theme }) => theme.colorSecondary};
    }
  }
  &:focus {
    outline: none;
    border: 2px solid blue;
  }

  @media ${({ theme }) => theme.mediaQuery.mediaSm} {
    & > svg {
      height: 30px;
      width: 30px;
    }
  }
  @media ${({theme}) => theme.mediaQuery.mediaLg}{
    width:50%;
  }
`;
