import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vaibhav.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
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
              I'm a Front-End Developer with one plus years of experience in
              building responsive and user-friendly web applications.
              <br />
              <br />
              <span>My field of Interest's is building new</span> &nbsp;
              <i>
                <b className="green">Web Technologies and Products </b> and also
                in areas related to{" "}
                <b className="green">Mobile Application Development.</b>
              </i>
              <br />
              <br />I love creating beautiful interfaces and solving complex
              problems through code. I have a strong foundation in web
              development technologies such as{" "}
              <i>
                <b className="green">
                  HTML, CSS, SCSS, JavaScript and TypeScript
                </b>
              </i>
              , as well as experience with popular frontend frameworks such as
              <i>
                <b className="green"> React, Redux.</b>
              </i>{" "}
              <br />
              <br />I have a track of record of designing and implementing
              <i>
                <b className="green">
                  {" "}
                  user friendly and responsive interfaces
                </b>
              </i>{" "}
              that meet the needs of both clients and end users. In addition to
              my technical skills, I have strong problem solving that allows me
              to work effectively. I am good in classics like
              <i>
                <b className="green"> Java. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar align-self-center">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
