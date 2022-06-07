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
                <Card.Title> Holiday Management</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Holidays
                </Card.Subtitle>{" "}
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
