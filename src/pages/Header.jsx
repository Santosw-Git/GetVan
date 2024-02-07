import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const NavStyle = {
    color: "orange",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };
  return (
    <div>
      <header>
        <NavLink className="site-logo" to="/">
          #VanLife
        </NavLink>
        <nav>
          <NavLink
            style={({ isActive }) => (isActive ? NavStyle : null)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? NavStyle : null)}
            to="/vans"
          >
            Vans
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? NavStyle : null)}
            to="/host"
          >
            Host
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
