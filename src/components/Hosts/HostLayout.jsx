import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const HostLayout = () => {
  const NavStyle = {
    color: "slate",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0)",
    borderRadius: "5px",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          style={({ isActive }) => (isActive ? NavStyle : null)}
          to="/host"
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? NavStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? NavStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? NavStyle : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
