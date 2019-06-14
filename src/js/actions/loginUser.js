import axiosInstance from "../axiosInstance/axiosInstance";
import { LOGIN_USER_SUCCESS } from "./types";

export const registerUser = data => dispatch => {
  return axiosInstance
    .post("/Users", {data})
    .then(response => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => console.log(error));
};
