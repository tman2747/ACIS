import "../styles/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarItemContainer">
        <Link to="/">
          <img src="src/assets/ACIS.png" alt="" className="navBarImage" />
        </Link>
        <menu>
          <Link to="/about" className="navButton">
            about
          </Link>
          <Link to="/contact" className="navButton">
            Contact Us
          </Link>
        </menu>
      </div>
    </div>
  );
}

export default NavBar;
