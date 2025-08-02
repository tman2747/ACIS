import { useEffect, useState } from "react";
import "./styles/HomePage.css";
function HomePage() {
  return (
    <>
      <img
        src="./src/assets/NotFREEUSE.jpg"
        alt=""
        className="homePageBackground"
      />
      <div className="content">
        <div className="titleCard">
          <h1 className="title">Accuracy Counts Inventory Service</h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
