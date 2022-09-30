import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import ApprovalTable from './ApprovalTable';

const ApprovalsMain = () => {
  return (
    <div className='example'>
      <Row>
        <Col>
        <Card.Title>TimeSheet Management</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                  TimeSheet Management
                  </Card.Subtitle>
            <ApprovalTable/>
        </Col>
      </Row>
    </div>
  )
}

export default ApprovalsMain

