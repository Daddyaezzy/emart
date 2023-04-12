import React, { useEffect } from "react";
import logo from "../images/DA Collections-logos__transparent 3.png";
import "./preloader.css";
import { preLoaderAnim } from "../animation/animation";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="preloader-img">
        <img src={logo} alt="logo" />
      </div>
      <div className="preloader-text">
        <div className="text-container">
          <span>What ever You want!</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
