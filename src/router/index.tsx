import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import { Home } from "@pages/Home";


const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="*" element={<h1> Oops! This page does not exist</h1>} />
    </Route>
  )
);
