import React, { useState } from 'react';
import Project from "../Project";
import { Container } from 'react-bootstrap';

function Portfolio() {
  const [projects] = useState([
    {
      name: 'word-generator',
      description: 'javascript/jQuery/materialize',
      link: "https://jgrossh2.github.io/word-generator/",
      repo: "https://github.com/jgrossh2/word-generator"
    },
    {
      name: '24chains',
      description: 'express/mySQL/handlebars',
      link: "https://dry-mesa-09626.herokuapp.com/",
      repo: "https://github.com/MarynaPR/24-chains"
    },
    {
      name: 'note-taker',
      description: 'node/express/css/HTML',
      link: "https://marynapr.github.io/Note-Taker-Application/",
      repo: "https://github.com/MarynaPR/Note-Taker-Application"
    },
    {
      name: 'profile-generator',
      description: 'HTML/css/node/jest/inquirer',
      link: "https://marynapr.github.io/Team-Profile-Generator/",
      repo: "https://github.com/MarynaPR/Team-Profile-Generator"
    },
    {
      name: 'budget-tracker',
      description: 'node/express/indexDb',
      link: "https://boiling-plains-58611.herokuapp.com/",
      repo: "https://github.com/MarynaPR/budget-tracker"
    },
  ]);

  return (
    <Container>
          {projects.map((project, idx) => (
            <Project
              project={project}
              key={"project" + idx}
            />
          ))}
    </Container>
  );
};

export default Portfolio;