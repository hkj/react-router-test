import { Routes, Route } from "react-router-dom";
import { APP_NAME } from "../constants";
import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";
import { Page2 } from "../components/Page2";
import { Home } from "../components/Home";

export const Router = () => {
  const Page1Routes = () => {
    return (
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Routes>
    );
  };
  return (
    <Routes>
      <Route path={`${APP_NAME}/`} element={<Home />} />
      <Route path={`${APP_NAME}/page1/*`} element={<Page1Routes />} />
      <Route path={`${APP_NAME}/page2`} element={<Page2 />} />
    </Routes>
  );
};
