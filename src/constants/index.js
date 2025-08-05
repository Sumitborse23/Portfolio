
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  shivkalp,
  facefinder,
  UrlShortener,
  University,
  Simongame,
  airbnb,
  Zerodha,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN  Developer",
    icon: web,
  },
  {
    title: "Rest API",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "ShivKalp It Serices",
    icon: shivkalp,
    iconBg: "#383E56",
    date: "12 Dec 2023 - 20 Jan 2024",
    points: [
      'Developed a responsive college website using HTML, CSS, JavaScript, and Bootstrap.',
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Collaborated with senior developers to understand and apply agile development practices.",
      "Used Git for version control and gained familiarity with project workflows.",
    ],
  },
];

const projects = [
  {
    name: "Face Finder AI",
    description:
      "Built a Face Finder AI using computer vision to detect and locate faces in real-time using webcam input.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: facefinder,
    source_code_link: "https://github.com/Sumitborse23/finding-lost-people",
  },
  {
    name: "URL Shortner",
    description:
      "Developed a custom URL shortening service with user authentication and link analytics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: UrlShortener,
    source_code_link: "https://github.com/Sumitborse23/UrlShortener",
  },
  {
    name: "Zerodha-Clone",
    description:
      "Built a Zerodha-inspired stock trading platform clone using React, Node.js, and Chart.js.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: Zerodha,
    source_code_link: "https://github.com/Sumitborse23/Zerodha-Clone",
  },
  {
    name: "University Page",
    description:
      "Built a responsive university homepage using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: University,
    source_code_link: "https://github.com/Sumitborse23/project1",
  },
  {
    name: "Simon Game",
    description:
      "Implemented game logic to generate and validate color patterns dynamically.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Simongame,
    source_code_link: "https://github.com/Sumitborse23/Simon_Game",
  },
  {
    name: " Book Buddy ",
    description:
      "Implemented game logic to generate and validate color patterns dynamically.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/Sumitborse23/major-project",
  },
];

export { services, technologies, experiences, projects };
