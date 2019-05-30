import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { registerUser } from "../../actions/registerActions";

 const middleware = [thunk];
const mockStore = configureStore(middleware);
describe("testing register actions creaters", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it("should handle user registration", () => {
    // expected response from successful api call
    const mockData = {
      user: {
        email: "marie@gmail.com",
        username: "marie",
        password: "marie",
        confirmPassword: "marie"
      }
    };

     const store = mockStore({});
     // response from moxios once call is made
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: { mockData }
      });
    });
    const expectedActions = [
      { type: POST_USER_SUCCESS, payload: mockData }
    ];
      store.dispatch(registerUser(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
