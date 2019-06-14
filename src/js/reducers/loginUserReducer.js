import { LOGIN_USER_SUCCESS } from "../actions/types";

const initialState = {
  users: []
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};

export default loginUserReducer;
