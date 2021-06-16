import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html, body{
width: 100%;
  min-height: 100vh;
  scroll-behavior:smooth;
}

body{
    background-color:${({ theme }) => theme.colorBg};
    color:${({ theme }) => theme.gray200};
    font-family: 'Source Sans Pro', sans-serif;
    font-weight:400;
}

a:focus{
  outline: 2px solid blue;
}

button:focus{
  outline: 2px solid blue;
}
`;

export default GlobalStyle;
