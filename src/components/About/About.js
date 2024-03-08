import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/vaibhav3.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container className="text-white">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            <h1 className="orange text-shadow-dark" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="grey">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "10px", paddingBottom: "50px" }}
            className="about-img align-self-center"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading text-shadow-dark">
          Professional <strong className="grey">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading text-shadow-dark">
          <strong className="grey">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
