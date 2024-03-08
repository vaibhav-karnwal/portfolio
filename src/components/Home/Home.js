import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Github from "../../Assets/github.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";
import qrCode from "../../Assets/qrCode.jpg";

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
                className="heading-name secondary d-flex row w-100"
                style={{ fontSize: "2rem" }}
              >
                <span className="w-75">
                  <span className="text-white">Software Engineer.</span> A
                  self-taught developer with an interest in Computer Science.
                </span>
                <img
                  src={qrCode}
                  className="mx-2 justify-content-end"
                  style={{ width: "120px" }}
                  alt="social"
                ></img>
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
                        {" "}
                        <button class="icon-btn justify-content-center d-flex align-items-center">
                          <img
                            src={socialLink.src}
                            className="d-flex"
                            style={{ width: "30px" }}
                            alt="social"
                          ></img>
                        </button>
                      </a>
                    );
                  })}
                </ul>
              </Col>
              <div className="heading-profile text-align-start py-md-5 py-sm-4 pb-0">
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
