import eventsReducer from "../../src/js/reducers/eventsReducer";
import { FETCH_EVENTS_SUCCESS } from "../../src/js/actions/types";
import events from "../mock_data/moxios_mock";

describe("App", () => {
  const initialState = {
    events: []
  };
  const expectedNewState = {
    events: events
  };
  it("Should handle reducers after getting events", () => {
    const newState = eventsReducer(initialState, {
      type: FETCH_EVENTS_SUCCESS,
      payload: events
    });
    expect(newState).toEqual(expectedNewState);
  });

  it("Should handle reducers initial state", () => {
    const newState = eventsReducer(initialState, {
      type: "UN_DEFINED_TYPE_TO_RETURN_DEFAULT",
      payload: events
    });
    expect(newState).toEqual({ events: [] });
  });
});
