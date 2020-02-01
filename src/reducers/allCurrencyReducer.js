import {
  ADD_CURRENCY,
  POPULATE_CURRENCY,
  REMOVE_CURRENCY,
  REMOVE_CURRENCY_ALL
} from "../actions/types";

const initialState = [];

const allCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_CURRENCY:
      return action.rates;
    default:
      return state;
  }
};

export default allCurrencyReducer;
