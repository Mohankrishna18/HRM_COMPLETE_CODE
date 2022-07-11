import React from "react";
import { Col, Row } from "react-bootstrap";
import EmployeeMasterForm from "./EmployeeMasterComponents/EmployeeMasterForm";
import EmployeeMasterTabs from "./EmployeeMasterComponents/EmployeeMasterTabs";

const EmployeeMaster = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          {/* <EmployeeMasterForm /> */}
          <EmployeeMasterTabs/>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeMaster;
