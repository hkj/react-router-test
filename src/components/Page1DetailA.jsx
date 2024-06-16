import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  const location = useLocation();
  return (
    <div>
      <h1>This is Page1DetailA</h1>
      <p>from previous page's state:{location.state.message}</p>
      <br />
      <button type="button" onClick={onClickBack}>
        戻る
      </button>
    </div>
  );
};
