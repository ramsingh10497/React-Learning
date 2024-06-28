import React, { useState } from "react";
// Import CSS for styling (if needed)

const Counter = () => {
  const [count, setCount] = useState(2);
  const [name, setName] = useState("ram");

  console.log(count, "count");
  console.log(setCount, "setCount");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChangeName = () => {
    setName("ganesh");
  };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div className="counter-buttons mt-5">
        <button onClick={decrement} className=" mb-5">
          -
        </button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

        <button onClick={handleChangeName}>Change Name</button>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Counter;
