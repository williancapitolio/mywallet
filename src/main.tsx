import React from "react";

import ReactDOM from "react-dom/client";

import { WrapperProvider } from "./providers/WrapperProvider";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrapperProvider>
      <App />
    </WrapperProvider>
  </React.StrictMode>
);
