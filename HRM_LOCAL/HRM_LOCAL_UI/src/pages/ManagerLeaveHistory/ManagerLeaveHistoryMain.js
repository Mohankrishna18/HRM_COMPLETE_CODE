import React from 'react';
import EmployeeLeaveHistory from "./ManagerLeaveHistory";
import { Row, Col, Card, Container } from 'react-bootstrap';


const ManagerLeaveHistory = () => {
  return (
          <div style={{ paddingTop: '20px' }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title> EmployeeLeaves Tagged To Manager History</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Holidays
            </Card.Subtitle>{" "}
            <Container>
              <Row>
                <Col xs={12}>
                <EmployeeLeaveHistory/>
                </Col>

              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>

  )
}

export default ManagerLeaveHistory;