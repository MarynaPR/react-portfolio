import PropTypes from 'prop-types';

export const person = {
    about: {
        name: 'hi  *  welcome to my portfolio  *  ',
        email: 'pryadkamaryna@gmail.com',
        website: 'https://marynapr.github.io/react-portfolio/',
        summary: ' * born in cold Siberian region  *  reside in slightly warmer Midwest  *  full stack web developer  *  passionate about sustainability and diversity  * looking to bring my attention to detail, analytical and technical skills to your organization to grow and become a avaluable asset  *  equipped with skills to adapt quickly and find creative and elegant solutions to problems *   '
    },
    work: [
        {
            company: '3ofaKin',
            position: 'Co-founder',
            startDate: '2018-01-01',
            endDate: 'present',
            summary: 'Launched and co-developed a zero-waste skin care brand with an emphasis on plant-based ingredients and biodegradable packaging. Key Accomplishments: ',
            // highlights: [' ● Pioneered the implementation and research of sustainable strategies by prioritizing partnering with l ocal farms and other businesses to promote the growth of communities', ' ● Established emerging financial strategies, resource allocation, and production methods to arrange the financial flow and budget from existing business to ensure loan-free start up', '● Demonstrate strong businessacumenby identifying priorities and effectively executing projects, accordingly, monitoring cost effectiveness of operations by initiating effective sustainable practices and reducing waste and operational cost annually by 15 percent'],
        },
        {
            company: 'Velvet Waxing Studio',
            position: 'Co-founder',
            startDate: '2011-01-01',
            endDate: 'present',
            summary: 'Participated in all facets of business development, including the launching, planning, and strategizing of a business model of the premier waxing studio in Madison,WI. Key Accomplishments:',
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
            area: 'masters in sustainable management',
            studyType: 'masters in sustainable management',
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