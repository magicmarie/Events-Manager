import { POST_USER_SUCCESS } from "../actions/types";

const initialState = {
  users: []
};

const getEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};

export default getEventsReducer;
