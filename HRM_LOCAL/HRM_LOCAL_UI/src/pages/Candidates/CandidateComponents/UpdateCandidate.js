import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateCandidate = (props) => {
  console.log(props.updateOnboard);

  const [applicantId, setApplicantId] = useState();
  const [requisitionId, setRequisitionId] = useState();
  const [candidateName, setCandidateName] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const [primarySkills, setPrimarySkills] = useState();
  const [secondarySkills, setSecondarySkills] = useState();
  const [mailId, setMailId] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState();
  const [uploadResume, setUploadResume] = useState();

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
      requisitionId,
      candidateName,
      candidateStatus,
      businessUnit,
      project,
      jobTitle,
      currentLocation,
      primarySkills,
      secondarySkills,
      email,
      phoneNumber,
      yearsOfExperience,
      uploadResume,
    } = form;
    const newErrors = {};

    if (!applicantId || applicantId === "") newErrors.applicantId = "";

    if (!requisitionId || requisitionId === "")
      newErrors.requisitionId = "Please Enter Requisition ID";

    if (!candidateName || candidateName === "" || !candidateName.match(/^[aA-zZ\s]+$/))
      newErrors.candidateName = "Please Enter Full Name";

    if (!candidateStatus || candidateStatus === "" || !candidateStatus.match(/^[aA-zZ\s]+$/))
      newErrors.candidateStatus = "Please Enter Candidate Status";

    if (!businessUnit || businessUnit === "" || !businessUnit.match(/^[aA-zZ\s]+$/))
      newErrors.businessUnit = "Please Enter BU";

    if (!project || project === "" || !project.match(/^[aA-zZ\s]+$/))
      newErrors.project = "Please Enter Project";

    if (!jobTitle || jobTitle === "" || !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please Enter Job Title";

    if (!currentLocation || currentLocation === "")
      newErrors.currentLocation = "Please Enter Current Location";

    if (!primarySkills || primarySkills === "")
      newErrors.primarySkills = "Please Enter Primary Skills";

    if (!secondarySkills || secondarySkills === "")
      newErrors.secondarySkills = "Please Enter Secondary Skills";

    if (!email || email === "") newErrors.email = "Please Enter Mail Id";

    if (
      !phoneNumber ||
      phoneNumber === "" ||
      !phoneNumber.match(
        /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.phoneNumber = "Please Enter Phone Number";

    if (!yearsOfExperience || yearsOfExperience === "")
      newErrors.yearsOfExperience = "Please Enter Years Of Experience";

    if (!uploadResume || uploadResume === "")
      newErrors.uploadResume = "Please upload uploadResume";
    return newErrors;
  };


  // Countries
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      );
      setCountries(res.data.countries);
      console.log(res.data);
    };
    loadData();
  }, []);

  //Update call
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/Leads/updateLeadById/${props.updateOnboard.id}`, {
        requisitionId,
        candidateName,
        candidateStatus,
        businessUnit,
        project,
        jobTitle,
        currentLocation,
        primarySkills,
        secondarySkills,
        email,
        phoneNumber,
        yearsOfExperience,
        uploadResume,
      })
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
        } else {
          console.log("Props not Send");
        }
        toast.success("Candidate updated successfully");
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

          {/* Job Title */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              required
              className="applicantId"
              type="text"
              controlId="applicantId"
              placeholder="Job Title"
              value={applicantId}
              onChange={(e) => setApplicantId(e.target.value)}
              isInvalid={!!errors.applicantId}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.applicantId}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Requisition ID */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Requisition ID</Form.Label>
            <Form.Control
              required
              className="requisitionId"
              type="text"
              controlId="requisitionId"
              placeholder="Requisition ID"
              value={requisitionId}
              onChange={(e) => setRequisitionId(e.target.value)}
              isInvalid={!!errors.requisitionId}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.requisitionId}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Candidate Name */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Candidate Name</Form.Label>
            <Form.Control
              required
              className="candidateName"
              type="text"
              controlId="candidateName"
              placeholder="Candidate Name"
              value={candidateName}
              maxLength={30}
              onChange={(e) => setCandidateName(e.target.value)}
              isInvalid={!!errors.candidateName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.candidateName}
            </Form.Control.Feedback>
          </Form.Group>

           {/* Candidate Status */}
           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Candidate Status</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Candidate Status"
              controlId="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              isInvalid={!!errors.currentLocation}
            >
              <option>Select </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.currentLocation}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          {/* Current LOCation */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Current Location</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Current Location"
              controlId="currentLocation"
              value={currentLocation}
              onChange={(e) => setCurrentLocation(e.target.value)}
              isInvalid={!!errors.currentLocation}
            >
              <option>Select </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.currentLocation}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* P SKILLS */}

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Primary Skills</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Primary Skills"
              controlId="primarySkills"
              value={primarySkills}
              onChange={(e) => setPrimarySkills(e.target.value)}
              isInvalid={!!errors.primarySkills}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.primarySkills}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* S SKILLS */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Secondary Skills</Form.Label>
            <Form.Control
              required
              className="secondarySkills"
              type="text"
              controlId="secondarySkills"
              placeholder="Secondary Skills"
              value={secondarySkills}
              maxLength={30}
              onChange={(e) => setSecondarySkills(e.target.value)}
              isInvalid={!!errors.secondarySkills}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.secondarySkills}
            </Form.Control.Feedback>
          </Form.Group>

          {/* EMAIL  */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Mail ID</Form.Label>
            <Form.Control
              required
              type="mail"
              placeholder="Mail ID"
              controlId="mailId"
              value={mailId}
              onChange={(e) => setMailId(e.target.value)}
              isInvalid={!!errors.mailId}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.mailId}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Phone# */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone Number"
              controlId="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              isInvalid={!!errors.phoneNumber}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          {/* YOE */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Years Of Experience</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Years Of Experience"
              controlId="yearsOfExperience"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              isInvalid={!!errors.yearsOfExperience}
            >
              <option> Select </option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.yearsOfExperience}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Resume */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Upload Resume</Form.Label>
            <Form.Control
              required
              type="file"
              placeholder="Upload Resume"
              controlId="uploadResume"
              value={uploadResume}
              onChange={(e) => setUploadResume("uploadResume", e.target.value)}
              isInvalid={!!errors.uploadResume}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.uploadResume}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
  );
};

export default UpdateCandidate;
