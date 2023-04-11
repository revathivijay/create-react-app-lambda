import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I am <span className="purple">Revathi, </span>
            from <span className="purple"> Mumbai, India.</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            I'm a graduate student pursing my{" "}
            <strong className="purple">MS in Computer Science</strong> from{" "}
            <strong className="purple">University of Pennsylvania</strong> (I
            graduate in May '23'). I graduated from{" "}
            <strong className="purple">VJTI, Mumbai</strong> with a{" "}
            <strong className="purple">B.Tech in Computer Engineering</strong>{" "}
            in May 2021. I've previously interned at Amazon's AWS, Morgan
            Stanley and Intellect Design Arena as a Software Engineer.
            <br />
            <br />
            Apart from coding, here's a few other things that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play the{" "}
              <strong className="purple">Violin</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> Indian Classical Dance{" "}
              <strong className="purple">(Bharatanatyam)</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> Indian Classical Music - Vocal{" "}
              <strong className="purple">(Carnatic)</strong>
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong className="purple">Painting</strong>{" "}
              (Acrylics, Watercolors, Gouache)
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Check out my{"  "}
            <strong className="purple">
              <a
                className="purple"
                href="https://www.youtube.com/channel/UCJcKRuFvMVonEzsUGYR8NXw"
              >
                YouTube
              </a>
            </strong>{" "}
            and my{" "}
            <strong className="purple">
              <a
                className="purple"
                href="https://www.instagram.com/_art.blues_/"
              >
                Instagram
              </a>{" "}
            </strong>
            to see some of my work!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
