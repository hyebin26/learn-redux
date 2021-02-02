import React from "react";

const Counter3 = ({ number, diff, onIncrease, onDecrease, onSetDiff }) => {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value), 10);
  };
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input type="number" onChange={onChange} value={diff} />
    </div>
  );
};
export default Counter3;
