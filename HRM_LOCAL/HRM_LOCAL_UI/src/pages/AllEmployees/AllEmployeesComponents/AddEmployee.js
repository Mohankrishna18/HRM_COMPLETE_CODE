import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FaFontAwesome } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddEmployee() {
  let employee = "Add Module";
  const [show, setShow] = useState(false);
  const notify=()=>toast("Employee data is added");

  
  const handleClose = () =>
  {
    setShow(false);
    notify();
  }
  const handleShow = () => setShow(true);

  return (
    <div>


      <Button  onClick={handleShow} style={{backgroundColor: "#eb4509", float:"right"} }><FaFontAwesome icon=" add" />{employee} </Button>
      <Modal size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Add Module</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="formLabel"  style={ {padding :15} }>
            <Row className="mb-5" >
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6"  style={ {padding :15 } } controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="User name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="mail"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom02">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Employee Id</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Employee ID"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom02">
                <Form.Label>Joinning Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Phone No</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="phone Number"
                /></Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Company</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Company</option>
                  <option value="1">Golobal Technologies</option>
                  <option value="2">Delta Infotech</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Department</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Department</option>
                  <option value="1">Web Development</option>
                  <option value="2">IT Management</option>
                  <option value="3">Marketing</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="6" style={ {padding :15 } } controlId="validationCustom01">
                <Form.Label>Destination</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Select Destination</option>
                  <option value="1">Web Designer</option>
                  <option value="2">Web Developer</option>
                  <option value="3">Android Developer</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button variant="warning" style={{backgroundColor: "#e18300"}} onClick={handleClose}>
            Submit
          </Button>
          </Form>
         
        </Modal.Body>

        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>

    </div>
  );
}
export default AddEmployee;