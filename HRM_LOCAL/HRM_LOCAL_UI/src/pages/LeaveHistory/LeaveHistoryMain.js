import React from 'react'
import LeaveEmployeeHistory from './LeaveToApply';
import { Row, Col, Card, Container } from 'react-bootstrap';
const LeaveHistoryMain = () => {
  return (
    <div>
    <div style={{ paddingTop: '20px' }}>
     <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>History of EmployeesLeaves</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           Employee Leaves
           </Card.Subtitle>{" "}
           <Container>
             <Row>
               <Col xs={12}>
               <LeaveEmployeeHistory />
               </Col>

             </Row>
           </Container>
         </Card.Body>
       </Card.Header>
     </Card>
   </div>
   </div>
   
  )
}

export default LeaveHistoryMain
