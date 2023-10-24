import { RouterProvider } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import { GlobalStyles } from "@styles/GlobalStyles.styled";

import { router } from "./router";


export const App = () => {
  const lenis = new Lenis({ lerp: 0.5, duration: 2 });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
