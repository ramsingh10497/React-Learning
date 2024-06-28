import React from "react";

const DataBinding = () => {
  const users = [
    {
      name: "Raghao",
      roll: 1,
      class: 6,
    },
    {
      name: "Raghao",
      roll: 1,
      class: 6,
    },
    {
      name: "Raghao",
      roll: 1,
      class: 6,
    },
  ];

  return (
    <div>
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <h2>{user.roll}</h2>
              <h3>{user.class}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataBinding;
