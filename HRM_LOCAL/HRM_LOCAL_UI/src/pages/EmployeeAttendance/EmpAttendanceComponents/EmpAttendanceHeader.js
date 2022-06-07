import React from "react";
import { Col, Row } from "react-bootstrap";
import EmpAttendanceForm from "./EmpAttendanceForm";


const EmpAttendanceHeader = (props) => {
  return (
    <div>
      <Row>
        <Col md={12}>
          
        
        </Col>
        <EmpAttendanceForm />
      </Row>
    </div>
  );
};

export default EmpAttendanceHeader;
