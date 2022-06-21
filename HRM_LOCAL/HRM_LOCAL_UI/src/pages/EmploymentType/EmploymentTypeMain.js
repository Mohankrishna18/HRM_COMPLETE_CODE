import React from 'react';

import { Col, Row, Card, Container } from "react-bootstrap";

import EmploymentTypes from './EmploymentTypeComponents/EmploymentTypes'



const EmploymentTypeMain = () => {

  return (

    <div style={{ paddingTop: "20px" }}>

    <Card responsive className="scroll">

      <Card.Header>

        <Card.Body>

          <Card.Title> Employment Types </Card.Title>

          <Container>

            <Row>

              <Col xs={12}>

                <EmploymentTypes />

              </Col>

            </Row>

          </Container>

        </Card.Body>

      </Card.Header>

    </Card>

  </div>

  )

}



export default EmploymentTypeMain