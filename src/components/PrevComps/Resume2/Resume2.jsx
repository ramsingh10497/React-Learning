import React from "react";
import "./Resume2.css";

const Resume2 = ({ data }) => {
  let educationItems = null;
  let workItems = null;
  let skillsItems = null;

  if (data) {
    educationItems = data.education.map((edu) => (
      <div key={edu.school} className="row item resume-item">
        <div className="twelve columns">
          <h3>{edu.school}</h3>
          <p className="info">
            {edu.degree} <span>&bull;</span>{" "}
            <em className="date">{edu.graduated}</em>
          </p>
          <p>{edu.description}</p>
        </div>
      </div>
    ));

    workItems = data.work.map((job) => (
      <div key={job.company} className="row item resume-item">
        <div className="twelve columns">
          <h3>{job.company}</h3>
          <p className="info">
            {job.title} <span>&bull;</span>{" "}
            <em className="date">{job.years}</em>
          </p>
          <p>{job.description}</p>
        </div>
      </div>
    ));

    skillsItems = data.skills.map((skill) => (
      <li key={skill.name}>
        <span
          style={{ width: skill.level }}
          className={`bar-expand ${skill.name.toLowerCase()}`}
        ></span>
        <em>{skill.name}</em>
      </li>
    ));
  }

  return (
    <section id="resume" className="resume">
      <div className="row education resume-section">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div className="nine columns main-col">{educationItems}</div>
      </div>

      <div className="row work resume-section">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div className="nine columns main-col">{workItems}</div>
      </div>

      <div className="row skill resume-section">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p className="skills-description">
            The main skill sets below outline the variety of skills performed
            within my current role as Senior Photographer at Block Media in
            Paris, France.
          </p>
          <div className="bars">
            <ul className="skills-list">{skillsItems}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume2;
