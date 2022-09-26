import React from 'react';

import { Row, Col, Card, Container, Tabs, Tab } from 'react-bootstrap';
import AssignEmploymentDetailsMain from '../AssignEmploymentDetails/AssignEmploymentDetailsMain';
import HrEmployeesLeavesWaitingForApproval from '../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval';
import TaskMain from '../TimeSheet/EmployeeTimesheet/TaskMain';
import EmploymentDetailsTabbyPmo from './EmploymentDetailsTabbyPmo';
import PMOApproval from './PMOApproval';

//Empty Commit
function PMOMain() {
  return (
    <div style={{ paddingTop: '0px' }}>
      <Card className="scroll" style={{ backgroundColor: "white"}}>

        <Card.Header style={{ backgroundColor: "white"}}>
          <Card.Body style={{ backgroundColor: "white"}}>
            <Card.Title>Approvals</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              PMO Approval
            </Card.Subtitle>{" "} 
            <Row>
              <Col xs={12}>
                <Tabs
                  defaultActiveKey="Onboarding Approvals"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  style={{
                    justifyContent: "left",
                    color: "white",
                    backgroundColor: "",
                    fontSize: "19px",
                    padding: 0,
                  }}
                >
                  <Tab
                    eventKey="Onboarding Approvals"
                    title="Onboarding Approvals"
                    style={{ backgroundColor: "white" }}
                  >
                    <PMOApproval />
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
                  <Tab
                    eventKey="Assign Employment Details"
                    title="Assign Employment Details "
                    style={{ backgroundColor: "white" }}
                  >
                    <AssignEmploymentDetailsMain/>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
            {/* </Container> */}
          </Card.Body>
        </Card.Header>

      </Card>

    </div>

  )
}

export default PMOMain;
