import React from "react";
import { shallow } from "enzyme/build";
import RegisterComponent from "../../src/components/Auth/Signup";

 describe("register component", () => {
  let wrapper;
  let props = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: {
      username: "",
      email: "",
      password: ""
    },
    handleOnChange: jest.fn(),
    handleOnSubmit: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<RegisterComponent/>);
  });
  it("should render without fail", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
