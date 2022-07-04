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
  const obj = { managerApproval: "Rejected" };

  const RejectHandler = () => {
    const notify = () => toast("Leave  is Rejected");
    handleClose();
    const form1 = Object.assign(form, obj);
    axios.put(`/leave/managerupdateLeave/${employeeleaveId}`, obj);
    notify();
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

          <Modal show={onhold} onHide={handleClose} size="md" centered>
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
                    className="managersRejectReason"
                    type="text"
                    controlId="managersRejectReason"
                    placeholder="reject Reason"
                    value={form.managersRejectReason}
                    onChange={(e) => setField("managersRejectReason", e.target.value)}
                    isInvalid={!!errors.managersRejectReason}
                  ></Form.Control>
                </Form.Group>
                <div class="col-md-12 text-center">
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                  onClick={RejectHandler}
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
