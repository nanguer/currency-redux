import React, { Suspense } from "react";

const AllCurrencyList = React.lazy(() => import("../AllCurrencyList"));

export const AllCurrencyListLoader = () => {
  return (
    <div style={{ textAlign: "start" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AllCurrencyList />
      </Suspense>
    </div>
  );
};

export default AllCurrencyListLoader;
