/* eslint-disable no-var */

import React from "react";
import HomePage from "../src/components/HomePage/HomePage.js";
import { expect } from "chai";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("HomePage tag test", () => {
  const wrapper = shallow(<HomePage />);
  it("should be a <div> tag", () => {
    expect(wrapper.type()).to.eql("div");
  });
});
