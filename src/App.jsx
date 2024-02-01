import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./server";
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
