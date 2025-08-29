import { Children } from "react";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/contact.jsx";
import HomePage from "./components/HomePage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // this makes About the default ("/")
        element: <HomePage />,
      },
      {
        path: "contact", // renders at "/contact"
        element: <Contact />,
      },
    ],
  },
];

export default routes;
