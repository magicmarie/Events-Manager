import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "./types";
import firebase from "../../firebase/Firebase";

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        authSuccess: 'logged in successfully'
      });
    })
    .catch(error => {
      dispatch({
        type: LOGIN_USER_ERROR, error
      });
    });
  };
};
