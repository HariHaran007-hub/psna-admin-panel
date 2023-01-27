import React from "react";
import "./navbar.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarLogo">
        <span>PSNA CET</span>
      </div>

      <div className="navContainer">
        <div className="navItem">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/viewIssues">View details</NavLink>
        </div>
        <div className="navItem">
          <NavLink to="/staff">Add staff</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
