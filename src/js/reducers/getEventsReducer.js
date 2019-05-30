import { FETCH_EVENTS_SUCCESS } from "../actions/types";

const initialState = {
  events: []
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
