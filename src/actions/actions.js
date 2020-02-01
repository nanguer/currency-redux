import axios from "axios";
import { ADD_CURRENCY, REMOVE_CURRENCY, POPULATE_CURRENCY } from "./types";

export const add = rates => ({ type: ADD_CURRENCY, rates });
export const remove = rates => ({ type: REMOVE_CURRENCY, rates });
export const populate = rates => ({ type: POPULATE_CURRENCY, rates });

const url = "http://api.nbp.pl/api/exchangerates/tables/a?format=json";

export const fetchCurrencies = () => async dispatch => {
  try {
    console.log("fetchCurrency");
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
  console.log(rates);
  if (!rates) {
    dispatch(fetchCurrencies());
  } else {
    if (rates.length > 0) {
      dispatch(populate(rates));
    }
  }
};
