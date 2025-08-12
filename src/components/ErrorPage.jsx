import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesnt exist</h1>
      <Link to="/">Click here to return home.</Link>
    </div>
  );
};

export default ErrorPage;
