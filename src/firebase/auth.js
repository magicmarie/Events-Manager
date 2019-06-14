import history from "../history";
import { auth } from "./firebase";

//Sign up.
export const doCreateUserWithEmailAndPassword = (email, password) =>
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(()=>{
      window.location=("/login");
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      }
      if (errorCode == "auth/invalid-email") {
        alert("Email is invalid");
      }
      if (errorCode == "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

//Sign in.
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == "auth/wrong-password") {
      alert("Wrong password.");
    }
    if (errorCode == "auth/invalid-email") {
      alert("Email is invalid");
    }
    if (errorCode == "auth/user-not-found") {
      alert("User not found");
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });

//Sign out
export const doSignOut = () => auth.signOut();

//Password reset.
export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

//Password change
export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
