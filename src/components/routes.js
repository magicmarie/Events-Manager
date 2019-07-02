import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import history from "../history";
import store from "../js/store/index";
import Login from "../containers/LoginContainer";
import Home from "./home";
import Navbar from "../components/navbar/navBar";
import Register from '../containers/RegisterContainer';
import CreateEvent from "../containers/CreateEventContainer";
import Dashboard from "./User/dashboard";

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/create_event" component={CreateEvent} />
          <Route path="/dashboard" component={Dashboard} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
