import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = (props) => {
  const { auth } = props;
  return (
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

        <SignedInLinks/>
        <SignedOutLinks/>
        
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar)
