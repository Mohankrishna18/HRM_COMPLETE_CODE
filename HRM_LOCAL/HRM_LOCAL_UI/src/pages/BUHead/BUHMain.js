import React from 'react';

import BHUApproval from "./BUHApproval";

import { Row, Col, Card, Container } from 'react-bootstrap';

function BUHMain() {
  return (
    
    <div style={{ paddingTop: '20px' }}>

    <Card className="example">

     <Card>

       <Card.Header>

         <Card.Body>

           <Card.Title>Approvals</Card.Title>

           <Card.Subtitle className="mb-2 text-muted">

          BUH Approval

           </Card.Subtitle>{" "}

           {/* <Container> */}

             <Row>

              <Col xs={12}>

               <BHUApproval/>

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

export default BUHMain;
