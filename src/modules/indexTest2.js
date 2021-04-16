import { combineReducers } from "redux";
import posts from "./thunkGetPosts";
import thunkLogin from "./thunkLogin";

const rootReducer2 = combineReducers({ posts, thunkLogin });

export default rootReducer2;
