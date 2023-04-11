import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineering 💻",
          "Machine Learning 🤖",
          "Deep Learning and Computer Vision 📸",
          "Violin 🎻",
          "Music & Art 🎨",
        ],
        delay: 30,
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Type;
