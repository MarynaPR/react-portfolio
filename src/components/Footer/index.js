import React from 'react';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from '../DarkMode';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/MarynaPR"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/maryna-pr/"
    },
    {
      name: "fa fa-envelope",
      link: "mailto:pryadkamaryna@gmail.com"
    }
  ]

  return (
    <footer className="flex-row px-1">
   
        <h2>say hello </h2>
        <div>
          {icons.map(icon =>
            (<a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>)
          )}
        </div>
    
      <DarkMode></DarkMode>
    </footer>
  );
}

export default Footer;
