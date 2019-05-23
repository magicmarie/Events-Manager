import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store  from '../js/store/index';
import Login from "./Auth/Login";
import Home from "./home";


class Routes extends Component {

     render(){
      return (
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </BrowserRouter>
        </Provider>
        
      );
    };
  }
  
   export default Routes;
