import { Children } from "react";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "about",
  //   element: <About />,
  // },
];

export default routes;
