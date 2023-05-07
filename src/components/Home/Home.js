import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Github from "../../Assets/github.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";

function Home() {
  const socialLinks = [
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
  ];
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}{" "}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header w-100">
              <h1 style={{ paddingBottom: 15 }} className="heading lightGreen">
                Hey there!, I'm
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> VAIBHAV KARNWAL</strong>
              </h1>

              <h1
                className="heading-name secondary w-75"
                style={{ fontSize: "2rem" }}
              >
                <span className="text-white">Software Engineer.</span> A
                self-taught developer with an interest in Computer Science.
              </h1>

              <Col className="heading-profile pt-2">
                <ul className="footer-icons d-flex flex-row">
                  {socialLinks.map((socialLink) => {
                    return (
                        <a
                          href={socialLink.href}
                          style={{ color: "lightGreen" }}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-colour d-flex align-self-center lightGreen flex-row"
                        >
                          <img
                            src={socialLink.src}
                            className="mx-2 d-flex"
                            style={{ width: "30px" }}
                            alt="social"
                          ></img>
                          <span className="d-none d-md-flex h4 px-2">{socialLink.title}</span>
                        </a>
                    );
                  })}
                </ul>
              </Col>
              <div
                className="heading-profile text-align-start py-md-5 py-sm-4 pb-0"
              >
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;