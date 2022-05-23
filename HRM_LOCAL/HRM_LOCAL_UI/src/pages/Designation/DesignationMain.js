import React from "react";
import { Col, Row ,Card,Container} from "react-bootstrap";

import Designation from "./DesignationComponents/Designation";

const DesignationMain = () => {
  return (
    <div  style={{ paddingTop: "20px" }}>
     <Card responsive>
        <Card.Header>
          <Card.Body>
            <Card.Title>Designations </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dashboard/Designations 
            </Card.Subtitle>{" "}
            <Container>
              <Row>
                <Col xs={12}>
                 <Designation />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
};

export default DesignationMain;


