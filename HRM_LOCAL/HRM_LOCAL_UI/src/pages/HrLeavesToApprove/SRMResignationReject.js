import { React, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";

function SRMResignationReject(props) {
  console.log(props.leaveID.employeeleaveId);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [srmReject, setSrmReject] = useState("");

  const initialValues = {
    srmReject,
  };

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };
  const RejectHandler = (e) => {
    // e.prevetDefault();
    const notify = () => toast("Resignation is Rejected");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let employeeId = props.leaveID.employeeId;
    console.log(employeeId);
    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.userType;

    axios
      .put(
        `/resignation/rejectResignation/${employeeId}/${empID}`,
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
      {/* <Row>
             <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> 
            <Row> */}

      <Form role="form">
        <Form.Group md="12" style={{ padding: 0 }}>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={2}
            className="srmReject"
            type="text"
            controlId="srmReject"
            placeholder="Reject Reason"
            value={srmReject}
            onChange={(e) => setSrmReject(e.target.value)}
            isInvalid={!!errors.srmReject}
          ></Form.Control>
        </Form.Group>
      </Form>
      <Button
        variant="primary"
        style={{ marginTop: "5%", float: "right" }}
        onClick={RejectHandler}
      >
        Yes
      </Button>

      {/* </Row>
        </Row> */}
    </div>
  );
}

export default SRMResignationReject;
