import React from "react";
import { Row, Col, Card, Container } from 'react-bootstrap';

// Testing purpose

import HolidayTable from "./HolidaysComponent/HolidayTable";

import { useEffect, useState } from "react";

const HolidayManagementMain = () => {

  return (
    <div style={{ paddingTop: '0px' }}>
      <Card responsive className="scroll">
        <Card.Header style={{backgroundColor:"white"}}>
          <Card.Body style={{backgroundColor:"white"}}>
            <Card.Title> Holiday Management</Card.Title>
          
            {/* <Container> */}
              <Row>
                <Col xs={12}>
                  <HolidayTable/>
                </Col>

              </Row>
            {/* </Container> */}
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
}
// };
export default HolidayManagementMain;


