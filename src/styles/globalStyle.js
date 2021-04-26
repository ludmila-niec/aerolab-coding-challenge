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

@font-face {
  font-family: "Source Sans Pro";
  font-style:normal;
  font-weight:400;
  font-display:swap;
  src: url("https://fonts.gstatic.com/s/sourcesanspro/v14/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2") format("woff2");
  unicode-range: U+00-5FF;
}
@font-face {
  font-family: "Source Sans Pro";
  font-style:normal;
  font-weight:600;
  font-display:swap;
  src: url("https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2") format("woff2");
  unicode-range: U+00-5FF;
}

a:focus{
  outline: 2px solid blue;
}

button:focus{
  outline: 2px solid blue;
}
`;

export default GlobalStyle;
