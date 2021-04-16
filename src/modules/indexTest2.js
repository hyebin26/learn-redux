import { combineReducers } from "redux";
import counter from "./counterTest2";
import todos from "./todosTest";
import loginReducer from "./login";
import thunkCounterReducer from "./thunkCounter";
import posts from "./thunkGetPosts";

const rootReducer2 = combineReducers({ posts });

export default rootReducer2;
