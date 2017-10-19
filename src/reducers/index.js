import { combineReducers } from "redux";
import counter from "./counterReducer";
import apiData from "./apiReducer";

const rootReducer = combineReducers({
  counter,
  apiData
});

export default rootReducer;
