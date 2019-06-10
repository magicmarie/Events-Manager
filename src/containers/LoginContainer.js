import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserLogin from "../components/Auth/Login";
import { loginUser } from "../js/actions/loginUser";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.authError) {
      alert(nextProps.authError);
      } 
    if(nextProps.authSuccess) {
      alert(nextProps.authSuccess);
      this.props.history.push("/dashboard");
      }
   }
  handleOnchange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };

  render() {
    const { authError } = this.props;
    const { password, email } = this.state;
    return (
      <div>
        <UserLogin
          password={password}
          email={email}
          handleOnChange={this.handleOnchange}
          handleLogin={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export const mapStateToProps = ({ firebase, auth}) => ({
  auth: firebase.auth,
  authError: auth.authError
});

Login.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object,
  loginUser: PropTypes.func,
  
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
