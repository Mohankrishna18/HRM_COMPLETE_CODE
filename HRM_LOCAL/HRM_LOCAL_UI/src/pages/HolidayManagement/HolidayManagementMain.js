import React from "react";
import { Row, Col, Card, Container } from 'react-bootstrap';

// Testing purpose

import HolidayTable from "./HolidaysComponent/HolidayTable";

import { useEffect, useState } from "react";

const HolidayManagementMain = () => {

  return (
    <div style={{ paddingTop: '20px' }}>
      <Card responsive className="example">
        <Card.Header>
          <Card.Body>
            <Card.Title> Holiday Management</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Holidays
            </Card.Subtitle>{" "}
            <Container>
              <Row>
                <Col xs={12}>
                  <HolidayTable/>
                </Col>

              </Row>
            </Container>
          </Card.Body>
        </Card.Header>
      </Card>
    </div>
  );
}
// };
export default HolidayManagementMain;
