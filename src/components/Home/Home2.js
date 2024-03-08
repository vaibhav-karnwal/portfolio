import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/vaibhav.png";
import Tilt from "react-parallax-tilt";
import ResumeContent from "../Resume/ResumeContent";

function Home2() {
  const offerings = [
    {
      title: "Fast Delivery",
      description: "I will deliver your product as soon as possible 🚀.",
    },
    {
      title: "Clean Code",
      description:
        "I Create a clean code that is easy to read and mintaneble 🧹.",
    },
  ];
  const projectContent = [
    "We have developed a new web experience for Putnam ShareHolders with easier Navigation ,Interactive Charts , Enhanced investment performance Data and many more Features.",
    "Identified web-based user interactions and developed highly-responsive user interface components via React concepts.",
    "Worked in using React JS components, Forms, Events, Keys, Router, React Hooks, Redux concept.",
    "It is a web application in which we worked onTechnologies like: React JS, Node, Redux ,Bootstrap, CSS, Scss, Json.",
    "Translated designs & wireframes into high-quality code and wrote application interface code via JavaScript following React.js workflows.",
    "I have worked in implementing GraphQL and Rest API in Node project.",
    "Troubleshot interface software and debugged application codes to improve functionality and performance by 50%.",
    "Developed and implemented front-end architecture to support user interface concepts with 100% accuracy.",
  ];
  return (
    <Container className="home-about-section" fluid id="about">
      <Container>
        <Row>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Col
            className={"w-100 box-shadow-dark"}
            style={{ justifyContent: "center", paddingBottom: "10px" }}
          >
            <Col md={12} className="">
              <Card className="shadow">
                <Card.Body>
                  <Row className="">
                    <Col>
                      <Card.Img
                        className={"w-50 justify-content-start d-flex"}
                        variant="top"
                        src={
                          "https://www.putnam.com/static/img/putnam-logo.svg"
                        }
                        alt="card-img"
                      />
                    </Col>
                    <Col className=" align-self-center ">
                      <Card.Title className="text-dark justify-content-end d-flex">
                        Frontend Developer
                      </Card.Title>
                    </Col>
                  </Row>
                  <p className="border border-top-1 border-secondary"></p>
                  <Card.Text
                    className={"text-dark"}
                    style={{
                      textAlign: "justify",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    <ul>
                      {projectContent.map((value, index) => (
                        <p key={index}> ‣ {value}</p>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
        <Row
          className={"py-5 d-flex offering"}
          style={{ justifyContent: "center", paddingBottom: "50px" }}
        >
          <h1 className="text-danger" style={{ fontSize: "2.6em" }}>
            What I <span className="green"> Offering </span>
          </h1>
          {offerings.map((offering) => {
            return (
              <Card className="shadow-sm col box8 m-md-4 mt-2">
                <Col md={4} className="home-card w-100 grey">
                  <Card.Title>{offering.title}</Card.Title>
                  <Card.Text
                    style={{ textAlign: "justify;", fontSize: "1rem;" }}
                  >
                    {offering.description}
                  </Card.Text>
                </Col>
              </Card>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
