import { useNavigate } from "react-router-dom";
import { APP_NAME } from "../constants";

export const Page404 = () => {
  const navigate = useNavigate();

  const onClickBack = () => navigate(`${APP_NAME}/`);

  return (
    <div>
      <h1>ERROR 404 NOT FOUND</h1>
      <button type="button" onClick={onClickBack}>
        Homeに戻る
      </button>
    </div>
  );
};
