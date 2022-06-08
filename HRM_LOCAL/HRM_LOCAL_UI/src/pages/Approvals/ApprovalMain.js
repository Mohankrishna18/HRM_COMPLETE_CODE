import React from "react";
import { Card, Container } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import OnboardedEmployeesTable from "./ApprovalComponents/OnboardedEmployeesTable";
import AddOnboard from "./ApprovalComponents/AddOnboard";

function ApprovalMain() {
  return (
    <div> 
        <Row>
          <Col xs={6} md={8}>
            <Card.Body>
              <Card.Title>Onboardings</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Onboards/Employees
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col xs={6} md={4}>
            <AddOnboard />
          </Col>
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <OnboardedEmployeesTable/>
        </Row>
      
    </div>
  );
}

export default ApprovalMain;
