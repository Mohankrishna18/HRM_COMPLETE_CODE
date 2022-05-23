import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import EmpTable from './AdminAttendanceTable'





function Admin() {
  return (

    <Card   >
      <Card.Header>
      

      <Card.Body>
        <Card.Title>Attendance</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Attendance/Dashboard</Card.Subtitle>
      </Card.Body>

      <Form>
        <Row >
          <Form.Group as={Col} md="3"  >

            <Form.Label >Employee Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee Name"
            />
        
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Select Month</Form.Label>
            <Form.Select aria-label="Default select ">
              <option>-</option>
              <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Select Year</Form.Label>
            <Form.Select aria-label="Default select ">
              <option>-</option>
              <option value="1">2019</option>
             <option value="2">2020</option>
              <option value="3">2021</option>
              <option value="4">2022</option>
             <option value="5">2023</option>
             <option value="6">2024</option>
            </Form.Select>
          </Form.Group>
          

            <Form.Group as={Col} md="3" style={ {paddingTop:'30px' } }>

                  <Button style={{width:'200px', backgroundColor: "#55CE63"}}>SEARCH</Button>

              </Form.Group>
              {/* <Form.Group as={Col} md="3" style={ {paddingTop:'30px' } }>
 <EmpTable/>


</Form.Group> */}
         
        </Row></Form>

      </Card.Header>
     
    </Card>


  )
}

export default Admin;
