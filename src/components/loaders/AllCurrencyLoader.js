import React, { Suspense } from "react";
import {connect} from 'react-redux';

const AllCurrencyList = React.lazy(() => import("../AllCurrencyList"));

export const ConnectedAllCurrencyListLoader = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "start" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <AllCurrencyList />
      </Suspense>
    </div>
  );
};

export default connect()(ConnectedAllCurrencyListLoader);
