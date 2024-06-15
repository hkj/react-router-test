import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Page2 } from "../components/Page2";
import { UrlParameter } from "../components/UrlParameter";

export const Page2Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Page2 />} />
      <Route path=":id/:gender" element={<UrlParameter />} />
    </Routes>
  );
};
