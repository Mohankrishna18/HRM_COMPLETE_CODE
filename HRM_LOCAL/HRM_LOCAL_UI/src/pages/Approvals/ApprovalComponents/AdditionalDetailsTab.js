import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function AditionalDetailsTab(props) {
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);
 
  return (
    <div>
      {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Additional Details
                </Card.Title>
            </Card> */}

      <Form  style={{ padding: 10 }}>
        <Row className="mb-5">
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Passport Number</Form.Label>
            <Form.Control
              type="text"
              controlId="passportNo"
              value={props.viewOnboard.passportNo}
              maxLength={15}
              name="passportNo"
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Passport Expiry Date</Form.Label>
            <Form.Control
              type="date"
              controlId="passportExpiryDate"
              name="passportExpiryDate"
              value={props.viewOnboard.passportExpiryDate}
              min={new Date()}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>PAN Card Number</Form.Label>
            <Form.Control
              type="text"
              controlId="panNumber"
              name="panNumber"
              maxLength={50}
              value={props.viewOnboard.panNumber}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Aadhar Card Number *</Form.Label>
            <Form.Control
              required
              type="number"
              controlId="aadharNumber"
              name="panNumber"
              maxLength={12}
              value={props.viewOnboard.aadharNumber}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>UAN Number</Form.Label>
            <Form.Control
              type="text"
              controlId="uanNumber"
              name="uanNumber"
              value={props.viewOnboard.uanNumber}
              maxLength={12}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Bank Name *</Form.Label>
            <Form.Control
              required
              type="text"
              controlId="bankName"
              name="bankName"
              maxLength={50}
              value={props.viewOnboard.bankName}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Bank Account Number *</Form.Label>
            <Form.Control
              required
              type="number"
              controlId="accountNumber"
              name="accountNumber"
              maxLength={50}
              value={props.viewOnboard.accountNumber}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>IFSC Code *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="IFSC Code"
              controlId="ifscCode"
              name="ifscCode"
              maxLength={50}
              value={props.viewOnboard.ifscCode}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Branch Name *</Form.Label>
            <Form.Control
              required
              type="text"
              controlId="branchName"
              name="branch"
              maxLength={50}
              value={props.viewOnboard.branch}
            ></Form.Control>
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
}
export default AditionalDetailsTab;
