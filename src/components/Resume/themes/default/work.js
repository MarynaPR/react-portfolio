import { Icon } from 'semantic-ui-react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import shortid from 'shortid';

import { ButtonHighlights, CardHighlights } from './generic';
import {
    bold,
    c,
    color,
    colors,
    emOneHalf,
    emOneTwo,
    emTwo,
    faded,
} from './styles';
import { workType } from '../../person';

const Work = ({ work }) => {
    return (
        <div>
            {work.map(job => (
                <CardHighlights
                    color={colors.red}
                    key={shortid.generate()}
                    title={
                        <span style={c(emTwo, bold, faded(colors.red))}>
                            <Icon name="building outline" margin="10" />
                            {job.company}
                        </span>
                    }
                    subtitle={
                        <span style={c(emOneHalf, color(colors.grey))}>
                            <Icon name="user outline" />{job.position}
                            <Icon name="calendar" style={{ marginLeft: '50px' }} />
                            {`( ${job.startDate} - ${job.endDate} )`}
                        </span>
                    }
                    text={
                        <span style={c(emOneTwo, faded(colors.black))}>
                            <ReactMarkdown source={job.summary} />
                        </span>
                    }
                    highlights={
                        <ButtonHighlights
                            highlights={job.highlights}
                            color="grey"
                        />
                    }
                />
            ))}
        </div>
    );
};

Work.defaultProps = {
    work: [],
};

Work.propTypes = {
    work: workType,
};

export default Work;