import React from "react"
import "./darkMode.css"
// import { Button } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            click to change
        </Tooltip>
    );




    return (

        <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >


            <div className="footer-bottom">
                <div className="mode">
                    <div>.(
                <button
                            className={theme === "dark" ? clickedClass : ""}
                            id="darkMode"
                            onClick={(e) => switchTheme(e)}
                        ></button>
                    )mode enabled</div>

                </div>
            </div>
        </OverlayTrigger>
    );
};

export default DarkMode;
