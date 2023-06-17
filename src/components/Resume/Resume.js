import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/vaibhav-karnwal_resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Associate Software Engineer [ Altimetrik ]"
              date="Jan 2022 - present"
              content={[
                "Working on the development of an Web Application with React and Next.js",
                "Designing the User Interactive Website for the customer, using RestApi to add customer data",
                "Worked on Building number of landing pages and website modules by creating reusable and responsive components.",
                "Enforcing proper use of Typescript and integrating a common design system coupled with bootstrap.",
                "Integrated the RestAPI into the UI and Standardized all output with a new, responsive, mobile-first approach and strategy.",
                "Created Unit test cases using Jest and React testing library for more than 10 modules in react with a minimum coverage of 60 percent.",
                "Involved in understanding and analysing the application requirements.",
                "Work closely with all developers to ensure the integrity of the UI and Server throughout the development lifecycle.",
                "Technical Stack learnt: React.Js, Nest.Js, Bootstrap, Typescript, JavaScript, JEST, HTML5, CSS, SCSS, GraphQL., GIT, SonarQube, Redux, RestAPI, Gitlab.",
                "Soft Skill learnt: Teamwork, Time Management, Communication, Presentation skills.",
              ]}
            />
            <Resumecontent
              title="Flutter Developer Intern [ Ranavaj Power Solution ]"
              date="Apr 2021 - July 2021"
              content={[
                "Worked on the development of an EV Charging Flutter Application with Dart and Flutter",
                "Designed the Raft EV Charging App and added the features to enhance the user experience and optimized designs for Ios and Android Both.",
                "Develop and debug the hybrid application, Created the Database, Added the Verification, Validation of Data Function and permissions to the Application.",
                "Integrated the Razorpay Payment Gateway, Rest Api and other useful plugins in it",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science & Engineering [K.S.V.C.E.M, Bijnor] "
              date="2018 - 2021"
              content={[`CGPA: 8.0 (All Sem)`]}
            />
            <Resumecontent
              title="Mechanical Engineering [Govt. Polytechnic, Bijnor] "
              date="2012 - 2015"
              content={[`CGPA: 7.1 (All Sem)`]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              imgUrl={['https://udemy-certificate.s3.amazonaws.com/image/UC-a5946f5b-e553-4320-be99-6ef60dd167eb.jpg?v=1686691348000','https://udemy-certificate.s3.amazonaws.com/image/UC-d691ff8c-17e2-4edd-affb-5580f08d262f.jpg?v=1686772357000']}
              content={[
                "Achieved the Certificate of Complete Guide of Flutter & Dart from Udemy",
                "HackerRank Java Certificate.",
                "Achieved Arctic code Vault Contributor batch on Github.",
                "HackerRank Python Certificate.",
                `Current rank in Codecheff 286113`,
                `Current rank in HackerRank 112538`,
                "Currently having 5 stars on HackerRank in Java and MySQL and 4 stars in Problem Solving",
                "Got 467 rank in Wheebox National Employability Test.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [K.S.V.C.E.M-2021]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript, and building API routes using Node and React.js.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
