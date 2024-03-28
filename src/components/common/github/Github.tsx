import React, { FC } from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github: FC = () => {
  // const colourTheme:ColorScale = [
  //   // background: "transparent",
  //   // text: "#ffffff",
  //   level4: "#8400b8",
  //   level3: "#b22ff4",
  //   level2: "#b265f6",
  //   level1: "#c084f5",
  //   level0: "#ecd9fc",
  // ];
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="vaibhav-karnwal"
        blockSize={15}
        blockMargin={5}
        // theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
