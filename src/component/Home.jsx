import React from "react";
import Products from "./Products";
import img1 from "../images/img1.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img src={img1} className="card-img-top" alt="..." height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              <span className="text-dark">NEW S</span>
              EASON ARRIVALS
            </h5>
            <p className="card-text lead fs-2">
              <span className="text-dark">CHECK OU</span>T ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
