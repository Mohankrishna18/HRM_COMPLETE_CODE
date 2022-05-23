import React from "react";

import { Card, 
         Container,
         Row, 
         Col, 
         Form, 
         InputGroup, 
         FormControl, 
         Button } from "react-bootstrap";

function BankStatementTab() {

    return (
        <div>
            <Container style={{ paddingTop: 20 }} >
                <Row>
                    <Col>
                        <Card>
                            <Card.Title style={{ margin: 20 }}>
                                Basic Salary Information
                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>salary basis</Form.Label>
                                        <Form.Select aria-label=" select salary basis type">
                                            <option>Select Department</option>
                                            <option value="1">Hourly</option>
                                            <option value="2">Daily</option>
                                            <option value="3">Weekly</option>
                                            <option value="3">Monthly</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>salary amount</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>$</InputGroup.Text>
                                            <FormControl aria-label="per Month" />
                                        </InputGroup>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>Destination</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Destination</option>
                                            <option value="1">Web Designer</option>
                                            <option value="2">Web Developer</option>
                                            <option value="3">Android Developer</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                            <Card.Title style={{ margin: 20 }}>
                                PF Information
                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>PF Contribution</Form.Label>
                                        <Form.Select aria-label=" select PF Contribution">
                                            <option>Select PF Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>PF No.</Form.Label>
                                        <Form.Select aria-label=" select PF Contribution">
                                            <option>Select PF Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                   </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>Employee PF rate</Form.Label>
                                        <Form.Select aria-label=" select PF Contribution">
                                            <option>Select PF Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>additional rate</Form.Label>
                                        <Form.Select aria-label=" select additional Contribution">
                                            <option>Select additional rate</option>
                                            <option value="1">0%</option>
                                            <option value="1">1%</option>
                                            <option value="1">2%</option>
                                            <option value="1">3%</option>
                                            <option value="1">4%</option>
                                            <option value="1">5%</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>Total rate</Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="N/A"
                                                aria-label="Total rate"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                            </Card.Body>
                            <Card.Title style={{ margin: 20 }}>
                                ESI Information
                            </Card.Title>
                            <Card.Body>
                                <Row>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>ESI Contribution</Form.Label>
                                        <Form.Select aria-label=" select PF Contribution">
                                            <option>Select ESI Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>ESI No.</Form.Label>
                                        <Form.Select aria-label=" select ESI Contribution">
                                            <option>Select ESI Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>Employee ESI rate</Form.Label>
                                        <Form.Select aria-label=" select ESI Contribution">
                                            <option>Select ESI Contribution</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>additional rate</Form.Label>
                                        <Form.Select aria-label=" select additional Contribution">
                                            <option>Select additional rate</option>
                                            <option value="1">0%</option>
                                            <option value="1">1%</option>
                                            <option value="1">2%</option>
                                            <option value="1">3%</option>
                                            <option value="1">4%</option>
                                            <option value="1">5%</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" style={{ padding: 15 }} >
                                        <Form.Label>Total rate</Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="N/A"
                                                aria-label="Total rate"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Row>
                                <Button>save</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default BankStatementTab;


