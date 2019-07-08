import { FETCH_EVENTS_SUCCESS } from "./types";
import { getEvents } from "../../firebase/data" 

export const getEventsAction = () => dispatch => {
    getEvents()
    .then(response => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: response
      });
    });
};
