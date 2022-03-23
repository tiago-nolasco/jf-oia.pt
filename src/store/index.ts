// STORE - Globalized state
// ACTION - Describes what we want to do (e.g. increment, addUser, setI18n)
// REDUCER - How an ACTION transform the state into the next (e.g. i++, user.push({}), i18n = {})
// DISPATCH - Distatch an ACTION to the REDUCER

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import { devTools } from "./enhancers/devTools";
import { myLogger } from "./enhancers/myLogger";
import reducers from "./reducers"; // Could be replaced by "redux-logger"

const store = createStore(
  reducers,
  applyMiddleware(thunk, myLogger)
);

export default store;
