import React from "react";

const Skill = (props) => {
  const { detail } = props;
  const name = "ray";
  return (
    <div className="resume-section">
      <h2 className="resume-section-title">{detail.header}</h2>
      <ul>
        {detail.skills.map((skill) => {
          return <li className="resume-list-item">{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skill;
