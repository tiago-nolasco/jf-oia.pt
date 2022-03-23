
import i18nReducer from "./i18n";
import { combineReducers } from "redux";

const combinedReducers = combineReducers({
  i18n: i18nReducer,
});

export default combinedReducers;
