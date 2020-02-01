import { combineReducers } from "redux";
import allCurrencyReducer from "./allCurrencyReducer";
import userCurrencyReducer from "./userCurrencyReducer";

export default combineReducers({
  currencies: allCurrencyReducer,
  userCurrencies: userCurrencyReducer
});
