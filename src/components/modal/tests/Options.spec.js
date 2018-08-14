import React from "react";
import { shallow } from "enzyme";
import { Options } from "../Options";

describe("<Options />", () => {
  const modal = { open: true, options: ["uno", "dos"], selectedOption: 0 };
  const selectOption = jest.fn;
  const props = { modal, selectOption };
  it("matches the latest snapshot", () => {
    const wrapper = shallow(<Options {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
