import React from "react";

const ThunkCounter = ({ counter, onIncrease, onDecrease }) => {
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default ThunkCounter;
