import React from "react";
import { Card } from "react-bootstrap";
import EmpAttendanceCard from "./EmpAttendanceCard";

const EmpAttendanceHeader = (props) => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Card>
        <Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: "35px" }}>Attendance</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              Dashboard/Attendance
            </Card.Subtitle>
          </Card.Body>

          <EmpAttendanceCard />
        </Card.Header>
      </Card>
    </div>
  );
};

export default EmpAttendanceHeader;
