import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="Page2">Page2</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
