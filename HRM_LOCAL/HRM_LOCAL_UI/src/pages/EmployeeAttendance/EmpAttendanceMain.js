import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import EmpAttendanceHeader from "./EmpAttendanceComponents/EmpAttendanceHeader";

const EmpAttendanceMain = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card responsive className="scroll">
            <Card.Header>
              <Card.Body>
                <Card.Title> Employee Attendance</Card.Title>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <EmpAttendanceHeader />
                      {/* <HolidayScreen /> */}
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmpAttendanceMain;
