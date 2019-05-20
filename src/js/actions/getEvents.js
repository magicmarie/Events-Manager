import axios from "axios";
import { FETCH_EVENTS_SUCCESS } from "./types";

 export const getventsEAction = () => dispatch => {
  return axios
    .get("https://my-json-server.typicode.com/magicmarie/json-data/Events")
    .then(response => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: response.data
      });
    });
};
