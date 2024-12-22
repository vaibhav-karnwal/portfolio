import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import qrCode from "../../../Assets/qrCode.jpg";
import { useSelector } from "react-redux";
import { selectGlobeData } from "../../../state/selectors/selectGlobeData";
import TypeWriterAnimation from "../../common/animation/TypeWriterAnimation";

function Home() {
  const globalData = useSelector(selectGlobeData);

  return (
    <section>
      <Container
        fluid
        className="position-relative py-5"
        style={{ background: "black" }}
        id="home"
      >
        <Container className="text-start text-white pt-5">
          <Row>
            <Col md={7} className="py-5 w-100">
              <h1 style={{}} className="pb-4 heading pt-5 lightGreen">
                Hey there!, I'm
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                <strong className="main-name">
                  {globalData.globeData.name}
                </strong>
              </h1>

              <h1
                className="heading-name secondary d-flex row w-100"
                style={{ fontSize: "2rem" }}
              >
                <span className="w-75">
                  <span className="text-white">
                    {globalData.globeData.profession} -
                  </span>
                  {globalData.globeData.nameDescription}
                </span>
              </h1>
              <Row className="heading-name" style={{ fontSize: "2rem" }}>
                <Col
                  className="text-white"
                  style={{
                    background: "teal",
                    whiteSpace: "nowrap",
                    maxWidth: "max-content",
                  }}
                >
                  {"3 year Experience"}
                </Col>
                <Col
                  className="text-white"
                  style={{
                    background: "cadetblue",
                    whiteSpace: "nowrap",
                    maxWidth: "max-content",
                  }}
                >
                  {"2 Month Notice Period"}
                </Col>
              </Row>
              <Col className="heading-profile pt-2">
                <ul className="footer-icons d-flex align-items-center flex-row">
                  {globalData.globeData.social.map((socialLink, index) => {
                    return (
                      <a
                        href={socialLink.href}
                        key={index}
                        style={{ color: "lightGreen" }}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-colour d-flex align-self-center lightGreen flex-row"
                      >
                        {" "}
                        <button className="icon-btn justify-content-center d-flex align-items-center">
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
                  <Col className="col-1">
                    <img
                      src={qrCode}
                      className="mx-2 mt-md-0 align-self-center justify-content-end"
                      style={{ width: "50px" }}
                      alt="social"
                    ></img>
                  </Col>
                </ul>
              </Col>
              <div className="heading-profile text-align-start py-md-5 py-sm-4 pb-0">
                <TypeWriterAnimation />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="position-relative py-5" fluid id="about">
        <Container>
          <Col className={"col-12"}>
            <h1 className="project-heading">
              My Recent <strong className="purple">Works In Altimetrik </strong>
            </h1>
            <p className="text-success">
              Here are a few projects I've worked on recently.
            </p>
          </Col>
          <Row className="align-items-center flex-column flex-md-row">
            {globalData.globeData.currentProject.company?.flatMap((project) => (
              <Col
                className={"w-100"}
                style={{
                  justifyContent: "center",
                  alignSelf: "stretch",
                  paddingBottom: "10px",
                }}
              >
                <Col md={12} className="shadow-sm border-0">
                  <Card className="">
                    <Card.Body>
                      <Row className="">
                        <Col>
                          <img
                            className={"w-50 justify-content-start d-flex"}
                            variant="top"
                            style={{ height: "10vh" }}
                            src={project?.clientIcon}
                            alt=""
                          />
                        </Col>
                        <Col className=" align-self-center ">
                          <Card.Title className="text-dark justify-content-end d-flex">
                            {project?.role}
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
                        {project?.summary.map((value, index) => (
                          <ul
                            key={index}
                            className="justify-content-between flex-row d-flex"
                          >
                            <li className="" style={{ width: "93%" }}>
                              {value}
                            </li>
                          </ul>
                        ))}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Col>
            ))}
          </Row>{" "}
          <Col className="position-relative">
            <h1
              className="text-danger position-relative my-4"
              style={{ fontSize: "2.6em" }}
            >
              Freelance <strong className="purple">Works </strong>
            </h1>
          </Col>
          <Row className="align-items-center flex-column-reverse mt-5">
            <Col
              className={"col-12 col-md-6"}
              style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
              <Col md={12} className="shadow-sm">
                <Card className="">
                  <Card.Body>
                    <Row className="pb-3">
                      <Col>
                        <img
                          className={"w-40 justify-content-start d-flex"}
                          variant="top"
                          src={
                            globalData.globeData.currentProject.freelance
                              .clientIcon
                          }
                          alt="card-img"
                        />
                      </Col>
                      <Col className=" align-self-center ">
                        <Card.Title className="text-dark justify-content-end d-flex">
                          {globalData.globeData?.currentProject.company.role}{" "}
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
                      {globalData.globeData?.currentProject.freelance.summary.map(
                        (value, index) => (
                          <ul
                            key={index}
                            className="justify-content-between flex-row d-flex"
                          >
                            <li className="" style={{ width: "93%" }}>
                              {value}
                            </li>
                          </ul>
                        )
                      )}
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
            {globalData.globeData.offerings?.map((offering, index) => {
              return (
                <Card key={index} className="shadow-sm col box8 m-md-4 mt-2">
                  <Col md={4} className="home-card w-100 grey">
                    <Card.Title>{offering.title}</Card.Title>
                    <Card.Text
                      className="text-justify"
                      style={{ fontSize: "1rem" }}
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
    </section>
  );
}

export default Home;
