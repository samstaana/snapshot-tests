import React from "react";
import { Card } from "react-bootstrap";
import SamanthaMarie from '../images/SamanthaMarie.png'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={SamanthaMarie} />
            <Card.Body>
                <Card.Title>Samantha Marie</Card.Title>
                <Card.Text>
                A 30 year old Los Angeles native living in Las Vegas who's learning to write code.
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
  }
  
  export default GitHubCard;