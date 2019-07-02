import { combineReducers } from 'redux';
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from './authReducer';
import getEventsReducer from './getEventsReducer';

export default combineReducers({
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  },
  getEventsReducer, 
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
