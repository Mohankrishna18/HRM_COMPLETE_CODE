import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcCancel } from "react-icons/fc";

import axios from "./../../Uri";

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

  let employeeleaveId = props.leaveID;
  const obj = { leaveStatus: "Rejected",hrApproval:"Rejected" };

  const ApproveHandler = () => {
    handleClose;
    const form1 = Object.assign(form, obj);
    axios.put(`/leave/updateLeave/${employeeleaveId}`, form1);
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

          <Modal show={onhold} onHide={handleClose}  size="md"centered>
            <Modal.Header closeButton>
              <Modal.Title>Reject</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows={2}
                    className="rejectReason"
                    type="text"
                    controlId="rejectReason"
                    placeholder="reject Reason"
                    value={form.rejectReason}
                    onChange={(e) => setField("rejectReason", e.target.value)}
                    isInvalid={!!errors.rejectReason}
                  ></Form.Control>
                </Form.Group>
                <div class="col-md-12 text-center">
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#f5896e",
                    color: "#F4F8F6",
                  }}
                  onClick={ApproveHandler}
                >
                   Reject
                </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Reject;
