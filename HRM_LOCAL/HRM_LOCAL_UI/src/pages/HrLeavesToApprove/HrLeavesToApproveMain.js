import React from 'react';
import { Row, Col, Card, Container, Tabs, Tab } from 'react-bootstrap';
import TaskMain from '../TimeSheet/EmployeeTimesheet/TaskMain';
import HrEmployeesLeavesWaitingForApproval from "./HrEmployeesLeavesWaitingForApproval";

const HrLeavesToApproveMain = () => {
  return (
    <div style={{ paddingTop: '20px' }}>

      <Card responsive className="scroll" style={{ backgroundColor: "white" }}>
        <Card.Header style={{ backgroundColor: "white"}}>
          <Card.Body style={{ backgroundColor: "white" }}>
            <Card.Title> Approvals </Card.Title>
            <Card.Subtitle> Approvals / Approvals</Card.Subtitle>

            <Row>
              <Col xs={12}>
                <Tabs
                  defaultActiveKey="Leave Approvals"
                  id="uncontrolled-tab-example"
                  className="mb-3" 
                  style={{ justifyContent: "left", color: "white", backgroundColor: "white", fontSize: "19px", padding: 0, }}
                >
                  <Tab eventKey="Leave Approvals" title="Leave Approvals" style={{ backgroundColor: "white" }}>
                    <HrEmployeesLeavesWaitingForApproval />
                  </Tab>
                  <Tab eventKey="Timesheet Approvals" title="Timesheet Approvals" style={{ backgroundColor: "white" }} >
                    <TaskMain />
                  </Tab>
                </Tabs>
              </Col>
            </Row>

          </Card.Body>
        </Card.Header>
      </Card>

      {/* <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
          
             <Row>
               <Col xs={12}>
               <HrEmployeesLeavesWaitingForApproval/>
               </Col>

             </Row>
             <Row>

             </Row>
         
         </Card.Body>
       </Card.Header>
     </Card> */}
    </div>

  )
}

export default HrLeavesToApproveMain;