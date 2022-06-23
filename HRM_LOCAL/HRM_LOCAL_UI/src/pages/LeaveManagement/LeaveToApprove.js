import React, { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import AddEmployee from "../AllEmployees/AllEmployeesComponents/AddEmployee";
import Employee from "../AllEmployees/AllEmployeesComponents/Employee";
import BootstrapDatePickerComponent from "../LeaveManagement/Datepicker";
import LeaveTable from "../LeaveManagement/LeaveTable";
import AddLeave from "../LeaveManagement/AddLeave";

import LoadingOverlay from "react-loading-overlay";
import styled, { css } from "styled-components";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ApproveLeaveTable from "./ApproveTable";

function LeaveAdmin() {
  const leavefilter=(e) =>{
    const table=employeeleave.filter((m) =>m.yearId)

  }
  return (

    <div>
      {/* <Container>
        <Row> */}
          {/* <Col xs={6} md={8}>
            <Card.Body>
              <Card.Title>Leaves</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard/Leaves
              </Card.Subtitle>
            </Card.Body>
          </Col>
          <Col xs={6} md={4}>
            <AddLeave />

            {/* <Button
onClick={handleShow}
style={{ backgroundColor: "#eb4509", float: "right" }}
>
<h4>Add Leave</h4>
{employee}{" "}
</Button> */}
          {/* </Col>
        </Row> */}
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        {/* <Row>
          <Col xs={6} md={3}>
            <Card>
              <Card.Body>
                <h5>
                  {" "}
                  <Card.Title>Today Presents</Card.Title>
                  <Card.Text>12/60</Card.Text>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Body>
                <h5>
                  {" "}
                  <Card.Title>Planned Leaves</Card.Title>
                  <Card.Text>8 Today</Card.Text>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Body>
                <h5>
                  {" "}
                  <Card.Title>Unplanned Leaves</Card.Title>
                  <Card.Text>0 Today</Card.Text>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              <Card.Body>
                <h5>
                  {" "}
                  <Card.Title>Pending Requests</Card.Title>
                  <Card.Text>12</Card.Text>
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        {/* <Row style={{ paddingTop: 20 }}>
          <Col>
            <Form.Group className="mb-3"> */}
              {/* <Form.Label>EmployeeName</Form.Label> */}
              {/* <Form.Control
                placeholder="EmployeeID"
                style={{ height: "3.7rem" }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="Leave Type">
                <Form.Select aria-label="Default select">
                  <option>-- Select --</option>
                  <option value="Medical Leave">Medical Leave</option>
                  <option value="Casual Leave">Casual Leave</option>
                  <option value="Loss Of Pay">Loss Of Pay</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <FloatingLabel controlId="floatingSelectGrid" label="LeaveStatus">
                <Form.Select aria-label="Default select">
                  <option>-- Select --</option>
                  <option value="Pending">Pending</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </Form.Select>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Select from Date"
              >
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Select to Date"
              >
                <Form.Control
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col>
            <Button
              style={{
                width: 175,
                backgroundColor: "#3ccc08",
                height: "3.5rem",
              }}
              onClick={() => setLoaded(!loaded)}
            >
              SEARCH
            </Button>
          </Col>
        </Row>
        <Row style={{ paddingTop: 20 }}> */} 

<div style={{ paddingTop: '20px' }}>
     <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
           <Container>
             <Row>
               <Col xs={12}>
               <ApproveLeaveTable />
               </Col>

             </Row>
           </Container>
         </Card.Body>
       </Card.Header>
     </Card>
   </div>

          
        {/* </Row>
      </Container> */}
    </div>
  );
}

export default LeaveAdmin;
