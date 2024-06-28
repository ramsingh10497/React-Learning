import React from "react";
import "./Resume.css";
import UserInfo from "./subcomponents/UserInfo";
import Skill from "./subcomponents/Skill";

const Resume = () => {
  const detail = {
    header: "Skills",
    skills: ["JavaScript", "React", "Node.js", "HTML/CSS", "Git"],
  };

  return (
    <div className="resume-container">
      <UserInfo />

      <Skill detail={detail} />

      <div className="resume-section">
        <h2 className="resume-section-title">Education</h2>
        <ul>
          <li className="resume-list-item">
            <strong>Bachelor of Science in Computer Science</strong>
            <br />
            University of Springfield, 2016 - 2020
          </li>
          <li className="resume-list-item">
            <strong>High School Diploma</strong>
            <br />
            Springfield High School, 2012 - 2016
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
