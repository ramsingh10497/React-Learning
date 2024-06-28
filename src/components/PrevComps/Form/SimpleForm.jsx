import React, { useState } from "react";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    isChecked: false,
  });

  const handleChange = (event) => {
    console.log(event.target.checked);
    if (event.target.name == "isChecked") {
      setFormState((prevFormStateValue) => {
        return {
          ...prevFormStateValue,
          [event.target.name]: event.target.checked,
        };
      });
    } else {
      setFormState((prevFormStateValue) => {
        return {
          ...prevFormStateValue,
          [event.target.name]: event.target.value,
        };
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formState.isChecked) {
      alert("Submitted Sucessfully");
    } else {
      alert("You should check the input field");
    }
  };

  return (
    <div>
      <h1>This is Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formState.name}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="number">Contact Number: </label>
        <input
          type="number"
          name="number"
          id="number"
          value={formState.number}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="isChecked">Confirm : </label>
        <input
          type="checkbox"
          name="isChecked"
          id="isChecked"
          onChange={handleChange}
          value={formState.isChecked}
        ></input>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
