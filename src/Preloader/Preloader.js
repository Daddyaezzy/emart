import React, { useLayoutEffect, useRef } from "react";
import logo from "../images/DA Collections-logos__transparent 3.png";
import gsap from "gsap";
import "./preloader.css";

const Preloader = () => {
  const app = useRef();
  const logo1 = useRef();
  const text = useRef();
  const bg1 = useRef();
  const bg2 = useRef();
  const bg3 = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(bg1, { height: "100vh" });
      gsap.set(bg2, { height: "100vh" });
      gsap.set(bg3, { height: "100vh" });

      tl.to(bg3.current, { height: 0, duration: 0.4 });
      tl.to(bg2.current, { height: 0, duration: 0.4 });
      tl.to(bg1.current, { height: 0, duration: 0.4 });
      tl.from(logo1.current, { opacity: 0, rotate: 360 });
      tl.from(text.current, { opacity: 0, rotate: 360 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className="preloader">
      <div className="background d-flex flex-end">
        <div ref={bg1} className="backgroundEach"></div>
        <div ref={bg2} className="backgroundEach"></div>
        <div ref={bg3} className="backgroundEach"></div>
      </div>
      <div className="preloaderLogo">
        <div className="preloader-img">
          <img ref={logo1} src={logo} alt="logo" />
        </div>
        <div className="preloader-text">
          <div className="text-container">
            <span ref={text}>What ever You want!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
