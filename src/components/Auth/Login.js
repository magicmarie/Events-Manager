import React from "react";
import { Link } from "react-router-dom";
import "../../styles/App.scss";

const Login = ({
  email,
  password,
  handleOnChange,
  handleLogin
}) => {
  return (
    <div className="container register">
      <div className="row">
        <div className="col-md-12">
          <h3 className="register-heading">Welcome back to Events Manager!</h3>
          <p className="paragraph">
            A social that creates a community of like minded planners to foster
            inspiration and
            <br />
            innovation by leveraging the modern web.
          </p>
        </div>
        <div className="col-md-4 register-left">
          <div className="text-center social-btn">
            <a href="#" className="btn btn-primary btn-block">
              <i className="fa fa-facebook" /> Sign in with <b>Facebook</b>
            </a>
            <a href="#" className="btn btn-info btn-block">
              <i className="fa fa-twitter" /> Sign in with <b>Twitter</b>
            </a>
            <a href="#" className="btn btn-danger btn-block">
              <i className="fa fa-google" /> Sign in with <b>Google</b>
            </a>
          </div>
        </div>
        <div className="or-separator" />
        <div className="col-md-7 register-right">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form className="row register-form" onSubmit={handleLogin}>
                <div className="col-md-10">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      onChange={handleOnChange}
                      className="form-control"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      onChange={handleOnChange}
                      className="form-control"
                      placeholder="Password *"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Login"
                  />
                </div>
                <div className="reminder">
                  {" "}
                  Don't have an Account yet?, <Link to="/signup"> Signup</Link>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
