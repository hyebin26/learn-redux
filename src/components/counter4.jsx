import React from "react";

const Counter4 = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(e.target.value, 10);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input type="number" value={diff} onChange={onChange} />
    </div>
  );
};

export default Counter4;
