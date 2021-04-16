import React from "react";

const CounterTest = ({ onSetDiff, diff, number, onIncrease, onDecrease }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value));
  };
  return (
    <div>
      <h2>{number}</h2>
      <input type="number" value={diff} onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default CounterTest;
