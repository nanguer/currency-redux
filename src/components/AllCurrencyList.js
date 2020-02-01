import React, { useEffect } from "react";
import { connect } from "react-redux";
import CurrencyNodes from "../components/CurrencyNodes";
import { checkIfCurrencies } from "../actions/actions";

export const ConnectedAllCurrencyList = ({ currencies, checkIfCurrencies }) => {
  useEffect(() => {
    checkIfCurrencies();
  }, []);

  useEffect(() => {
    localStorage.setItem("currencyList", JSON.stringify(currencies));
  }, [currencies]);

  return (
    <div>
      <h1>Available Currencies</h1>
      <ul>
        <CurrencyNodes currencies={currencies} />
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  currencies: state.currencies
});

export default connect(mapStateToProps, { checkIfCurrencies })(
  ConnectedAllCurrencyList
);
