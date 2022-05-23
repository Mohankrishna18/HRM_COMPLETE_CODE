import React from "react";
import { Col, Row } from "react-bootstrap";
import EmployeeMasterForm from "./EmployeeMasterComponents/EmployeeMasterForm";

const EmployeeMaster = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <EmployeeMasterForm />
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeMaster;
