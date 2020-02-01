import React from "react";
import { shallow } from "enzyme";
import { ConnectedCurrency } from "../../components/Currency";

const rate = {
  currency: "Argentinian Peso",
  code: "ARS",
  mid: 0.011111,
  selected: false
};

test("Should render Currency correctly", () => {
  const wrapper = shallow(<ConnectedCurrency currency={rate} />);
  expect(wrapper).toMatchSnapshot();
});
