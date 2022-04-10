import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../actions/index";

const Counter = () => {
  const counter = useSelector((state) => state.myCount);
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" name="value" />
      value:{counter} <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
