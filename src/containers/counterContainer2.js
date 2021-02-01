import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter2 from "../components/counter2";
import { increase, decrease } from "../modules/counter2";

const CounterContainer2 = (props) => {
  const number = useSelector((state) => state.counter2.number);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter2 number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer2;
