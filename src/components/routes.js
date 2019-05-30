import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import Login from "./Auth/Login";
import Home from "./home";
import Navbar from "../components/navBar";
import RegisterContainer from '../containers/RegisterContainer'

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={RegisterContainer} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
