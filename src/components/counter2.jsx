import React from "react";

const Counter2 = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={onIncrease}>++++</button>
      <button onClick={onDecrease}>----</button>
    </div>
  );
};

export default Counter2;
