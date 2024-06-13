import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { APP_NAME } from "./constants";
import { Router } from "./router/Router";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={`${APP_NAME}/`}>Home Page</Link>
        <br />
        <Link to={`${APP_NAME}/page1`}>Page1.</Link>
        <br />
        <Link to={`${APP_NAME}/page2`}>Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}
export default App;
