import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Adriaan Beiertz | Fullstack Developer',
  lang: 'en',
  description: 'Welcome to my portfolio site',
};

// HERO DATA
export const heroData = {
  title: '> Hi, my name is',
  name: 'Adriaan',
  subtitle: "I'm a Full-stack Developer.",
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpeg',
  paragraphOne:
    'I’m a former law and music major turned full-stack developer with a creative, resilient and problem-solving attitude who learned just enough programming to create a script that automated a business task with a 95% time savings benefit for Thomson Reuters; where I transitioned from an operations role into a more technical role to lead requirements gathering & analysis meetings, and produce automation scripts with an internationally located and multidisciplinary team.',
  paragraphTwo:
    'I’ve mentored hundreds of people and reviewed over 200 full-stack development projects for two major tech education companies while learning data structures and algorithms, full-stack development and building over 30 projects including a Facebook replica, a vitals tracking mobile web app, a battleship game, and a Newsweek replica, among others.',
  paragraphThree:
    "I'm looking to join a collaborative and multidisciplinary team that takes risks and embraces failure, incorporates good software development practices and motivates people to grow professionally and technically. I'm fluent in Ruby, Rails, JavaScript, React, Redux, Python, Django, HTML, and CSS; I also enjoy learning new languages and frameworks.",
  resume: 'https://drive.google.com/open?id=1iO1xYkbXey_na9jbEFkeB7yhNqULYfaS',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'fbclone-feed.png',
    title: 'MaskBook',
    info:
      'A Facebook replica wherein users can add and remove friends; create, read, edit and remove posts & comments; create, read, remove likes on posts & comments; receive notifications on friend requests, likes and comments; and see a post feed. The database schema is based on seven (7) models User, FriendRequest, Frienship, Post, Notification, Comment and Like.',
    info2:
      'This web app was built with Ruby on Rails v5, PostgreSQL, HTML and CSS. It is fully tested including unit, feature and integrations tests using Rspec, Capybara and FactoryBot.',
    url: 'https://sleepy-tor-12192.herokuapp.com/',
    repo: 'https://github.com/adriaanbd/facebook-clone',
  },
  {
    id: uuidv1(),
    img: 'battleship.png',
    title: 'Acorazado',
    info:
      "The renowned Battleship board game for a single player vs computer. The ships are randomly placed upon page load or reload and the game begins as soon as you click on the opponent's board. You can move your ships by dragging them to a different position before the game starts. A hit is colored red and a miss is colored grey.",
    info2: 'This web app was built with vanilla JavaScript and includes tests with Jest.',
    url: 'https://jsbattleship.now.sh/',
    repo: 'https://github.com/adriaanbd/jsbattleship',
  },
  {
    id: uuidv1(),
    img: 'vitals.png',
    title: 'Vitals Tracker',
    info:
      'A mobile web app that allows you to submit and track your weight, pressure, glucose, mood and temperature.',
    info2:
      'The back-end is a Rails API / PostgreSQL database deployed on Heroku and the front-end is built with ReactJS, ReduxJS and the Evergreen UI library deployed on Zeit.',
    url: 'https://vitalstracker.now.sh/',
    repo: 'https://github.com/adriaanbd/vitalstracker',
  },
  {
    id: uuidv1(),
    img: 'afazeres.png',
    title: 'Fazeres',
    info: 'A mobile app that lets you create, read, update and delete tasks.',
    info2: 'Built with React Native, React Native Elements and React Navigation.',
    url: 'https://github.com/adriaanbd/fazeres-react-native',
    repo: 'https://github.com/adriaanbd/fazeres-react-native',
  },
  {
    id: uuidv1(),
    img: 'newsweek.png',
    title: 'Newsweek 2019',
    info: 'A replica of the well known online newspaper Newsweek.',
    info2: 'Built with HTML, CSS and Bootstrap 4.',
    url: 'https://adriaanbd.github.io/news-media-site/',
    repo: 'https://github.com/adriaanbd/news-media-site',
  },
  {
    id: uuidv1(),
    img: 'apple2014.jpg',
    title: 'Apple 2014',
    info: "A replica of Apple's 2014 landing page.",
    info2: 'Built with HTML & CSS.',
    url: 'https://adriaanbd.github.io/apple2014/',
    repo: 'https://github.com/adriaanbd/apple2014',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking forward to hearing from you.',
  btn: '',
  email: 'adriaanbd@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adriaanbd/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/adriaanbd',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/abeiertz',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/adriaanbd/pens/showcase',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
