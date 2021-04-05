import React from 'react';
// import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { person, resumeType } from './person';
import Default from './themes/default/main';

// function Resume() {
//   const resume = {
//     name: "fab fa-github",
//     link: "https://github.com/MarynaPR"
//   }

//   const proficiencies = [
//     { name: "fab fa-html5" },
//     { name: "fab fa-css3-alt" },
//     { name: "fab fa-sass" },
//     { name: "fab fa-js-square" },
//     { name: "fab fa-react" },
//     { name: "fab fa-bootstrap" },
//     { name: "fab fa-node" },
//     { name: "fab fa-js-square" }
//   ]


const themes = {
  default: Default,
};

const Resume = ({ theme, jsonResume, inline }) => {
  const ThemedResume = themes[theme];
  return <ThemedResume inline={inline} jsonResume={jsonResume} />;
};

Resume.defaultProps = {
  jsonResume: person,
  theme: 'default',
  inline: false,
};

Resume.propTypes = {
  jsonResume: resumeType.isRequired,
  theme: PropTypes.string,
  inline: PropTypes.bool,
};

  // return (
  //   <Card style={{ margin: "10px", color: "#e0d6d6", background: "transparent" }}>
  //     <div>

  //       <h3>front-end proficiencies</h3>
  //       <ul className="skills">
  //         <li>HTML</li>
  //         <li>CSS</li>
  //         <li>JavaScript</li>
  //         <li>React</li>
  //         <li>Bootstrap</li>
  //       </ul>
  //       <h3>back-end proficiencies</h3>
  //       <ul className="skills">
  //         <li>APIs</li>
  //         <li>Node</li>
  //         <li>Express</li>
  //         <li>MySQL, Sequelize</li>
  //         <li>MongoDB, Mongoose</li>
  //         <li>Heroku</li>
  //       </ul>

  //       <div className="flex-row">
  //         <div>
  //           {proficiencies.map(proficiency =>
  //           (
  //             <p style={{ margin: "20px 30px", textAlign: "center", padding: "20px", size: "15rem", display: "inline", flexWrap: "wrap" }}
  //               key={proficiency.name} target="_blank" rel="noopener noreferrer"><i className={proficiency.name}></i></p>
  //           )
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //     <p style={{ textAlign: "center", margin: "40px" }}>
  //       Check out my <a href={resume.link}>resume</a>
  //     </p>

  //   </Card >
  // );
// }

export default Resume;