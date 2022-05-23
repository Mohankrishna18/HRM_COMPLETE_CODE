import React from "react";
import { Card, Button, Container } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import LeaveTable from "../LeaveManagement/LeaveTable";
import AddLeave from "../LeaveManagement/AddLeave";

function LeaveEmployee() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={6} md={8}>
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
          </Col>
        </Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row md={4}>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Loss Of Pay</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">3</Card.Subtitle>
                    {/* <Card.Text>12/60</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Comp Off</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">4</Card.Subtitle>
                    {/* <Card.Text>8 Today</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Earned Leaves</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">5</Card.Subtitle>
                    {/* <Card.Text></Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card border="warning">
                <Card.Body>
                  <h5>
                    {" "}
                    <Card.Title>Total Entitled</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      12
                    </Card.Subtitle>
                    {/* <Card.Text>12</Card.Text> */}
                  </h5>
                </Card.Body>
              </Card>
            </Card>
          </Col>

          {/* <Col>

<Card>
<Card.Body>
<h5>
{" "}

<Card.Title>Total Entitled</Card.Title>
{/* <Card.Text>12</Card.Text> */}
          {/* </h5>
</Card.Body>
</Card>
</Col> */}
        </Row>
        <Row style={{ paddingTop: 20 }}>
          <LeaveTable />
        </Row>
      </Container>
    </div>
  );
}

export default LeaveEmployee;
