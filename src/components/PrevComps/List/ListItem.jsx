import React from "react";

const ListItem = () => {
  const fruits = ["mango", "guave", "orange"];
  const users = [
    {
      name: "mohan",
      age: 20,
    },
    {
      name: "prawal",
      age: 26,
    },
    {
      name: "ganesh",
      age: 17,
    },
    {
      name: "prawal",
      age: 26,
    },
    {
      name: "ganesh",
      age: 17,
    },
  ];
  return (
    <div>
      <li>
        {users.map((user, index) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h3>Age: {user.age}</h3>
            </div>
          );
        })}
      </li>
    </div>
  );
};

export default ListItem;
