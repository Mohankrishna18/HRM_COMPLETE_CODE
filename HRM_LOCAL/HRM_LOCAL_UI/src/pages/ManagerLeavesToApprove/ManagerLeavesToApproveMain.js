import React from 'react';
import ApproveLeaveTable from "./ManagerApproval";
import EmployeeLeaveHistory from "../ManagerLeaveHistory/ManagerLeaveHistory";
import { Row, Col, Card, Container } from 'react-bootstrap';
import ManagerEmployeesLeavesWaitingForApproval from "./ManagerEmployeesLeavesWaitingForApproval";

const ManagerLeavesToApproveMain = () => {
  return (
     <div style={{ paddingTop: '20px' }}>
     <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
           {/* <Container> */}
             <Row>
               <Col xs={12}>
               <ManagerEmployeesLeavesWaitingForApproval/>
               </Col>

             </Row>
             <Row>
              

             </Row>
           {/* </Container> */}
         </Card.Body>
       </Card.Header>
     </Card>
     <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>My Teams Leave History</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           Manager Teams Leaves History
           </Card.Subtitle>{" "}
           {/* <Container> */}
             <Row>
              <Col xs={12}>
               <EmployeeLeaveHistory/>
               </Col>

             </Row>
             <Row>
              
             </Row>
           {/* </Container> */}
         </Card.Body>
       </Card.Header>
     </Card>

   </div>

  )
}

export default ManagerLeavesToApproveMain;