import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import EmpTable from './AdminAttendanceTable'

//comment


function Admin() {
  return (

    <Card   >
      <Card.Header>


        <Card.Body>
          <Card.Title>Attendance</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Attendance/Dashboard</Card.Subtitle>
        </Card.Body>

        <Form style={{ padding: 10 }}>
          <Row >
            <Col>
              <Form.Group as={Col}  >

                <Form.Label >Employee Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Employee Name"
                />

              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} >
                <Form.Label>Select Month</Form.Label>
                <Form.Select aria-label="Default select ">
                  <option>Select</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} >
                <Form.Label>Select Year</Form.Label>
                <Form.Select aria-label="Default select ">
                  <option>Select</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>

              <Form.Group as={Col} m style={{ paddingTop: '30px' }}>

                <Button style={{ width: '100%', backgroundColor: "#08bf1a" }}>SEARCH</Button>

              </Form.Group>
            </Col>

          </Row></Form>
        <Row style={{ paddingTop: 20, paddingLeft: 10 }}>
          <EmpTable />
        </Row>
      </Card.Header>

    </Card>


  )
}

export default Admin;
