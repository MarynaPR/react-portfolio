import React from 'react';
// import { Button } from 'react-bootstrap/Button';

function Footer() {

  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/MarynaPR"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/maryna-p-4aa2641b5/"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
      )}
    </footer>
  );
}

export default Footer;