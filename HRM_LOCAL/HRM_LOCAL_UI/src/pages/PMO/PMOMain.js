import React from 'react';
import PMOApproval from "./PMOApproval";
import { Row, Col, Card, Container } from 'react-bootstrap';

function PMOMain() {
  return (
    <div style={{ paddingTop: '20px' }}>
    <Card className="example">
     <Card>
       <Card.Header>
         <Card.Body>
           <Card.Title>Approvals</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
          PMO Approval
           </Card.Subtitle>{" "}
           {/* <Container> */}
             <Row>
              <Col xs={12}>
               <PMOApproval/>
               </Col>

             </Row>
             <Row>
              
             </Row>
           {/* </Container> */}
         </Card.Body>
       </Card.Header>
     </Card>
     </Card>

   </div>

  )
}

export default PMOMain;
