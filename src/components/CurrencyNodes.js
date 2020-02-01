import React from "react";
import Currency from "../components/Currency";

const CurrencyNodes = ({ currencies }) => (
  <>
    {currencies.length > 0 ? (
      currencies.map((currency, i) => {
        return <Currency key={i} currency={currency} />;
      })
    ) : (
      <p>No currencies...</p>
    )}
  </>
);

export default CurrencyNodes;
