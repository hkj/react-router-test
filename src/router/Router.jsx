import { Routes, Route } from "react-router-dom";
import { APP_NAME } from "../constants";
import { Home } from "../components/Home";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";
import { Page404 } from "../components/Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path={`${APP_NAME}/`} element={<Home />} />
      <Route path={`${APP_NAME}/page1/*`} element={<Page1Routes />} />
      <Route path={`${APP_NAME}/page2/*`} element={<Page2Routes />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
