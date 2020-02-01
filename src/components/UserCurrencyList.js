import React from "react";
import CurrencyNodes from "./CurrencyNodes";
import { connect } from "react-redux";

const ConnectedUserCurrencyList = ({ userCurrencies }) => {
  console.log(userCurrencies);
  const userList = (
    <>
      <h1>Following currencies:</h1>
      <ul>
        <CurrencyNodes currencies={userCurrencies} />
      </ul>
    </>
  );
  return <div style={{ textAlign: "end" }}>{userList}</div>;
};

const mapStateToProps = state => ({
  userCurrencies: state.userCurrencies
});

export default connect()(ConnectedUserCurrencyList);
