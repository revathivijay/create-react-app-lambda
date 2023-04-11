import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ytmusync from "../../Assets/Projects/ytmusync.png";
import penncloud from "../../Assets/Projects/penncloud.png";
import vqa from "../../Assets/Projects/vqa.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Personal <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Visit my{" "}
          <strong className="purple">
            <a className="purple" href="https://github.com/revathivijay">
              Github
            </a>
          </strong>{" "}
          to see more!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ytmusync}
              isBlog={false}
              title="Youtube Mu-sync"
              description="A web-app using Node.js + Express framework and socket communications to enable synchronized listening and watching of YouTube videos, including replicating any play/pause/stop request made by one client to all other connected clients."
              ghLink="https://github.com/revathivijay/yt-musync"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={penncloud}
              isBlog={false}
              title="PennCloud"
              description="A system similar to Google Apps with a distributed key-value store, multiple stateless front-end servers, web-mail and storage services, and an admin console, allowing users to access the web-mail and storage services via load-balancers and mapping front-end servers to back-end storage servers. The key-value store is resilient with functionality to recover data irrespective of the state of the backend servers along with sharding of data for load-balancing."
              demoLink="https://youtu.be/OKvQS2MEWZk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vqa}
              isBlog={false}
              title="Visual Question Answering"
              description="Visual Question Answering involves multimodal inputs of images and questions (text) that selectively target different areas of an image, with the objective of accurately answering natural language questions by drawing information from both the image and the question posed."
              ghLink="https://github.com/revathivijay/Visual-Question-Answering"
              demoLink="https://colab.research.google.com/drive/1hdq2mgbwLxX2TtKiuU6YiDXoCdE6c2G5?usp=sharing"
            />
          </Col>
        </Row>
        <h2 style={{ color: "white" }}>More projects - under construction!</h2>
      </Container>
    </Container>
  );
}

export default Projects;
