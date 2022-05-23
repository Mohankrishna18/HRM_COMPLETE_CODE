import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import AddUser from './AddUser'

function SearchFields() {
    return (

        <Card responsive >
          <Card.Header>
            <Card.Body>
              <AddUser />
            </Card.Body>
            <Form style={{ padding: 20, paddingLeft: 40 }}>
              <Row >
                <Form.Group as={Col} md="3"  >
                  <Form.Label style={{}}>Employee Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Employee Name"
                  />
                </Form.Group>
                <Form.Group as={Col} md="3" >
                  <Form.Label>Company Name</Form.Label>
                  <Form.Select aria-label="Default select ">
                    <option>Select Company</option>
                    <option value="Arshaa Technologies1">Web Developer</option>
                    <option value="Arshaa Technologies2">Web Designer</option>
                    <option value="Arshaa Technologies3">Android Developer</option>
                    <option value="Arshaa Technologies4">Ios Developer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select aria-label="Default select ">
                    <option>Select Role</option>
                    <option value="COE">Web Developer</option>
                    <option value="Admin">Web Designer</option>
                    <option value="Hr Recuiter">Android Developer</option>
                    <option value="Ios Developer">Ios Developer</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md="3" style={{ paddingTop: '35px' }}>
                  <Button style={{ width: '300px', backgroundColor: "#3ccc08" }}>SEARCH</Button>
                </Form.Group>
              </Row></Form>

          </Card.Header>
        </Card>
      )
}

export default SearchFields