import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalView = (props) => {
 
  var today = new Date(props.viewOnboard.startDate);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var startDate = dd + '-' + mm + '-' + yyyy;

  var today = new Date(props.viewOnboard.endDate);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var endDate = dd + '-' + mm + '-' + yyyy;


  
  // var tempDate = new Date(props.viewOnboard.dateOfJoining);
  // var dob = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');
  // console.log(dob)

  return (
    <div>

      {/* Attributes / fields */}
      <Row style={{ marginTop: 20 }}>
        <Col>
          <Card style={{ padding: 30, paddingBottom: 20 }}>

            {/* client name */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Client / Company Name:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.clientName}
                </Card.Text>
              </Col>
            </Row>

            {/* email */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Client/ Company Email:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.email}
                </Card.Text>
              </Col>
            </Row>


            {/* phone number */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Phone Number:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.phoneNumber}
                </Card.Text>
              </Col>
            </Row>

            {/* POC Name */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  POC:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.pocName}
                </Card.Text>
              </Col>
            </Row>

            {/* start date */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Start Date:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {startDate}
                </Card.Text>
              </Col>
            </Row>

            {/* end date */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  End Date:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {endDate}
                </Card.Text>
              </Col>
            </Row>

            {/* status */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Status:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.status}
                </Card.Text>
              </Col>
            </Row>

            {/* country */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Country:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.country}
                </Card.Text>
              </Col>
            </Row>

            {/* address */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Address:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.address}
                </Card.Text>
              </Col>
            </Row>

            {/* Tag
             <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Tag:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.tag}
                </Card.Text>
              </Col>
            </Row> */}



            {/* note */}
            <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
              <Col>
                <Card.Subtitle style={{ padding: 10 }}>
                  Notes/Description:
                </Card.Subtitle>{" "}
              </Col>
              <Col md={{ offset: 1 }}>
                <Card.Text style={{ paddingBottom: 0 }}>
                  {props.viewOnboard.note}
                </Card.Text>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ApprovalView;