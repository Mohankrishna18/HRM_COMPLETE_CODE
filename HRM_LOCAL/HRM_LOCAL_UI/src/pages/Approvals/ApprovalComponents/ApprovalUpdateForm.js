import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalUpdateForm = (props) => {
  console.log(props.updateOnboard);

  const [firstName, setFirstName] = useState(props.updateOnboard.firstName);
  const [middleName, setMiddleName] = useState(props.updateOnboard.middleName);
  const [lastName, setLastName] = useState(props.updateOnboard.lastName);
  const [email, setEmail] = useState(props.updateOnboard.email);
  const [phoneNumber, setPhonenNumber] = useState(
    props.updateOnboard.phoneNumber
  );
  const [dateOfJoining, setDateOfJoining] = useState(
    props.updateOnboard.dateOfJoining
  );
  const [yearsOfExperience, setYearsOfExperience] = useState(
    props.updateOnboard.yearsOfExperience
  );
  const [department, setDepartment] = useState(props.updateOnboard.department);
  const [designation, setDesignation] = useState(
    props.updateOnboard.designation
  );
  const [employmentType, setEmployementType] = useState(
    props.updateOnboard.employmentType
  );
  const [primarySkills, setPrimarySkills] = useState(
    props.updateOnboard.primarySkills
  );
  const [secondarySkills, setSecondrySkills] = useState(
    props.updateOnboard.secondarySkills
  );
  const [jobTitle, setJobTitle] = useState(props.updateOnboard.jobTitle);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
      newErrors.phoneNumber = "Please Enter Phonenumber";
    if (!dateOfJoining || dateOfJoining === "")
      newErrors.dateOfJoining = "Please Enter Date of Joining";
    if (
      !yearsOfExperience ||
      yearsOfExperience === "" ||
      yearsOfExperience.match(/[^0-9]/g)
    )
      newErrors.yearsOfExperience = "Please Enter Years of Experience";
    if (!designation || designation === "")
      newErrors.desgination = "Please Enter Designation";
    if (!department || designation === "")
      newErrors.department = "Please Enter department";
    if (!employmentType || employmentType === "")
      newErrors.employmentType = "Please Enter type of employement";
    if (!primarySkills || primarySkills === "")
      newErrors.primarySkills = "Please Enter type of primarySkills";
    if (!secondarySkills || secondarySkills === "")
      newErrors.secondarySkills = "Please Enter type of secondarySkills";
    if (!jobTitle || jobTitle === "")
      newErrors.jobTitle = "Please Enter type of jobTitle";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/emp/updatedOnbordingDataById/${props.updateOnboard.onboardingId}`,
        {
          firstName,
          middleName,
          lastName,
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
      props.handleClose()

    // e.target.reset();
    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length > 0) {
    //     setErrors(formErrors);
    // } else {
    //     // console.log(form);
    //     // console.log("form submitted");
    //     axios.put(`/emp/updateApprovStatus${props.updateOnboard.onboardingId}`, form)
    //         .then((response) => {
    //             const user = response.data;
    //             toast.success("Form Submitted successfully")
    //             // console.log(user);
    //         })
    //         .catch((err) => { toast.error("Something Went Wrong") })
    // }
  };
  // console.log(form.dateOfJoining)
  //   console.log(err)

  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios
      .get("/designation/getAllDesignations")
      .then((response) => {
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
        toast.error("data is not getting");
      });
    // console.log(departments)
  }, []);

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
        <Row className="mb-4">
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              className="firstName"
              type="text"
              controlId="firstName"
              placeholder="Name"
              // onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isInvalid={!!errors.firstName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Middle name</Form.Label>
            <Form.Control
              name="middle_name"
              type="text"
              controlId="middleName"
              placeholder="Middle name"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            ></Form.Control>
          </Form.Group> */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              name="last_name"
              type="text"
              controlId="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isInvalid={!!errors.lastName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Phone No</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                controlId="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhonenNumber(e.target.value)}
                isInvalid={!!errors.phoneNumber}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              controlId="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Type Of Employeement</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Type Of Employment"
              controlId="employmentType"
              value={employmentType}
              onChange={(e) => setEmployementType(e.target.value)}
              isInvalid={!!errors.employmentType}
            >
              <option>Select</option>
              <option value="Intern">Intern</option>
              <option value="Contract">Contract</option>
              <option value="FTE">
                FTE 
              </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.employmentType}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Designation"
              controlId="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              isInvalid={!!errors.designation}
            >
              <option>Select </option>
              {designations.map((designation) => (
                <option>{designation.designationName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Department</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Department"
              controlId="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              isInvalid={!!errors.department}
            >
              <option>Select </option>
              {departments.map((departmentss) => (
                <option>{departmentss.departmentName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.department}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Joining date"
              controlId="dateOfJoining"
              value={dateOfJoining}
              onChange={(e) => setDateOfJoining(e.target.value)}
              isInvalid={!!errors.dateOfJoining}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.dateOfJoining}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Years Of Experience</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Experience "
              controlId="yearsOfExperience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              isInvalid={!!errors.yearsOfExperience}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.yearsOfExperience}
            </Form.Control.Feedback>
          </Form.Group>
          
          
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Primary Skills*</Form.Label>
            <Form.Control
              required
              type="text"
              name="primarySkills"
              placeholder="Primary Skills"
              controlId="primarySkills"
              value={primarySkills}
              onChange={(e) => setPrimarySkills(e.target.value)}
              // onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Secondary Skills*</Form.Label>
            <Form.Control
              required
              type="text"
              name="secondarySkills"
              placeholder="SecondarySkills"
              controlId="secondarySkills"
              value={secondarySkills}
              onChange={(e) => setSecondrySkills(e.target.value)}

              // onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              name="jobTitle"
              type="text"
              controlId="jobTitle"
              placeholder="Job Title "
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            ></Form.Control>
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
              {/* <Col>
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
              </Col> */}
            </Row>
      </Form>
    </>
  );
};

export default ApprovalUpdateForm;
