import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseAsnyc, increaseAsync } from "../modules/thunkCounter";
import ThunkCounter from "../components/thunkCounter";

const ThunkCounterContainer = (props) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.thunkCounterReducer);
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsnyc());
  };
  return (
    <ThunkCounter
      counter={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default ThunkCounterContainer;
