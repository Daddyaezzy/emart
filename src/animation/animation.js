import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.fromTo(
    ".preloader img",
    {
      y: "100%",
    },
    {
      y: "0%",
    }
  );

  tl.to(".text-container", {
    css: { display: "block" },
    y: "0%",
  });
};
