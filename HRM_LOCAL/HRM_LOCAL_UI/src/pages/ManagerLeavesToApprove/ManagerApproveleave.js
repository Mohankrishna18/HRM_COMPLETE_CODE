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
  const obj = { managerApproval: "Approved" };

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Leave  is approved");
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
            <FcApproval /> Approve
          </Button>

          <Modal show={onhold} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Approve Leave</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    required
                    className="approveReason"
                    type="text"
                    controlId="approveReason"
                    placeholder="Approve Reason"
                    value={form.rejectReason}
                    onChange={(e) => setField("rejectReason", e.target.value)}
                    isInvalid={!!errors.rejectReason}
                  ></Form.Control>
                </Form.Group> */}
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
                  &nbsp; Save
                </Button>
                {/* </Form> */}
            </Modal.Body>
          </Modal>
          
        </Col>
      </Row>
    </div>
  );
};
export default Approve;