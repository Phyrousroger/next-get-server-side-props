import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/CounterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
