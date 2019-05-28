import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import Home from "./home";
import Navbar from "../components/navBar";

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
