import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { APP_NAME } from "./constants";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";
function App() {
  const Page1Routes = () => {
    return (
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="detailA" element={<Page1DetailA />} />
        <Route path="detailB" element={<Page1DetailB />} />
      </Routes>
    );
  };
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
        <Route path={`${APP_NAME}/page1/*`} element={<Page1Routes />} />
        <Route path={`${APP_NAME}/page2`} element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
