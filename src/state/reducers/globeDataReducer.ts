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
      company: [
        {
          projectName: "",
          clientIcon: "https://www.putnam.com/static/img/putnam-logo.svg",
          role: "Frontend Developer",
          summary: [
            "Spearheaded the development of frontend and backend services for investment clients at Putnam Investments, leveraging React and NodeJS technologies.",
            "Developed a new web experience for Putnam ShareHolders with easier Navigation ,Interactive Charts, Enhanced investment performance Data and many more Features.",
            "Identified web-based user interactions and developed highly-responsive user interface components via React concepts.",
            "Worked in using React JS components, Forms, Events, Keys, Router, React Hooks, Redux concept, React JS, Node, Redux ,Bootstrap, CSS, Scss, Json.",
          ],
        },
        {
          projectName: "",
          clientIcon: "data:image/png;base64,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",
          role: "Software Developer",
          summary: [
            "Spearheaded the enhancement and maintenance of the Talent Central Platform, delivering a dynamic and responsive UI with efficient state management using Redux, ReactJS, and AntDesign libraries.",
            "Developed clean, efficient, and reusable code, integrating front-end components with backend services through REST APIs in JavaScript, TypeScript.",
            "Collaborated with cross-functional teams to deliver high-quality software solutions, driving improvements in employee management, talent pool tracking, and job proposal functionalities.",
          ],
        },
      ],
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
