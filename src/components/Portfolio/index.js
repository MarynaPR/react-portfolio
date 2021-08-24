import React from 'react';
// import Project from "../Project";
import { Carousel } from 'react-bootstrap';

function Portfolio() {


  // const [projects] = useState([
  //   {
  //     name: 'note-taker',
  //     description: 'node/express/css/HTML',
  //     about: 'an application for to do list to keep organized',
  //     link: "https://marynapr.github.io/Note-Taker-Application/",
  //     repo: "https://github.com/MarynaPR/Note-Taker-Application"
  //   },
  //   {
  //     name: 'profile-generator',
  //     description: 'HTML/css/node/jest/inquirer',
  //     about: 'a Node.js command-line app that generates summaries of a software engineering team',
  //     link: "https://marynapr.github.io/Team-Profile-Generator/",
  //     repo: "https://github.com/MarynaPR/Team-Profile-Generator"
  //   },
  //   {
  //     name: 'budget-tracker',
  //     description: 'node/express/indexDb',
  //     about: 'PWA budget tracker using indexDb while offline to stay on budget while traveling',
  //     link: "https://boiling-plains-58611.herokuapp.com/",
  //     repo: "https://github.com/MarynaPR/budget-tracker"
  //   },
  // ]);

  return (
    <Carousel style={{ margin: "20px" }}>
      <Carousel.Item interval={4000} >

        <img
          style={{ borderRadius: "20px", borderStyle: "double" }}
          className="d-block w-100"
          src={require(`../../assets/projects/24chains.jpg`).default}
          alt="First slide" />
        <Carousel.Caption style={{ backgroundColor: "rgb(155, 156, 163)", borderRadius: "20px", borderStyle: "double" }}>

          <h3>
            24 chains
            <a href="https://dry-mesa-09626.herokuapp.com"><i className="fab fa-internet-explorer"></i></a>
            <a href='https://github.com/MarynaPR/24-chains'><i className="fab fa-github"></i></a></h3>
          <h4>
            <p>express/mySQL/handlebars</p></h4>
          {/* <h5>GROUP PROJECT: an interactive full-stack member disc golf app with a dashboard capturing favorite courses, rating and progress</h5> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          style={{ borderRadius: "20px", borderStyle: "double" }}
          className="d-block w-100"
          src={require(`../../assets/projects/word-generator.jpg`).default}
          alt="First slide" />
        <Carousel.Caption style={{ backgroundColor: "rgb(155, 156, 163)", borderRadius: "20px", borderStyle: "double" }}>
          <h3>word-generator
            <a href="https://jgrossh2.github.io/word-generator/"><i className="fab fa-internet-explorer"></i></a>
            <a href='https://github.com/jgrossh2/word-generator'><i className="fab fa-github"></i></a>
          </h3>
          <h4>
            <p>javascript/jQuery/materialize</p>
          </h4>
          {/* <h5>GROUP PROJECT: TallyMax is a drag-and-drop word game featuring vocabulary, audio definitions and images</h5> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
        <img
          style={{ borderRadius: "20px", borderStyle: "double" }}
          className="d-block w-100"
          src={require(`../../assets/projects/woodland-consulting.jpg`).default}
          alt="First slide" />
        <Carousel.Caption style={{ backgroundColor: "rgb(155, 156, 163)", borderRadius: "20px", borderStyle: "double" }}>
          <h3>woodland-consulting
            <a href="https://woodland-consulting.herokuapp.com/"><i className="fab fa-internet-explorer"></i></a>
            <a href='https://github.com/SMKrizan/WoodlandConsultingLLC'><i className="fab fa-github"></i></a>
          </h3>
          <h4>
            <p>react/GraphQL/MongoDB</p>
          </h4>
          {/* <h5>GROUP PROJECT: MERN stack web created for a lighting business with secure admin-login</h5> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel >
  );
};

export default Portfolio;
