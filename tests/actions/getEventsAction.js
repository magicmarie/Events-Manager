import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import { FETCH_EVENTS_SUCCESS } from "../../src/js/actions/types";
import { getEventsAction } from "../../src/js/actions/getEvents";
import events from "../mock_data/moxios_mock";

 const middleWare = [thunk];

 const mockStore = configureStore(middleWare);

 describe("Action for getting events", () => {
  beforeEach(() => {
    moxios.install();
  });

   afterEach(() => {
    moxios.uninstall();
  });

   it("Should fetch events", () => {
    const store = mockStore({});
    moxios.wait(() => {
      const requestM = moxios.requests.mostRecent();
      requestM.respondWith({
        status: 200,
        response: {
          data: events
        }
      });
    });
    const expectedAction = [
      {
        type: FETCH_EVENTS_SUCCESS,
        payload: {
          data: events
        }
      }
    ];
    return store.dispatch(getEventsAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
