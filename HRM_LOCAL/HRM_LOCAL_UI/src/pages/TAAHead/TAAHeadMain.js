import React from "react";

import { Row, Col, Card, Container, Tabs, Tab } from "react-bootstrap";
import HrEmployeesLeavesWaitingForApproval from "../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval";
import TaskMain from "../TimeSheet/EmployeeTimesheet/TaskMain";
import TAAHeadApproval from "./TAAHeadApproval";

function TAAHeadMain() {
  return (
    <div style={{ paddingTop: "0px" }}>
      <Card className="scroll">
        
          <Card.Header style={{backgroundColor:"white"}}> 
            <Card.Body>
              <Card.Title>Approvals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                TAAHeadApproval
              </Card.Subtitle>{" "}
              {/* <Container> */}
              <Row>
                <Col xs={12}>
                {/* <TAAHeadApproval /> */}
                  <Tabs
                    defaultActiveKey="Onboarding Approvals"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    style={{
                      justifyContent: "left",
                      color: "white",
                      backgroundColor: "white",
                      fontSize: "19px",
                      padding: 0,
                    }}
                  >
                    <Tab
                      eventKey="Onboarding Approvals"
                      title="Onboarding Approvals"
                      style={{ backgroundColor: "white" }}
                    >
                      {/* <TAAHeadApproval /> */}
                      <HrEmployeesLeavesWaitingForApproval/>
                    </Tab>
                    <Tab
                      eventKey="Leave Approvals"
                      title="Leave Approvals"
                      style={{ backgroundColor: "white" }}
                    >
                      <HrEmployeesLeavesWaitingForApproval /> 
                    </Tab>
                    <Tab
                      eventKey="Timesheet Approvals"
                      title="Timesheet Approvals"
                      style={{ backgroundColor: "white" }}
                    > 
                      <TaskMain />
                    </Tab>
                  </Tabs>
                </Col>
              </Row>
              {/* </Container> */}
            </Card.Body>
          </Card.Header>
        </Card>
    
    </div>
  );
}

export default TAAHeadMain;