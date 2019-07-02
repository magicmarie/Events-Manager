import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/App.scss";

const Dashboard = () => {
  return (
  <div>welcome</div>
  );
};

export const mapStateToProps = state => ({});

// connects a react component to a redux store
export default connect( mapStateToProps )( Dashboard );
