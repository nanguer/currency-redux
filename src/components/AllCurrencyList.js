import React, { useEffect } from "react";
import { connect } from "react-redux";
import CurrencyNodes from "../components/CurrencyNodes";
import { checkIfCurrencies } from "../actions/actions";

export const ConnectedAllCurrencyList = ({ currencies, checkIfCurrencies }) => {
  useEffect(() => {
    checkIfCurrencies();
  }, []);

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
  currencies: state
});

export default connect(mapStateToProps, { checkIfCurrencies })(
  ConnectedAllCurrencyList
);
