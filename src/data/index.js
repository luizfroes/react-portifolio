import PaletteSharpIcon from "@mui/icons-material/PaletteSharp";
import LaptopWindowsSharpIcon from "@mui/icons-material/LaptopWindowsSharp";

import foodtopia from "../assets/img/foodtopia.png";
import getABook from "../assets/img/get-a-book.png";
import password from "../assets/img/password-generator-screenshot.png";
import quiz from "../assets/img/screenshot-quiz-main.png";
import fitness from "../assets/img/fitness-app.png";
import weather from "../assets/img/weather-dashboard-2.png";
import noteTaker from "../assets/img/note-taker.png";
import planner from "../assets/img/work-day-planer-webpage.png";
import schoolify from "../assets/img/schoolify.png";
import techBlog from "../assets/img/tech-blog-home.png";
import ecommerce from "../assets/img/ecommerce.png";
import employee from "../assets/img/employee-tracker.jpg";
import social from "../assets/img/social-network.jpg";
import readme from "../assets/img/readme-generator.jpg";
import team from "../assets/img/team-profile-generator.png";

export const projects = {
  frontEndProjects: [
    {
      id: "1",
      title: "Foodtopia",
      description:
        "Foodtopia is a responsive and dynamic recipe app, which assists users with advanced dietary needs. This app also provides an advanced mathematical calculator to present quantity of ingredients for catering services and to cater for larger parties.",
      image: foodtopia,
      gitHubUrl: "https://github.com/luizfroes/foodtopia-1",
      webUrl: "https://luizfroes.github.io/foodtopia-1/",
    },
    {
      id: "2",
      title: "Password Generator",
      description:
        "An application that enables employees to generate random passwords based on criteria that they’ve selected.",
      image: password,
      gitHubUrl: "https://github.com/luizfroes/password-generate",
      webUrl: "https://luizfroes.github.io/password-generate/",
    },
    {
      id: "3",
      title: "Rock n' Roll Quiz",
      description:
        "This is a flat and responsive Rock n' Roll timed quiz. The page includes both multiple-choice questions and interactive Rock n' Roll challenges. Also presents a Highscore with all the players scores.",
      image: quiz,
      gitHubUrl: "https://github.com/luizfroes/timed-quiz-game",
      webUrl: "https://luizfroes.github.io/timed-quiz-game/",
    },
    {
      id: "4",
      title: "Work Day Scheduler",
      description:
        "This is a flat and responsive calendar application that runs in the browser and allows the user to save events for each hour of the day.",
      image: planner,
      gitHubUrl: "https://github.com/luizfroes/work-day-scheduler",
      webUrl: "https://luizfroes.github.io/work-day-scheduler/",
    },
    {
      id: "5",
      title: "Weather Dashboard",
      description:
        "This is a flat and responsive weather dashboard application that runs in the browser and allows the user to research the weather conditions for any city around the world, just typing the city name. It will presents the current weather condition and for the next 7 days.",
      image: weather,
      gitHubUrl: "https://github.com/luizfroes/weather-dashboard",
      webUrl: "https://luizfroes.github.io/weather-dashboard/",
    },
  ],
  backEndProjects: [
    {
      id: "1",
      title: "NoSQL Social Network API",
      description:
        "NoSQL Social Network API is social network backend web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
      image: social,
      gitHubUrl:
        "https://github.com/luizfroes/NoSQL-Social-Network-API/tree/dev",
    },
    {
      id: "2",
      title: "Employee Tracker",
      description:
        "Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). That is exactly what Employee Tracker does. It a command-line application to manage a company's employee database, using Node.js, Inquirer, and MySQL.",
      image: employee,
      gitHubUrl: "https://github.com/luizfroes/employee-tracker/tree/dev",
      webUrl: "",
    },
    {
      id: "3",
      title: "E-Commerce-Backend",
      description:
        "Internet retail, also known as e-commerce, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. This application is the back end for an e-commerce site that has a Express.js sever and use Sequelize to interact with a MySQL database.",
      image: ecommerce,
      gitHubUrl: "https://github.com/luizfroes/ecomerce-backend/tree/dev",
    },
    {
      id: "4",
      title: "Team Profile Generator",
      description:
        "Team Profile Generator is a Node.js command-line application that takes information about employees on a software engineering team, then generates a flat and responsive HTML webpage that displays summaries for each person. There's also some tests using Jest.js.",
      image: team,
      gitHubUrl: "https://github.com/luizfroes/team-profile-generator/tree/dev",
    },
    {
      id: "5",
      title: "Readme Generator",
      description:
        "Readme Generator. An application that get user inputs and generate a professional README.md file. With Readme Generator you can quickly and easily create a README file by using a command-line application to generate one. Saving your time, you to devote more time to working on your projects.",
      image: readme,
      gitHubUrl: "https://github.com/luizfroes/readme-generator/tree/dev",
    },
  ],
  fullStackProjects: [
    {
      id: "1",
      title: "The Tech Blog",
      description:
        "The Tech Blog is a fully responsive CMS-style blog site similar to a Wordpress site, where users can create, read, update and delete their posts and comment on other users posts as well. The app has an authentication system with protected routes that allows user access to certain functions and pages once authorized. Users are able to use the CRUD functionalities if they were the authors of the blog; however all other authorized users are able to comment on any blog.",
      image: techBlog,
      gitHubUrl: "https://github.com/luizfroes/tech-blog/tree/dev",
      webUrl: "https://agile-beyond-75908.herokuapp.com/",
    },
    {
      id: "2",
      title: "The Fitness App",
      description:
        "The Fitness App is a fully responsive and dynamic app, where users can create, read, update and delete their exercises routines. The app has an authentication system with protected routes that allows user access to certain functions and pages once authorized.Users are able to use the CRUD functionalities if they were the authors of the routine; however all other users are able to see and be inspired by any routine.",
      image: fitness,
      gitHubUrl: "https://github.com/luizfroes/fitness-app/tree/dev",
      webUrl: "https://fierce-lowlands-38129.herokuapp.com/",
    },
    {
      id: "3",
      title: "The Note Taker",
      description:
        "The Note Taker is a application that that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      image: noteTaker,
      gitHubUrl: "https://github.com/luizfroes/note-taker/tree/dev",
      webUrl: "https://intense-headland-42686.herokuapp.com/",
    },
    {
      id: "4",
      title: "Get a Book",
      description:
        "A book search application powered by the Google Books API. Users can search books and then save to and delete from their accounts. ",
      image: getABook,
      gitHubUrl: "https://github.com/luizfroes/get-a-book-fe",
      webUrl: "https://desolate-gorge-76424.herokuapp.com/",
    },
    {
      id: "5",
      title: "Schoolify",
      description:
        "A responsive dynamic app which will run in the browser. Schoolify is an easy to use application, which holds a Mongo database, and manages relations between parents, students and teachers. ",
      image: schoolify,
      gitHubUrl: "https://github.com/luizfroes/schoolify-client",
      webUrl: "https://schoolify2022.herokuapp.com/",
    },
  ],
};

export const cardContent = [
  {
    title: "Frontend Developer",
    description:
      "I value business or brand for which I'm creating, thus I enjoy bringing new ideas to life.",
    skills:
      "HTML5, CSS3, JavaScript ES6+, JQuery, React, Apollo Client, Bootstrap.",
    tools: "VScode, GitHub, Canvas, CodePen.",
    icon: <PaletteSharpIcon fontSize="large" sx={{ mr: "1rem" }} />,
  },
  {
    title: "Backend Developer",
    description:
      "I value creating, maintaining and testing technology at the back end of a website (the server, database and application).",
    skills:
      "NodeJs, JavaScript ES6+, JQuery, Express, MySQL, MongoDB, GraphQL, Axios, Apollo Server.",
    tools: "VScode, GitHub, CodePen.",
    icon: <LaptopWindowsSharpIcon fontSize="large" sx={{ mr: "1rem" }} />,
  },
];
