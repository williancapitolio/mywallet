import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { Start } from "../pages/Start";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
]);
