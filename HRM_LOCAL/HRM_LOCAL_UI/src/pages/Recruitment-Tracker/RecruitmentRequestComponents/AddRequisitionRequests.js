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

function AddRequisitionRequests(props) {
    const [users, setUsers] = useState({});
    const [suggestions, setSuggestions] = useState([]);
    const [suggestions1, setSuggestions1] = useState([]);
    const [suggestions2, setSuggestions2] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [thirderrors, setThirdErrors] = useState("");
    const [irm, setIrm] = useState('');
    const [step, setStep] = useState(0);
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
      !departmentName ||
      departmentName === "" ||
      !departmentName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.departmentName = "Please select Business unit";
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
    // if (
    //   !primaryContact ||
    //   primaryContact === "" ||
    //   !primaryContact.match(
    //     /^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    //   )
    // )
    //   newErrors.primaryContact = "Please Enter Primary contact";
    if (!pSkills || pSkills === "" || !pSkills.match(/^[aA-zZ\s]+$/))
      newErrors.pSkills = "Please enter Primary skills";
    
      return newErrors;
     
    };
  
  
  
    const handleNext = (e) => {
      e.preventDefault();
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
        axios
          .post("/recruitmentTracker/createRequisitionRequest", form)
          .then((response) => {
            const user = response.data;
            if (user.status) {
              props.func();
            } else {
              console.log("Props Not Send");
            }
            toast.success("Raised Requisition Request Successfully");
            console.log(user);
            setTimeout(1000);
            handleClose();
          })
          .catch((err) => {
            toast.error("Something Went Wrong");
          });
      }
    };
  
    return (
      <div>
        <Button
          variant="warning"
          onClick={handleShow}
          style={{
            backgroundColor: "#f5896e",
 borderColor: "#ff9b44",
            float: "right",
            borderRadius: "25px",
            // paddingBottom: "11.5px",
            // marginTop: "100px",
          }}
        >
          {" "}
          <BsPlusLg />
          Raise Requisition
        </Button>
        <Modal
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
            <Modal.Title>Raise a Requisition</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
           
                <div>
                
                  <Form
                    ref={forms}
                    className="formone"
                    // noValidate
                    // validated={validated}
                    style={{ padding: 10 }}
                  // onSubmit={handleSubmit}
                  >
                    <Row className="mb-4">
                    <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                    <Form.Label>Job Title *</Form.Label>
                    <Form.Control
                      required
                      className="jobTitle"
                      type="text"
                      controlId="jobTitle"
                      placeholder="Job Title"
                      value={form.jobTitle}
                      maxLength={30}
                     onChange={(e) => setField(e.target.value)}
                      isInvalid={!!errors.jobTitle}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.jobTitle}
                    </Form.Control.Feedback>
                  </Form.Group>
                      {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
                             setField("email", e.target.value) ;
                          // if(e.target.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)){
                          //    setField("email", e.target.value);
                          // }
                          // else{
                          //   email
                          // }
  
                         
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
                      </Form.Group> */}
  
                    </Row>
                  </Form>
                  <Button style ={{backgroundColor: "#f5896e",
 borderColor: "#ff9b44",}} onClick={handleSubmit}>Submit</Button>
               
              {/* )} */}
  {/*            
              {step === 1 && (
                <div>
                  <h5>Employment Details</h5>
                  <Form
                    ref={forms}
                    className="formone"
                    // noValidate
                    // validated={validated}
                    style={{ padding: 10 }}
                  // onSubmit={handleSubmit}
                  >
                <Row className="mb-4">
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
                        <Form.Label>Business Unit *</Form.Label>
                        <Form.Select
                          required
                          type="text"
                          placeholder="Businees Unit"
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
                  <Form.Label>Select Band *</Form.Label>
                  <Form.Select
                    required
                    type="text"
                    placeholder="Band"
                    controlId="band"
                    value={form.band}
                    onChange={(e) => setField("band", e.target.value)}
                    
                  >
                    <option>Select</option>
                    {bands.map((bandss) => (
                      <option>{bandss.bandName}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.band}
                  </Form.Control.Feedback>
  
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Select Client *</Form.Label>
                  <Form.Select
                    required
                    type="text"
                    placeholder="client"
                    controlId="client"
                    value={form.client}
                    onChange={(e) => setField("client", e.target.value)}
                    isInvalid={!!errors.client}
                  >
                    <option>Select </option>
                    {client.map((clients) => (
                      <option>{clients.clientName}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.client}
                  </Form.Control.Feedback>
                </Form.Group>
  
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Select Project *</Form.Label>
                  <Form.Select
                    required
                    type="text"
                    placeholder="projectName"
                    controlId="projectName"
                    value={form.projectName}
                    onChange={(e) => setField("projectName", e.target.value)}
                  >
                    <option>Select</option>
                    {/* <option value="HRM">HRM</option>
                    <option value="MDM">MDM</option> 
                    {project.map((projects) => (
                      <option>{projects.projectName}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
  
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Select IRM*</Form.Label>
                  <AutoCompleteComponent
                  outlined
                    dataSource={users}
                    placeholder="select IRM"
                    fields={{ value: "firstName" }}
                    value={form.irm}
                    onChange={(e) => setField("irm", e.target.itemData.employeeId)}
                    // query={dataQuery}
                  ></AutoCompleteComponent>
                </Form.Group>
  
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Select SRM*</Form.Label>
                  <AutoCompleteComponent
                  outlined
                    dataSource={users}
                    placeholder="select SRM"
                    fields={{ value: "firstName" }}
                    value={form.srm}
                    onChange={(e) => setField("srm", e.target.itemData.employeeId)}
                    // query={dataQuery}
                  ></AutoCompleteComponent>
                </Form.Group>
  
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                  <Form.Label>Select BUH*</Form.Label>
                  <AutoCompleteComponent
                  outlined
                   dataSource={users}
                    placeholder="select BUH"
                    fields={{ value: "firstName", display:"employeeId" }}
                    value={form.buh}
                    onChange={(e) => setField("buh", e.target.itemData.employeeId)}
                    // query={dataQuery}
                  ></AutoCompleteComponent>
  
                </Form.Group>
  
  
            </Row>
              </Form> 
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              )}
             */}
          </div>
        </Modal.Body>
      </Modal>
      </div >
    );
  }

export default AddRequisitionRequests