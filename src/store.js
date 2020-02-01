import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { allCurrencyReducer } from "./reducers/allCurrencyReducer";

const inititalState = {};

const store = createStore(
  allCurrencyReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
