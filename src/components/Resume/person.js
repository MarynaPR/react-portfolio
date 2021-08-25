import PropTypes from 'prop-types';

export const person = {
    about: {
        name: "hi  *  it's nice to meet you  *  a bit about me  * ",
        email: 'pryadkamaryna@gmail.com',
        website: 'https://marynapr.github.io/react-portfolio/',
        summary: '   ·   born in cold Siberian region   ·   reside in slightly warmer Midwest   ·   citizen of Earth   ·   full stack web developer   ·  ardent learner   ·    sustainability student   ·    unconditional advocate for kindness   ·   unconventional maker of positive changes   ·   equipped with analytical & technical skills + attention to details =>  to adapt quickly and find clever and elegant solutions  ·   '
    },
    work: [
        {
            company: '3ofaKin',
            position: 'co-founder',
            startDate: '2018',
            endDate: 'present',
            summary: 'launched and co-developed a zero-waste skin care brand with an emphasis on plant-based ingredients and biodegradable packaging ',
            // highlights: [' ● Pioneered the implementation and research of sustainable strategies by prioritizing partnering with l ocal farms and other businesses to promote the growth of communities', ' ● Established emerging financial strategies, resource allocation, and production methods to arrange the financial flow and budget from existing business to ensure loan-free start up', '● Demonstrate strong businessacumenby identifying priorities and effectively executing projects, accordingly, monitoring cost effectiveness of operations by initiating effective sustainable practices and reducing waste and operational cost annually by 15 percent'],
        },
        {
            company: 'velvet waxing studio',
            position: 'co-founder',
            startDate: '2011',
            endDate: 'present',
            summary: 'participated in all facets of business development, including the launching, planning, and strategizing of a business model of the premier waxing studio in Madison,WI',
            // highlights: ['● Manage customer relationship to i nfluence and i mprove customer service rating', '● Use creativity and problem-solving skills to monitor financial activity, set sale projections, identify risks, make conclusions based on profits, and find resourceful ways to maintain and increase the company’s budget'],
        },
    ],
    education: [
        {
            institution: 'University of Wisconsin',
            area: 'Software Development',
            studyType: 'certificate, full stack web development',
            startDate: '2020',
            endDate: '2021',
            courses: [
                'Languages: H TML5, CSS3, JavaScript, j Query, Express.js, React.js, Node.js, NoSQL',
                'Applications: GitHub, MongoDB, MySQL, MERN Stack, Heroku',
                'Tools: E xpress, React, Node, Handlebars, Query, Bootstrap, RESTful API',
            ],
        },
        {
            institution: 'Kharkiv Institute of Business and Management, Ukraine',
            area: 'Finance',
            studyType: 'bachelor of finance and credit',
            startDate: '2012',
            endDate: '2016',
            courses: [
                'Finance - Credit',
            ],

        },
        {
            institution: 'University of Wisconsin',
            area: 'Masters in Sustainable Management',
            studyType: 'Masters in Sustainable Management',
            startDate: '2021',
            endDate: '2024',
        },

    ],
    skills: [
        {
            name: 'learning',
            level: '95',
            keywords: [
                ' *  learn something new every day *  ',
            ],
        },
        {
            name: 'web development',
            level: '53',
            keywords: ['HTML', 'CSS', 'Javascript', 'Node', 'React'],
        },
        {
            name: 'recyclopath',
            level: '75',
            keywords: [
                "  * for the service of a cause -  experienced at reminding everyone to recycle  *  ",
            ],
        },
        {
            name: 'style',
            level: '70',
            keywords: [
                "  *  yves saint laurent: fashions fade, style is eternal  *  "
            ],
        },
        {
            name: 'mediation',
            level: '46',
            keywords: [
                '  *  coding bootcamp award: most likely to prevent others from throwing their laptop out a window  *  ',
            ],
        },
        {
            name: 'making mistakes',
            level: '30',
            keywords: [' *  start date - present  * '],
        }
    ],
    languages: [
        {
            name: 'Russian/Ukrainian',
            level: 'native speaker',
        },
        {
            name: 'English',
            level: 'second language',
        },
        {
            name: 'Spanish',
            level: 'intermediate',
        },
    ],
    interests: [
        {
            name: 'sustainable living',
            keywords: [
                ' : DYI projects - anything that can be reduced, reused, repaired, rebuilt, refurbished, refinished, resold, recycled, or composted',
                ' : gardening - community garden, backyard garden, flowers..',
                ' : farmers market',
            ],
        },
        {
            name: 'spanish culture',
            keywords: [
                ' :eavesdrop all the time',
                ' :... only because I find Spanish very positive, happy, rich and exuberant language',
            ],
        },
    ],
};


export const aboutType = PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    summary: PropTypes.string,
}).isRequired;

export const workType = PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const educationType = PropTypes.arrayOf(PropTypes.shape({
    institution: PropTypes.string,
    area: PropTypes.string,
    studyType: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const skillsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;

export const languagesType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.string,
})).isRequired;

export const interestsType = PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
})).isRequired;


export const resumeType = PropTypes.shape({
    about: aboutType,
    work: workType,
    education: educationType,
    skills: skillsType,
    languages: languagesType,
    interests: interestsType,
});