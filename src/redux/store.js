// store.js
import { createStore } from "redux";
import navbarReducer from "./reducers/navbarReducers";

const store = createStore(navbarReducer);

export default store;
