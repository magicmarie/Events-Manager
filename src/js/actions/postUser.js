import { POST_USER_SUCCESS } from "./types";
import { addUser } from "../../firebase/data";

export const registerUser = data => dispatch => {
  addUser(data)
    .then(response => {
      dispatch({
        type: POST_USER_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => console.log(error));
};
