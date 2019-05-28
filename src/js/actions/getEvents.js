import { FETCH_EVENTS_SUCCESS } from "./types";
import axiosInstance from "../axiosInstance/axiosInstance";

export const getEventsAction = () => dispatch => {
  return axiosInstance
    .get("/Events")
    .then(response => {
      dispatch({
        type: FETCH_EVENTS_SUCCESS,
        payload: response.data
      });
    });
};
