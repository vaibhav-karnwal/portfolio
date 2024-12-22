import React, { FC } from "react";

type ResumeSectionDto = {
  title?: string;
  date?: string;
  content: string[];
  imgUrl?: string[];
  projectName?: string;
};
const ResumeSection: FC<ResumeSectionDto> = ({
  title,
  date,
  content,
  imgUrl,
  projectName,
}) => {
  return (
    <div className="resume-item">
      <h5 className={title ? "resume-title" : "resume-no-title"}>{title}</h5>
      <p>
        <em>{date}</em>
      </p>

      {imgUrl &&
        imgUrl?.length > 0 &&
        imgUrl.map((img: string, index: number) => (
          <>
            <img src={img} key={index} alt="" className="col-6 p-2 img-fluid" />
          </>
        ))}
      {projectName && (
        <p style={{ background: "darkslategrey" }}>{projectName}</p>
      )}
      <ul>
        {content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeSection;
