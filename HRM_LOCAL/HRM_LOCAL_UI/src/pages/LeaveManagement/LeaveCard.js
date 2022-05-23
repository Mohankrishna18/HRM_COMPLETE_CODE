{
  /* <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row> */
}

import React from "react";
import { Card } from "react-bootstrap";

function LeaveCard() {
  return (
    <div>
      <Card style={{ height: 20, width: 100 }}>
        {/* <Card.Body> */}
        Approved
        {/* </Card.Body> */}
      </Card>
    </div>
  );
}

export default LeaveCard;
