import { Link } from "react-router-dom";
import { APP_NAME } from "../constants";

export const Page1 = () => {
  return (
    <div>
      <h1>This is Page1.</h1>
      <Link to={`${APP_NAME}/page1/detailA`}>DetailA</Link>
      <br />
      <Link to={`${APP_NAME}/page1/detailB`}>DetailB</Link>
    </div>
  );
};
