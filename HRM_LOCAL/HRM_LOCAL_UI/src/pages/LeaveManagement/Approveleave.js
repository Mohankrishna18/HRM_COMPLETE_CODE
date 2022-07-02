import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "./../../Uri";

const Approve = (props) => {
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
  const obj = { leaveStatus: "Approved",hrApproval:"Approved" };

  const ApproveHandler = () => {
    const notify = () => toast("Leave  is approved");
    handleClose();
    axios.put(`/leave/updateLeave/${employeeleaveId}`, obj);
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
            <FcApproval/>Approve
          </Button>

          <Modal show={onhold} onHide={handleClose} size="sm" centered>
            <Modal.Header closeButton>
              <Modal.Title>Approve Leave</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    required
                    className="rejectReason"
                    type="text"
                    controlId="rejectReason"
                    placeholder="reject Reason"
                    value={form.rejectReason}
                    onChange={(e) => setField("rejectReason", e.target.value)}
                    isInvalid={!!errors.rejectReason}
                  ></Form.Control>
                </Form.Group> */}
                <div class="col-md-12 text-center">
                <Button
                  variant="warning"
                  type="submit"
                  style={{
                    borderRadius: "25px",
                    backgroundColor: "#ff9b44",
                    color: "#F4F8F6",
                  }}
                  onClick={ApproveHandler}
                  // onChange={(e) => setField()}
                >
                  &nbsp; Approve
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
export default Approve;
