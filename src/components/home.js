import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/App.scss";
import NavBar from "./navBar";
import { getEventsAction } from "../js/actions/getEvents";

export class Home extends Component {
  componentDidMount() {
    this.props.getEventsAction();
  }

  render() {
    const events = this.props.events;
    const eventsList = events.length ? (
      events.map(event => {
        return (
          <div className="event" key={event.id}>
            <div className="inner">
              <div className="event-card">
                <h3>{event.title.substring(0, 30)} ...</h3>
                <p>{event.body.substring(0, 60)} ...</p>
                <span>
                  <b>Author: Oceane</b>
                </span>
                <br />
                <span className="card-date">
                  Created on Tue Jan 19 at 19:44
                </span>
              </div>
              <div>
                <img src={event.image} className="img-tile" />
              </div>
            </div>
          </div>
        );
      })
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
