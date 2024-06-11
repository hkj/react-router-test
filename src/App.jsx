import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
function App() {
  const APP_NAME = "react-router-test";
  return (
    <BrowserRouter>
      <div className="App">
        <Link to={`${APP_NAME}/`}>Home</Link>
        <br />
        <Link to={`${APP_NAME}/page1`}>Page1</Link>
        <br />
        <Link to={`${APP_NAME}/page2`}>Page2</Link>
      </div>
      <Routes>
        <Route path={`${APP_NAME}/`} element={<Home />} />
        <Route path={`${APP_NAME}/page1`} element={<Page1 />} />
        <Route path={`${APP_NAME}/page2`} element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
