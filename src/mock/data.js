import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Adriaan Beiertz | Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site', // e.g: Welcome to my website
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
    'I’ve mentored hundreds of persons and reviewed over 200 full-stack development projects for two major tech education companies while learning data structures and algorithms, full-stack development and building over 30 projects including a Facebook replica, a vitals tracking mobile web app, a battleship game, a Newsweek replica, among others.',
  paragraphThree:
    "I'm looking to join a collaborative and multidisciplinary team that takes risks and embraces failure, incorporates good software development practices and motivates people to grow professionally and technically. I'm fluent in Ruby, Rails, JavaScript, React, Redux, Python, Django, HTML, and CSS; nevertheless I enjoy learning new languages and frameworks",
  resume: 'https://drive.google.com/open?id=1iO1xYkbXey_na9jbEFkeB7yhNqULYfaS',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'fbclone-feed.png',
    title: 'MaskBook',
    info: 'A Facebook replica',
    info2: 'Built with HTML, CSS, Ruby on Rails, Rspec, Capybara, PostgreSQL',
    url: 'https://sleepy-tor-12192.herokuapp.com/',
    repo: 'https://github.com/adriaanbd/facebook-clone',
  },
  {
    id: uuidv1(),
    img: 'battleship.png',
    title: 'Acorazado',
    info: 'A Battleship game web app',
    info2: 'Built with vanilla JavaScript',
    url: 'https://jsbattleship.now.sh/',
    repo: 'https://github.com/adriaanbd/jsbattleship',
  },
  {
    id: uuidv1(),
    img: 'afazeres.png',
    title: 'Fazeres',
    info: 'A To Do List mobile app',
    info2: 'Built with React Native',
    url: 'https://github.com/adriaanbd/fazeres-react-native',
    repo: 'https://github.com/adriaanbd/fazeres-react-native',
  },
  {
    id: uuidv1(),
    img: 'newsweek.png',
    title: 'Newsweek 2019',
    info: 'A replica of Newsweek',
    info2: 'Built with HTML, CSS and Bootstrap 4',
    url: 'https://adriaanbd.github.io/news-media-site/',
    repo: 'https://github.com/adriaanbd/news-media-site',
  },
  {
    id: uuidv1(),
    img: 'apple2014.jpg',
    title: 'Apple 2014',
    info: "Apple's 2014 landing page",
    info2: 'Built with HTML & CSS',
    url: 'https://adriaanbd.github.io/apple2014/',
    repo: 'https://github.com/adriaanbd/apple2014',
  },
  {
    id: uuidv1(),
    img: 'thenextweb.png',
    title: 'The Next Web 2019',
    info: 'The Next Web 2019 replica',
    info2: 'Built with HTML & CSS',
    url: 'https://adriaanbd.github.io/techy-media-site/',
    repo: 'https://github.com/adriaanbd/techy-media-site',
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
