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
import moment from "moment";



function AddResignation(props) {
  console.log(props)
  const steps = [
    {
      label: "IRM",
    },
    {
      label: "SRM",
    },
   
    {
      label: "HR",
    },
  ];
 
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  
  
  const [step, setStep] = useState(0);
  const [value, setValue] = useState({});
  const[exitDate, setExitDate]= useState(null);

  const da = JSON.parse(sessionStorage.getItem("userdata"));
    const empID = da.data.employeeId;
    console.log(empID);
   


    const [data, setData] = useState([]);
  useEffect(() => {
    todays();
    axios.get(`/emp/getEmployeeDataByEmployeeId/${empID}`).then((response) => {
      console.log(response.data.data.fullName);
      setData(response.data.data.fullName);
    });
   
  }, []);

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
      today,
      reason,
      exitDate,
    } = form;
    const newErrors = {};

    

   
    if (!reason || reason === "") newErrors.reason = "Please Enter Reason";

    return newErrors;
  };
  const today =moment(new Date()).format("DD-MM-YYYY") 
const todays =()=>{
   
  console.log(today);
  axios.get(`/resignation/getNoticeDateByResignationDate/${today}/${empID}`).then((response)=>{
    //  console.log(response.data);
    setExitDate(response.data);
  })
  // setField("resignationDate", today)
}


 
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
      const form1 = Object.assign(form, {employeeId:empID},{resigningEmployee:data},{exitDate:exitDate},{resignationDate:moment(new Date()).format("YYYY-MM-DD")});
      console.log(form1)
      axios
        .post("/resignation/resignationApplied", form1)
        .then((response) => {
          const user = response.data;
          if (user.workflowStatus) {
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

  const [activeStep, setActiveStep] = React.useState();
  //   const status = true;

    useEffect(() => {
  
    load();
  
  },[])
 
  const load = async () => {
     axios.get(`/resignation/getResignationByEmployeeStatus/${empID}`)
     .then((res)=>{
      setValue(res.data);
    console.log(res.data);
    let statuss = res.data.length > 0 ? res.data[0].workflowStatus :""
    console.log(statuss)
    if(statuss == "irm"){
      setActiveStep(0)
    }else if(statuss == "srm"){
      setActiveStep(1)
    }else if(statuss == "hrmanager"){
    setActiveStep(2)
    

  }
  else {
    setActiveStep(0)
  }
    // res.data.map((item) => {
    //    statuss = item.status;
    //   ;
    // })
    // console.log(res.data.status);
  })}
      // if (statuss == true) {
      //   handleNext();
      // }
  

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
              <Form.Label>Employee ID </Form.Label>
              <Form.Control
                required
                disabled
                className="employeeId"
                type="text"
                controlid="employeeId"
                // placeholder="Name"
                // onChange={(event) => setFirstName(event.target.value)}
                value={empID}
                maxLength={30}
                // onChange={(e) => setField("resigningEmployee", e.target.value)}
                isInvalid={!!errors.resigningEmployee}
              ></Form.Control>
              
            </Form.Group>

            

            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Resignation Date *</Form.Label>
              <Form.Control
                required
                disabled
                // type="date"
                min={today}
                max={today}
                placeholder="Resignation Date"
                controlid="resignationDate"
                defaultValue={today}
                onChange={(e) => {

                  setField("resignationDate", today)
                // console.log(e.target.value);
                axios.get(`/resignation/getNoticeDateByResignationDate/${today}/${empID}`).then((response)=>{
                  console.log(response.data);
                  setExitDate(response.data);
                })
                }}
                
              ></Form.Control>
             
              
            </Form.Group>
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label>Exit Date</Form.Label>
              <Form.Control
                required
                disabled
                name="exitDate"
                type="text"
                controlid="exitDate"
                placeholder="Exit Date"
                value={exitDate===null ?"":moment(exitDate).format("DD-MM-YYYY")}
                maxLength={30}
                onChange={(e) => setField("exitDate", e.target.value)}
                // isInvalid={!!errors.noticeDate}
              ></Form.Control>
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
                controlid="reason"
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
                  <Button style ={{backgroundColor: "#f5896e",
 borderColor: "#ff9b44",}} onClick={handleSubmit}>Submit</Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Col>
        <Col>
        <h5 style={{ textAlign: "center" }}>Resignation Workflow</h5>
          <Box sx={{ maxWidth: 400, marginTop:10, marginLeft:20 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    {/* <Typography component="span">{step.description}</Typography> */}
                    <Box sx={{ mb: 2 }}>
                      <div>
                        {/* <Button
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
                        </Button> */}
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography component="span">
                  {/* All steps completed - you&apos;re finished */}
                </Typography>
                {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button> */}
              </Paper>
            )}
          </Box>
        </Col>
      </Row>
    </div>
  );
}
export default AddResignation;
