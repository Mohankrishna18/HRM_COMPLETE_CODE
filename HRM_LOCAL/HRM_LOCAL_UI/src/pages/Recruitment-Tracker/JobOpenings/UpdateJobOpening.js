import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdateJobOpening(props) {
  console.log(props.updateOnboard);

  const [jobTitle, setJobTitle] = useState(props.updateOnboard.jobTitle);
  const [desc, setDesc] = useState(props.updateOnboard.desc);
  const [status, setStatus] = useState(props.updateOnboard.status);
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
  const [mail, setMail] = useState(props.updateOnboard.mail);
  const [phone, setPhone] = useState(props.updateOnboard.phone);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/Leads/updateLeadById/${props.updateOnboard.id}`,
        {

          jobTitle,
          desc,
          status,
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
          businessUnit,
          mail,
          phone
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
          
            {/* lead Name */}
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

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                className="desc"
                type="text"
                controlId="desc"
                placeholder="Description"
                // onChange={(event) => setclientName(event.target.value)}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                isInvalid={!!errors.desc}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.desc}
              </Form.Control.Feedback>
            </Form.Group>
        </Row>
        <Row>
          {/* Status */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Status </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlId="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              isInvalid={!!errors.status}
            >
              <option>Select Status</option>
              <option>Disclosed</option>
              <option>Closed</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>

          {/* email */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group>
        </Row>
        {/* phone number */}
        {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
          <Form.Label>Phone Number</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
            <Form.Control
              required
              type="number"
              placeholder="Phone Number"
              controlId="comapnyPhoneNumber"
              isInvalid={firsterrors}
              value={companyPhoneNumber}
              onChange={(e) => {setcompanyPhoneNumber(e.target.value);
              if(e.target.value.length>10)
              {
                setFirstErrors("Phonenumber length should be 10 characters");
              }
              else{
                setFirstErrors("")
              };
            }
          }
            >
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.comapnyPhoneNumber}{firsterrors}

            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}

        {/* Address */}
        {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            name="address"
            type="text"
            controlId="companyAddress"
            placeholder="Company Address"
            value={companyAddress}
            onChange={(e) => setcompanyAddress(e.target.value)}
            isInvalid={!!errors.companyAddress}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.companyAddress}
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group> */}

        {/* Country */}
        {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
          <Form.Label>Country</Form.Label>
          <Form.Select
            required
            name="country"
            type="text"
            controlId="companyCountry"
            placeholder="Select Country"
            value={companyCountry}
            maxLength={30}
            onChange={(e) => setcompanyCountry(e.target.value)}
            isInvalid={!!errors.companyCountry}
          ><option>Select Country</option>

            {countries.map((companyCountry) => (

              <option value={companyCountry.label}>{companyCountry.label}</option>

            ))}</Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.companyCountry}
          </Form.Control.Feedback>
        </Form.Group> */}
        <Row>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group>


          {/* email */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group>
        </Row>
        <Row>
          {/* phone number */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Work Location</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
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
              // onChange={(e) => setPhoneNumber(e.target.value)}
              // isInvalid={!!errors.phoneNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.workLocation}
                {seconderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>


          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Business Unit</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Business Unit"
              controlId="departments"
              value={departments}
              onChange={(e) => setDepartments(e.target.value)}
              isInvalid={!!errors.departments}
            >


            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.departments}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          {/* phone number */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Years of Experience</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
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
          </Form.Group>


       


      </Row>
      <Row>
          {/* phone number */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Mail ID</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
              <Form.Control
                required
                type="mail"
                placeholder="Mail ID"
                controlId="mail"
                isInvalid={thirderrors}
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                  if (e.target.value.length > 10) {
                    setThirdErrors("Mail ID is not in correct format");
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
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              className="phone"
              type="tel"
              controlId="phone"
              placeholder="Phone Number"
              // onChange={(event) => setclientName(event.target.value)}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              isInvalid={!!errors.phone}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
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

export default UpdateJobOpening;