import React from "react";
import { Col, Row } from "react-bootstrap";
import RoleUnderEmployees from "./RoleUnderEmployeeComponents/RoleUnderEmployees";


const Employee = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <RoleUnderEmployees />
        </Col>
      </Row>
    </div>
  );
};

export default Employee;
