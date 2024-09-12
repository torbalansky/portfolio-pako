import vamos from '../assets/vamos.png';
import PEDB from '../assets/pedb.png';
import meet from '../assets/meet.png';
import chat from '../assets/chat.png';
import { RiJavascriptLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitSquare  } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";

export const NavbarData = [
  {
    id: 1,
    title: "Home",
    link: "hero",
  },
  {
    id: 2,
    title: "Work",
    link: "work",
  },
  {
    id: 3,
    title: "Contact",
    link: "contact",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "PEDB",
    info: 'Protein phosphorylation database',
    image: PEDB,
    description: "PEDB is a comprehensive web application built with Django, Python, HTML, CSS, and JavaScript. It offers an intuitive interface for exploring protein phosphorylation data in E. coli. Users can quickly search for phosphoproteins and their phosphosites using UniProt codes, gene names, protein names, or peptide sequences. The platform provides detailed views of phosphosites, including interactive charts, sequence highlights, and links to relevant studies.",
    liveLink: "https://pedb.onrender.com/",
    githubLink: "https://github.com/torbalansky/phosphoecoli",
    tech: "Django, Python, HTML, CSS, JavaScript",
  },
  {
    id: 2,
    title: "Vamos",
    info: 'Fast-Food restaurant App',
    image: vamos,
    description: "Vamos is a modern web application created for a small restaurant, designed to enhance the user experience with a simple yet intuitive and interactive menu. The app showcases a clean design and user-friendly interface to browse and interact with the menu.",
    liveLink: "https://vamosofia.vercel.app/",
    githubLink: "https://github.com/torbalansky/restaurant-website",
    tech: "React, Vite",
  },
  {
    id: 3,
    title: "Chat App",
    info: 'Cross-platform messaging app',
    image: chat,
    description: "ChatApp is a cross-platform messaging application built with React Native and Expo. It enables users to chat, share images, and location. The app utilizes Google Firebase for user authentication and stores data both online and offline.",
    liveLink: "https://github.com/torbalansky/chat-app",
    githubLink: "https://github.com/torbalansky/chat-app",
    tech: "React Native, JavaScript, Google Firebase",
  },
  // {
     // id: 4,
     // title: "Meet App",
     // info: 'Event scheduling app',
     // image: meet,
     // description: "MeetApp is a web application developed following the principles of test-driven development. It's designed to work without needing a server and is built using technologies like React and JavaScript. It also makes use of the Google Calendar API to get information about upcoming events and relies on AWS Lambda to handle user access securely.",
     // liveLink: "https://torbalansky.github.io/meet/",
     // githubLink: "https://github.com/torbalansky/meet",
     // tech: "ReactJS, JavaScript, CSS",
  // },
  // {
  //   id: 5,
  //   title: "Movie-API",
  //   image: "",
  //   description: "This REST API acts as a communication bridge between myFlix frontend applications and MongoDB. It enables the retrieval of movie data from the database and handles various user actions such as registration, login, accessing movie details, managing favorites, user info editing, and account deletion.",
  //   liveLink: "https://movie-api-eqfh.vercel.app/",
  //   githubLink: "https://github.com/torbalansky/movie_api",
  //   tech: "Node, Express, REST API, MongoDB",
  // },
  // {
  //   id: 6,
  //   title: "Myflix App",
  //   image: "",
  //   description: "MyFlix is a client-side movie app created with React, React Bootstrap, Redux, and JavaScript. It allows users to explore a vast collection of movies, find detailed information about each film, and manage their favorites. The app also provides user registration, login, and authentication using JWT tokens, making it a secure and interactive movie platform.",
  //   liveLink: "https://myflix-torbalansky.netlify.app/login",
  //   githubLink: "https://github.com/torbalansky/myFlix-client",
  //   tech: "ReactJS, Redux, CSS",
  // },
];

export const techData = [
  // Web Development
  {
    id: 1,
    title: "HTML 5",
    logo: FaHtml5,
    backgroundColor: "#E44D26", // HTML 5 color
  },
  {
    id: 2,
    title: "CSS 3",
    logo: FaCss3Alt,
    backgroundColor: "#1572B6", // CSS 3 color
  },
  {
    id: 3,
    title: "JavaScript",
    logo: RiJavascriptLine,
    backgroundColor: "#F7E018", // JavaScript color
  },
  {
    id: 4,
    title: "React JS",
    logo: RiReactjsFill,
    backgroundColor: "#61DAFB", // React JS color
  },
  {
    id: 5,
    title: "Node JS",
    logo: FaNodeJs,
    backgroundColor: "#68A063", // Node JS color
  },
  {
    id: 6,
    title: "Tailwind CSS",
    logo: RiTailwindCssFill,
    backgroundColor: "#38B2AC", // Tailwind CSS color
  },

  // Databases
  {
    id: 7,
    title: "MongoDB",
    logo: BiLogoMongodb,
    backgroundColor: "#4DB33D", // MongoDB color
  },
  {
    id: 8,
    title: "PostgreSQL",
    logo: BiLogoPostgresql,
    backgroundColor: "#336791", // PostgreSQL color
  },

  // Languages/Frameworks
  {
    id: 9,
    title: "Python",
    logo: FaPython,
    backgroundColor: "#306998", // Python color
  },
  {
    id: 10,
    title: "Django",
    logo: BiLogoDjango,
    backgroundColor: "#092E20", // Django color
  },

  // Tools
  {
    id: 11,
    title: "Git",
    logo: FaGitSquare,
    backgroundColor: "#F05032", // Git color
  },
];
