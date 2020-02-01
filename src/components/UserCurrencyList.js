import React from "react";
import CurrencyNodes from "./CurrencyNodes";
import { connect } from "react-redux";
import { deleteAll } from "../actions/actions";

const ConnectedUserCurrencyList = ({ userCurrencies, deleteAll }) => {
  const handleDeleteAll = () => {
    deleteAll();
  };
  const userList = (
    <>
      <button onClick={handleDeleteAll}>Delete All</button>
      <h1>Following currencies:</h1>
      <ul>
        <CurrencyNodes currencies={userCurrencies} />
      </ul>
    </>
  );
  return (
    <div style={{ textAlign: "end" }}>
      {userCurrencies.length > 0 ? userList : <div>Nothing to follow...</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  userCurrencies: state.userCurrencies
});

export default connect(mapStateToProps, { deleteAll })(
  ConnectedUserCurrencyList
);
