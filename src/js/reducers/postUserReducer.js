import { POST_USER_SUCCESS } from "../actions/types";

const initialState = {
  users: []
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_SUCCESS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};

export default postUserReducer;
