import { combineReducers } from "redux";
import posts from "./praThunkGetPosts";
import login from "./praThunkLogin";

const rootReducer2 = combineReducers({ posts, login });

export default rootReducer2;
