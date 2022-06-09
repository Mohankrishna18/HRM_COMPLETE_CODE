import React from 'react'
import { Row, Col, Card, Container } from "react-bootstrap";

import HrApprovedLeaves from "../HrLeaveHistory/HrLeaveHistoryComponents/HrApprovedLeaves";


const HrLeaveHistorymain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
    <Card responsive className="scroll">
      <Card.Header>
        <Card.Body>
          <Card.Title>Leave History</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Dashboard/Leave History
          </Card.Subtitle>{" "}
          <Container>
            <Row>
              <Col xs={12}>
                <HrApprovedLeaves />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card.Header>
    </Card>
  </div>
  )
}

export default HrLeaveHistorymain