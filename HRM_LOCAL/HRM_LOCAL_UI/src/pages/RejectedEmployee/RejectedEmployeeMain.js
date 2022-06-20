import React from 'react';
import { Col, Row } from 'react-bootstrap';
import RejectedEmployeeArchieve from './RejectedEmployeesComponents/RejectedEmployeeArchieve';


const RejectedEmployeeMain = () => {
  return (
    <div>
      <Row>
    <Col xs={12}>
    <RejectedEmployeeArchieve/>
    </Col>
</Row>

    </div>
  )
}

export default RejectedEmployeeMain
