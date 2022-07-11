import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";


function AddressTab(props) {

  return (
    <div>
      <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Permanent Address
                </Card.Title>
            </Card>

      <Form style={{ padding: 10 }}>
        <Row className="mb-5">
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Address *</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={4}
              type="text"
              controlId="permanentAdress"
              value={props.viewOnboard.permanentAdress}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>State *</Form.Label>
            <Form.Control
              required
              type="text"
              name="permanentState"
              controlId="permanentState"
              maxLength={50}
              value={props.viewOnboard.permanentState}
            ></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Country *</Form.Label>
            <Form.Control
              required
              type="text"
              name="permanentCountry"
              controlId="permanentCountry"
              maxLength={50}
              // options={countries}
              value={props.viewOnboard.permanentCountry}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Pincode *</Form.Label>
            <Form.Control
              required
              type="number"
              controlId="permanentPincode"
              name="permanentPincode"
              value={props.viewOnboard.permanentPincode}
            ></Form.Control>
          </Form.Group>
          <Row>
            <Card
              style={{
                marginLeft: 10,
                marginRight: 0,
                marginTop: 20,
                backgroundColor: "#FAFDD0",
              }}
            >
              <Card.Title style={{ margin: 20, textAlign: "center" }}>
                Current Address
              </Card.Title>
            </Card>
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Address *</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                type="text"
                placeholder="Address"
                controlId="currentAdress"
                value={props.viewOnboard.currentAdress}
                name="currentAdress"
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label>State *</Form.Label>
              <Form.Control
                required
                type="text"
                name="currentState"
                controlId="currentState"
                value={props.viewOnboard.currentState}
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label>Country *</Form.Label>
              <Form.Control
                required
                type="text"
                value={props.viewOnboard.currentCountry}
              ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label>Pincode *</Form.Label>
              <Form.Control
                required
                type="number"
                controlId="currentPincode"
                value={props.viewOnboard.currentPincode}
                name="currentPincode"
                maxLength={6}
              ></Form.Control>
            </Form.Group>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
export default AddressTab;
