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
      let data = state.loginData;
      let idx = data.map((u, i) => {
        if (u.id === action.payload.id) {
          return i;
        }
      });
      data[idx] = { ...data[idx], Cart: action.payload.Cart };
      return { ...state, loginData: data };
    default:
      return state ;
  }
  console.log("state in users after switch", state);
};

export default Users;
