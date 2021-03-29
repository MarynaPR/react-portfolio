import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import DarkModeToggle from 'react-dark-mode-toggle';
// import useDarkMode from 'use-dark-mode';
import DarkMode from '../DarkMode';

// import Toggle from './Toggle';

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
  // const darkMode = useDarkMode(false);

  // const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <footer className="flex-row px-1">
      <div>
        <h2>say hello </h2>
      </div>

      <div>
        {icons.map(icon =>
        (
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
        )
        )}
      </div>
      {/* <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        seze={80}>
      </DarkModeToggle> */}
      <div>
        {/* <Button className="switch" onClick={darkMode.disable}>
          ☀ */}
        {/* Dark mode:
      <span className="inner-switch">OFF</span> */}
        {/* </Button>
        <div checked={darkMode.value} onChange={darkMode.toggle} />
        <Button className="switch" onClick={darkMode.enable}>
          ☾ </Button> */}
        <DarkMode></DarkMode>
      </div>

    </footer>
  );
}

export default Footer;