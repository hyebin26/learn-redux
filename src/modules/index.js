import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import counter2 from "./counter2";
import counter3 from "./counter3";

const rootReducer = combineReducers({
  counter,
  todos,
  counter2,
  counter3,
});

export default rootReducer;
