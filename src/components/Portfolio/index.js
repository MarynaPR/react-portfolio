import React, { useState } from 'react';
import Project from "../Project";
import { Carousel, Container } from 'react-bootstrap';

function Portfolio() {

  const [projects] = useState([

    {
      name: 'woodland-consulting',
      description: 'react/GraphQL/MongoDB',
      about: 'GROUP PROJECT: MERN stack web created for a lighting business with secure admin-login',
      link: 'https://woodland-consulting.herokuapp.com/',
      repo: 'https://github.com/SMKrizan/WoodlandConsultingLLC'
    },
    {
      name: 'word-generator',
      description: 'javascript/jQuery/materialize',
      about: 'GROUP PROJECT: TallyMax is a drag-&-drop word game featuring vocabulary, audio definitions and images',
      link: "https://jgrossh2.github.io/word-generator/",
      repo: "https://github.com/jgrossh2/word-generator"
    },
    {
      name: '24chains',
      description: 'express/mySQL/handlebars',
      about: 'GROUP PROJECT: an interactive full-stack member disc golf app with a dashboard capturing favorite courses, rating and progress',
      link: "https://dry-mesa-09626.herokuapp.com/",
      repo: "https://github.com/MarynaPR/24-chains"
    },
    {
      name: 'note-taker',
      description: 'node/express/css/HTML',
      about: 'an application for to do list to keep organized',
      link: "https://marynapr.github.io/Note-Taker-Application/",
      repo: "https://github.com/MarynaPR/Note-Taker-Application"
    },
    {
      name: 'profile-generator',
      description: 'HTML/css/node/jest/inquirer',
      about: 'a Node.js command-line app that generates summaries of a software engineering team',
      link: "https://marynapr.github.io/Team-Profile-Generator/",
      repo: "https://github.com/MarynaPR/Team-Profile-Generator"
    },
    {
      name: 'budget-tracker',
      description: 'node/express/indexDb',
      about: 'PWA budget tracker using indexDb while offline to stay on budget while traveling',
      link: "https://boiling-plains-58611.herokuapp.com/",
      repo: "https://github.com/MarynaPR/budget-tracker"
    },
  ]);

  return (
    <Container>
      <Carousel>
        {projects.map((project, idx) => (

          <Project
            project={project}
            key={"project" + idx}
          />

        ))}

      </Carousel>
    </Container>
  );
};

export default Portfolio;