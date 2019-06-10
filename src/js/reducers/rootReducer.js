import { combineReducers } from 'redux';
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from './authReducer';
import eventsReducer from './eventsReducer';

export default combineReducers({
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  },
  eventsReducer, 
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
