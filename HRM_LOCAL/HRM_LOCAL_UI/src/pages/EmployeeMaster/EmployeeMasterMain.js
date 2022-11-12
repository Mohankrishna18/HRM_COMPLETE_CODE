import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import EmployeeMasterCard from "./EmployeeMasterComponents/EmployeeMasterCard";
import EmployeeMasterForm from "./EmployeeMasterComponents/EmployeeMasterForm";
import EmployeeMasterTabs from "./EmployeeMasterComponents/EmployeeMasterTabs";

const EmployeeMaster = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
        <Card className="example" >
                        <Card.Body>
                            <Card.Title>Edit My Profile</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Employees / Edit My Profile
                            </Card.Subtitle>
                            <EmployeeMasterCard />
                            <EmployeeMasterTabs/>
                        </Card.Body>
          {/* <EmployeeMasterForm /> */}
          
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmployeeMaster;