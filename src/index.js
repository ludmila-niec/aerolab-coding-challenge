import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";
import UserProvider from "./context/user/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserProvider>
        <App />
        </UserProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
