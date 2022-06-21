import React from "react";
import { Card, Container } from "react-bootstrap";

import { Row, Col } from "react-bootstrap";
import OnboardedEmployeesTable from "./ApprovalComponents/OnboardedEmployeesTable";
import AddOnboard from "./ApprovalComponents/AddOnboard";

function ApprovalMain() {
  return (
    <div className="scroll"> 
    <Card.Body>
        <Row>
         
            
              <Col>
              <Card.Title>Onboardings</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Jobs / Shortlisted Candidates </Card.Subtitle>
                </Col>
                <Col>
                <AddOnboard />
                </Col>
              
             
              </Row>
            </Card.Body>
          {/* </Col> */}
          
           
       
        
        <Row style={{ paddingTop: 20 }}>
          <Col>          
          <OnboardedEmployeesTable/>
          </Col>

        </Row>
      
    </div>
  );
}

export default ApprovalMain;
