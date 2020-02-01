import React, { Suspense, useContext } from "react";
// import { CurrencyContext } from "../../context/CurrencyContext";

const CurrencyNodes = React.lazy(() => import("../CurrencyNodes"));

const CurrencyNodesLoader = () => {
  // const { allCurrencies } = useContext(CurrencyContext);
  return null;
  // <div>

  /* <Suspense fallback={<div>Loading...</div>}>
   */
  /* <CurrencyNodes currencies={allCurrencies} /> */
  /* </Suspense> */
  // </div>
};

export default CurrencyNodesLoader;
