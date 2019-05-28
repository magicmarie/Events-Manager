import React from "react";
import { shallow } from "enzyme";
import App from "../src/containers/index";
import Login from "../src/components/Auth/Login";
import Home from "../src/components/home";
import events from "./mock_data/moxios_mock";
// the package for mocking/faking the Redux store
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

// middlewares, empty array for now
const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {};
//the mocked store to pass to the Provider's store prop
const mockedStore = mockStore(initialState);

const props = {
  events: events,
  getEventsAction: jest.fn()
};

describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it("renders the login component", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it("render the home page", () => {
    const wrapper = shallow(
      <Provider store={mockedStore}>
        <Home {...props} />
      </Provider>
    );
    expect(wrapper.instance()).toMatchSnapshot();
  });
});
