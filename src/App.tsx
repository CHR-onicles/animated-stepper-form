import { RouterProvider } from "react-router-dom";

import { GlobalStyles } from "@styles/GlobalStyles.styled";

import { router } from "./router";


export const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
