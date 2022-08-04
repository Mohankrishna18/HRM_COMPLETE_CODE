import React from 'react';

import TAAHeadApproval from "./TAAHeadApproval";

import { Row, Col, Card, Container } from 'react-bootstrap';

function TAAHeadMain() {
  return (
    
    <div style={{ paddingTop: '20px' }}>

    <Card className="example">

     <Card>

       <Card.Header>

         <Card.Body>

           <Card.Title>Approvals</Card.Title>

           <Card.Subtitle className="mb-2 text-muted">

           TAAHeadApproval

           </Card.Subtitle>{" "}

           {/* <Container> */}

             <Row>

              <Col xs={12}>

               <TAAHeadApproval/>

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

export default TAAHeadMain
