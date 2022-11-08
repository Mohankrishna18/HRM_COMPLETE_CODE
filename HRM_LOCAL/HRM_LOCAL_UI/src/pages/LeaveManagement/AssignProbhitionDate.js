import React, { useState , useRef} from "react";
// import React, { useEffect, useRef } from "react";
import ProbhitionTable from "./ProbhitionTable";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AssignProbhitionDate(props) {
  console.log(props.updateOnboard.onboardingStatus);
  const [fullName, setFullName] = useState(props.updateOnboard.fullName);
  //const [confirmationDate, setConfirmationDate] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [feedBack, setFeedBack] = useState("");
  const [form, setForm] = useState({});
  const [error, setErrors] = useState({});
  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!error[field])
      setErrors({
        ...error,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {
        confirmationDate,
        feedBack
    } = form;
    const newErrors = {};

    if (!confirmationDate || confirmationDate === "") newErrors.confirmationDate = "Select Date";

    if (!feedBack || feedBack === "")
      newErrors.feedBack = "Please Enter Requisition ID";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (
 Object.keys(formErrors).length>0
){
    setErrors(formErrors)
   
  } else {
    console.log(form)
    const form1 = Object.assign(form,{onboardingStatus:"ProbhitionConfirmed"})
    console.log(form1)
    axios
    .put(`/emp/updateProbhitionFields/${props.updateOnboard.employeeId}`, form1)
    .then((response) => {
      const user = response;
      console.log(user);
      if (user.data.status) {
        props.func();
      } else {
        console.log("Props not Send");
      }
      toast.success("Probhition Assigned successfully");
      // console.log(user);
    })
    .catch((err) => {
      console.log(err);
      toast.error("Something Went Wrong");
    });
  props.handleClose();
  }
  
  
  };

  return (
    <div>
      {/* <Form
        ref={forms}
        className="formone"
        // noValidate
        // validated={validated}
        style={{ padding: 10 }}
        onSubmit={handleSubmit}
      ></Form> */}
      <Row>
        {/* Job Title */}
        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            required
            disabled
            className="fullName"
            type="text"
            controlId="fullName"
            value={fullName}
          ></Form.Control>
        </Form.Group>
        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
          <Form.Label>Probhition Date *</Form.Label>{" "}
          <Form.Control
            required
            type="date"
            placeholder="confirmation Date"
            controlId="confirmationDate"
            value={form.confirmationDate}
             onChange={(e) => setField("confirmationDate", e.target.value)}
            // onChange ={(e) =>{
            //     setField("")
            //   }}
            isInvalid={error.confirmationDate}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {error.confirmationDate}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="12" style={{ padding: 10 }}>
          <Form.Label>FeedBack *</Form.Label>
          <Form.Control
            required
            className="feedBack"
            as="textarea"
            type="text"
            value={form.feedBack}
            rows={2}
            controlId="feedBack"
            onChange={(e) => setField("feedBack", e.target.value)}
            // value={feedBack}
          
              isInvalid={error.feedBack}
          ></Form.Control>
           <Form.Control.Feedback type="invalid">
            {error.feedBack}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Row>
          <Col style={{justifyContent:"center"}}>
          <Button
              style={{
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
                // float: "right",
                marginLeft: "150px",
                justifyContent:"center",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Col>
          </Row>
      </Row>
    </div>
  );
}

export default AssignProbhitionDate;