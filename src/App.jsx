import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import HostVansPhotos from "./components/Hosts/HostVansPhotos";
import HostVansPricing from "./components/Hosts/HostVansPricing";
import HostVansInfo from "./components/Hosts/HostVansInfo";
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
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<HostVansInfo />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
