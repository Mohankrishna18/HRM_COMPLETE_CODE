import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalUpdateForm = (props) => {
  console.log(props.updateOnboard.onboardingId);
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

  const obj = { onboardingStatus: "TAAApproved" };
  const form1 = Object.assign(form, obj);
  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.put(`/emp/updateApprovStatus/${props.updateOnboard.onboardingId}`, obj);
    axios.put(`/emp/updateTAAApproval/${props.updateOnboard.onboardingId}`, form1);
    props.handleClose()
  }


  return (
    <>

      <Row style={{ paddingRight: 25, paddingBottom: 10 }}>
        <Form role="form">
          <Form.Group md="12" style={{ padding: 0 }}>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={2}
              className="taaApprovalComment"
              type="text"
              controlId="taaApprovalComment"
              placeholder="Approve Reason"
              value={form.taaApprovalComment}
              onChange={(e) => setField("taaApprovalComment", e.target.value)}
              isInvalid={!!errors.taaApprovalComment}
            ></Form.Control>
          </Form.Group>

        </Form>
        <Row style={{ justifyContent: "center" }}>
          <Button
            style={{
              backgroundColor: "#f5896e",
              borderColor: "#f5896e",
              marginTop: "5%",
              float: "right",
              width: "30%",
              height: "70%",
              borderRadius: "25px",
            }}
            alignItems="center"
            paddingLeft=""
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default ApprovalUpdateForm;
