import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/vaibhav.jpg";
import Tilt from "react-parallax-tilt";

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
  return (
    <Container className="home-about-section" fluid id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="text-danger" style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body home-text">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              <span>
                I'm a Front-End Developer with one plus years of experience
                based in Bangalore who is passionate about delivering value to
                businesses through technology. I love the challenge of finding
                creative solutions to problems that allows me to work
                effectively and I enjoy collaborating with teams to achieve
                great results.
                <br />
                <br />
                I am dedicated to keeping up-to-date with the latest
                technologies and trends to provide the best solutions for my
                clients.
                <br />
                <br />I pay great attention to detail in the design and
                development of my projects. My ultimate goal is to create
                software that is both user-friendly and impactful in achieving
                the client's objectives.
              </span>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar align-self-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row
          className={"py-5"}
          style={{ justifyContent: "center", paddingBottom: "50px" }}
        >
          <h1 className="text-danger" style={{ fontSize: "2.6em" }}>
            What I <span className="green"> Offering </span>
          </h1>
          {offerings.map((offering) => {
            return (
              <Card className="project-card-view col box8 m-4">
                <Col md={4} className="project-card w-100 grey">
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
