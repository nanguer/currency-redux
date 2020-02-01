import {
  ADD_CURRENCY,
  POPULATE_CURRENCY,
  REMOVE_CURRENCY
} from "../actions/types";

const initialState = [];

export const allCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_CURRENCY:
      return action.rates;
    default:
      return state;
  }
};
