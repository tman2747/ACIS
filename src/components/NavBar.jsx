import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import mobileImage from "../assets/ACISMobile.png";
import DesktopImage from "../assets/ACIS.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarItemContainer">
        <Link to="/">
          <picture>
            <source media="(max-width: 768px)" srcSet={mobileImage} />
            <img
              src={DesktopImage}
              alt="Link to homePage"
              className="navBarImage"
            />
          </picture>
        </Link>
        <menu>
          <Link to="/" className="navButton">
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
