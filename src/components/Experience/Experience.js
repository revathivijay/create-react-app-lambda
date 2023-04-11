import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCard";
import Particle from "../Particle";
import aws from "../../Assets/Experience/aws.jpeg";
import intellect from "../../Assets/Experience/intellect.png";
import morgan from "../../Assets/Experience/morgan.png";
import vjti from "../../Assets/Experience/vjti.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Work </strong> Experience
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              skills={[
                "AWS",
                "Scala",
                "Python",
                "Mockito",
                "Distributed Systems",
                "EC2",
                "S3",
              ]}
              title="Amazon AWS"
              description="Leveraged AWS's native tools to automate the replacement of EBS boot volumes for running EC2 instances that are a part of a distributed system (S3 on Edge), resulting in faster issue resolution and improved system availability and reduced manual errors, which was extensively tested using unit tests."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={vjti}
              isBlog={false}
              skills={[
                "Python",
                "Alexa Skills",
                "AWS",
                "AWS Lambda",
                "Path Planning",
              ]}
              title="VJTI AI and Blockchain Lab"
              description="Developed an on-campus navigation system that processes voice commands on the cloud (AWS) for VJTI Mumbai campus using Alexa Skills and Python, including conversion of physical maps to digital maps, shortest-path planning algorithm implementation using Dijkstra, and additional language support for Hindi by implementing Hindi-to-English language translation for input to Alexa devices as user endpoints."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={morgan}
              isBlog={false}
              skills={[
                "Big Data",
                "Automation",
                "Python",
                "Greenplum DB",
                "SQL",
                "Autosys",
              ]}
              title="Morgan Stanley"
              description="Developed an automated solution to replace manual workflow for generating RTS27 reports, reducing report generation time from four months to a few minutes, and working extensively with big data databases and data-manipulation to process the data."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={intellect}
              isBlog={false}
              skills={["REST APIs", "Python", "Django", "ExtJS", "Automation"]}
              title="Intellect Design Arena"
              description="Developed REST API using Django framework and Python for performing NMD Calculations, utilizing ExtJS for mock-up frontend and Java servlets for communication, and implementing Pandas and Numpy for data manipulation from SQL Database."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
