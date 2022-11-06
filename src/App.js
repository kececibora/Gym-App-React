// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./components/Home";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
