
import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsDisplay, BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import './custom.css';
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';
import "./AddOnboard.css";


function AddOnboard(props) {
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
  const[jobT,setJobT]= useState("");

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
      primarySkills,
      secondarySkills,
      requisitionId,jobTitle,
      clientName,
      requestInitiatedDate,
      raisedBy
    } = form;
    const newErrors = {};

    if (!firstName || firstName === "" || !firstName.match(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/))
      newErrors.firstName = "Please Enter First Name";
    // if (!lastName || lastName === "" || !lastName.match(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/))
    //   newErrors.lastName = "Please Enter Last Name";
    if (!email || email === "") newErrors.email = "Please Enter Valid Email";
    if (
      !phoneNumber ||
      phoneNumber === "" ||
      !phoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/)
)
      newErrors.phoneNumber = "Please Enter Phone Number";
    if (!dateOfJoining || dateOfJoining === "")
      newErrors.dateOfJoining = "Please Enter Date of Joining";
      if (!primarySkills || primarySkills === "")
      newErrors.primarySkills = "Please Enter Primary Skills";
    // if (!secondarySkills || secondarySkills === "")
    //   newErrors.secondarySkills = "Please Enter Secondary Skills";
    if (
    !yearsOfExperience ||
    yearsOfExperience === "" 
    // yearsOfExperience.match(/^\d{1,}(\.\d{0,4})?$/)
    )
    newErrors.yearsOfExperience = "Please Enter Years of Experience";
    // if (!jobTitle || jobTitle === "")
    //   newErrors.jobTitle = "Please Enter Job Title";
      if (!requisitionId || requisitionId === "")
      newErrors.requisitionId = "Please Enter Requisition ID";
    
    // if (!designation || designation === "")
    //   newErrors.designation = "Please Enter Designation";
    // if (!department || department === "")
    //   newErrors.department = "Please Enter Department";
    // if (!employmentType || employmentType === "")
    //   newErrors.employmentType = "Please Enter type of Employeement";
    
    // if (!jobTitle || jobTitle === "")
    //   newErrors.jobTitle = "Please Enter type of Job Title";
    // if (!client || client === "") newErrors.client = "Please Select Client";
    // if (!projectName || projectName === "")
    //   newErrors.projectName = "Please Select ProjectName";
    //   if (!irm || irm === "") newErrors.irm = "Please Select irm";
    //   if (!srm || srm === "") newErrors.srm = "Please Select srm";
    //   if (!buh || buh === "") newErrors.buh = "Please Select buh";
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
      const lastForm = Object.assign(form,{jobTitle:jobTitle})
      console.log(lastForm)
      axios
        .post("/emp/createNewPotentialEmployee", form)
        .then((response) => {
          const user = response.data;
          console.log(user)
          if (user.status) {
            props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Employee Onboarded Successfully");
          console.log(user);
          setTimeout(500);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios.get("/designation/getAllDesignations").then((response) => {
      console.log(response.data);
      setDesignations(response.data);
    });
    // .catch(() => {
    //   toast.error("data is not getting");
    // });
  }, []);

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((response) => {
      setDepartments(response.data);
    });
    // .catch(() => {
    //   toast.error("Data is not getting");
    // });
    // console.log(departments)
  }, []);

  const [reportingManager, setReportingManager] = useState([]);
  useEffect(() => {
    axios.get("/emp/getreportingmanager").then((response) => {
      console.log(response.data);
      setReportingManager(response.data.data);
    });
  }, []);

  const [bands, setBands] = useState([]);
  useEffect(() => {
    axios.get("/bands/getAllBands").then((response) => {
      console.log(response.data);
      setBands(response.data.data);
    });
  }, []);

  const [client, setClient] = useState([]);
  useEffect(() => {
    axios.get("/clientProjectMapping/getAllClients").then((response) => {
      console.log(response.data);
      setClient(response.data.data);
    });
  }, []);

  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get("/clientProjectMapping/getAllProjects").then((response) => {
      console.log(response.data);
      setProject(response.data.data);
    });
  }, []);

  const [rrf, setRrf] = useState([]);
  useEffect(() => {
    axios.get("/recruitmentTracker/getAllRequisitionRequestsByStatus").then((response) => {
      setRrf(response.data.data);
    });
  }, []);
  console.log(rrf)

  console.log(jobT);
  const jobTitle=jobT.jobTitle;
  console.log(jobT.jobTitle);


  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/emp/getAllEmployeeMasterData");
      console.log(response.data.data);
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);

  // //irm onchange and onclick calls
  // const onChangeHandler = (irm) => {
  //   let matches = []
  //   if (irm.length > 0) {
  //     matches = users.filter(user => {
  //       const regex = new RegExp(`${irm}`, "gi");
  //       return user.firstName.match(regex)
  //     })
  //     console.log('matches', matches);
  //     setSuggestions(matches);
  //   }
  // }
  // const onSuggestHandler = (irm) => {
  //   setField("irm",irm)
  //   setSuggestions([])
  // }

  // //srm onchange and onclick calls
  // const onChangeHandler1 = (srm) => {
  //   let matches = []
  //   if (srm.length > 0) {
  //     matches = users.filter(user => {
  //       const regex = new RegExp(`${srm}`, "gi");
  //       return user.firstName.match(regex)
  //     })
  //     console.log('matches', matches);
  //     setSuggestions1(matches);
  //   }
  // }
  // const onSuggestHandler1 = (srm) => {
  //   setField("srm", srm)
  //   setSuggestions1([])
  // }

  // //buh onchange and onclick calls
  // const onChangeHandler2 = (buh) => {
  //   let matches = []
  //   if (buh.length > 0) {
  //     matches = users.filter(user => {
  //       const regex = new RegExp(`${buh}`, "gi");
  //       return user.firstName.match(regex)
  //     })
  //     console.log('matches', matches);
  //     setSuggestions2(matches);
  //   }
  // }
  // const onSuggestHandler2 = (buh) => {
  //   console.log(buh)
  //   setField("buh", buh)
  //   // console.log(buh)
  //   setSuggestions2([])
  // }

  return (
    <div>
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
          {/* <RegistrationFormStepper/> */}
          {/* <div>
            {step === 0 && ( */}
              <div>
                <h5>Personal Details</h5>
                <Form
                required
                  ref={forms}
                  className="formone"
                  // noValidate
                  // validated={validated}
                  style={{ padding: 10 }}
                // onSubmit={handleSubmit}
                >
                  <Row className="mb-4">
                    <Row md="12">
                  <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select Requisition ID*</Form.Label>
                <Form.Select
                    outlined
                    dataSource={rrf}
                    placeholder="Select Requisition ID"
                    fields={{ value: "requisitionId", display:"requisitionId"}}
                    value={form.requisitionId}
                    isInvalid={!!errors.requisitionId}
                    onChange={(e) => {
                      axios
                    .get(
                        `/recruitmentTracker/getDataById/${e.target.value}`
                    )
                    .then((response) => {
                        console.log(response.data);
                         setJobT(response.data)
                    });
                setField("requisitionId", e.target.value);
            }}
              
                // query={dataQuery}
                >
                  <option value="">Select </option>
                  {rrf.map((requisitionId) => (
                    <option value={requisitionId.requisitionId}>
                      {requisitionId.requisitionId}
                    </option>
                  ))}
           
                </Form.Select>
            </Form.Group>
            <Form.Control.Feedback type="invalid">
                          {errors.requisitionId}
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select Requisition ID*</Form.Label>
                <AutoCompleteComponent
                    outlined
                    dataSource={rrf}
                    placeholder="Select Requisition ID"
                    fields={{ value: "requisitionId", display:"requisitionId"}}
                    value={form.requisitionId}
                    isInvalid={!!errors.requisitionId}
                    onChange={(e) => {
                      axios
                    .get(
                        `/recruitmentTracker/getDataById/${e.target.value}`
                    )
                    .then((response) => {
                        console.log(response.data);
                        setJobT(response.data.data)
                    });
                setField("requisitionId", e.target.value);
            }}
              
                // query={dataQuery}
                ></AutoCompleteComponent>
            </Form.Group> */}
            <Form.Group as={Col} md="6" style={{ padding: 10 ,paddingLeft:20}}>
                <Form.Label>Job Title *</Form.Label>
                <Form.Control
                  disabled
                  name="jobTitle"
                  type="text"
                  controlId="jobTitle"
                  placeholder="Job Title "
                  value={jobT.jobTitle}
                  maxLength={30}
                  onChange={(e) => 
                setField("jobTitle", e.target.value) }
                  //isInvalid={!!errors.jobTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.jobTitle}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
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
                      <Form.Label>Last name </Form.Label>
                      <Form.Control
                        required
                        name="last_name"
                        type="text"
                        controlId="lastName"
                        placeholder="Last name"
                        value={form.lastName}
                        maxLength={30}
                        onChange={(e) => setField("lastName", e.target.value)}
                        //isInvalid={!!errors.lastName}
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        {/* {errors.lastName} */}
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
                <Form.Label>Secondary Skills </Form.Label>
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
                  //isInvalid={!!errors.secondarySkills}
                />
                <Form.Control.Feedback type="invalid">
                  {/* {errors.secondarySkills} */}
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
                    </Form.Group>

                  </Row>
                </Form>
                <Button onClick={handleSubmit}>Submit</Button>
             
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
export default AddOnboard;