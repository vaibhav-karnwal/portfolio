import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vaibhav.jpg";
import Tilt from "react-parallax-tilt";
import github from "../../Assets/github.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";

function Home2() {
  return (
    <Container className="home-about-section" fluid id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="text-danger" style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body text-danger">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am good in classics like
              <i>
                <b className="purple"> Java. </b>
              </i>
              <br />
              <br />
              <span>My field of Interest's is building new</span> &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Mobile Application Development.</b>
              </i>
              <br />
              <br />
              As a frontend developer with one plus year experience, I have a strong
              foundation in web development technologies such as{" "}
              <i>
                <b className="purple">HTML, CSS, JavaScript and TypeScript</b>
              </i>
              , as well as experience with popular frontend frameworks such as
              <i>
                <b className="purple"> React, Redux.</b>
              </i>{" "}
              I have a track of record of designing and implementing
              <i>
                <b className="purple">
                  {" "}
                  user friendly and responsive interfaces
                </b>
              </i>{" "}
              that meet the needs of both clients and end users. In addition to
              my technical skills, I have strong problem solving that allows me
              to work effectively.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social text-muted">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vaibhav-karnwal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src={github} alt="" className="icon-size "></img>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/algocreater"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src={twitter} alt="" className="icon-size "></img>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vaibhav-karnwal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <img src={linkedin} alt="" className="icon-size "></img>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vaibhavkarnwal2812/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <img src={instagram} alt="" className="icon-size"></img>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
