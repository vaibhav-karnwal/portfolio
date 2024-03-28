import React, { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../../common/projectCard/ProjectCards";
import { useSelector } from "react-redux";
import { selectProjectData } from "../../../state/selectors/selectProjectData";
import { ProjectDataDto } from "../../../state/actions/types/projectdataActionType";

const Projects: FC = () => {
  const projects = useSelector(selectProjectData);

  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.projectData?.map(
            (project: ProjectDataDto, index: number) => {
              return (
                <Col md={4} key={index} className="project-card">
                  <ProjectCards
                    imgPath={project.imgPath}
                    isBlog={project.isBlog}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
