import React from "react";
import { Col, Row ,Card,Container} from "react-bootstrap";

import Designation from "./DesignationComponents/Designation";
import EditableDesignation from "./DesignationComponents/DesignationWithMtable";

const DesignationMain = () => {
  return (
    <div  style={{ paddingTop: "20px" }}>
     <Card responsive className="scroll">
        <Card.Header>
          <Card.Body>
            <Card.Title>Designations </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dashboard/Designations 
            </Card.Subtitle>{" "}
            <Container>
              <Row>
                <Col xs={12}>
                 <EditableDesignation />
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


