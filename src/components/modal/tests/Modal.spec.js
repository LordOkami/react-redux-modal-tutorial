import React from "react";
import { shallow } from "enzyme";
import { Modal } from "../Modal";

describe("<Modal />", () => {
  const modal = { open: false };
  const openModal = jest.fn;
  const props = { modal, openModal };
  it("matches the latest snapshot", () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
