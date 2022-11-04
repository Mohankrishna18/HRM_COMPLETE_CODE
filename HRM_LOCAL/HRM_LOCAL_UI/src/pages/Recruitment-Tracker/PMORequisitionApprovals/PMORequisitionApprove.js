import React from "react";
import { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function PMORequisitionApprove(props) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [pmoheadApprove, setPmoheadApprove] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow();

  const validateForm = () => {
    const { pmoheadApprove } = form;

    const newErrors = {};

    if (
      !pmoheadApprove ||
      pmoheadApprove === "" ||
      !pmoheadApprove.match(/^[aA-zZ\s]+$/)
    )
      newErrors.pmoheadApprove = "Please Add Comments";
    return newErrors;
  };

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Approved");
    // handleClose();
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    console.log(da)
    const userType = da.data.userType;
    console.log(userType);
    const employeeID = da.data.employeeId;
    console.log(employeeID)
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      let rrfId = props.data.rrfId;
      console.log(props.data.userType);
      const obj = { workflowStatus: "Approved", pmoheadId  : employeeID};
      const form1 = Object.assign(form, obj);

      const formData = new FormData();
      console.log(formData);
      console.log(form1);
      axios
        .put(
          `/recruitmentTracker/modifyRequisitionStatus/${rrfId}/${userType}`,
          form1
        )
        .then((res) => {
          console.log(res);
          if(res.statusText === "OK"){
            props.func();
          }else{
            console.log("Approve Failed")
          }
          notify();
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something wrong");
          setErrors(formErrors);
          props.func();
        });
    }
    props.handleClose();
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form role="form">
            <Form.Group md="12" style={{ padding: 0 }}>
              <Form.Label>Comment</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={2}
                className="pmoheadApprove"
                type="text"
                controlId="pmoheadApprove"
                placeholder="Approve Reason"
                value={form.pmoheadApprove}
                onChange={(e) => setField("pmoheadApprove", e.target.value)}
                isInvalid={!!errors.pmoheadApprove}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.pmoheadApprove}
              </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Row>
              <Col style={{ paddingLeft: "180px", marginTop: "10px" }}>
                <Button
                  variant="primary"
                  onClick={ApproveHandler}
                  style={{
                    backgroundColor: "#f5896e",
 borderColor: "#ff9b44",
                    float: "left",
                  }}
                >
                  Approve
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="primary"
                  onHide={handleClose}
                  style={{
                    backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4",
                    alignItems: "center",
                  }}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
}

export default PMORequisitionApprove;
