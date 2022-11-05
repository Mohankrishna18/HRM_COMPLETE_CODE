import React from "react";
import { useState } from "react";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function PMORequisitionRejected(props) {
  console.log(props.data.rrfId);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [buheadApprove, setBuheadApprove] = useState("");

  const handleClose = () => setShow();

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { pmoheadReject } = form;

    const newErrors = {};

    if (
      !pmoheadReject ||
      pmoheadReject === "" ||
      !pmoheadReject.match(/^[aA-zZ\s]+$/)
    )
      newErrors.pmoheadReject = "Please Add Comments";
    return newErrors;
  };

  const RejectHandler= (e) => {
    // e.prevetDefault();
    const notify = () => toast("Rejected");
    // handleClose();
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.userType;
    console.log(empID);
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      let rrfId = props.data.rrfId;
      
      axios
        .put(
         `/recruitmentTracker/rejectResignation/${rrfId}/${empID}`,
          form
        )
        .then((res) => {
          console.log(res);
          if(res.statusText === "OK"){
            props.func();
          }else{
            console.log("Reject Failed")
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
                className="pmoheadReject"
                type="text"
                controlId="pmoheadReject"
                placeholder="Approve Reason"
                value={form.pmoheadReject}
                onChange={(e) => setField("pmoheadReject", e.target.value)}
                isInvalid={!!errors.pmoheadReject}
              ></Form.Control>
               <Form.Control.Feedback type="invalid">
                  {errors.pmoheadReject}
                </Form.Control.Feedback>
            </Form.Group>
            <br></br>
            <Row>
              <Col style={{ paddingLeft: "180px", marginTop: "10px" }}>
                <Button style ={{backgroundColor: "#f5896e",
 borderColor: "#f5896e",}} onClick={RejectHandler}>
                  Yes
                </Button>
                &nbsp;&nbsp;
                <Button style ={{backgroundColor: "#ff9b44",
 borderColor: "#ff9b44",}} onClick={RejectHandler}>
                  No
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default PMORequisitionRejected
