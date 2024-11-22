import React from "react";

interface Props {
  count: number;
    increment: () => void;
    decrement: () => void;
}

const Child1: React.FC<Props> = ({ count, increment,decrement }) => {
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Child1;
