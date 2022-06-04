import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import Editable from "./DepartmentComponents/DepartmentWithMtable";
import Department from "./DepartmentComponents/Department";
import DepartmentModal from "./DepartmentComponents/DepartmentModal";
// Testing purpose
const DepartmentMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title> Departments</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dashboard/Departments
            </Card.Subtitle>{" "}
            <Container>
              <Row>
                <Col xs={12}>
                  <Editable />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};

export default DepartmentMain;
