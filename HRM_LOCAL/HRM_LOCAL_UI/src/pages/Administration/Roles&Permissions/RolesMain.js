import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import RoleEditableTable from "./RoleEditableTable";



// Testing purpose
const RolesMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title>Module</Card.Title>
            
            <Container>
              <Row>
                <Col xs={12}>
                  <RoleEditableTable />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};

export default RolesMain;
