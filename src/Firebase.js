import app from "firebase/app";

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
// my web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };

  // Initialize Firebase
  if (!firebase.app.length) {
    app.initializeApp(firebaseConfig);
  }

  export default Firebase;
