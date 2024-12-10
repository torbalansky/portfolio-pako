import vamos from '../assets/vamos.png';
import PEDB from '../assets/pedb.png';
import calculators from '../assets/calculators.jpg';
import chat from '../assets/chat.png';
import movie from '../assets/movie.jpg';
import quiz from '../assets/quiz.png';
import movie_api from '../assets/movie_api.jpg';
import recipe_app from '../assets/recipe_app.jpg';
import { RiJavascriptLine } from "react-icons/ri";
import meet from '../assets/meet_logo.png';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGitSquare  } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoDjango } from "react-icons/bi";
import { SiTypescript , SiPostman, SiVite, SiSelenium, SiJira } from "react-icons/si";

export const NavbarData = [
  {
    id: 1,
    title: "Home",
    link: "hero",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Work",
    link: "work",
  },
  {
    id: 4,
    title: "Contact",
    link: "contact",
  },
];

export const projectsData = [
  {
    id: 1,
    title: "PEDB",
    info: "Bioinformatics Platform with Selenium Testing",
    image: PEDB,
    description: "A comprehensive bioinformatics database for phosphoproteins, featuring Selenium testing. The platform implements advanced data visualization, user authentication, and scientific data management with robust testing for data integrity and user interactions.",
    liveLink: "https://pedb.onrender.com/",
    githubLink: "https://github.com/torbalansky/phosphoecoli",
    tech: [
      "Django",
      "Python",
      "PostgreSQL",
      "Selenium",
      "Plotly",
      "Matplotlib",
      "xhtml2pdf"
    ],
    highlights: [
      "Interactive protein visualization",
      "Advanced search functionality",
      "PDF export capabilities",
      "User profile management",
      "Data submission workflow",
      "Email notification system"
    ],
    testingScope: [
      "Profile management validation",
      "Search functionality testing",
      "Data visualization verification",
      "Form validation testing",
      "Email service integration",
      "Database CRUD operations",
      "User permission controls"
    ]
  },

  {
    id: 2,
    title: "MeetApp",
    info: "A serverless event management application with BDD Testing",
    image: meet,
    description: "A serverless event management application showcasing behavior-driven development (BDD) practices using Cucumber and Gherkin. Features comprehensive test coverage including integration tests, end-to-end scenarios, and OAuth authentication validation.",
    githubLink: "https://github.com/torbalansky/meet",
    tech: ["React", "AWS Lambda", "Jest", "Puppeteer", "Cucumber", "Gherkin"],
    highlights: [
      "BDD testing implementation",
      "OAuth authentication testing",
      "Offline functionality validation",
      "Integration with Google Calendar API",
      "End-to-end test scenarios"
    ],
    testingScope: [
      "User authentication flows",
      "Event data synchronization",
      "Offline mode functionality",
      "Cross-browser compatibility",
      "API integration testing"
    ]
  },

  {
    id: 3,
    title: "BioLabApp",
    info: "Laboratory Calculator Suite with E2E Testing",
    image: calculators,
    description: "A comprehensive scientific calculator suite developed with test-driven practices, featuring automated testing with Cypress. This application streamlines laboratory calculations while demonstrating modern QA practices including E2E testing, component testing, and responsive design validation.",
    liveLink: "https://biochem-lab-calculators.vercel.app/",
    githubLink: "https://github.com/torbalansky/biochem-lab-calculators",
    tech: ["React", "JavaScript", "Tailwind CSS", "Cypress"],
    highlights: [
      "End-to-end testing with Cypress",
      "Input validation and error handling",
      "Cross-browser compatibility testing",
      "Responsive design verification",
      "Unit tests for calculation accuracy"
    ],
    testingScope: [
      "Input boundary testing",
      "Calculation precision validation",
      "UI/UX responsiveness",
      "Error message verification"
    ]
  },

  {
    id: 4,
    title: "QuizApp",
    info: "Interactive QA Learning Platform with E2E Testing",
    image: quiz,
    description: "A comprehensive QA learning platform featuring interactive quizzes and practical exercises, extensively tested using Cypress. The application demonstrates modern testing practices through both its content and implementation, including E2E testing, component testing, and responsive design validation.",
    liveLink: "https://quiza-qa.netlify.app/",
    githubLink: "https://github.com/torbalansky/manual-QA",
    tech: ["React", "JavaScript", "Tailwind CSS", "Cypress", "EmailJS", "KaTeX"],
    highlights: [
      "Interactive STLC drag-and-drop quiz",
      "QA metrics calculator with formulas",
      "Age estimator with test cases",
      "Contact form with validation",
      "Responsive design implementation",
      "Real-time feedback system"
    ],
    testingScope: [
      "E2E navigation testing",
      "Drag-and-drop functionality",
      "Form validation and submission",
      "Email service integration tests",
      "Error handling scenarios",
      "Metrics calculation accuracy"
    ]
  },  

  {
    id: 5,
    title: "Movie-API",
    info: "RESTful API with Comprehensive Testing",
    image: movie_api,
    description: "A robust REST API showcasing best practices in API testing and documentation. Built with a focus on security testing, performance monitoring, and comprehensive API documentation. Features include automated testing suites, security implementations, and thorough error handling.",
    liveLink: "https://movie-api-eqfh.vercel.app/",
    githubLink: "https://github.com/torbalansky/movie_api",
    tech: ["Node.js", "Express", "MongoDB", "Postman"],
    highlights: [
      "Comprehensive API documentation",
      "Authentication & authorization testing",
      "Database integration testing",
      "Performance monitoring",
      "Security implementation"
    ],
    testingScope: [
      "API endpoint validation",
      "Rate limiting verification",
      "Error handling scenarios",
      "Data integrity checks"
    ]
  },
{
  id: 6,
  title: "Recipe App",
  info: "Django-based Recipe Management Platform",
  image: recipe_app,
  description: "A comprehensive recipe management platform built with Django and PostgreSQL, featuring extensive test coverage using pytest. The application implements model testing, view validation, form handling, and user interaction testing while providing users with recipe management, social interactions, and data visualization capabilities.",
  githubLink: "https://github.com/torbalansky/recipe-app",
  tech: ["Django", "Python", "PostgreSQL", "Bootstrap", "pytest", "Chart.js"],
  highlights: [
    "Recipe CRUD operations",
    "Interactive commenting system",
    "Recipe difficulty calculation",
    "Data visualization with charts",
    "Search and filter functionality",
    "PostgreSQL database integration"
  ],
  testingScope: [
    "Model validation and relationships",
    "Recipe difficulty calculation tests",
    "View functionality and routing",
    "Form validation and submission",
    "Comment system testing",
    "Chart generation validation"
  ]
},
  //  {
  //    id: 7,
  //      title: "MyFlix App",
  //      info: 'Web app for exploring movies and managing favorites',
  //     image: movie,
  //      description: "MyFlix Angular is a dynamic and user-friendly web application built with Angular, TypeScript, HTML, and SCSS. Utilizing MongoDB, Express.js, and Node.js on the backend, it allows users to explore movie details, such as descriptions, genres, and directors, and create a personalized list of favorites films.",
  //     liveLink: "https://myflix-angular-client-torbalansky.netlify.app/welcome",
  //     githubLink: "https://github.com/torbalansky/myFlix-Angular-client",
  //      tech: "Angular, React, TypeScript, HTML, CSS, Postman",
  //    },

  // {
  // id: 2,
  //  title: "Vamos",
  //  info: 'Fast-Food restaurant App',
  //  image: vamos,
  //  description: "Vamos is a modern web application created for a small restaurant, designed to enhance the user experience with a simple yet intuitive and interactive menu. The app showcases a clean design and user-friendly interface to browse and interact with the menu.",
  //  liveLink: "https://vamosofia.vercel.app/",
  //  githubLink: "https://github.com/torbalansky/restaurant-website",
  // tech: "React, Vite",
 // },

   //  {
  //   id: 4,
  //   title: "Chat App",
  //  info: 'Cross-platform messaging app',
  //  image: chat,
  //  description: "ChatApp is a cross-platform messaging application built with React Native and Expo. It enables users to chat, share images, and location. The app utilizes Google Firebase for user authentication and stores data both online and offline.",
  //  liveLink: "https://github.com/torbalansky/chat-app",
  //  githubLink: "https://github.com/torbalansky/chat-app",
  //  tech: "React Native, JavaScript, Google Firebase",
  //},
];

export const techData = [

  {
    id: 1,
    title: "HTML 5",
    logo: FaHtml5,
    backgroundColor: "#E44D26",
  },
  {
    id: 2,
    title: "CSS 3",
    logo: FaCss3Alt,
    backgroundColor: "#1572B6",
  },
  {
    id: 3,
    title: "JavaScript",
    logo: RiJavascriptLine,
    backgroundColor: "#F7E018",
  },
  // {
  //  id: 4,
  // title: "React JS",
  // logo: RiReactjsFill,
  // backgroundColor: "#61DAFB", 
  // },
  // {
  // id: 5,
  // title: "Node JS",
  //  logo: FaNodeJs,
  // backgroundColor: "#68A063",
  // },
  // {
  //   id: 6,
  //   title: "Tailwind CSS",
  //   logo: RiTailwindCssFill,
  //   backgroundColor: "#38B2AC",
  // },

  // {
  // id: 7,
  // title: "MongoDB",
  // logo: BiLogoMongodb,
  //  backgroundColor: "#4DB33D",
  //},

  {
    id: 8,
    title: "Python",
    logo: FaPython,
    backgroundColor: "#306998",
  },
  {
    id: 9,
    title: "Django",
    logo: BiLogoDjango,
    backgroundColor: "#092E20",
  },

  {
    id: 10,
    title: "PostgreSQL",
    logo: BiLogoPostgresql,
    backgroundColor: "#336791",
  },

  {
    id: 11,
    title: "Postman",
    logo: SiPostman,
    backgroundColor: "#E44D26",
  },

  {
    id: 12,
    title: "Git",
    logo: FaGitSquare,
    backgroundColor: "#F05032", 
  },

  // {
  //   id: 13,
  //   title: "TypeScript",
  //   logo: SiTypescript,
  //   backgroundColor: "#306998",
  // },

  // {
  //   id: 14,
  //   title: "Vite",
  //   logo: SiVite,
  //   backgroundColor: "#646CFF",
  // },

  {
    id: 15,
    title: "Selenium",
    logo: SiSelenium,
    backgroundColor: "#4DB33D",
  },

  {
    id: 16,
    title: "Jira",
    logo: SiJira,
    backgroundColor: "#1572B6",
  },
];
