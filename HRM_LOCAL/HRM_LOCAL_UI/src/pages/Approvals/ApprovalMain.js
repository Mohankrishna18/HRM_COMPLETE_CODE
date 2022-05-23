import React from "react";
import Sidebar from "../../NavBar/Sidebar";
import { Row, Col } from "react-bootstrap";
import OfferApproval from "./ApprovalComponents/OfferApproval";

const ApprovalMain = () => {
  return (
    <div>
      <Row>
        <Col>
          <Sidebar>
            <OfferApproval />
          </Sidebar>
        </Col>
      </Row>
    </div>
  );
};

export default ApprovalMain;
