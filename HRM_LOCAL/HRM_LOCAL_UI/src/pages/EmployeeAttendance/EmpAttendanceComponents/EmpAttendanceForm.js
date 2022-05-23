import React from "react";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";

const EmpAttendanceForm = () => {
  return (
    <div>
      <Row>
        <Form.Group as={Col} md="3" style={{ padding: 15 }}>
          <FormLabel>Date</FormLabel>
          <Form.Control type="date"></Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="3" style={{ padding: 15 }}>
          <FormLabel>Select Month</FormLabel>
          <Form.Select>
            <option>--</option>
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" style={{ padding: 15 }}>
          <FormLabel>Select Year</FormLabel>
          <Form.Select>
            <option>--</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" style={{ paddingTop: "45px" }}>
          <Button style={{ width: "300px", backgroundColor: "#55ce63" }}>
            SEARCH
          </Button>
        </Form.Group>
      </Row>
    </div>
  );
};

export default EmpAttendanceForm;
