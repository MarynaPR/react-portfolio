import { Grid, Icon } from 'semantic-ui-react';
import React from 'react';
import shortid from 'shortid';

import { ButtonHighlights, CardHighlights } from './generic';
import { bold, c, color, colors, emOneThree, emOneTwo, emTwo } from './styles';
import { educationType } from '../../person';

const proficiencies = [
    { name: "fab fa-html5" },
    { name: "fab fa-css3-alt" },
    { name: "fab fa-sass" },
    { name: "fab fa-js-square" },
    { name: "fab fa-react" },
    { name: "fab fa-bootstrap" },
    { name: "fab fa-node" },
    { name: "fab fa-js-square" }
]

const Education = ({ education }) => {
    return (
        <div className="flex-row">
            <div>
                {proficiencies.map(proficiency =>
                (
                    <p style={{ margin: "20px 30px", textAlign: "center", padding: "20px", size: "15rem", display: "inline", flexWrap: "wrap" }}
                        key={proficiency.name} target="_blank" rel="noopener noreferrer"><i className={proficiency.name}></i></p>
                )
                )}
            </div>

            {education.map(j => (
                <CardHighlights
                    key={shortid.generate()}
                    color={colors.grey}
                    title={
                        <span style={c(emOneThree, bold, color(colors.grey))}>
                            <Icon name="university" />
                            {`${j.institution}: ${j.area}`}
                        </span>
                    }
                    subtitle={
                        <div style={c(emOneTwo, color(colors.black), bold)}>
                            <Grid columns="equal">
                                <Grid.Column textAlign="left">
                                    <Icon name="certificate" />
                                    {`${j.studyType}: `}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    <Icon name="calendar" />
                                    {`${j.startDate} - ${j.endDate} `}
                                </Grid.Column>
                            </Grid>
                        </div>
                    }
                    highlights={
                        <ButtonHighlights
                            icon="graduation"
                            highlights={j.courses}
                            color="black"
                        />
                    }
                />
            ))}

        </div>
    );
};

Education.defaultProps = {
    education: [],
};

Education.propTypes = educationType;

export default Education;