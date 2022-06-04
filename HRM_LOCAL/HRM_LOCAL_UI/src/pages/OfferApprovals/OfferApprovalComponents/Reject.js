import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";

import axios from "../../../Uri";

const Reject = (props) => {
  const [onhold, setOnhold] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleClose = () => setOnhold(false);
  const handleShow = () => setOnhold(true);

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  let onboardingid = props.onboardingid;

  console.log(onboardingid);
  const obj = { rejectedStatus: true };

  const ApproveHandler = () => {
    handleClose;
    console.log(onboardingid);
    const form1 = Object.assign(form, obj);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, form1);
  };

  return (
    <div>
      <Row>
        <Col>
          <Button
            variant="white "
            className="rounded-pill"
            onClick={handleShow}
          >
            {" "}
            <FcCancel /> Reject
          </Button>

          <Modal show={onhold} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Reject</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    required
                    className="comments"
                    type="text"
                    controlId="comments"
                    placeholder="comment"
                    value={form.comments}
                    onChange={(e) => setField("comments", e.target.value)}
                    isInvalid={!!errors.comments}
                  ></Form.Control>
                </Form.Group>
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                  onClick={ApproveHandler}
                >
                  &nbsp; Reject
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Reject;
