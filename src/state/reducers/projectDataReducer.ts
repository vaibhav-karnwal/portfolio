import {
  ProjectDataDto,
  SET_PROJECT_DATA,
  projectDataActionType,
} from "../actions/types/projectdataActionType";

export interface projectDataState {
  projectData: ProjectDataDto[];
}

const initialState: projectDataState = {
  projectData: [
    {
      imgPath: require("../../Assets/Projects/portfolioui.png"),
      isBlog: false,
      title: "Portfolio Flutter Application",
      description:
        "Build the Portfolio Mobile App using Flutter, Dart in Android Studio. Which includes all the details of mine..",
      link: "https://github.com/vaibhav-karnwal/Portfolio-Flutter-App",
    },
    {
      imgPath: require("../../Assets/Projects/book-store.png"),
      isBlog: false,
      title: "Bookland",
      description:
        "Developed a simple online Book store app using React Js and the backend server is hosted using Node js, from which you can buy the books, search the books of your own choice .Update the order till it is not shipped.Update your username and password. Admin can update, delete or insert new items or its numbers according to the available stock in its store.",
      link: "https://github.com/vaibhav-karnwal/Bookland",
    },
    {
      imgPath: require("../../Assets/Projects/new_portfolio.PNG"),
      isBlog: false,
      title: "Portfolio",
      description:
        "Having a portfolio is a simple and great way to showcase your skills, interests and projects you have worked on before. Therefore I decided to create one using pure HTML, CSS & JavaScript.",
      link: "https://github.com/vaibhav-karnwal/itsmevaibhavkarnwal",
    },
    {
      imgPath: require("../../Assets/Projects/flipcart-scrape.PNG"),
      isBlog: false,
      title: "Flipkart Scraping",
      description:
        "I have done the web scraping of all the laptop details that are available on the flipkart website with the help of in Python using Panda, BeautifulSoup, Selenium, lxml parser and CSV library",
      link: "https://github.com/vaibhav-karnwal/Flipkart-product-scraping",
    },
    {
      imgPath: require("../../Assets/Projects/fbscrape.png"),
      isBlog: false,
      title: "Facebook Scraping",
      description:
        "Developed a Facebook Scraping Tool in Python using Panda, BeautifulSoup, Selenium, lxml parser and CSV library which scrape the whole Facebook Html-page data in .Csv file.",
      link: "https://github.com/vaibhav-karnwal/facebook-scraping",
    },
    {
      imgPath: require("../../Assets/Projects/faceRecognitionSystem.PNG"),
      isBlog: false,
      title: "Watch Dog",
      description:
        "The face recognition that detects the face of the person and opens the gate for him but if the person is not recognized it will send the mail to the owner of the house to notify him that someone is standing in front of your door.Then the owner can allow the known person into the house or if sees some suspicious activity then can take relative measures accordingly",
      link: "https://github.com/vaibhav-karnwal/Watch-Dog",
    },
    {
      imgPath: require("../../Assets/Projects/reskill.PNG"),
      isBlog: false,
      title: "Reskilling-Upskilling Website",
      description:
        "Developed a simple Reskill-Upskill web app using Bootstrap to reduce the gap between fresher or employee in the required skill by the company. Here we provide all category courses and trending topics like in computer science AI, Cloud computing etc.There are lots of business and startup are running at this types which is required high skill employee in all over world. So the scop of the project is cover all over world market.",
      link: "https://github.com/vaibhav-karnwal/Reskilling-Upskilling-Website",
    },
    {
      imgPath: require("../../Assets/Projects/create-account.PNG"),
      isBlog: false,
      title: "Bank Management System",
      description:
        "Developed a Bank Management System which is based on GUI. It is an application for maintaining a persons account in a bank. This system provides the access to the customer to create an account, deposit/withdraw/transfer the cash from his account, also to view reports of all accounts present.",
      link: "https://github.com/vaibhav-karnwal/Bank-Management-System-By-Vaibhav-Karnwal",
    },
    {
      imgPath: require("../../Assets/Projects/OCR.png"),
      isBlog: false,
      title: "Opti-Character-Recognition",
      description:
        "Implement the Software in python where user can upload an image of text written in hand written format which can convert into text (.txt) file and can be used for further use.",
      link: "https://github.com/vaibhav-karnwal/Optical-Character-Recognition",
    },
    {
      imgPath: require("../../Assets/Projects/brick-breaker-2.PNG"),
      isBlog: false,
      title: "Brick Breaker Game",
      description:
        "Interactive game based upon the classic game brick breaker. The object of brick breaker is to break the bricks that are distributed around the top of the game screen.I have created it with the help of Swing and Netbeans.",
      link: "https://github.com/vaibhav-karnwal/Brick-Breaker-Game",
    },
  ],
};

export default function projectDataReducer(
  state = initialState,
  action: projectDataActionType
): projectDataState {
  switch (action.type) {
    case SET_PROJECT_DATA:
      return {
        ...state,
        projectData: [...action.payload],
      };
    default:
      return state;
  }
}
