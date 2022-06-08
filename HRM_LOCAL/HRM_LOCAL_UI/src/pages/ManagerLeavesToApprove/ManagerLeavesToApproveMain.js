import React from 'react';
import ApproveLeaveTable from "./ManagerApproval";
import { Row, Col, Card, Container } from 'react-bootstrap';

const ManagerLeavesToApproveMain = () => {
  return (
     <div style={{ paddingTop: '20px' }}>
     <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>EmployeeLeaves Tagged To Manager</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
           <Container>
             <Row>
               <Col xs={12}>
               <ApproveLeaveTable/>
               </Col>

             </Row>
           </Container>
         </Card.Body>
       </Card.Header>
     </Card>
   </div>

  )
}

export default ManagerLeavesToApproveMain