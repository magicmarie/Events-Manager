import React from "react";
import { NavLink } from "react-router-dom";

const signedOutLinks = () => (
<ul className="nav navbar-nav mr-auto">
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/login">
        Sign In
        </NavLink>
    </li>
    <li className="nav -item">
        <NavLink className="nav-link" activeClassName="active" to="/signup">
        Get Started
        </NavLink>
    </li>
</ul>
);

export default signedOutLinks;
