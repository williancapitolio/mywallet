import React from "react";

import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import Dark from "./styles/themes/Dark";
/* import Light from "./styles/themes/Light"; */

import { GlobalStyles } from "./styles/Global";

import { Provider } from "react-redux";

import { store } from "./store";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
