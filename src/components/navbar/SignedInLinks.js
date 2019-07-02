import React from "react";
import { NavLink } from "react-router-dom";


const signedInLinks = () => (
<div>
<ul className="nav navbar-nav mr-auto">
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="#">
        New Event
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="#">
        Log out
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="#">
        Oceane
        </NavLink>
    </li>
</ul>
</div>
);

export default signedInLinks;
