import {combineReducers} from 'redux';
import authReducer from './authReducer';
import getEventsReducer from './getEventsReducer';

export default combineReducers({
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  },
  getEventsReducer
});
