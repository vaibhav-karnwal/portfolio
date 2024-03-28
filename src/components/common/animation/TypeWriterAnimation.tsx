import React, { FC } from "react";
import Typewriter from "typewriter-effect";

const TypeWriterAnimation: FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Front-end Developer",
          "I Build  Websites",
          "I Solve Problems",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeWriterAnimation;
