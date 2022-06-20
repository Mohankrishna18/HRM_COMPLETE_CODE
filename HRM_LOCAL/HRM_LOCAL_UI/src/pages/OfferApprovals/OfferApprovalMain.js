import React from "react";
import OfferApprovals from "./OfferApprovalComponents/OfferApprovals";
import { Row, Col } from "react-bootstrap";
function OfferApprovalMain() {
  return (
    <div className="scroll">
      <Row>
        <Col>
          <OfferApprovals />
        </Col>
      </Row>
    </div>
  );
}
export default OfferApprovalMain;
