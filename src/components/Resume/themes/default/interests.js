import { Card, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import { CardHighlights } from './generic';
import { bold, c, color, colors, emOneHalf, emOneThree } from './styles';
import { interestsType } from '../../person';

const Interests = ({ interests }) => {
    return (
        <div>
            {interests.map(j => (
                <CardHighlights
                    color={colors.grey}
                    key={shortid.generate()}
                    title={
                        <span style={c(emOneThree, bold, color(colors.red))}>
                            <Icon name="user circle outline" />{j.name}
                        </span>
                    }
                    text={
                        <InterestKeywords keywords={j.keywords} color={colors.black} />
                    }
                />
            ))}
        </div>
    );
};

Interests.defaultProps = {
    interests: [],
};

Interests.propTypes = interestsType;

export default Interests;

const InterestKeywords = ({ keywords, hColor }) => {
    return (
        <div>
            {keywords.map(k => (
                <Card fluid key={shortid.generate()}>
                    <Card.Content
                        header={
                            <span style={c(emOneHalf, color(hColor))}>
                                <Icon name="lab" />
                                {k.split(':')[0]}
                            </span>
                        }
                    />
                    <Card.Content
                        description={<ReactMarkdown source={k.split(':')[1]} />}
                    />
                </Card>
            ))}
        </div>
    );
};

InterestKeywords.propTypes = {
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    hColor: PropTypes.string.isRequired,
};