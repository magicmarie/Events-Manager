import React, { Fragment } from "react";
import "../../styles/App.scss";

const event = ({ event }) => (
  <Fragment key={event.id}>
    <div className="event">
      <div className="inner">
        <div className="event-card">
          <h3>{event.title.substring(0, 30)} ...</h3>
          <p>{event.body.substring(0, 60)} ...</p>
          <span>
            <b>Author: Oceane</b>
          </span>
          <br />
          <span className="card-date">Created on Tue Jan 19 at 19:44</span>
        </div>
        <div>
          <img src={event.image} className="img-tile" />
        </div>
      </div>
    </div>
  </Fragment>
);

export default event;
