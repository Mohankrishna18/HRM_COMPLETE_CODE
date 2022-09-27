import React, { memo } from "react";
import { Row, Col, Card } from "react-bootstrap"
import AssignEmploymentDetailsTable from "./AssignEmploymentDetailsComponents/AssignEmploymentDetailsTable";


const AssignEmploymentDetailsMain = () => {
  return (
    <div>
      <Row>
        <Col>
          
<AssignEmploymentDetailsTable/>
        </Col>
      </Row>

    </div>
  );
};
export default AssignEmploymentDetailsMain;