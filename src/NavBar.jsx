import { useEffect, useState } from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navBar">
      <button className="imageButton">
        <img src="src/assets/ACIS.png" alt="" />
      </button>
      <menu>
        <button>Option1</button>
        <button>About Us</button>
        <button>Contact</button>
      </menu>
    </div>
  );
}

export default NavBar;
