import React from 'react';
import { Card } from 'react-bootstrap';

import CreateLeaves from './CreateLeaves';

const createleaveTypeMain = () => {

  return (

    <div>
      <Card style={{backgroundColor:"white"}}>
          <Card.Body >
            <Card.Title> Leave Type</Card.Title>
                <CreateLeaves />
          </Card.Body>
            </Card>

    </div>

  )

}



export default createleaveTypeMain;

