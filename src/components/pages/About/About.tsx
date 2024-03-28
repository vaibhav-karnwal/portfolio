import React, { FC } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import laptopImg from "../../../Assets/vaibhav3.jpg";
import { useSelector } from "react-redux";
import { selectedAbout } from "../../../state/selectors/selectGlobeData";
import Techstack from "../../common/techstack/Techstack";
import Toolstack from "../../common/toolstack/Toolstack";

const About: FC = () => {
  const description = useSelector(selectedAbout);
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
            <h1
              className="orange text-shadow-dark"
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
            >
              Know Who <strong className="grey">I'M</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <div
                    className="text-shadow-dark"
                    style={{
                      textAlign: "justify",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    {description.map((desc, index) => (
                      <Col key={index}>{desc}</Col>
                    ))}
                  </div>
                  <ul>
                    <li className="about-activity">Helping Animals</li>
                    <li className="about-activity">
                      Watching Korean and Chinese Dramas
                    </li>
                  </ul>

                  <p style={{ marginBlockEnd: 0, color: "rgb(217 213 166)" }}>
                    "Strive to build things that make a difference!"{" "}
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
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
};

export default About;
