import React from "react";
import { shallow } from 'enzyme';
import App from "../src/containers/index";
import Login from "../src/components/Auth/Login"

 describe("App", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.instance()).toMatchSnapshot();
  });

  it ("renders the login component", () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.instance()).toMatchSnapshot();
  });
});
