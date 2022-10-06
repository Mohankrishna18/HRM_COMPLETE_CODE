import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../Uri";
import { Row, Col } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "react-toastify/dist/ReactToastify.css";
import VerticalLinearStepper from "./ResignationTimeline";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
// import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "IRM",
  },
  {
    label: "SRM",
  },
  {
    label: "PMO",
  },
  {
    label: "HR",
  },
];

function AddResignation(props) {
  console.log(props)
  const [users, setUsers] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [suggestions1, setSuggestions1] = useState([]);
  const [suggestions2, setSuggestions2] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [thirderrors, setThirdErrors] = useState("");
  const [irm, setIrm] = useState("");
  const [step, setStep] = useState(0);


  const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.employeeId;
    console.log(empID);


  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  }

  const validateForm = () => {
    const {
      resigningEmployee,

      resignationDate,
      reason,
    } = form;
    const newErrors = {};

    if (
      !resigningEmployee ||
      resigningEmployee === "" ||
      !resigningEmployee.match(/^[aA-zZ\s]+$/)
    )
      newErrors.resigningEmployee = "Please Enter Your Name";

    if (!resignationDate || resignationDate === "")
      newErrors.resignationDate = "Please Enter Resignation Date";
    if (!reason || reason === "") newErrors.reason = "Please Enter Reason";

    return newErrors;
  };

  const handleNext = (e) => {
    // e.preventDefault();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 13) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      console.log("Form validation success");
      setStep((nextStep) => nextStep + 1);
      console.log(form.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      const form1 = Object.assign(form, {employeeId:empID});
      console.log(form1)
      axios
        .post("/resignation/resignationApplied", form1)
        .then((response) => {
          const user = response.data;
          if (user.status) {
            // props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Resignation Applied Successfully");
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something Went Wrong");
        });
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  //   const status = true;

  //   useEffect = () => {
  //     if (status == true) {
  //       handleNext();
  //     }
  //   };

  const handleNextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
        <Row>
        <Col>
      <h5 style={{ textAlign: "center" }}>Apply Resignation</h5>
      
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            // onSubmit={handleSubmit}
          >
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Resigning Employee *</Form.Label>
              <Form.Control
                required
                className="resigningEmployee"
                type="text"
                controlId="resigningEmployee"
                placeholder="Resigning Employee"
                // onChange={(event) => setFirstName(event.target.value)}
                value={form.resigningEmployee}
                maxLength={30}
                onChange={(e) => setField("resigningEmployee", e.target.value)}
                isInvalid={!!errors.resigningEmployee}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.resigningEmployee}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Notice Date</Form.Label>
              <Form.Control
                required
                name="noticeDate"
                type="date"
                controlId="noticeDate"
                placeholder="Notice Date"
                value={form.noticeDate}
                maxLength={30}
                onChange={(e) => setField("noticeDate", e.target.value)}
                // isInvalid={!!errors.noticeDate}
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Resignation Date *</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Resignation Date"
                controlId="resignationDate"
                value={form.resignationDate}
                onChange={(e) => setField("resignationDate", e.target.value)}
                isInvalid={!!errors.resignationDate}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.resignationDate}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Reason *</Form.Label>
              <Form.Control
                required
                type="text"
                as="textarea"
                rows={2}
                name="reason"
                placeholder="Reason"
                controlId="reason"
                value={form.reason}
                maxLength={30}
                onChange={(e) => setField("reason", e.target.value)}
                // onChange={changeHandler}
                isInvalid={!!errors.reason}
              />
              <Form.Control.Feedback type="invalid">
                {errors.reason}
              </Form.Control.Feedback>
            </Form.Group>
            <div class="d-flex justify-content-center ">
              <Row>
                <Col md={1}>
                  <Button onClick={handleSubmit}>Submit</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Col>
        <Col>
        <h5 style={{ textAlign: "center" }}>Resignation Tracking</h5>
          <Box sx={{ maxWidth: 400, marginTop:10, marginLeft:20 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    {/* <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNextStep}
                          sx={{ mt: 1, mr: 1 }}
                        >
                           {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box> */}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Col>
      </Row>
    </div>
  );
}
export default AddResignation;