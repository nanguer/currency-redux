import React, { useEffect} from "react";
import{connect} from 'react-redux';
import CurrencyNodesLoader from "../components/loaders/CurrencyNodesLoader";
import { fetchCurrencies } from "../actions/actions";

export const ConnectedAllCurrencyList = ({dispatch}) => {
  useEffect(() => {
    dispatch(fetchCurrencies());
  }, []);

  return (
    <div>
      <h1>Available Currencies</h1>
      <ul>
        <CurrencyNodesLoader />
      </ul>
    </div>
  );
};

export default connect()(ConnectedAllCurrencyList);
