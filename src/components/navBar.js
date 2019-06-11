import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light topnav">
    <NavLink className="navbar-brand" to="/">
      Events Manager
    </NavLink>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="nav navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">
            Sign In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">
            Get Started
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">
            New Event
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
