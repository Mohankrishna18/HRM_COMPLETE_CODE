import React from 'react';
import { Card } from 'react-bootstrap';

import CreateLeaves from './CreateLeaves';

const createleaveTypeMain = () => {

  return (

    <div>
      <Card style={{backgroundColor:"white"}}>
          <Card.Body >
            <Card.Title> Leave Type</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Leaves / Leave Type
            </Card.Subtitle>
                <CreateLeaves />
          </Card.Body>
            </Card>
         

    </div>

  )

}



export default createleaveTypeMain;

