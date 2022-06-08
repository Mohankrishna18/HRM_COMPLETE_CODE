import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

// Testing purpose

import RolesCard from "./RolesCard";

const RolesMain = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title>Roles</Card.Title>

            <Container>
              <Row>
                <Col xs={12}>
                  <RolesCard />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};
// };
export default RolesMain;
