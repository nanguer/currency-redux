import { addToUser, removeFromUser, populate } from "../../actions/actions";
import {
  ADD_USER_CURRENCY,
  REMOVE_USER_CURRENCY,
  POPULATE_CURRENCY
} from "../../actions/types";

const rate = {
  currency: "korona czeska",
  code: "CZK",
  mid: 0.1698
};

test("Should setup add action object", () => {
  const action = addToUser(rate);
  expect(action).toEqual({ type: ADD_USER_CURRENCY, rate });
});

test("Should setup remove action object", () => {
  const action = removeFromUser(rate);
  expect(action).toEqual({ type: REMOVE_USER_CURRENCY, rate });
});

test("Should setup populate action object", () => {
  const rates = [];
  const action = populate(rates);
  expect(action).toEqual({
    type: POPULATE_CURRENCY,
    rates: expect.any(Array)
  });
});
