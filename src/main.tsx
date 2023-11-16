import React from "react";

import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { store } from "./store";

import { StylesProvider } from "./providers/StylesProvider";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider>
        <App />
      </StylesProvider>
    </Provider>
  </React.StrictMode>
);
