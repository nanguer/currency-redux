import {
  ADD_USER_CURRENCY,
  REMOVE_USER_CURRENCY,
  REMOVE_USER_ALL
} from "../actions/types";

const initialState = [];

const userCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_CURRENCY:
      return [...state, { ...action.currency, selected: true }];
    default:
      return state;
  }
};

export default userCurrencyReducer;
