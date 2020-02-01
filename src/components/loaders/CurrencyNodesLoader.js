import React, { Suspense } from "react";

const CurrencyNodes = React.lazy(() => import("../CurrencyNodes"));

const CurrencyNodesLoader = () => {
  return null;
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <CurrencyNodes currencies={} />
    </Suspense>
  </div>;
};

export default CurrencyNodesLoader;
