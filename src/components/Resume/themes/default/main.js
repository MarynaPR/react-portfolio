import { Container, Icon, Image, Menu, Responsive, Sidebar } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import shortid from 'shortid';
import { resumeType } from '../../person';
import Basics from './basics';
import Education from './education';
import Interests from './interests';
import Languages from './languages';
import Work from './work';

const ResumeMenuItem = ({
  title,
  active,
  element,
  show,
  onClick,
}) => {
  if (!show) {
    return false;
  }

  if (element) {
    return (
      <Menu.Item
        header
        name="avatar"
        onClick={() => {
          onClick(title);
        }}
        active={active}
        content={element}
      />
    );
  }

  return (
    <Menu.Item
      name={title}
      header
      onClick={() => {
        onClick(title);
      }}
      active={active}
    />
  );
};

ResumeMenuItem.defaultProps = {
  element: undefined,
};

ResumeMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  element: PropTypes.element,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default class Default extends React.Component {
  static propTypes = {
    jsonResume: resumeType.isRequired,
    inline: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    this.basicsWithSkills = Object.assign({}, this.props.jsonResume.basics, {
      skills: this.props.jsonResume.skills,
    });

    this.r = this.props.jsonResume;

    this.state = { activePage: 'avatar', visible: false };
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  empty = (item) => {
    if (typeof item === 'undefined') {
      return true;
    }
    return item.length === 0;
  };

  handleMenuClick = (name) => {
    this.setState({
      activePage: name.toLowerCase(),
    });
  };

  makeInvisible = () => {
    this.setState({ visible: false });
  };

  render() {
    const content = {
      avatar: <Basics {...this.basicsWithSkills} />,
      work: <Work work={this.r.work} />,
      education: <Education education={this.r.education} />,
      languages: <Languages languages={this.r.languages} />,
      interests: <Interests interests={this.r.interests} />,
    };

    const MenuItems = [
      {
        title: 'avatar',
        element: (
          <Image
            src={this.r.basics.picture}
            shape="circular"
            size="mini"
            centered
          />
        ),
        show: true,
        onClick: this.handleMenuClick,
        active: this.state.activePage === 'avatar',
      },
      {
        title: 'work',
        show: !this.empty(this.r.work),
        onClick: this.handleMenuClick,
        active: this.state.activePage === 'work',
      },
      {
        title: 'education',
        show: !this.empty(this.r.education),
        onClick: this.handleMenuClick,
        active: this.state.activePage === 'education',
      },
      {
        title: 'languages',
        show: !this.empty(this.r.languages),
        onClick: this.handleMenuClick,
        active: this.state.activePage === 'languages',
      },
      {
        title: 'interests',
        show: !this.empty(this.r.interests),
        onClick: this.handleMenuClick,
        active: this.state.activePage === 'interests',
      },
    ];

    const Content = (
      <Container>
        {content[this.state.activePage]}
      </Container>
    );

    const Full = (
      <div>
        <Menu fluid widths={9} fixed="top" stackable>
          {MenuItems.map(m => (
            <ResumeMenuItem
              title={m.title}
              element={m.element}
              show={m.show}
              onClick={m.onClick}
              active={m.active}
              key={shortid.generate()}
            />
          ))}
        </Menu>
        <div style={{ marginTop: '20px' }}>
          {Content}
        </div>
      </div>
    );

    const Mobile = (
      <div>
        <Menu fixed="top" borderless size="massive">
          <Menu.Item>
            <Icon name="bars" onClick={this.toggleVisible} />
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable onClick={this.makeInvisible}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={this.state.visible}
            icon="labeled"
            vertical
            inverted
          >
            <div style={{ marginTop: '45px' }}>
              {MenuItems.map(m => (
                <ResumeMenuItem
                  title={m.title}
                  element={m.element}
                  show={m.show}
                  onClick={m.onClick}
                  active={m.active}
                  key={shortid.generate()}
                />
              ))}
            </div>
          </Sidebar>
          <Sidebar.Pusher style={{ marginTop: '60px' }}>
            {Content}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );

    let Regular = Full;
    if (this.props.inline) {
      Regular = (
        <div>
          <Menu widths={9} secondary>
            {MenuItems.map(m => (
              <ResumeMenuItem
                title={m.title}
                element={m.element}
                show={m.show}
                onClick={m.onClick}
                active={m.active}
                key={shortid.generate()}
              />
            ))}
          </Menu>
          <div>
            {Content}
          </div>
        </div>
      );
    }

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>{Mobile}</Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          {Regular}
        </Responsive>
      </div>
    );
  }
}