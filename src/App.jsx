import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./server";
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
import Layout from "./pages/Layout";
import Host from "./components/Host";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/host" element={<Host />} />

          <Route path="/vans/:id" element={<VanDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
