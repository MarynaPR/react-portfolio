import { Carousel } from 'react-bootstrap';
import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
    const { name, repo, link, description, about } = project;

    return (

        <Carousel.Item
            className="project" key={name}>
            <img
                className="d-block w-100 project-bg"
                src={require(`../../assets/projects/${name}.jpg`).default}
                alt={removeHyphensAndCapitalize(name)}
            />
            <Carousel.Caption className="project-text">
                <h3>
                    <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
                    <a href={repo}><i className="fab fa-github"></i></a>
                </h3>
                <p>{description}</p>
                <p>{about}</p>
            </Carousel.Caption>
        </Carousel.Item>

    );
}

export default Project;
