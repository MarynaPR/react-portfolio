import React from 'react';
import { Card } from 'react-bootstrap';

function Resume() {
  const resume = {
    name: "fab fa-github",
    link: "https://github.com/MarynaPR"
  }

  const proficiencies = [
    { name: "fab fa-html5" },
    { name: "fab fa-css3-alt" },
    { name: "fab fa-sass" },
    { name: "fab fa-js-square" },
    { name: "fab fa-react" },
    { name: "fab fa-bootstrap" },
    { name: "fab fa-node" },
    { name: "fab fa-js-square" },
    { name: "fab fa-github-square" }
  ]

  return (
    <Card style={{ margin: "10px 20px", color: "#e0d6d6" }}>
      <div>
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
          <li>Heroku</li>
        </ul>

        <div className="flex-row">
          <div>
            {proficiencies.map(proficiency =>
            (
              <p style={{ margin: "30px", padding: "10px", color: "black", size: "10rem", display: "inline", flexWrap: "wrap" }}
                key={proficiency.name} className={proficiency.name}></p>
            )
            )}
          </div>
        </div>
      </div>
    </Card >
  );
}

export default Resume;