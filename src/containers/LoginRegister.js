import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginComponent from "../components/Auth/Login";
import { loginUser } from "../js/actions/loginUser";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
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
    Promise.resolve(this.props.loginUser(this.state)).
    then(
      this.props.history.push("/")
    );
  };

  render() {
    const { username, password, email, errors } = this.state;
    return (
      <div>
        <LoginComponent
          username={username}
          password={password}
          email={email}
          errors={errors}
          handleOnChange={this.handleOnchange}
          handleLogin={this.handleOnSubmit}
        />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  success: state.auth.success,
  error: state.auth.error
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
  { loginUser }
)(LoginContainer);
