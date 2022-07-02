import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function AddOnboard(props) {
  
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [thirderrors, setThirdErrors] = useState("");

  const handleClose = () => setShow();
  const handleShow = () => setShow(true);

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
      lastName,
      middleName,
      firstName,
      email,
      phoneNumber,
      dateOfJoining,
      yearsOfExperience,
      designation,
      department,
      employmentType,
      primarySkills,
      secondarySkills,
      jobTitle,
    } = form;
    const newErrors = {};

    if (!firstName || firstName === "" || !firstName.match(/^[aA-zZ\s]+$/))
      newErrors.firstName = "Please Enter First Name";
    if (!lastName || lastName === "" || !lastName.match(/^[aA-zZ\s]+$/))
      newErrors.lastName = "Please Enter Last Name";
    if (!email || email === "") newErrors.email = "Please Enter Email";
    if (
      !phoneNumber ||
      phoneNumber === "" ||
      !phoneNumber.match(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.phoneNumber = "Please Enter Phone Number";
    if (!dateOfJoining || dateOfJoining === "")
      newErrors.dateOfJoining = "Please Enter Date of Joining";
    // if (
    // !yearsOfExperience ||
    // yearsOfExperience === "" ||
    // yearsOfExperience.match(/^\d{1,}(\.\d{0,4})?$/)
    // )
    // newErrors.yearsOfExperience = "Please Enter Years of Experience";
    if (!designation || designation === "")
      newErrors.designation = "Please Enter Designation";
    if (!department || department === "")
      newErrors.department = "Please Enter Department";
    if (!employmentType || employmentType === "")
      newErrors.employmentType = "Please Enter type of Employeement";
    if (!primarySkills || primarySkills === "")
      newErrors.primarySkills = "Please Enter Primary Skills";
    if (!secondarySkills || secondarySkills === "")
      newErrors.secondarySkills = "Please Enter Secondary Skills";
    if (!jobTitle || jobTitle === "")
      newErrors.jobTitle = "Please Enter type of Job Title";

    return newErrors;
  };
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      // console.log("form submitted");
      axios
        .post("/emp/createNewPotentialEmployee", form)
        .then((response) => {
          const user = response.data;
          if(user.status){
            props.func();
          
          }
          else{
            console.log("Props Not Send");
          }
          toast.success("Employee Onboarded Successfully");
          console.log(user);
          // console.log(user);
          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  // console.log(form.dateOfJoining)

  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios
      .get("/designation/getAllDesignations")
      .then((response) => {
        console.log(response.data);
        setDesignations(response.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
  }, []);

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get("/dept/getAllDepartments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch(() => {
        toast.error("Data is not getting");
      });
    // console.log(departments)
  }, []);

  return (
    <div>
      {/* <Button
onClick={handleShow}
style={{ backgroundColor: "#9FD5E2", float: "right",marginLeft:"100px",borderRadius:'29px',paddingTop:"9px" }}
>
<h4 style={{color: 'black'}}>Add Leave</h4> </Button> */}

      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#ff9b44",
          color: "#F4F8F6",
          float: "right",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add New Onboard
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-4">
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>First name *</Form.Label>
                <Form.Control
                  required
                  className="firstName"
                  type="text"
                  controlId="firstName"
                  placeholder="First name"
                  // onChange={(event) => setFirstName(event.target.value)}
                  value={form.firstName}
                  maxLength={30}
                  onChange={(e) => setField("firstName", e.target.value)}
                  isInvalid={!!errors.firstName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Middle name</Form.Label>
                <Form.Control
                  name="middle_name"
                  type="text"
                  controlId="middleName"
                  placeholder="Middle name"
                  value={form.middleName}
                  maxLength={30}
                  onChange={(e) => setField("middleName", e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Last name *</Form.Label>
                <Form.Control
                  required
                  name="last_name"
                  type="text"
                  controlId="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  maxLength={30}
                  onChange={(e) => setField("lastName", e.target.value)}
                  isInvalid={!!errors.lastName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Phone Number *</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone Number"
                    controlId="phoneNumber"
                    value={form.phoneNumber}
                    maxLength={10}
                    onChange={(e) => {
                      setField("phoneNumber", e.target.value);
                      if (e.target.value.length > 10) {
                        setThirdErrors(
                          " Phone Number length should be 10 characters"
                        );
                      }
                    }}
                    isInvalid={thirderrors}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {thirderrors}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  controlId="email"
                  value={form.email}
                  // maxLength={60}
                  onChange={(e) => {
                    setField("email", e.target.value);
                    if (form.phoneNumber === "") {
                      setThirdErrors(" Phone Number is Required");
                    } else {
                      setThirdErrors("");
                    }
                  }}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Type Of Employment *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Type Of Employment"
                  controlId="employmentType"
                  value={form.employmentType}
                  onChange={(e) => setField("employmentType", e.target.value)}
                  isInvalid={!!errors.employmentType}
                >
                  <option>Select</option>
                  <option value="Intern">Intern</option>
                  <option value="Contract">Contract</option>
                  <option value="FTE">FTE</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.employmentType}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Department *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Department"
                  controlId="department"
                  value={form.department}
                  onChange={(e) => {
                    console.log(e.target.value);
                    axios
                      .get(
                        `/designation/getDesignationByDepartment/${e.target.value}`
                      )
                      .then((response) => {
                        console.log(response.data);
                        setDesignations(response.data);
                      });
                    setField("department", e.target.value);
                  }}
                  isInvalid={!!errors.department}
                >
                  <option>Select </option>
                  {departments.map((departmentss) => (
                    <option value={departmentss.departmentId}>
                      {departmentss.departmentName}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.department}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Designation *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Designation"
                  controlId="designation"
                  value={form.designation}
                  onChange={(e) => setField("designation", e.target.value)}
                  isInvalid={!!errors.designation}
                >
                  <option>Select</option>
                  {designations.map((designation) => (
                    <option>{designation.designationName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.designation}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Date of Joining *</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Joining Date"
                  controlId="dateOfJoining"
                  value={form.dateOfJoining}
                  onChange={(e) => setField("dateOfJoining", e.target.value)}
                  isInvalid={!!errors.dateOfJoining}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.dateOfJoining}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Years Of Experience *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  min="0.00"
                  step="1.00"
                  max="50.00"
                  placeholder="Experience "
                  controlId="yearsOfExperience"
                  value={form.yearsOfExperience}
                  onChange={(e) => {
                    setField("yearsOfExperience", e.target.value);
                    //const yearsOfExperience = e.target.value;

                    // if (!yearsOfExperience || yearsOfExperience.match(/^\d{1,}(\.\d{0,4})?$/)) {
                    // setField(() => ({ yearsOfExperience }));
                    // }
                  }}
                  isInvalid={!!errors.yearsOfExperience}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.yearsOfExperience}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Primary Skills *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="primarySkills"
                  placeholder="Primary Skills"
                  controlId="primarySkills"
                  value={form.primarySkills}
                  maxLength={30}
                  onChange={(e) => setField("primarySkills", e.target.value)}
                  // onChange={changeHandler}
                  isInvalid={!!errors.primarySkills}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.primarySkills}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Secondary Skills *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="secondarySkills"
                  placeholder="SecondarySkills"
                  controlId="secondarySkills"
                  value={form.secondarySkills}
                  maxLength={30}
                  onChange={(e) => setField("secondarySkills", e.target.value)}
                  // onChange={changeHandler}
                  isInvalid={!!errors.secondarySkills}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.secondarySkills}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Job Title *</Form.Label>
                <Form.Control
                  name="jobTitle"
                  type="text"
                  controlId="jobTitle"
                  placeholder="Job Title "
                  value={form.jobTitle}
                  maxLength={30}
                  onChange={(e) => setField("jobTitle", e.target.value)}
                  isInvalid={!!errors.jobTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.jobTitle}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#ff9b44",
                    borderColor: "#ff9b44",
                    float: "right",
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddOnboard;
