import React from "react";
import ApproveLeaveTable from "./ManagerApproval";
import EmployeeLeaveHistory from "../ManagerLeaveHistory/ManagerLeaveHistory";
import { Row, Col, Card, Container, Tabs, Tab } from "react-bootstrap";
import ManagerEmployeesLeavesWaitingForApproval from "./ManagerEmployeesLeavesWaitingForApproval";
import TaskMain from "../TimeSheet/EmployeeTimesheet/TaskMain";
import ApprovalsMain from "../TimeSheet/irmApproval/ApprovalsMain";
import IRMResignationMain from "./IRMResignationMain";

const ManagerLeavesToApproveMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="example" style={{ backgroundColor: "white" }}>
        <Card.Header style={{ backgroundColor: "white" }}>
          <Card.Body style={{ backgroundColor: "white" }}>
            <Card.Title> Approvals </Card.Title>
            <Card.Subtitle> Approvals / Approvals</Card.Subtitle>

            <Row>
              <Col xs={12}>
                <Tabs
                  defaultActiveKey="Leave Approvals"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  style={{
                    justifyContent: "left",
                    color: "white",
                    backgroundColor: "white",
                    fontSize: "19px",
                    paddingTop: 20,
                  }}
                >
                  <Tab
                    eventKey="Leave Approvals"
                    title="Leave Approvals"
                    style={{ backgroundColor: "white" }}
                  >
                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Card.Body>
                        <Card.Title>Leaves Waiting For Approval</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          EmployeeLeaves
                        </Card.Subtitle>{" "}
                        <Row>
                          <Col xs={12}>
                            <ManagerEmployeesLeavesWaitingForApproval />
                          </Col>
                        </Row>
                        <Row></Row>
                      </Card.Body>
                    </Card.Header>

                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Card.Body>
                        <Card.Title>My Teams Leave History</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Manager Teams Leaves History
                        </Card.Subtitle>{" "}
                        {/* <Container> */}
                        <Row>
                          <Col xs={12}>
                            <EmployeeLeaveHistory />
                          </Col>
                        </Row>
                        <Row></Row>
                        {/* </Container> */}
                      </Card.Body>
                    </Card.Header>
                  </Tab>
                  <Tab
                    eventKey="Timesheet Approvals"
                    title="Timesheet Approvals"
                    style={{ backgroundColor: "white" }}
                  >
                    <ApprovalsMain />
                  </Tab>
                  <Tab
                    eventKey="Resignation Approvals"
                    title="Resignation Approvals"
                    style={{ backgroundColor: "white" }}
                  >
                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Card.Body>
                        <Card.Title>Resignation Approvals</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Resignation Approvals
                        </Card.Subtitle>{" "}
                        {/* <Container> */}
                        <Row>
                          <Col xs={12}>
                            <IRMResignationMain />
                          </Col>
                        </Row>
                        <Row></Row>
                        {/* </Container> */}
                      </Card.Body>
                    </Card.Header>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Card.Body>
        </Card.Header>
      </Card>
      {/* <Card className="scroll">
     <Card>
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
            
             <Row>
               <Col xs={12}>
               <ManagerEmployeesLeavesWaitingForApproval/>
               </Col>

             </Row>
             <Row>
             </Row>
          
         </Card.Body>
       </Card.Header>
     </Card>
     <Card>
       <Card.Header>
         <Card.Body>
           <Card.Title>My Teams Leave History</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           Manager Teams Leaves History
           </Card.Subtitle>{" "}
         
             <Row>
              <Col xs={12}>
               <EmployeeLeaveHistory/>
               </Col>

             </Row>
             <Row>  
             </Row>
           
         </Card.Body>
       </Card.Header>
     </Card>
     </Card> */}
    </div>
  );
};

export default ManagerLeavesToApproveMain;
