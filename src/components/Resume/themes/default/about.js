import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import coverImg from '../../assets/images/self.jpg';

import { Contact } from './generic';
import { aboutType } from '../../person';
import Skills from './skills';

const About = ({
  name,
  label,
  // picture,
  email,
  website,
  summary,
  skills,
}) => {
  return (
    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={12}>
          <Header>
            {name}
          </Header>
          <Header>{label}</Header>
          <Header>
            {summary}
          </Header>
          <Contact email={email} website={website} />
        </Grid.Column>
      </Grid.Row>
      <Skills skills={skills} />
    </Grid>
  );
};

About.defaultProps = {
  name: undefined,
  label: undefined,
  // picture: undefined,
  website: undefined,
  location: {},
};

About.propTypes = aboutType;

export default About;