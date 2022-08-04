import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import HrEmployeesLeavesWaitingForApproval from "./HrEmployeesLeavesWaitingForApproval";

const HrLeavesToApproveMain = () => {
  return (
     <div style={{ paddingTop: '20px' }}>
     <Card responsive className="example">
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
           {/* <Container> */}
             <Row>
               <Col xs={12}>
               <HrEmployeesLeavesWaitingForApproval/>
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

export default HrLeavesToApproveMain;
