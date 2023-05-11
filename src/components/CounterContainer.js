import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from '../redux/store'

function CounterContainer() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.value;
  });
  console.log(value);
  return (
    <div className="counter" style={{ marginTop: "100px" }}>
      <button
        onClick={() => {
        //   dispatch({
        //     type: "increment",
        //   });
        dispatch(increment())
        }}
      >
        Increment
      </button>
      <label style={{ fontSize: "30px" }}>{value}</label>
      <button
        onClick={() => {
        //   dispatch({
        //     type: "decrement",
        //   });
        dispatch(decrement())
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterContainer;
