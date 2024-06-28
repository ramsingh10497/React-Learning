import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={props.handleIncrement}>Add</button>
      <button onClick={props.handleDecrement}>Subtract</button>
      <button
        onClick={() => {
          props.handleTitleChange("project2");
        }}
      >
        Title Change
      </button>
    </div>
  );
};

export default ChildComponent;
