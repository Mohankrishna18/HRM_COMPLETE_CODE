import React from "react";
import { Col, Row } from "react-bootstrap";
import EmpAttendanceForm from "./EmpAttendanceForm";


const EmpAttendanceHeader = (props) => {
  return (
    <div>
      <Row>
        <Col md={12}>
          {/* <h5 className="mb-3">Holidays Management
          </h5> */}
        
        </Col>
        <EmpAttendanceForm />
      </Row>
    </div>
  );
};

export default EmpAttendanceHeader;
