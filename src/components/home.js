import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.scss";
import { getEventsAction } from "../js/actions/getEvents";
import Event from "./Events";
export class Home extends Component {
  componentDidMount() {
    this.props.getEventsAction();
  }

  render() {
    const events = this.props.events;
    const eventsList = events.length ? (
      events.map(event => {
        return (
        <div key ={event.id}>
          <Event event={event} />
        </div>);
      }
    )
    ) : (
      <div>No events in Events Manager Yet</div>
    );
    return <div>{eventsList}</div>;
  }
}

export const mapStateToProps = state => ({
  events: state.getEventsReducer.events
});
// connects a react component to a redux store
export default connect(
  mapStateToProps,
  { getEventsAction }
)(Home);
