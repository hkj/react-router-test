import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>This is Page2</h1>
      <Link to="101/MALE">URL Parameter</Link>
      <br />
      <Link to="query?name=foobar&id=32145">Query Parameter</Link>
    </div>
  );
};
