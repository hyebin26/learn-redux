import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CounterTest from "../components/counterTest";
import { decrease, increase, setDiff } from "../modules/counterTest";

const CounterContainerText = (props) => {
  const { number, diff } = useSelector((state) => ({
    number: state.counterTest.number,
    diff: state.counterTest.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <CounterTest
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainerText;
