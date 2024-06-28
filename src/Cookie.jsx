import React, { useState } from "react";
import Cookies from "js-cookie";

const SetCookieExample = () => {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set a cookie named "username" with the value of the username state
    Cookies.set("username", username); // Cookie expires in 7 days
    alert(`Cookie set: username=${username}`);
  };

  return (
    <div>
      <h2>Set Cookie Example</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Set Cookie</button>
      </form>
    </div>
  );
};

export default SetCookieExample;
