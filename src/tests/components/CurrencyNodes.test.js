import React from "react";
import { shallow } from "enzyme";
import rates from "../fixtures/rates";
import CurrencyNodes from "../../components/CurrencyNodes";

test("Should render CurrencyNodes with currency", () => {
  const wrapper = shallow(<CurrencyNodes currencies={rates} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render CurrencyNodes with no currencies message", () => {
  const wrapper = shallow(<CurrencyNodes currencies={[]} />);
  expect(wrapper).toMatchSnapshot();
});
