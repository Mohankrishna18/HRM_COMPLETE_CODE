import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import TaskMain from './EmployeeTimesheet/TaskMain';
//vipul
const EmployeeTimeSheetMain = () => {
  return (
    <div>
      <Row>
        <Col>
        <Card.Title>Task Management</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  Task Management
                  </Card.Subtitle>
            <TaskMain/>
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeTimeSheetMain

