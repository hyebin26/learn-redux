import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter3 from "../components/counter3";
import { decrease, increase, setDiff } from "../modules/counter3";

const CounterContainer3 = (props) => {
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  const { number, diff } = useSelector((state) => ({
    number: state.counter3.number,
    diff: state.counter3.diff,
  }));
  return (
    <Counter3
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
};

export default CounterContainer3;
