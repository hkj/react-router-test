import { Routes, Route } from "react-router-dom";
import { Page1 } from "../components/Page1";
import { Page1DetailA } from "../components/Page1DetailA";
import { Page1DetailB } from "../components/Page1DetailB";

export const Page1Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="detailA" element={<Page1DetailA />} />
      <Route path="detailB" element={<Page1DetailB />} />
    </Routes>
  );
};
