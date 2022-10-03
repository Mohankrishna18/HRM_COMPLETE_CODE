import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import TaskMain from './EmployeeTimesheet/TaskMain';

const EmployeeTimeSheetMain = () => {
  return (
    <div className='example'>
      <Row>
        <Col>
        <Card.Title>TimeSheet Management</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  TimeSheet Management
                  </Card.Subtitle>
            <TaskMain/>
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeTimeSheetMain

