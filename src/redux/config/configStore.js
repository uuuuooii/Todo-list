import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// 스토어 연결
const rootReducer = combineReducers({ todos });
const store = createStore(rootReducer);

export default store;
