import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import theme from "./styles/theme";

import { Routes } from "./routes";

// ReactDOM -> é uma biblioteca para manipular os elementos que fazem parte da DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Vai no index.html e procura um elemento com ID root e renderiza o conteudo passado aqui
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Routes />
    </ThemeProvider>
  </React.StrictMode>
);
