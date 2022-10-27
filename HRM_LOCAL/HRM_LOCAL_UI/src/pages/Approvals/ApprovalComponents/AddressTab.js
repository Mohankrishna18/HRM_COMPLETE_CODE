import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";


function AddressTab(props) {

  return (
    <div style={{paddingBottom:"77px"}}>
    <Card.Title>
                <Row>
                    <Col> <h5>Address:</h5></Col>
                </Row>
            </Card.Title>

            <Card.Body style={{ paddingLeft: 20 }}>
                <Row>
                    <Col>
                        <Card.Subtitle style={{ padding: 10 }}>
                            <h5>Permanent Address:</h5>
                        </Card.Subtitle>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col >
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Address:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.permanentAdress}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    State:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.permanentState}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Country:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.permanentCountry}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Pincode:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.permanentPincode}
                                </Card.Text>
                            </Col>
                        </Row>

                    </Col>
                    <Col>

                        <Card.Subtitle style={{ padding: 10 }}>
                            <h5>Current Address:</h5>
                        </Card.Subtitle>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Address:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.currentAdress}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    State:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.currentState}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Country:
                                </Card.Subtitle>
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.currentCountry}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingLeft: 50 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Pincode:
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                                    {props.viewOnboard.currentPincode}
                                </Card.Text>
                            </Col>
                        </Row>

                    </Col>
                </Row>

            </Card.Body>
           
            </div>
  );
}
export default AddressTab;
