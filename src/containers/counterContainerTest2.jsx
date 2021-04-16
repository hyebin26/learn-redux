import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CounterTest2 from "../components/counterTest2";
import { decrease, increase, setDiff } from "../modules/counterTest2";

const CounterContainerTest2 = (props) => {
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <CounterTest2
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainerTest2;
