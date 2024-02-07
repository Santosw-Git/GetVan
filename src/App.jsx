import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import "./server";
import Vans from "./components/Vans";
import VanDetails from "./components/VanDetails";
import Layout from "./pages/Layout";
import Dashboard from "./components/Hosts/HostLayout";
import Reviews from "./components/Hosts/Reviews";
import Income from "./components/Hosts/Income";
import HostLayout from "./components/Hosts/HostLayout";
import HostVans from "./components/Hosts/HostVans";
import HostVansDetails from "./components/Hosts/HostVansDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
