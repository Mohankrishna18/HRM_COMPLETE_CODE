import React from 'react'
import { Col, Row } from 'react-bootstrap';
import TaskMain from "./PmTasks/TaskMain";
//vipul
const PmTaskCreation = () => {
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

export default PmTaskCreation;
