import React from 'react'
import { Col, Row } from 'react-bootstrap';
import TaskMain from './EmployeeTimesheet/TaskMain';

const EmployeeTimeSheetMain = () => {
  return (
    <div>
      <Row>
        <Col>
            <TaskMain/>
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeTimeSheetMain
