import React from "react";

import { add, remove } from "../actions/actions";

// const Currency = ({ rate }) => {
//   const { dispatchAll, dispatchUser } = useContext(CurrencyContext);

//   const handleSelect = rate => {
//     if (!selected) {
//       dispatchUser(add(rate));
//       dispatchAll(remove(rate));
//     } else {
//       dispatchUser(remove(rate));
//       dispatchAll(add(rate));
//     }
//   };

//   const { currency, code, mid, selected } = rate;
//   return (
//     <li>
//       <div>Currency: {currency}</div>
//       <div>Code: {code}</div>
//       <div>Mid: {mid}</div>
//       <div>
//         <button onClick={() => handleSelect(rate)}>
//           {selected ? "Remove" : "Add"}
//         </button>
//       </div>
//     </li>
//   );
// };

// export default Currency;
