import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CreateEventComponent from "../components/Events/createEvent";
import { createEvent } from "../js/actions/createEvent";

export class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      body: "",
      tags: []
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
    Promise.resolve(this.props.createEvent(this.state)).
    then(
      this.props.history.push("/Events")
    );
  };

  render() {
    const { title, description, body, tags, errors } = this.state;
    return (
      <div>
        <CreateEventComponent
          title={title}
          description={description}
          body={body}
          tags={tags}
          errors={errors}
          handleOnChange={this.handleOnchange}
          handleCreateEvent={this.handleOnSubmit}
          error_message={this.props.error}
        />
      </div>
    );
  }
}

export const mapStateToProps = () => ({
});
CreateEvents.propTypes = {
  success: PropTypes.object,
  error: PropTypes.object,
  createEvent: PropTypes.func,
};

export default connect(
  mapStateToProps,
  { createEvent }
)(CreateEvents);
