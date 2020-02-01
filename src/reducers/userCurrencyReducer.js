import { ADD_CURRENCY, REMOVE_CURRENCY } from "../actions/types";

const initialState = [];

const userCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENCY:
      return [...state, { ...action.rate, selected: true }];
    default:
      return state;
  }
};

export default userCurrencyReducer;
