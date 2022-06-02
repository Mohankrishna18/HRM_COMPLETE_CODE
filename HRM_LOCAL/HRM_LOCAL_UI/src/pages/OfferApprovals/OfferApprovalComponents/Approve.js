import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FcApproval } from "react-icons/fc";

import axios from "../../../Uri";

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

  let onboardingid = props.onboardingid;
  console.log(onboardingid);
  const obj = { approvedStatus: true };
  console.log(form);
  console.log(obj);

  const ApproveHandler = (e) => {
    e.preventDefault();
    console.log(onboardingid);
    const form1 = Object.assign(form, obj);
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, form1);
    handleClose();
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
              <Modal.Title>Approve and Assign Reporting Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form role="form">
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>
                    <b>Select Reporting Manager *</b>
                  </Form.Label>
                  <Form.Select
                    placeholder="select Gender"
                    value={form.reportingManager}
                    Select
                    onChange={(e) =>
                      setField("reportingManager", e.target.value)
                    }
                  >
                    <option>Select Reporting Manager</option>
                    <option value="RevanthKumar">Revanth Kumar</option>
                    <option value="RevanthKumar1">Revanth Kumar1</option>
                  </Form.Select>
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
                  &nbsp; Save
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};
export default Approve;
