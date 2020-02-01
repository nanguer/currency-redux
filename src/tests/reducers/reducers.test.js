import allCurrencyReducer from "../../reducers/allCurrencyReducer";
import {
  POPULATE_CURRENCY,
  ADD_CURRENCY,
  REMOVE_CURRENCY
} from "../../actions/types";
import rates from "../fixtures/rates";

test("Should Populate App currency array", () => {
  const action = { type: POPULATE_CURRENCY, rates };
  const state = allCurrencyReducer(rates, action);
  expect(state).toEqual(rates);
});

test("Should add a currency to All currency array", () => {
  const rate = {
    currency: "Argentinian Peso",
    code: "ARS",
    mid: 0.011111,
    selected: false
  };
  const action = { type: ADD_CURRENCY, rate };
  const state = allCurrencyReducer(rates, action);
  expect(state).toEqual([...rates, rate]);
});

test("Should remove a currency from the All currency array", () => {
  const action = {
    type: REMOVE_CURRENCY,
    rate: rates[0]
  };
  const state = allCurrencyReducer(rates, action);

  expect(state).toEqual([rates[1], rates[2]]);
});

test("Should run default case", () => {
  const action = {
    type: ""
  };
  const state = allCurrencyReducer(rates, action);
  expect(state).toEqual(rates);
});
