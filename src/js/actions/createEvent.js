import CREATE_EVENT_SUCCESS from "./types";
import axiosInstance from "../axiosInstance/axiosInstance";


export const createEvent = data => dispatch => {
    return axiosInstance
      .post("/Events", {data})
      .then(response => {
        dispatch({
          type: CREATE_EVENT_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => console.log(error));
  };
  
