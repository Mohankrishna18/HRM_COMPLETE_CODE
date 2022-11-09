import React from 'react';

import BHUApproval from "./BUHApproval";

import { Row, Col, Card, Container } from 'react-bootstrap';

function BUHMain() {
  return (
    
    <div style={{ paddingTop: '10px' ,backgroundColor:"white"}} className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Approvals</Card.Title>
             <Row>
              <Col xs={12}>
               <BHUApproval/>
               </Col>
             </Row>
         </Card.Body>
       </Card.Header>
   </div>
  )
}

export default BUHMain;