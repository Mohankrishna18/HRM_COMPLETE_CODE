import React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap';
import ManagerTable from './ManagerTable'
const TaggedEmployeesMain = () => {
  return (
    <div style={{ paddingTop: '20px' }}>

      <Card responsive className="scroll">

        <Card.Header>

          <Card.Body>

            <Card.Title>List of Employees Tagged To Manager</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">

              Employees

            </Card.Subtitle>{" "}

            <Container>

              <Row>

                <Col xs={12}>

                  <ManagerTable />

                </Col>



              </Row>

            </Container>

          </Card.Body>

        </Card.Header>

      </Card>

    </div>
  )
}

export default TaggedEmployeesMain;