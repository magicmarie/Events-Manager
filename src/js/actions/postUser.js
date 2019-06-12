import axiosInstance from "../axiosInstance/axiosInstance";
import { POST_USER_SUCCESS } from "./types";

export const registerUser = data => dispatch => {
  return axiosInstance
    .post("/Users", {data})
    .then(response => {
      dispatch({
        type: POST_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => console.log(error));
};
