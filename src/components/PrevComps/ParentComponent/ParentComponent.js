import React, { useState } from "react";
import ChildComponent from "./subComponents/ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("project");

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleTitleChange = (value) => {
    setTitle(value);
  };

  return (
    <div>
      <h1>Counter : {count}</h1>
      <h2>Title: {title}</h2>
      <ChildComponent
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleTitleChange={handleTitleChange}
      />
    </div>
  );
};

export default ParentComponent;
