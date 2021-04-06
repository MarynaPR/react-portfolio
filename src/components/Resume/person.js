import PropTypes from 'prop-types';
// import coverImg from '../../assets/images/self.jpg';

export const person = {
    basics: {
        name: 'hi! Welcome to my portfolio!',
        picture: '/react-portfolio/static/media/self.jpg',
        email: 'pryadkamaryna@gmail.com',
        phone: '000-000-0000',
        website: 'https://marynapr.github.io/react-portfolio/',
        summary: 'I am a full stack web developer leveraging entrepreneurial background to build more intuitive user experience on the web. My  background in customer service is a definite asset when it comes to user research and my drive to problem-solve is an asset in writing code. Known as an innovative critical thinker, I am passionate about sustainability in all aspects of life, with a focus on meeting the current needs of a user without compromising the ability of those needs to be met in the future. Eager to deliver value and result working on creating solutions with a focus of keeping the content clear and actionable using JavaScript, CSS, MongoDB, React and responsive web design. I look forward to collaborating and working with others to develop meaningful applications that deliver diversity and user friendly experience.',
        location: {
            postalCode: '53703',
            city: 'Madison',
            countryCode: 'USA',
            region: 'Wisconsin',
        }
    },
    work: [
        {
            company: '3ofaKin',
            position: 'Co-founder',
            startDate: '2018-01-01',
            endDate: 'present',
            summary: 'Launched and co-developed a zero-waste skin care brand with an emphasis on plant-based ingredients and biodegradable packaging. Key Accomplishments: ',
            highlights: [' ● Pioneered the implementation and research of sustainable strategies by prioritizing partnering with l ocal farms and other businesses to promote the growth of communities', ' ● Established emerging financial strategies, resource allocation, and production methods to arrange the financial flow and budget from existing business to ensure loan-free start up', '● Demonstrate strong businessacumenby identifying priorities and effectively executing projects, accordingly, monitoring cost effectiveness of operations by initiating effective sustainable practices and reducing waste and operational cost annually by 15 percent'],
        },
        {
            company: 'Velvet Waxing Studio',
            position: 'Co-founder',
            startDate: '2011-01-01',
            endDate: 'present',
            summary: 'Participated in all facets of business development, including the launching, planning, and strategizing of a business model of the premier waxing studio in Madison,WI. Key Accomplishments:',
            highlights: ['● Manage customer relationship to i nfluence and i mprove customer service rating', '● Use creativity and problem-solving skills to monitor financial activity, set sale projections, identify risks, make conclusions based on profits, and find resourceful ways to maintain and increase the company’s budget'],
        },
    ],
    education: [
        {
            institution: 'University of Wisconsin Extended Campus',
            area: 'Software Development',
            studyType: 'Certificate, Full Stack Web Development',
            startDate: '2020-08',
            endDate: '2021-03',
            courses: [
                'Languages: H TML5, CSS3, JavaScript, j Query, Express.js, React.js, Node.js, NoSQL',
                'Applications: GitHub, MongoDB, MySQL, MERN Stack, Heroku',
                'Tools: E xpress, React, Node, Handlebars, Query, Bootstrap, RESTful API',
            ],
        },
        {
            institution: 'Kharkiv Institute of Business and Management, Ukraine',
            area: 'Finance',
            studyType: 'Bachelor of Finance and Credit',
            startDate: '2012-08',
            endDate: '2016-05',
            courses: [
                'Finance - Credit',
            ],
        },

    ],
    skills: [
        {
            name: 'learning',
            level: '95',
            keywords: [
                'Learn something new every day',
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
                "For the service of a cause: experienced at reminding everyone to recycle",
            ],
        },
        {
            name: 'style',
            level: '70',
            keywords: [
                "Yves Saint Laurent: Fashions fade, style is eternal."
            ],
        },
        {
            name: 'mediation',
            level: '46',
            keywords: [
                'coding bootcamp award: most likely to prevent others from throwing their laptop out a window',
            ],
        },
        {
            name: 'making mistakes',
            level: '30',
            keywords: ['start date - present'],
        }
    ],
    languages: [
        {
            name: 'Russian/Ukrainian',
            level: 'Native Speaker',
        },
        {
            name: 'English',
            level: 'Second Language',
        },
        {
            name: 'Spanish',
            level: 'Intermediate',
        },
    ],
    interests: [
        {
            name: 'Sustainability Management',
            keywords: [
                'Currently attending UW masters program',
            ],
        },
        {
            name: 'Spanish Culture',
            keywords: [
                'Costa Rica: pura vida!',
                'Costa Rica is around the same size as Lake Michigan',
            ],
        },
    ],
};


export const basicsType = PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
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
    basics: basicsType,
    work: workType,
    education: educationType,
    skills: skillsType,
    languages: languagesType,
    interests: interestsType,
});