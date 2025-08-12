import { useEffect, useState } from "react";
import "../styles/NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <button className="imageButton">
        <img src="src/assets/ACIS.png" alt="" className="navBarImage" />
      </button>
      <menu>
        <button>About Us</button>
        <button>Contact Us</button>
      </menu>
    </div>
  );
}

export default NavBar;
