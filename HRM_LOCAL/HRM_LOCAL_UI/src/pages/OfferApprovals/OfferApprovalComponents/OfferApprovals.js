import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import EmployeeTablee from "./EmployeeTablee";
import ApprovedEmployeesTable from "./ApprovedEmployeesTable"

function OfferApprovals() {
  return (
    <div>
      <Row xs={12}>
        <Col>
          <Card responsive>
            <Card.Header>
              <Card.Body>
                <Card.Title>Offer Approval</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  OfferApprovals{" "}
                </Card.Subtitle>
              </Card.Body>
              <Row>
                <Col xs={12}>
                  <h6>Waiting For Approval Table</h6>
                  <EmployeeTablee />
                  <h6>Approved Emplyees Table</h6>
                  <ApprovedEmployeesTable/>
                </Col>
              </Row>
            </Card.Header>
          </Card>

          {/* <EmpTable /> */}
        </Col>
      </Row>
    </div>
  );
}

export default OfferApprovals;
