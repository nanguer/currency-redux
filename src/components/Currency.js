import React from "react";
import { add, addToUser, removeFromUser, remove } from "../actions/actions";
import { connect } from "react-redux";

export const ConnectedCurrency = ({
  currency,
  addToUser,
  removeFromUser,
  add,
  remove
}) => {
  const handleSelect = currency => {
    if (!selected) {
      addToUser(currency);
      remove(currency);
    } else {
      add(currency);
      removeFromUser(currency);
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

export default connect(null, { addToUser, removeFromUser, add, remove })(
  ConnectedCurrency
);
