import { Children } from "react";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import About from "./components/About.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export default routes;
