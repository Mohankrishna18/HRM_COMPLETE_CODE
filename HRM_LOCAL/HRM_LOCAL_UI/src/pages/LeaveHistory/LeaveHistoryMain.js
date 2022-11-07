import React from 'react'
import LeaveTable from './LeaveTable'
import { Row, Col, Card, Container } from 'react-bootstrap';
const Leavehistoryofemployee = () => {
  return (
    <div style={{ paddingTop: '0px' }}>
      <Card responsive className="scroll">
        <Card.Header  style={{backgroundColor:"white"}}>
          <Card.Body>
            <Card.Title>Employee Leaves</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              EmployeeLeaves
            </Card.Subtitle>{" "} */}
            {/* <Container> */}
              <Row>
                <Col xs={12}>
                  <LeaveTable />
                </Col>
              </Row>
            {/* </Container> */}
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  )
}



export default Leavehistoryofemployee;


