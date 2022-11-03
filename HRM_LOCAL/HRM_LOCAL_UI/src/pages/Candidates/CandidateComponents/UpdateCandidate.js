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

  const [jobTitle, setJobTitle] = useState(props.updateOnboard.jobTitle);
  const [requisitionId, setRequisitionId] = useState(props.updateOnboard.requisitionId);
  const [candidateName, setCandidateName] = useState(props.updateOnboard.candidateName);
  const [currentLocation, setCurrentLocation] = useState(props.updateOnboard.currentLocation);
  const [candidateStatus, setCandidateStatus] = useState(props.updateOnboard.candidateStatus);
  const [primarySkills, setPrimarySkills] = useState(props.updateOnboard.primarySkills);
  const [secondarySkills, setSecondarySkills] = useState(props.updateOnboard.secondarySkills);
  const [email, setEmail] = useState(props.updateOnboard.email);
  const [phoneNumber, setPhoneNumber] = useState(props.updateOnboard.phoneNumber);
  const [yearsOfExperience, setYearsOfExperience] = useState(props.updateOnboard.yearsOfExperience);
  const [uploadResume, setUploadResume] = useState();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [jobError, setJobError]=useState("");
  const [candidateNameError, setCandidateNameError]=useState("");
  const [candidateStatusError, setCandidateStatusError]=useState("");
  const [locationError, setLocationError]=useState("");
  const [skillError, setSkillError]=useState("");
  const [secSkillError, setSecSkillError]=useState("");
  const [mailError, setMailError]=useState("");
  const [phnError, setPhnError]=useState("");
  const [expyrError, setExpyrError]=useState("");

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

    if (!jobTitle || jobTitle === "") newErrors.jobTitle = "";

    if (!requisitionId || requisitionId === "")
      newErrors.requisitionId = "Please Enter Requisition ID";

    if (!candidateName || candidateName === "" || !candidateName.match(/^[aA-zZ\s]+$/))
      newErrors.candidateName = "Please Enter Full Name";

    if (!candidateStatus || candidateStatus === "" || !candidateStatus.match(/^[aA-zZ\s]+$/))
      newErrors.candidateStatus = "Please Enter Candidate Status";

    // if (!businessUnit || businessUnit === "" || !businessUnit.match(/^[aA-zZ\s]+$/))
    //   newErrors.businessUnit = "Please Enter BU";

    // if (!project || project === "" || !project.match(/^[aA-zZ\s]+$/))
    //   newErrors.project = "Please Enter Project";

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

  
    const loadData = async () => {
      const res = await axios.get(
        "/candidate/getCandidate"
      );
      console.log(res.data);
      // setCountries(res.data);
      
    };
    useEffect(() => {
    loadData();
  }, []);

  //Update call
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (
      jobError === ""&&
      candidateNameError === "" &&
  candidateStatusError === "" &&
  locationError === "" &&
  skillError === "" &&
  secSkillError === "" &&
  mailError === "" &&
  phnError === "" &&
  expyrError === ""
){
    axios
      .put(`/candidate/updateCandidate/${props.updateOnboard.candidateId}`, {
        requisitionId,
        candidateName,
        candidateStatus,
        // businessUnit,
        // project,
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
        const user = response;
        console.log(user);
        if (response.statusText) {
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
  } else {
    console.log("Data Not posted");
    toast.error("Form Not Submitted");
  }
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
              className="jobTitle"
              type="text"
              controlId="jobTitle"
              placeholder="Job Title"
              defaultValue={jobTitle}
              // onChange={(e) => setJobTitle(e.target.value)}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setJobError("Invalid JobTitle");
                }
                else if(e.target.value.length>50){
                  setJobError("Too Long")
                }
                else{
                  setJobTitle(e.target.value);
                  setJobError("");
                }
              }}
              isInvalid={jobError}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {jobError}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Requisition ID */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Requisition ID</Form.Label>
            <Form.Control
              required
              disabled
              className="requisitionId"
              type="text"
              controlId="requisitionId"
              placeholder="Requisition ID"
              defaultValue={requisitionId}
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
              // defaultvalue={candidateName}
              className="candidateName"
              type="text"
              controlId="candidateName"
              placeholder="Candidate Name"
              defaultValue={candidateName}
              maxLength={30}
              // onChange={(e) => setCandidateName(e.target.value)}
              // isInvalid={!!errors.candidateName}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setCandidateNameError ("Invalid Candidate Name");
                }
                else if(e.target.value.length>50){
                  setCandidateNameError("Too Long")
                }
                else{
                  setCandidateName(e.target.value);
                  setCandidateNameError("");
                }
              }}
              isInvalid={candidateNameError }
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {candidateNameError }
            </Form.Control.Feedback>
          </Form.Group>

           {/* Candidate Status */}
           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Candidate Status</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Candidate Status"
              controlId="candidateStatus"
              defaultValue={candidateStatus}
              // onChange={(e) => setCandidateStatus(e.target.value)}
              // isInvalid={!!errors.candidateStatus}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setCandidateStatus ("Invalid Candidate Status");
                }
                else if(e.target.value.length>50){
                  setCandidateStatus("Too Long")
                }
                else{
                  setCandidateStatus(e.target.value);
                  setCandidateStatus("");
                }
              }}
            >
               <option value="">Select Status </option>
                  <option value="Hired">Hired</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Onhold">Onhold</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Declined">Declined</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {candidateStatus }
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          {/* Current LOCation */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Current Location</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Current Location"
              controlId="currentLocation"
              defaultValue={currentLocation}
              // onChange={(e) => setCurrentLocation(e.target.value)}
              // isInvalid={!!errors.currentLocation}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setLocationError  ("Invalid Location");
                }
                else if(e.target.value.length>50){
                  setLocationError("Too Long")
                }
                else{
                  setLocationError(e.target.value);
                  setLocationError("");
                }
              }}
              isInvalid={locationError}
            >
            
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {locationError}
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
              defaultValue={primarySkills}
              // onChange={(e) => setPrimarySkills(e.target.value)}
              // isInvalid={!!errors.primarySkills}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setSkillError ("Invalid");
                }
                else if(e.target.value.length>50){
                  setSkillError("Too Long")
                }
                else{
                  setPrimarySkills(e.target.value);
                  setSkillError("");
                }
              }}
              isInvalid={skillError }
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {skillError }
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
              defaultValue={secondarySkills}
              maxLength={30}
              // onChange={(e) => setSecondarySkills(e.target.value)}
              // isInvalid={!!errors.secondarySkills}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setSecSkillError  ("Invalid");
                }
                else if(e.target.value.length>50){
                  setSecSkillError("Too Long")
                }
                else{
                  setSecSkillError(e.target.value);
                  setSecSkillError("");
                }
              }}
              isInvalid={secSkillError}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {secSkillError}
            </Form.Control.Feedback>
          </Form.Group>

          {/* EMAIL  */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Mail ID</Form.Label>
            <Form.Control
              required
              type="mail"
              placeholder="Mail ID"
              controlId="email"
              defaultValue={email}
              // onChange={(e) => setEmail(e.target.value)}
              // isInvalid={!!errors.email}
              onChange ={(e) =>{
                if (
                  !e.target.value.match(
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                  )
                ) {
                  setMailError ("Invalid Email");
                } else {
                  setMailError("");
                }
                setEmail(e.target.value);
              }}
              isInvalid={mailError }
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {mailError}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Phone# */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              type="number"
              maxLength={10}
              placeholder="Phone Number"
              controlId="phoneNumber"
              defaultValue={phoneNumber}
              // onChange={(e) => setPhoneNumber(e.target.value)}
              // isInvalid={!!errors.phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (
                  e.target.value.length > 10 ||
                  e.target.value.length < 10
                ) {
                  setPhnError (
                    " Phone Number length should be 10 characters"
                  );
                } else {
                  setPhnError("");
                }
              }}
              isInvalid={phnError }
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {phnError }
            </Form.Control.Feedback>
          </Form.Group>

          {/* YOE */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Years Of Experience</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Years Of Experience"
              controlId="yearsOfExperience"
              defaultValue={yearsOfExperience}
              // onChange={(e) => setYearsOfExperience(e.target.value)}
              // isInvalid={!!errors.yearsOfExperience}
              onChange ={(e) =>{
                if(e.target.value === ""){
                  setExpyrError ("Invalid");
                }
                else if(e.target.value.length>50){
                  setExpyrError("Too Long")
                }
                else{
                  setYearsOfExperience(e.target.value);
                  setExpyrError("");
                }
              }}
              isInvalid={expyrError }
            >
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {expyrError}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Resume */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
  );
};

export default UpdateCandidate;
