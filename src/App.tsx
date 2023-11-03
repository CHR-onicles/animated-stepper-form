import { RouterProvider } from "react-router-dom";
import { useWindowSize } from "react-use";

import { SmallScreenIndicator } from "@components/SmallScreenIndicator";

import { GlobalStyles } from "@styles/GlobalStyles.styled";

import { router } from "./router";


export const App = () => {
  const { width } = useWindowSize();

  if (width < 768) {
    return (
      <>
        <GlobalStyles />
        <SmallScreenIndicator />
      </>
    );
  }
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
