import React from 'react';
import { Carousel } from 'react-bootstrap';

import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
    const { name, repo, link, description, about } = project;

    return (
        <Carousel>
            <Carousel.Item className="project" key={name}>
                <img
                    src={require(`../../assets/projects/${name}.jpg`).default}
                    alt={removeHyphensAndCapitalize(name)}
                    className="project-bg d-block w-100"
                />
                <Carousel.Caption className="project-text">
                    <h3>
                        <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                        <br></br>
                        <a href={repo}><i className="fab fa-github"></i></a>
                    </h3>
                    <span>{description}</span>
                    <br></br>
                    <p>{about}</p>
                </Carousel.Caption>


            </Carousel.Item>
        </Carousel >
    );
}

export default Project;
