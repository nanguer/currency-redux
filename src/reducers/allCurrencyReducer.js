import {
  ADD_CURRENCY,
  POPULATE_CURRENCY,
  REMOVE_CURRENCY
} from "../actions/types";

const initialState = [];

const allCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case POPULATE_CURRENCY:
      return action.rates;
    case REMOVE_CURRENCY:
      const filteredCurrencies = state.filter(
        el => el.code !== action.rate.code
      );
      return filteredCurrencies;
    case ADD_CURRENCY:
      return [...state, { ...action.rate, selected: false }];

    default:
      return state;
  }
};

export default allCurrencyReducer;
