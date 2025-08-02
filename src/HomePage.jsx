import { useEffect, useState } from "react";
import "./styles/HomePage.css";
import NavBar from "./NavBar";
function HomePage() {
  return (
    <>
      <NavBar />
      <div className="homePageContent">
        <img
          src="./src/assets/NotFREEUSE.jpg"
          alt=""
          className="homePageBackground"
        />
        <div>
          <div className="titleCard">
            <h1 className="title">Accuracy Counts Inventory Service</h1>
          </div>
        </div>
        <div className="infoCard">
          card Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          consequuntur illo rem quo nisi? Veritatis sapiente, ipsum suscipit
          consequuntur nulla impedit eligendi eum tempore quaerat quos inventore
          quam, temporibus natus! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Odit tempore, minus officia incidunt vitae
          voluptatibus soluta dolor reiciendis voluptates suscipit voluptatem
          perferendis voluptate, ipsum impedit dolorum, adipisci quaerat!
          Obcaecati, ex?
        </div>
      </div>
    </>
  );
}

export default HomePage;
