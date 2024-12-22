import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResumeSection from "../../common/resumeSection/ResumeSection";

const Resume: FC = () => {
  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={require("../../../Assets/vaibhav-karnwal-resume.pdf")}
            target="_blank"
          >
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <ResumeSection
              title="Software Engineer [ Altimetrik ]"
              date="Jan 2022 - present"
              projectName="Putnam Investment"
              content={[
                "Created an optimized responsive UI from scratch, enhancing performance and user experience [JavaScript (ES6+), React.js, and Redux].",
                "Integrated RESTful APIs with backend teams to ensure seamless data flow and functionality [JavaScript, TypeScript].",
                "Improved app performance and increment of 23% in code coverage through code optimization, reducing load times and boosting resource efficiency.",
                "Conducted comprehensive testing, utilizing sonarQube for 100% code Quality, ensuring reliability, and actively participated in Agile teams and code reviews [Jest and React Testing Library].",
              ]}
            />
            <ResumeSection
              projectName="Talent Central Dashboard"
              content={[
                "Spearheaded the enhancement and maintenance of the Talent Central Platform, delivering a dynamic and responsive UI with efficient state management [Redux, ReactJS, and AntD].",
                "Developed clean, efficient, and reusable code, integrating front-end components with backend services through REST APIs [JavaScript, TypeScript].",
                "Collaborated with cross-functional teams to deliver high-quality software solutions, driving improvements in employee management, talent pool tracking, and job proposal functionalities.",
              ]}
            />
            <ResumeSection
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
            <ResumeSection
              title="Computer Science & Engineering [K.S.V.C.E.M, Bijnor] "
              date="2018 - 2021"
              content={[`CGPA: 8.0 (All Sem)`]}
            />
            <ResumeSection
              title="Mechanical Engineering [Govt. Polytechnic, Bijnor] "
              date="2012 - 2015"
              content={[`CGPA: 7.1 (All Sem)`]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <ResumeSection
              title=""
              imgUrl={[
                "https://udemy-certificate.s3.amazonaws.com/image/UC-a5946f5b-e553-4320-be99-6ef60dd167eb.jpg?v=1686691348000",
                "https://udemy-certificate.s3.amazonaws.com/image/UC-d691ff8c-17e2-4edd-affb-5580f08d262f.jpg?v=1686772357000",
              ]}
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
            <ResumeSection
              title="Web Developer [K.S.V.C.E.M-2021]"
              content={[
                "Worked on building front-end UI design using HTML5, CSS3, JavaScript, and building API routes using Node and React.js.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={require("../../../Assets/vaibhav-karnwal-resume.pdf")}
            target="_blank"
          >
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
};

export default Resume;
