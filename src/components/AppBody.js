import React, { useState } from "react";
import AllCurrencyListLoader from "../components/loaders/AllCurrencyLoader";
import UserCurrencyList from "../components/UserCurrencyList";

const AppBody = () => {
  const [showList, setShowList] = useState(false);

  const handleOnClick = () => {
    setShowList(!showList);
  };

  const textAlign = {
    textAlign: "center"
  };

  return (
    <div className="app-body">
      <div>
        <h1 style={textAlign}>Currency Application</h1>
      </div>
      <div style={textAlign}>
        <h3>Please select which currencies to follow from the list</h3>
      </div>
      <div
        className="currency-columns"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="all-currency">
          <button onClick={handleOnClick} style={{ position: "absolute" }}>
            {showList ? "Hide" : "Show"} currency rates
          </button>
          {showList ? <AllCurrencyListLoader /> : null}
        </div>
        <div>
          <UserCurrencyList />
        </div>
      </div>
    </div>
  );
};

export default AppBody;
