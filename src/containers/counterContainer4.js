import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter4 from "../components/counter4";
import { decrease, increase, setDiff } from "../modules/counter4";

const CounterContainer4 = (props) => {
  const { number, diff } = useSelector((state) => ({
    number: state.counter4.number,
    diff: state.counter4.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter4
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer4;
