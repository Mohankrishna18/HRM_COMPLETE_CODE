import React, {memo} from "react";
import { Row, Col } from "react-bootstrap";

import EmployeeOnboardingForm from "./EmployeeOnboardingFormComponents/EmployeeOnboardingForm";

const EmployeeOnboardingFormMain = () => {
  return (
    <div className="EmployeeOnboardingFormMain">
      <Row>
        <Col xs={12}>
          <EmployeeOnboardingForm />
        </Col>  
      </Row>
    </div>
  );
};

export default memo(EmployeeOnboardingFormMain);
