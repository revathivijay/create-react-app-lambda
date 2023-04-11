import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}
        {props.skills && props.skills.length > 0 && (
          <div>
            {props.skills.map((skill, index) => (
              <Button
                key={index}
                variant="outline-secondary"
                className="skill-btn"
                style={{ color: "white" }}
              >
                {skill}
              </Button>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
