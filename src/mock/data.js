import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Adriaan Beiertz | Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '> Hi, my name is',
  name: 'Adriaan',
  subtitle: "I'm a Full-stack Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'avatar.jpeg',
  paragraphOne:
    'I’m a former law and music major turned full-stack developer with a creative, resilient and problem-solving attitude that learned just enough programming to create a script that automated a business task with a 95% time savings benefit for Thomson Reuters; where I transitioned from an operations role into a more technical role to lead requirements gathering & analysis meetings, and produce automation scripts with an internationally located and multidisciplinary team.',
  paragraphTwo:
    'I’ve mentored hundreds of persons and reviewed over 200 full-stack development projects for two major tech education companies while learning data structures and algorithms, full-stack development and building over 30 projects including a Facebook clone, a vitals tracking mobile web app, a battleship game, among others.',
  paragraphThree:
    "I'm looking to join a collaborative and multidisciplinary team that takes risks and embrace failure, incorporates good software development practices and motivates people to grow professionally and technically. My main full-stack development environment is composed of Ruby on Rails on the backend and JavaScript React on the frontend; nevertheless, I'm comfortable working with Python and Django.",
  resume: 'https://drive.google.com/open?id=1iO1xYkbXey_na9jbEFkeB7yhNqULYfaS', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'fbclone-feed.png',
    title: 'MaskBook',
    info: 'A Facebook replica',
    info2: '',
    url: 'https://sleepy-tor-12192.herokuapp.com/',
    repo: 'https://github.com/adriaanbd/facebook-clone',
  },
  {
    id: uuidv1(),
    img: 'battleship.png',
    title: 'Acorazado',
    info: 'Battleship, the game, created with vanilla JavaScript.',
    info2: '',
    url: 'https://jsbattleship.now.sh/',
    repo: 'https://github.com/adriaanbd/jsbattleship', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'fazeres.png',
    title: 'Fazeres',
    info: 'A To Do List mobile app built with React Native',
    info2: '',
    url: '',
    repo: 'https://github.com/adriaanbd/fazeres-react-native', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'apple2014.jpg',
    title: 'Apple 2014',
    info: "Apple's 2014 landing page",
    info2: '',
    url: 'https://adriaanbd.github.io/apple2014/',
    repo: 'https://github.com/adriaanbd/apple2014', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Looking forward in hearing from you!',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
