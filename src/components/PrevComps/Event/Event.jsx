import React, { useState } from "react";

const Event = () => {
  // const handleClick = () => {
  //   alert("You clicked Succefully");
  // };

  const [value, setValue] = useState("guava");

  function handleClick() {
    alert("You clicked Succefully");
  }

  function handleInput(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <h1>Event Example</h1>
      <button onClick={handleClick}>CLick Me</button>
      <br />
      <br />
      <input onChange={(event) => handleInput(event)} />

      <div>{value}</div>
    </div>
  );
};

export default Event;
