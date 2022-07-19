import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Tab, Tabs } from "react-bootstrap";
import EmployeeTablee from "./EmployeeTablee";
import ApprovedEmployeesTable from "./ApprovedEmployeesTable";

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
              <Tabs
                defaultActiveKey="Waiting For Approval"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
                style={{
                  justifyContent: "center",
                  color: "#FF9E14",
                  backgroundColor: "#FF9E14",
                  fontSize: "16px",
                  padding: 10,
                }}
              >
                <Tab
                  eventKey="Waiting For Approval"
                  title="Waiting For Approval"
                  style={{ backgroundColor: "white" }}
                >
                  <EmployeeTablee />
                </Tab>
                <Tab
                  eventKey="Approved Employees"
                  title="Approved Employees"
                  style={{ backgroundColor: "white" }}
                >
                  <ApprovedEmployeesTable />
                </Tab>
              </Tabs>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default OfferApprovals;
