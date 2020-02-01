import axios from "axios";
import {
  ADD_CURRENCY,
  REMOVE_CURRENCY,
  POPULATE_CURRENCY,
  REMOVE_CURRENCY_ALL,
  REMOVE_USER_ALL,
  ADD_USER_CURRENCY,
  REMOVE_USER_CURRENCY
} from "./types";

export const add = rate => ({ type: ADD_CURRENCY, rate });
export const remove = rate => ({ type: REMOVE_CURRENCY, rate });
export const populate = rates => ({ type: POPULATE_CURRENCY, rates });
export const deleteAll = () => ({});
export const addToUser = rate => ({ type: ADD_USER_CURRENCY, rate });
export const removeFromUser = rate => ({ type: REMOVE_USER_CURRENCY, rate });

const url = "http://api.nbp.pl/api/exchangerates/tables/a?format=json";

export const fetchCurrencies = () => async dispatch => {
  try {
    const res = await axios.get(url);
    const rates = res.data[0].rates;
    rates.forEach(el => {
      return (el.selected = false);
    });
    dispatch(populate(rates));
  } catch (e) {
    console.log(e);
  }
};

export const checkIfCurrencies = () => dispatch => {
  const rates = JSON.parse(localStorage.getItem("currencyList"));
  if (!rates || rates.length === 0) {
    dispatch(fetchCurrencies());
  } else {
    if (rates.length > 0) {
      dispatch(populate(rates));
    }
  }
};
