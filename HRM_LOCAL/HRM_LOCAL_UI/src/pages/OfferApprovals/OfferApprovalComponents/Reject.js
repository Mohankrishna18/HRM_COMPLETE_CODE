import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import axios from "../../../Uri";

const Reject = (props) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  let onboardingid = props.updateOnboard.onboardingId;
  const obj = { rejectedStatus: true };

  const ApproveHandler = (e) => {
    e.preventDefault();
    const form1 = Object.assign(form, obj);
    console.log(form1);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, form1)
    .then((res)=>{
      console.log(res)
      if(res.status ==200){
        props.func();
      }
    })
    props.handleClose();
  };

  return (
    <div>
      <Row>
        <Col>
          <Form role="form">
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                required
                className="comments"
                type="textarea"
                controlId="comments"
                placeholder="Comment"
                as="textarea"
                rows={2}
                value={form.comments}
                onChange={(e) => setField("comments", e.target.value)}
                isInvalid={!!errors.comments}
              ></Form.Control>
            </Form.Group>
            <Button
              
              type="submit"
              style={{
                borderRadius: "25px",
                backgroundColor: "#f5896e",
 borderColor: "#ff9b44",
              }}
              onClick={ApproveHandler}
            >
              &nbsp; Save
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Reject;
