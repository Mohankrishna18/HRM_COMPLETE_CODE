import React from "react";
import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "../../../Uri";
import { FaPlus } from "react-icons/fa";
import { Row, Col, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdPersonAdd } from "react-icons/io";

function AddCandidate(props) {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);
  const [show, setShow] = useState(false);
  const [departments, setDepartments] = useState([]);

  // // Get API's for Clients Dropdown
  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   const res = await axios.get("/clientProjectMapping/getAllClients");
  //   setClients(res.data.data);
  //   console.log(res.data);
  // };

  // // Get API's for Departments(Business Unit Head) Dropdown
  // useEffect(() => {
  //   loadDepartmentsData();
  // }, []);

  // const loadDepartmentsData = async () => {
  //   const res = await axios.get("/dept/getAllDepartments");
  //   setDepartments(res.data);
  //   console.log(res.data);
  // };

  // // Get API's for reportingManager(projectManger)
  // const [reportingManager, setReportingManager] = useState([]);
  // useEffect(() => {
  //   axios.get("/emp/getreportingmanager").then((response) => {
  //     console.log(response.data);
  //     setReportingManager(response.data.data);
  //   });
  // }, []);

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
      requisitionId,
      candidateName,
      candidateStatus,
      departmentName,
      projectName,
      jobTitle,
      currentLocation,
      primarySkills,
      secondarySkills,
      email,
      phoneNumber,
      yearsOfExperience,
      // uploadResume,
    } = form;

    const newErrors = {};

    // if (!jobTitle || jobTitle === "") newErrors.jobTitle = "";

    if (!requisitionId || requisitionId === "")
      newErrors.requisitionId = "Please Enter Requisition ID";

    if (
      !candidateName ||
      candidateName === "" ||
      !candidateName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.candidateName = "Please Enter Full Name";

    if (
      !candidateStatus ||
      candidateStatus === "" ||
      !candidateStatus.match(/^[aA-zZ\s]+$/)
    )
      newErrors.candidateStatus = "Please Enter Candidate Status";

    // if (
    //   !businessUnit ||
    //   businessUnit === "" ||
    //   !businessUnit.match(/^[aA-zZ\s]+$/)
    // )
    //   newErrors.businessUnit = "Please Select Business Unit";

    // if (!project || project === "" || !project.match(/^[aA-zZ\s]+$/))
    //   newErrors.project = "Please Select project";

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

    // if (!uploadResume || uploadResume === "")
    //   newErrors.uploadResume = "Please upload uploadResume";
    return newErrors;
  };

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
      const lastForm = Object.assign(
        form,
        { jobTitle:jobTitle },
        { departmentName: departmentName },
        { projectName: projectName }
      );
      console.log(lastForm);
      axios
        .post("/candidate/addCandidate", form)
        .then((response) => {
          const user = response;
          console.log(response.data);
          if (user.status) {
            props.func();
            toast.success("Candidate added Successfully");
          } else {
            console.log("Props Not Send");
          }
          // toast.success("Project added Successfully");
          console.log(user);
          // console.log(user);
          setTimeout(5000);
          setForm({});
          handleClose();
        })
        .catch((err) => {
          toast.error("Something went Wrong");
        });
    }
  };
const jobTitle=user.jobTitle;
const departmentName = user.departmentName;
const projectName = user.projectName;
  const [candidateData, setCandidateData] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get(
        "/recruitmentTracker/getAllRequisitionRequests"
      );
      console.log(response.data);
      setCandidateData(response.data.data);
    };
    loadUsers();
  }, []);
  console.log(candidateData);
  console.log(user.jobTitle)

  return (
    <div>
      {/* Add candidate button */}
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#B6B6B4",
            borderColor: "#B6B6B4",
          color: "#F4F8F6",
          float: "right",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {/* <FaPlus />  */}
        <IoMdPersonAdd style={{ fontSize: "25px" }} />
        &nbsp; Add Candidate
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#FF9E14",
            paddingTop: "5px",
            paddingBottom: "5px",
            color: "white",
          }}
        >
          <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>
            Add Candidate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="scroll">
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-4">
              {/* requisition ID */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Requisition ID</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Requisition ID"
                  controlId="requisitionId"
                  value={form.requisitionId}
                  // onChange={(e) => setField("requisitionId", e.target.value)}
                  onChange={(e) => {
                    axios
                      .get(`/recruitmentTracker/getDataById/${e.target.value}`)
                      .then((response) => {
                        console.log(response.data.data);
                        setUser(response.data.data);
                        
                      });
                    setField("requisitionId", e.target.value);
                  }}
                  isInvalid={!!errors.requisitionId}
                >
                  <option value="">Select </option>
                  {!candidateData ? (<></>): candidateData.map((requisition) => (
                    <option value={requisition.requisitionId}>
                      {requisition.requisitionId}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.requisitionId}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* candidate name */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Candidate Name *</Form.Label>
                <Form.Control
                  required
                  className="candidateName"
                  type="text"
                  controlId="candidateName"
                  placeholder="Candidate Name"
                  value={form.candidateName}
                  maxLength={30}
                  onChange={(e) => setField("candidateName", e.target.value)}
                  isInvalid={!!errors.candidateName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.candidateName}
                </Form.Control.Feedback>
              </Form.Group>

              {/* business unit */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Department Name *</Form.Label>
                <Form.Control
                  disabled
                  className="departmentName"
                  type="text"
                  controlId="departmentName"
                  placeholder="Department Name"
                  value={user.departmentName}
                  maxLength={50}
                  onChange={(e) => setField("departmentName", e.target.value)}
                  // isInvalid={!!errors.businessUnit}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* {errors.businessUnit} */}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Email */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  required
                  type="mail"
                  placeholder="Email"
                  controlId="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* job title */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Job Title *</Form.Label>
                <Form.Control
                  disabled
                  className="jobTitle"
                  type="text"
                  controlId="jobTitle"
                  placeholder="Job Title"
                  value={user.jobTitle}
                  maxLength={50}
                  onChange={(e) => setField("jobTitle", e.target.value)}
                  //isInvalid={!!errors.jobTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* {errors.jobTitle} */}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Phone Number */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Phone Number"
                  controlId="phoneNumber"
                  value={form.phoneNumber}
                  onChange={(e) => setField("phoneNumber", e.target.value)}
                  isInvalid={!!errors.phoneNumber}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Project */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Project Assigned </Form.Label>
                <Form.Control
                  disabled
                  className="projectName"
                  type="text"
                  controlId="projectName"
                  placeholder="Project Assigned"
                  value={user.projectName}
                  maxLength={50}
                  onChange={(e) => setField("projectName", e.target.value)}
                  // isInvalid={!!errors.project}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {/* {errors.project} */}
                </Form.Control.Feedback>
              </Form.Group>

              {/* YOE */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Years Of Experience *</Form.Label>
                <Form.Control
                  required
                  className="yearsOfExperience"
                  type="text"
                  controlId="yearsOfExperience"
                  placeholder="Years Of Experience"
                  value={form.yearsOfExperience}
                  maxLength={30}
                  onChange={(e) =>
                    setField("yearsOfExperience", e.target.value)
                  }
                  isInvalid={!!errors.yearsOfExperience}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.yearsOfExperience}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Current Location */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Current Location*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Current Location"
                  controlId="currentLocation"
                  value={form.currentLocation}
                  maxLength={80}
                  onChange={(e) => setField("currentLocation", e.target.value)}
                  isInvalid={!!errors.currentLocation}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.currentLocation}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* Candidate Status */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Candidate Status*</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Candidate Status"
                  controlId="candidateStatus"
                  value={form.candidateStatus}
                  onChange={(e) => setField("candidateStatus", e.target.value)}
                  isInvalid={!!errors.candidateStatus}
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
                  {errors.candidateStatus}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* P Skills */}
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Primary Skills*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Primary Skills"
                  controlId="primarySkills"
                  value={form.primarySkills}
                  onChange={(e) => setField("primarySkills", e.target.value)}
                  isInvalid={!!errors.primarySkills}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.primarySkills}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* S skills */}
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Secondary Skills </Form.Label>
                <Form.Control
                  required
                  className="secondarySkills"
                  type="text"
                  controlId="secondarySkills"
                  placeholder="Secondary Skills"
                  value={form.secondarySkills}
                  maxLength={30}
                  onChange={(e) => setField("secondarySkills", e.target.value)}
                  isInvalid={!!errors.secondarySkills}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.secondarySkills}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Upload Resume */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Upload Resume </Form.Label>
                <Form.Control
                  required
                  type="file"
                  placeholder="Upload Resume"
                  controlId="uploadResume"
                  value={form.uploadResume}
                  onChange={(e) => setField("uploadResume", e.target.value)}
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

export default AddCandidate;
