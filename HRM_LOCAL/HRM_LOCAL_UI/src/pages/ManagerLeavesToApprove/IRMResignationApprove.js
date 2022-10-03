import { React, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";

function IRMResignationApprove(props) {
  console.log(props.employeeId);

  console.log(props.leaveID.employeeId);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [irmApprove, setIrmApprove] = useState("");

  const initialValues = {
    irmApprove,
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
    const notify = () => toast("Leave  is approved");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let employeeId = props.leaveID.employeeId;
    console.log(employeeId);
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.userType;
    //   const employeeId = da.data.employeeId;

    console.log(props.leaveID);
    // const obj = { leaveStatus: "Approved" };
    // const form1 = Object.assign(form, obj);
    axios
      .put(
        `/resignation/modifyResignationStatus/${employeeId}/${empID}`,
        initialValues
      )
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          props.func();
        } else {
          console.log("props not send");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      });
    props.handleClose();

    notify();
  };
  return (
    <div>
      {/* <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> */}

      <Form role="form">
        <Form.Group md="12" style={{ padding: 0 }}>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            className="irmApprove"
            type="text"
            controlId="irmApprove"
            placeholder="Approve Reason"
            value={irmApprove}
            onChange={(e) => setIrmApprove(e.target.value)}
            // onChange={e=>console.log(e.target.value)}
            isInvalid={!!errors.irmApprove}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        style={{ marginTop: "5%", float: "right" }}
        onClick={ApproveHandler}
      >
        Yes
      </Button>
    </div>
  );
}

export default IRMResignationApprove;
