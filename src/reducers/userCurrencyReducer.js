import {
  ADD_USER_CURRENCY,
  REMOVE_USER_CURRENCY,
  REMOVE_USER_ALL
} from "../actions/types";

const initialState = [];

const userCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_CURRENCY:
      return [...state, { ...action.rate, selected: true }];
    case REMOVE_USER_CURRENCY:
      const filteredCurrencies = state.filter(
        el => el.code !== action.rate.code
      );
      return filteredCurrencies;
    case REMOVE_USER_ALL:
      return [];
    default:
      return state;
  }
};

export default userCurrencyReducer;
