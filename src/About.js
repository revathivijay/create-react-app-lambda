import React, { Component } from "react";
import "./App.css";

class About extends Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
        <p>
          I am a software engineer and currently pursuing a master's degree in
          computer science from UPenn. I have experience working on both
          front-end and back-end development, as well as with systems and
          machine learning.
        </p>

        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Python</li>
          <li>Java</li>
          <li>SQL</li>
          <li>Machine Learning</li>
        </ul>

        <h2>Projects</h2>
        <ul>
          <li>
            <a href="#">Project 1</a>
          </li>
          <li>
            <a href="#">Project 2</a>
          </li>
          <li>
            <a href="#">Project 3</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
