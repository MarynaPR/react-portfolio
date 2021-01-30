import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {
  const [projects] = useState([
    {
      name: 'note-taker',
      description: 'Node/Express/CSS/HTML',
      link: "https://marynapr.github.io/Note-Taker-Application/",
      repo: "https://github.com/MarynaPR/Note-Taker-Application"
    },
    {
      name: '24chains',
      description: 'Express/MySQL/Handlebars',
      link: "https://dry-mesa-09626.herokuapp.com/",
      repo: "https://github.com/MarynaPR/24-chains"
    },
    {
      name: 'profile-generator',
      description: 'HTML/CSS/Node/Jest/Inquirer',
      link: "https://marynapr.github.io/Team-Profile-Generator/",
      repo: "https://github.com/MarynaPR/Team-Profile-Generator"
    },
    {
      name: 'word-generator',
      description: '/JavascriptJQuery/Materialize',
      link: "https://jgrossh2.github.io/word-generator/",
      repo: "https://github.com/jgrossh2/word-generator"
    },
    {
      name: 'budget-tracker',
      description: 'JavaScript/Node/express/IndexDb/PWA',
      link: "https://boiling-plains-58611.herokuapp.com/",
      repo: "https://github.com/MarynaPR/budget-tracker"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;