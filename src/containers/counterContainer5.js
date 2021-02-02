import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter5 from "../components/counter5";
import { decrease, increase, setDiff } from "../modules/counter5";

const CounterContainer5 = (props) => {
  const { number, diff } = useSelector((state) => ({
    number: state.counter5.number,
    diff: state.counter5.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  
  return (
    <Counter5
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
};

export default CounterContainer5;
