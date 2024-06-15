import { useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  return (
    <div>
      <h1>This is Page1DetailA</h1>
      <p>from previous page's state:{location.state.message}</p>
    </div>
  );
};
