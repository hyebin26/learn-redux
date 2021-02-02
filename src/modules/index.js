import { combineReducers } from "redux";
import counter from "./counter";
import todos3 from "./todos3";
import counter5 from "./counter5";

const rootReducer = combineReducers({
  todos3,
  counter5,
});

export default rootReducer;
