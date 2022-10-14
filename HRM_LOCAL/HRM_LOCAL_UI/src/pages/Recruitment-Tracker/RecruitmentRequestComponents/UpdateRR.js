import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateRR(props) {
  console.log(props.updateOnboard);

  const [jobTitle, setJobTitle] = useState(props.updateOnboard.jobTitle);
  const [description, setDescription] = useState(props.updateOnboard.description);
  const [rrStatus, setRrStatus] = useState(props.updateOnboard.rrStatus);
  const [positions, setPositions] = useState(props.updateOnboard.positions);
  const [pSkills, setPSkills] = useState(props.updateOnboard.pSkills);
  const [sSkills, setSSkills] = useState(props.updateOnboard.sSkills);
  const [workLocation, setWorkLocation] = useState(props.updateOnboard.workLocation);
  const [workingHours, setWorkingHours] = useState(props.updateOnboard.workingHours);
  const [empType, setEmpType] = useState(props.updateOnboard.empType);
  const [departments, setDepartments] = useState(props.updateOnboard.departments);
  const [yoe, setYoe] = useState(props.updateOnboard.yoe);
  const [rate, setRate] = useState(props.updateOnboard.rate);
  const [projectName, setProjectName] = useState(props.updateOnboard.projectName);

  const [clientName, setClientName] = useState(props.updateOnboard.clientName);
  const [leadName, setLeadName] = useState(props.updateOnboard.leadName);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow();
  // useState for phone number
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);

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
      primaryContact,
      jobTitle,
      description,
      rrStatus,
      workflowStatus,
      positions,
      pSkills,
      sSkills,
      workLocation,
      workingHours,
      empType,
      yoe,
      rate,
      projectName,
      uploadSOW,
      uploadDesc,
      clientName,
      textAreaDesc,
      comments,
      departmentName
    } = form;
    const newErrors = {};

    if (!jobTitle ||  !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please enter Job Title";
    // if (!workLocation || workLocation === "" || !workLocation.match(/^[aA-zZ\s]+$/))
    //   newErrors.workLocation = "Please enter Work location";
    // if (!textAreaDesc || textAreaDesc === "" || !textAreaDesc.match(/^[aA-zZ\s]+$/))
    //   newErrors.textAreaDesc = "Please enter Job Description";
    // if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
    //   newErrors.comments = "Please enter Comments";
    // if (
    //   !clientName ||
    //   clientName === "" ||
    //   !clientName.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.clientName = "Please select Client";
    
    // if (
    //   !projectName ||
    //   projectName === "" ||
    //   !projectName.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.projectName = "Please select Project";
    // if (
    //   !rrStatus ||
    //   rrStatus === "" ||
    //   !rrStatus.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.rrStatus = "Please select RR status";
    // if (
    //   !workflowStatus ||
    //   workflowStatus === "" ||
    //   !workflowStatus.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.workflowStatus = "Please select Workflow status";
    // if (
    //   !empType ||
    //   empType === "" ||
    //   !empType.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.empType = "Please select Employment type";
    //   if (
    //     !primaryContact ||
    //     primaryContact === "" ||
    //     !primaryContact.match(
    //       /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //     )
    //   )
    // if (!pSkills || pSkills === "" || !pSkills.match(/^[aA-zZ\s]+$/))
    //   newErrors.pSkills = "Please enter Primary skills";
  
    //   if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
    //   newErrors.comments = "Please enter comments";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/recruitmentTracker/updateRR/${props.updateOnboard.reqId}`,
        {

          jobTitle,
          description,
          rrStatus,
          positions,
          pSkills,
          sSkills,
          workLocation,
          workingHours,
          empType,
          yoe,
          rate,
          projectName,
          clientName,
          leadName,
          businessUnit
        }
      )
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
        } else {
          console.log("Props not Send");
        }
        toast.success("Form Submitted successfully");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    props.handleClose();
  };
  return (
    <>
      <Form
        ref={forms}
        className="formone"
        // noValidate
        // validated={validated}
        style={{ padding: 10 }}
        onSubmit={handleSubmit}

      >
        <Row>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                required
                className="jobTitle"
                type="text"
                controlId="jobTitle"
                placeholder="Job Title"
                // onChange={(event) => setclientName(event.target.value)}
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                isInvalid={!!errors.jobTitle}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.jobTitle}
              </Form.Control.Feedback>
            </Form.Group>

            
        </Row>
        <Row>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>RR Status</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="RR Status"
              controlId="rrStatus"
              value={rrStatus}
              onChange={(e) => setRrStatus(e.target.value)}
              isInvalid={!!errors.rrStatus}
            >
              <option>Select Status</option>
              <option>Disclosed</option>
              <option>Closed</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.rrStatus}
            </Form.Control.Feedback>
          </Form.Group> */}

          {/* email */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Positions</Form.Label>
            <Form.Control
              required
              name="positions"
              type="number"
              controlId="positions"
              placeholder="Positions"
              value={positions}
              onChange={(e) => setPositions(e.target.value)}
              isInvalid={!!errors.positions}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.positions}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        
        <Row>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Primary Skills</Form.Label>
            <Form.Control
              required
              className="pSkills"
              type="text"
              controlId="pSkills"
              placeholder="Primary Skills"
              // onChange={(event) => setclientName(event.target.value)}
              value={pSkills}
              onChange={(e) => setPSkills(e.target.value)}
              isInvalid={!!errors.pSkills}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.pSkills}
            </Form.Control.Feedback>
          </Form.Group> */}


          {/* email */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Secondary Skills</Form.Label>
            <Form.Control
              required
              name="sSkills"
              type="text"
              controlId="sSkills"
              placeholder="Secondary Skills"
              value={sSkills}
              onChange={(e) => setSSkills(e.target.value)}
              isInvalid={!!errors.sSkills}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.sSkills}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <Row>
          {/* phone number */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Work Location</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                required
                type="text"
                placeholder="Work Location"
                controlId="workLocation"
                isInvalid={seconderrors}
                value={workLocation}
                onChange={(e) => {
                  setWorkLocation(e.target.value);
                  if (e.target.value.length > 10) {
                    setSecondErrors("Phonenumber length should be 10 characters");
                  }
                  else {
                    setSecondErrors("")
                  };
                }
                }

              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.workLocation}
                {seconderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}


          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Working Hours</Form.Label>
            <Form.Control
              required
              className="workingHours"
              type="text"
              controlId="workingHours"
              placeholder="Working Hours"
              // onChange={(event) => setclientName(event.target.value)}
              value={workingHours}
              onChange={(e) => setWorkingHours(e.target.value)}
              isInvalid={!!errors.workingHours}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.workingHours}
            </Form.Control.Feedback>
          </Form.Group> */}
        </Row>
        <Row>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employment Type </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Employment Type"
              controlId="empType"
              value={empType}
              onChange={(e) => setEmpType(e.target.value)}
              isInvalid={!!errors.empType}
            >
              <option>Select Status</option>
              <option>Disclosed</option>
              <option>Closed</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.empType}
            </Form.Control.Feedback>
          </Form.Group> */}
          
        </Row>
        <Row>
          {/* phone number */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Years of Experience</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                required
                type="text"
                placeholder="Years of Experience"
                controlId="yoe"
                isInvalid={thirderrors}
                value={yoe}
                onChange={(e) => {
                  setYoe(e.target.value);
                  if (e.target.value.length > 10) {
                    setThirdErrors("YOE length should be 10 characters");
                  }
                  else {
                    setThirdErrors("")
                  };
                }
                }
              // onChange={(e) => setPhoneNumber(e.target.value)}
              // isInvalid={!!errors.phoneNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.yoe}
                {thirderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              required
              className="rate"
              type="number"
              controlId="rate"
              placeholder="Rate"
              // onChange={(event) => setclientName(event.target.value)}
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              isInvalid={!!errors.rate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.rate}
            </Form.Control.Feedback>
          </Form.Group> */}


      </Row>
      <Row>
        <Col>
          <Button
            style={{
              backgroundColor: "#ff9b44",
              borderColor: "#ff9b44",
              // float: "right",
              marginLeft: "200px",
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
        <Col>
          <Button
            style={{
              backgroundColor: "#B6B6B4",
              borderColor: "#B6B6B4",
              alignItems: "center",
              width: "40%",
              height: "120%",
              borderRadius: "25px",
            }}
            type="cancel"
            onClick={handleClose}
          >
            Close
          </Button>
        </Col>
      </Row>
    </Form>
    </>
  )
}

export default UpdateRR;