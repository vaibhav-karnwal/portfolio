import React from "react";
import laptopImg from "../../Assets/vaibhav3.jpg";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>

      {props?.imgUrl?.length > 0 && props.imgUrl.map((img, index) => (
        <>
          <img src={img} alt="" className="col-6 p-2 img-fluid" />
        </>))}
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
