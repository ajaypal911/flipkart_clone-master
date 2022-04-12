import React from "react";

let initialstate = {
  loginData: [],
};
const Users = (state = { ...initialstate }, action) => {
  switch (action.type) {
    case "ADD_USER":
      //     let users = state.Users;
      // console.log("state in users", state);
      // users.push(action.payload);
      // let data = action.payload;
      // console.log("action.payload", action.payload, data);
      return {
        ...state,
        loginData: [...state?.loginData, action.payload],
      };
    case "SET_BEFORE_LOGOUT":
      let data = [...state.loginData];
      let idx = -1;
      data.find((u, indx) => {
        if (u.id === action.payload.id) {
          console.log("indx", indx);
          idx = indx;
          return indx;
        }
      });
      data[idx] = { ...data[idx], Cart: action.payload.Cart };
      return { loginData: data };
    case "PRINT_STATE":
      console.log("users state", state);
      return state;
    default:
      return state;
  }
  console.log("state in users after switch", state);
};

export default Users;
