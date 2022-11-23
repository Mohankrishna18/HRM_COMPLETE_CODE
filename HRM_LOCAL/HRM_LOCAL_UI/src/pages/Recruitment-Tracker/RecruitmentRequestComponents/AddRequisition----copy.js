import React, { useEffect, useState, useRef } from 'react'
import { Modal, FloatingLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

 const AddRequisition=(props)=> {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const [comment, setComment] = useState([]);
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
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const res = await axios.get("/clientProjectMapping/getAllClients");
    setClients(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    loadDepartmentsData();
  }, []);

  const loadDepartmentsData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setProjects(res.data.data);
    console.log(res.data.data);
  };

  const validateForm = () => {
    const {
      reqId,
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

    // console.log(clientName);
    // console.log(startDate);
    // console.log(endDate);
    // console.log(country);
    // console.log(address);

    const newErrors = {};

    if (!jobTitle ||  !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please enter Job Title";
    if (!workLocation || workLocation === "" || !workLocation.match(/^[aA-zZ\s]+$/))
      newErrors.workLocation = "Please enter Work location";
    // if (!textAreaDesc || textAreaDesc === "" || !textAreaDesc.match(/^[aA-zZ\s]+$/))
    //   newErrors.textAreaDesc = "Please enter Job Description";
    // if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
    //   newErrors.comments = "Please enter Comments";
    if (
      !clientName ||
      clientName === "" ||
      !clientName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.clientName = "Please select Client";
    
    if (
      !projectName ||
      projectName === "" ||
      !projectName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.projectName = "Please select Project";
    if (
      !rrStatus ||
      rrStatus === "" ||
      !rrStatus.match(/^[aA-zZ\s]+$/)
    )
      newErrors.rrStatus = "Please select RR status";
    if (
      !workflowStatus ||
      workflowStatus === "" ||
      !workflowStatus.match(/^[aA-zZ\s]+$/)
    )
      newErrors.workflowStatus = "Please select Workflow status";
    if (
      !empType ||
      empType === "" ||
      !empType.match(/^[aA-zZ\s]+$/)
    )
      newErrors.empType = "Please select Employment type";
      if (
        !primaryContact ||
        primaryContact === "" ||
        !primaryContact.match(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        )
      )
    if (!pSkills || pSkills === "" || !pSkills.match(/^[aA-zZ\s]+$/))
      newErrors.pSkills = "Please enter Primary skills";
  
      if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
      newErrors.comments = "Please enter comments";
    
    return newErrors;
  };



  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    setForm("");
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      console.log("form submitted");
      axios
        .post("/recruitmentTracker/createRequisitionRequest", form)
        .then((response) => {
          const user = response.data;
          console.log(user);
          console.log(user);
          // setForm("");
          if (user.status) {
            props.func();
            // console.log(user);
          } else {
            console.log("Props Not Send");
          }
          toast.success("Requisition Request raised successfully");
          console.log(user);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  const postdata = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:9000/v1/addComments", form)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          axios
            .get("http://localhost:9000/v1/getAllComments/id")
            .then((resp) => {
              console.log(resp);
              setComment(resp.data);
            })
            .catch((errr) => {
              console.log(errr);
            });
        } else {
          console.log("data not post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#f5896e",
 borderColor: "#f5896e",
          float: "right",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {" "}
        <MdOutlinePersonAddAlt />
        {/* <BsPlusLg />  */}
        &nbsp; Raise Requirement
      </Button>
      <Modal
        style={{ maxHeight: "1350px", maxWidth: "1550px" }}
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Raise Job Requirements</Modal.Title>
        </Modal.Header>

        <Modal.Body className="scroll">
          <Form
            ref={forms}
            className="formone"
            // noValidate
            //validated={validated}
            style={{ padding: 10 }}
          // onSubmit={handleSubmit}
          >
            <Row>
              <Col>
                <Row>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Business Unit *</Form.Label>
                    <Form.Select
                      required
                      className="departmentName"
                      type="text"
                      controlid="departmentName"
                      placeholder="Business Unit"
                      value={form.departmentName}
                      maxLength={30}
                      onChange={(e) => setField("departmentName", e.target.value)}
                      isInvalid={!!errors.departmentName}
                    >
                      <option>Select </option>
                      {departments.map((department) => (
                        <option value={department.departmentName}>
                          {department.departmentName}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.departmentName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Primary Contact</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                      <Form.Control
                        required
                        type="number"
                        maxLength={10}
                        placeholder="Primary Contact"
                        controlid="primaryContact"
                        value={form.primaryContact}
                        onChange={(e) => {
                          setField("primaryContact", e.target.value);
                          if (e.target.value.length > 10) {
                            setFirstErrors(
                              "Primary Contact length should be 10 characters"
                            );
                          } else {
                            setFirstErrors("");
                          }
                        }}
                        isInvalid={firsterrors}
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {errors.primaryContact}
                        {firsterrors}
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>


                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Project</Form.Label>
                    <Form.Select
                      type="text"
                      placeholder="Project Name"
                      required
                      controlid="projectName"
                      value={form.projectName}
                      onChange={(e) => setField("projectName", e.target.value)}
                      isInvalid={!!errors.projectName}
                    >
                      <option>Select Project</option>
                      {projects.map((project) => (
                        <option value={project.projectName}>
                          {project.projectName}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.projectName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>

                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Client *</Form.Label>
                    <Form.Select
                      required
                      className="clientName"
                      type="text"
                      controlid="clientName"
                      placeholder="Client"
                      value={form.clientName}
                      maxLength={30}
                      onChange={(e) => setField("clientName", e.target.value)}
                      isInvalid={!!errors.clientName}
                    >
                      <option>Select </option>
                      {clients.map((client) => (
                        <option value={client.clientName}>
                          {client.clientName}
                        </option>
                      ))}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.clientName}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Req ID *</Form.Label>
                    <Form.Control
                      required
                      className="Primary Contact"
                      type="text"
                      controlid="reqId"
                      placeholder="Req ID"
                      // onChange={(event) => setclientName(event.target.value)}
                      value={form.reqId}
                      maxLength={30}
                      onChange={(e) => setField("reqId", e.target.value)}
                      isInvalid={!!errors.reqId}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.reqId}
                    </Form.Control.Feedback>
                  </Form.Group> */}
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Job Title *</Form.Label>
                    <Form.Control
                      required
                      className="jobTitle"
                      type="text"
                      controlid="jobTitle"
                      placeholder="Job Title"
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
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>No. of Positions</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="No of Positions"
                      controlid="positions"
                      value={form.positions}
                      onChange={(e) => setField("positions", e.target.value)}
                      isInvalid={!!errors.positions}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.positions}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Rate</Form.Label>
                    <Form.Control
                      required
                      type="rate"
                      placeholder="Rate"
                      controlid="rate"
                      value={form.rate}
                      onChange={(e) => setField("rate", e.target.value)}
                      isInvalid={!!errors.rate}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.rate}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Employment Type</Form.Label>
                    <Form.Select
                      required

                      className="empType"
                      type="text"
                      controlid="empType"
                      placeholder="Employment Type"

                      value={form.empType}
                      maxLength={30}
                      onChange={(e) => setField("empType", e.target.value)}
                      isInvalid={!!errors.empType}
                    >
                      <option>Select Employment Type</option>
                      <option>Full Time</option>
                      <option>Contract</option>
                      <option>Intern</option>
                      <option>Part Time</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.empType}
                    </Form.Control.Feedback>

                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Primary Skills *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Primary Skills"
                      controlid="pSkills"
                      value={form.pSkills}
                      onChange={(e) => setField("pSkills", e.target.value)}
                      isInvalid={!!errors.pSkills}
                    >

                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.pSkills}
                    </Form.Control.Feedback>
                  </Form.Group>



                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Secondary Skills</Form.Label>
                    <Form.Control
                      required
                      className="sSkills"
                      type="text"
                      controlid="sSkills"
                      placeholder="Secondary Skills"

                      value={form.sSkills}

                      onChange={(e) => setField("sSkills", e.target.value)}
                      isInvalid={!!errors.sSkills}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.sSkills}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Requisition Request Status *</Form.Label>
                    <Form.Select
                      required
                      className="rrStatus"
                      type="text"
                      controlid="rrStatus"
                      placeholder="Requisition Request Status"

                      value={form.rrStatus}

                      onChange={(e) => setField("rrStatus", e.target.value)}
                      isInvalid={!!errors.rrStatus}
                    >
                      <option>Select Requisition Request Status</option>
                      <option>waiting for Buhead Approval</option>
                      <option>waiting for PMO Approval</option>
                      <option>Rejected by Buhead</option>
                      <option>Rejected By PMO</option>
                      <option>Aprooved</option>
                      <option>Rejected</option>

                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.rrStatus}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Workflow Status *</Form.Label>
                    <Form.Select
                      required
                      className="workflowStatus"
                      type="text"
                      controlid="workflowStatus"
                      placeholder="Workflow Status"
                      // onChange={(event) => setclientName(event.target.value)}
                      value={form.workflowStatus}
                      maxLength={30}
                      onChange={(e) => setField("workflowStatus", e.target.value)}
                      isInvalid={!!errors.workflowStatus}
                    >
                      <option>Select Workflow Status</option>
                      <option>Disclosed</option>
                      <option>Closed</option>

                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.workflowStatus}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Work Location</Form.Label>
                    <Form.Control
                      required
                      type="workLocation"
                      placeholder="Work Location"
                      controlid="workLocation"
                      value={form.workLocation}
                      onChange={(e) => setField("workLocation", e.target.value)}
                      isInvalid={!!errors.workLocation}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.workLocation}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Working Hours *</Form.Label>
                    <Form.Control
                      required
                      className="workingHours"
                      type="text"
                      controlid="workingHours"
                      placeholder="Working Hours"
                      // onChange={(event) => setclientName(event.target.value)}
                      value={form.workingHours}
                      maxLength={30}
                      onChange={(e) => setField("workingHours", e.target.value)}
                      isInvalid={!!errors.workingHours}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.workingHours}
                    </Form.Control.Feedback>
                  </Form.Group>

                </Row>
                <Row>
                  <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Years of Experiance</Form.Label>
                    <Form.Control
                      required
                      type="yoe"
                      placeholder="Years Of Experiance"
                      controlid="yoe"
                      value={form.yoe}
                      onChange={(e) => setField("yoe", e.target.value)}
                      isInvalid={!!errors.yoe}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.yoe}
                    </Form.Control.Feedback>
                  </Form.Group>
                  {/* <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Upload SOW *</Form.Label>
                    <Form.Control
                      required
                      className="uploadSOW"
                      type="file"
                      controlid="uploadSOW"
                      placeholder="Upload SOW"
                      
                      value={form.desc}
                      maxLength={30}
                      onChange={(e) => setField("uploadSOW", e.target.value)}
                      isInvalid={!!errors.uploadSOW}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.uploadSOW}
                    </Form.Control.Feedback>
                  </Form.Group> */}
                  {/* <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Job Description *</Form.Label>
                    <Form.Control
                      required
                      className="uploadDesc"
                      type="file"
                      controlid="uploadDesc"
                      placeholder="uploadDesc"
                      
                      value={form.uploadDesc}
                      maxLength={30}
                      onChange={(e) => setField("uploadDesc", e.target.value)}
                      isInvalid={!!errors.uploadDesc}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.uploadDesc}
                    </Form.Control.Feedback>
                  </Form.Group> */}
                </Row>


              </Col>


            </Row>
            <Row>
              <Form.Group className="mb-3" >
                <Form.Label>Job Description</Form.Label>
                <Form.Control 
                required
                className="textAreaDesc"
                controlid="textAreaDesc"
                value={form.textAreaDesc}
                maxLength={100}
                onChange={(e) => setField("textAreaDesc", e.target.value)}
                isInvalid={!!errors.textAreaDesc}
                as="textarea" rows={2} />
                <Form.Control.Feedback type="invalid">
                      {errors.textAreaDesc}
                    </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3" >
                <Form.Label>Comments</Form.Label>
                <Form.Control 
                required
                className="comments"
                controlid="comments"
                value={form.comments}
                maxLength={150}
                onChange={(e) => setField("comments", e.target.value)}
                isInvalid={!!errors.comments}
                as="textarea" rows={2} />
                <Form.Control.Feedback type="invalid">
                      {errors.comments}
                    </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#f5896e",
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

export default AddRequisition;