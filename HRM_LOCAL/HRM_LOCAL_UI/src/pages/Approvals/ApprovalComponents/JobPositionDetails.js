import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function JobPositionDetails(props) {
  console.log(props.viewOnboard);
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
  const employeeid = userData1.data.employeeId;
  const handleClose = () => setShow();



  var tempDate = new Date(props.viewOnboard.dateOfBirth);

  var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
console.log(dob)
  return (
    <div style={{paddingBottom:"20px"}}>

       <Card.Title>
        <Row>
          <Col> <h5> Job Position Details:</h5></Col>
          
       </Row>
      
      </Card.Title>
      <Card.Body >
      <Row>
        <Col>
        <Row style={{ paddingLeft: 55, paddingBottom: 30 ,paddingTop:20}}>
          <Col>
            <Card.Subtitle>
              Client Name
            </Card.Subtitle>
          </Col>
          <Col md={{ offset: 1 }}>
            <Card.Subtitle style={{ color: "#999897" }}>
              {props.viewOnboard.firstName}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
          <Col>
            <Card.Subtitle>
           Requisition ID
            </Card.Subtitle>
          </Col>
          <Col md={{ offset: 1 }}>
            <Card.Subtitle style={{ color: "#999897" }}>
              {props.viewOnboard.middleName}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
          <Col>
          
            <Card.Subtitle>
           Job Title
            </Card.Subtitle>
          </Col>
          <Col md={{ offset: 1 }}>
            <Card.Subtitle style={{ color: "#999897" }}>
              {props.viewOnboard.lastName}
            </Card.Subtitle>
          </Col>
        </Row>
    
        <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
          <Col>
            <Card.Subtitle>
             Requisition By
            </Card.Subtitle>
          </Col>
          <Col md={{ offset: 1 }}>
            <Card.Subtitle style={{ color: "#999897" }}>
              {props.viewOnboard.email}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row style={{ paddingLeft: 55, paddingBottom: 30 }}>
          <Col>
            <Card.Subtitle
            >
         Requisition Initiated On

            </Card.Subtitle>
          </Col>
          <Col md={{ offset: 1 }}>
            <Card.Subtitle style={{ color: "#999897" }}>
              {props.viewOnboard.email}
            </Card.Subtitle>
          </Col>
      </Row>
     </Col>
     </Row>
      </Card.Body>
    
    </div>
  );
}
export default JobPositionDetails;
