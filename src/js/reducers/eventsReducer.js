const initState = {
  eventSuccess: null,
  eventError: null,
  events: []
}

const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS_SUCCESS':
      return {
        ...state,
        events: action.payload
      };

    case 'FETCH_EVENTS_ERROR':
      return {
        ...state,
        eventError: action.error.message
      };

    case 'CREATE_EVENT_SUCCESS':
    return {
      ...state,
      eventSuccess: action.eventSuccess
    };

    case 'CREATE_EVENT_ERROR':
      return {
        ...state,
        events: action.payload
      };
    default:
      return state;
  }
};

export default eventsReducer;
