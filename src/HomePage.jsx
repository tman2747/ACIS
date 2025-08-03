import { useEffect, useState } from "react";
import "./styles/HomePage.css";
import NavBar from "./NavBar";
import Footer from "./footer";
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
          <h2>About Us</h2>
          WIS International is the industry leading expert in global inventory,
          data collection and technology innovation. With comprehensive
          inventory and retail solutions and a substantial network of trained
          professionals globally, WIS empowers you to manage your inventory and
          space more effectively. Through our drive for excellence and
          commitment to advanced technology, we have the capability to provide
          scalable inventory services for a diverse range of industries. We help
          businesses achieve greater efficiency and accuracy with their
          inventory, which positions them to increase profitability. Whether we
          handle inventory for your company or provide you with the tools to
          succeed, WIS is the first choice for inventory services because of its
          people-centric approach, exceptional processes, and superior standards
          of service. With over 70 years’ experience, a workforce spanning over
          20,000+ employees, 200+ offices and 3,500+ clients to service
          worldwide, WIS International helps its customers increase accuracy,
          reduce costs and save management time.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
