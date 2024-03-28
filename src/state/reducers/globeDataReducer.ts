import {
  GlobeDataDto,
  SET_GLOBE_DATA,
  globeDataActionType,
} from "../actions/types/globeDataActionType";
import Github from "../../Assets/github.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";

export interface globeDataState {
  globeData: GlobeDataDto;
}
const initialState: globeDataState = {
  globeData: {
    name: "VAIBHAV KARNWAL",
    profession: "Software Engineer",
    nameDescription:
      "A self-taught developer with an interest in Computer Science.",
    aboutDescription: [
      "Hi Everyone, I am a Software Developer at Altimetrik India placed at Bangaluru, India. I enjoy problem-solving and coding. Always strive to bring 100% to the work I do. I have worked on technologies like Java, HTML, CSS, SCSS, JavaScript and TypeScript as well as experience with popular frontend frameworks such as React, Redux during my professional Journey. I have 26 months of professional work experience which helped me strengthen my experience in TypeScript, React, Redux. I am passionate about developing complex and exceptional web applications that solve real-world problems impacting millions of users.",
      "Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.",
      "Apart from coding, some other activities that I love to do!",
    ],
    skillSet: [
      "reactjs",
      "redux",
      "typescript",
      "jest",
      "java",
      "javascript",
      "html",
      "nodejs",
      "sass",
      "bootstrap",
      "github",
      "css",
      "flutter",
    ],
    tools: ["Android", "Visualstudiocode"],
    social: [
      {
        href: "https://github.com/vaibhav-karnwal",
        src: Github,
        title: "Github",
      },
      {
        href: "https://twitter.com/algocreater",
        src: twitter,
        title: "Twitter",
      },
      {
        href: "https://www.linkedin.com/in/vaibhav-karnwal/",
        src: linkedin,
        title: "Linkedin",
      },
      {
        href: "https://www.instagram.com/vaibhavkarnwal2812/",
        src: instagram,
        title: "Instagram",
      },
    ],
    currentProject: {
      company: {
        projectName: "",
        clientIcon: "https://www.putnam.com/static/img/putnam-logo.svg",
        role: "Frontend Developer",
        summary: [
          "Spearheaded the development of frontend and backend services for investment clients at Putnam Investments, leveraging React and NodeJS technologies.",
          "We have developed a new web experience for Putnam ShareHolders with easier Navigation ,Interactive Charts , Enhanced investment performance Data and many more Features.",
          "Identified web-based user interactions and developed highly-responsive user interface components via React concepts.",
          "Worked in using React JS components, Forms, Events, Keys, Router, React Hooks, Redux concept.",
          "It is a web application in which we worked onTechnologies like: React JS, Node, Redux ,Bootstrap, CSS, Scss, Json.",
          "Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows.",
          "Worked in implementing GraphQL and Rest API in Node project.",
        ],
      },
      freelance: {
        projectName: "Lyamii",
        clientIcon: require("../../Assets/lyamii.png"),
        role: "Frontend Developer",
        summary: [
          "Collaborated with cross-functional teams to develop and maintain frontend components for Lyamii.",
          "Implemented responsive designs and optimised UI/UX to enhance user engagement and conversion rates.",
          "Integrated React Libraries to provide seamless experiences for users.",
          "Utilised state management libraries such as Redux to manage complex application states and ensure data consistency.",
          "Technical Stack learnt: React.Js, Nest.Js, Bootstrap, Typescript, JavaScript, HTML5, CSS, SCSS, Redux, RestAPI, Gitlab.",
        ],
      },
    },
    offerings: [
      {
        title: "Fast Delivery",
        description: "I will deliver your product as soon as possible 🚀.",
      },
      {
        title: "Clean Code",
        description:
          "I Create a clean code that is easy to read and mintaneble 🧹.",
      },
    ],
  },
};

export default function globeDataReducer(
  state = initialState,
  action: globeDataActionType
): globeDataState {
  switch (action.type) {
    case SET_GLOBE_DATA:
      return {
        ...state,
        globeData: { ...action.payload },
      };
    default:
      return state;
  }
}
