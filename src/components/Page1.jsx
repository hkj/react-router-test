import { Link, useNavigate } from "react-router-dom";
import { APP_NAME } from "../constants";

export const Page1 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${APP_NAME}/page1/detailA`, {
      state: { message: "from button" },
    });
  };
  return (
    <div>
      <h1>This is Page1.</h1>
      <Link
        to={`${APP_NAME}/page1/detailA`}
        state={{ message: "from <Link to='this page'>" }}
      >
        DetailA
      </Link>
      <br />
      <Link to={`${APP_NAME}/page1/detailB`}>DetailB</Link>
      <br />
      <br />
      <button type="button" onClick={handleClick}>
        DetailA
      </button>
    </div>
  );
};
