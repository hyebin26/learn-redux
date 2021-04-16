import { combineReducers } from "redux";
import counter from "./counterTest2";
import todos from "./todosTest";
import loginReducer from "./login";

const rootReducer2 = combineReducers({ loginReducer });

export default rootReducer2;
