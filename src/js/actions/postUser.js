import { POST_USER_SUCCESS, POST_USER_ERROR } from "./types";
import firebase from "../../firebase/Firebase";

export const registerUser = ({ username, email, password}) => {
  return (dispatch) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response) => {
        return firebase.firestore().collection('Users').doc(response.user.uid).set({
          username: username,
          email: email,
        });
      }).then( ()=> {
        dispatch({
          type: POST_USER_SUCCESS, 
          authSuccess:'User created successfully'
        });
      })
      .catch(error => {
        dispatch({
          type: POST_USER_ERROR, error
        });
      });
  };
};
