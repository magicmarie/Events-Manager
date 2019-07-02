import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserSignup from "../components/Auth/Signup";
import { registerUser } from "../js/actions/postUser";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.authError) {
      alert(nextProps.authError);
      } else {
      alert(nextProps.authSuccess);
      this.props.history.push("/login");
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
    this.props.registerUser(this.state);
  };

  render() {
    const { username, password, confirmPassword, email, errors } = this.state;
    return (
      <div>
        <UserSignup
          username={username}
          isRegistering={this.props.isRegistering}
          password={password}
          confirmPassword={confirmPassword}
          email={email}
          errors={errors}
          handleOnChange={this.handleOnchange}
          handleSignup={this.handleOnSubmit}
          error_message={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
    authSuccess: state.auth.authSuccess
  }
};

 Register.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object,
  registerUser: PropTypes.func,
};

 export default connect(
  mapStateToProps,
  {registerUser},
)(Register);
