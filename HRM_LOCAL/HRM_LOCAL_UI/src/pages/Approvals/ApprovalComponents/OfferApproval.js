import React from "react";

import Card from "react-bootstrap/Card";
import EmployeeTable from "./EmployeTable";



function OfferApproval() {
  return (
    <div className="scroll">
      <Card>
        <Card.Header>
          <Card.Body>
            <Card.Title>Offer Approval</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              OfferApprovals{" "}
            </Card.Subtitle>
          </Card.Body>
          <EmployeeTable />
        </Card.Header>
      </Card>

      {/* <EmpTable /> */}
    </div>
  );
}

export default OfferApproval;
