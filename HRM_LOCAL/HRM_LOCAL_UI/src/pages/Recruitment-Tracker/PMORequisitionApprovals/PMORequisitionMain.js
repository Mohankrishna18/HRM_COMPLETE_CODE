import React from "react";

import PMORequisitionApprovals from "./PMORequisitionApprovals";

import { Row, Col, Card, Container } from "react-bootstrap";

function PMORequisitionMain() {
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* <Card className="scroll">
        <Card>
          <Card.Header>
            <Card.Body>
              <Card.Title> Requisition Approvals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                BUH Approval
              </Card.Subtitle>{" "}
              <Row>
                <Col xs={12}>
                  <PMORequisitionApprovals />
                </Col>
              </Row>
              <Row></Row>
            </Card.Body>
          </Card.Header>
        </Card>
      </Card> */}
      <PMORequisitionApprovals />
    </div>
  );
}

export default PMORequisitionMain;
