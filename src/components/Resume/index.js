import React from 'react';
import { Card } from 'react-bootstrap';

function Resume() {
  const resume = {
    name: "fab fa-github",
    link: "https://github.com/MarynaPR"
  }

  return (
    <Card style={{ margin: "10px 20px" }} >
      <div style={{ margin: "20px" }}>
        <p>
          Check out my <a href={resume.link}>resume</a>
        </p>
        <h3>front-end proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>back-end proficiencies</h3>
        <ul className="skills">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </Card>
  );
}

export default Resume;