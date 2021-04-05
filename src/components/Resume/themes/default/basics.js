import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
// import coverImg from '../../assets/images/self.jpg';

import { Contact } from './generic';
import { basicsType } from '../../person';
import Skills from './skills';

const Basics = ({
  name,
  label,
  picture,
  email,
  phone,
  website,
  summary,
  skills,
}) => {
  return (
    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image
            src={picture}
            shape="circular"
            centered
            fluid
            style={{ border: '10px solid rgba(0,0,0,.05)' }}
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <Header>
            {name}
          </Header>
          <Header>{label}</Header>
          <Header>
            {summary}
          </Header>
          <Contact phone={phone} email={email} website={website} />
        </Grid.Column>
      </Grid.Row>
      <Skills skills={skills} />
    </Grid>
  );
};

Basics.defaultProps = {
  name: undefined,
  label: undefined,
  picture: undefined,
  phone: undefined,
  website: undefined,
  location: {},
};

Basics.propTypes = basicsType;

export default Basics;