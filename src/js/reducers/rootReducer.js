import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  blank: function(state, action) {
    if (state == null) state = [];
    return state;
  }
});
