import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SignupComponent from "../components/Auth/Signup";
import { registerUser } from "../js/actions/postUser";
import { passwordValidate, validEmailRegex } from "../utils/regex";

export class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleOnchange = event => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleOnSubmit = event => {
    event.preventDefault();
    Promise.resolve(this.props.registerUser(this.state)).
    then(
      this.props.history.push("/login")
    );
  };

  render() {
    const { username, password, confirmPassword, email, errors } = this.state;
    return (
      <div>
        <SignupComponent
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

export const mapStateToProps = () => ({
});
RegisterContainer.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object,
  registerUser: PropTypes.func,
  username: PropTypes.string,
  email: PropTypes.string
};

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterContainer);
