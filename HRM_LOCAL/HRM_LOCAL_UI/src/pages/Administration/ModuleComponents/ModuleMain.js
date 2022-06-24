import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import ModuleEditableTable from "./ModuleMTable";


// Testing purpose
const ModuleMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title>Modules</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Modules{" "}
            </Card.Subtitle>
            <Container>
              <Row>
                <Col xs={12}>
                  <ModuleEditableTable />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};

export default ModuleMain;
