import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  // tl.set(".preloader img", {

  // });

  tl.fromTo(
    ".preloader img",
    {
      y: "100%",
    },
    {
      y: "0%",
    }
  );
  tl.from(".preloader .preloader-text", {
    x: "100%",
    opacity: 0,
    // position: "absolute",
    // top: "55%",
  });
};
