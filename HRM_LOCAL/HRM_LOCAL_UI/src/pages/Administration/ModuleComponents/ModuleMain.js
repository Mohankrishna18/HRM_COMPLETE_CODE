import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ModuleHeading from "./ModuleHeading";

const ModuleMain = () => {
  return (
    <Row>
      <Col>
        <Card responsive className="scroll">
          <Card.Header>
            <Card.Body>
              <Card.Title>Modules</Card.Title>
            
              <Container>
                <Row>
                  <Col xs={12}>
                    <ModuleHeading />
                    
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card.Header>
        </Card>
      </Col>
    </Row>
  );
};

export default ModuleMain;
