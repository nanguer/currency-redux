import React from "react";
import CurrencyNodes from "./CurrencyNodes";

const UserCurrencyList = () => {
  const { userCurrencies } = useContext(CurrencyContext);
  const userList = (
    <>
      <h1>Following currencies:</h1>
      <ul>
        <CurrencyNodes currencies={userCurrencies} />
      </ul>
    </>
  );
  return (
    <div style={{ textAlign: "end" }}>
      {userCurrencies.length > 0 && userList}
    </div>
  );
};

export default UserCurrencyList;
