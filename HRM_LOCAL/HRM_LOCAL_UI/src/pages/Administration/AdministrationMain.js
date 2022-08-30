import React from 'react'
import UserMain from './Users/UserMain';
import {Card, Row, Col, Container} from 'react-bootstrap';

const AdministrationMain =()=> {
return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title>Users</Card.Title>
            {/* <Container> */}
              <Row>
                <Col xs={12}>
                  <UserMain/>
                </Col>
              </Row>
            {/* </Container> */}
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
)
}



export default AdministrationMain;


