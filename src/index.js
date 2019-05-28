import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/js/store/index";
import App from "./containers/index";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
