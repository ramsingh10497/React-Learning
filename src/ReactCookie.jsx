import React, { useState } from "react";
import { useCookies } from "react-cookie";

const SetCookieExample = () => {
  const [cookies, setCookie] = useCookies(["username"]);
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Set a cookie named "username" with the value of the username state
    setCookie("username", username, { path: "/", maxAge: 7 * 24 * 60 * 60 }); // Cookie expires in 7 days
    alert(`Cookie set: username=${username}`);
  };

  return (
    <div>
      <h2>Set Cookie Example with React-cookie</h2>
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
