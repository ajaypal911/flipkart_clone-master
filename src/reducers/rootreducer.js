import counterReducer from "./counter";
// import loggedReducer from "./islogged";
// import add_To_Cart from "./addToCart";
// import DetailViewer from "./detail_Viewer";
// import { AddUser } from "../actions";
import { combineReducers } from "redux";
import Users from "./Users";
import Log from "./logged";
import Cart from "./Cart";

const RootReducers = combineReducers({
  //   myCount: counterReducer,
  Users: Users,
  Log: Log,
   Cart:Cart
});

export default RootReducers;
