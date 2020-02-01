import React from "react";
import { add, remove } from "../actions/actions";
import { connect } from "react-redux";

export const ConnectedCurrency = ({ currency, add, remove }) => {
  const handleSelect = currency => {
    if (!selected) {
      //   add(currency));
      //   dispatchAll(remove(currency));
    } else {
      //   dispatchUser(remove(currency));
      //   dispatchAll(add(currency));
    }
  };

  const { name, code, mid, selected } = currency;
  return (
    <li>
      <div>Currency: {name}</div>
      <div>Code: {code}</div>
      <div>Mid: {mid}</div>
      <div>
        <button onClick={() => handleSelect(currency)}>
          {selected ? "Remove" : "Add"}
        </button>
      </div>
    </li>
  );
};

export default connect(null, { add, remove })(ConnectedCurrency);
