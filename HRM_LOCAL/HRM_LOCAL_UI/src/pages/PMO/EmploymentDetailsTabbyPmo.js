import React, { useState ,useRef, useEffect} from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';


function EmploymentDetailsTabbyPmo(props) { 
 const employeeId= props.viewOnboard.employeeId;
 console.log(props.employeeId)
console.log(employeeId);
    const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [irm, setIrm] = useState('');
  const [step, setStep] = useState(0);
  const handleClose = () => setShow(false);
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
        employmentType,
        // department,
        // designation,
        irm,
        srm,
        buh,
        projectName,
        client,
        band,
        jobTitle
    
    } = form;
    const newErrors = {};

    // if (!designation || designation === "")
    //   newErrors.designation = "Please Enter Business Unit";
    // if (!department || department === "")
    //   newErrors.department = "Please Enter Department";
    if (!employmentType || employmentType === "")
      newErrors.employmentType = "Please Enter type of Employeement";
    
    if (!jobTitle || jobTitle === "")
      newErrors.jobTitle = "Please Enter type of Job Title";
    // if (!client || client === "") newErrors.client = "Please Select Client";
    // if (!projectName || projectName === "")
    //   newErrors.projectName = "Please Select ProjectName";
    //   if (!band || band === "")
      // newErrors.band = "Please Select Band";
      if (!irm || irm === "") newErrors.irm = "Please Select irm";
      if (!srm || srm === "") newErrors.srm = "Please Select srm";
      if (!buh || buh === "") newErrors.buh = "Please Select buh";
    return newErrors;
   
  };

  const handleSubmit = (e) => {    
    const obj = { onboardingStatus: "HRApprovedDone" };
        const form1 = Object.assign(form, obj); 
    // let onboardingId = props.onboardID.onboardingId;
    // console.log(props.onboardID);
    // let employeeId = props.empID.employeeId;
    // console.log(props.employeeId);
    // console.log(employeeId);
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 2) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      axios    
        .put(`/emp/updateEmploymentDetailsInPMO/${employeeId}`, form1)
        .then((response) => {
          
          const user = response.data;
          console.log(user)
          if (user.status) {
            props.func();
          } else { 
            props.func();
            console.log("Props Not Send");
          }
          toast.success("Employment Details Added Successfully");
        //   console.log(user);
          //setTimeout(5000);
          props.viewHandleClose();
        })
        // .catch((err) => {
        //   toast.error("Somethong Went Wrong");
        // });
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
    console.log(departments)
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

  const [empType, setEmpType] = useState([]);
  useEffect(() => {
    axios.get("/employmentType/getAllEmployments").then((response) => {
      console.log(response.data.data);
      setEmpType(response.data.data);
    });
  }, []);
  console.log(empType)

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

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/emp/getAllEmployeeMasterData");
      console.log(response.data.data);
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);
  
    //  console.log(props.viewOnboard.onboardingId);
    // const ApproveHandler = (e) => {
    //     // e.prevetDefault();
    //     const notify = () => toast("Approved");
    //     // handleClose();
    //     // const form1 = Object.assign(form, obj);
        
    //     const obj = { onboardingStatus: "PMOApproved" };
    //     axios.put(`/emp/updateApprovStatus/${onboardingId1}`,obj)
    //     .then((res)=>{
    //         console.log(res)
    //         if(res.status == 200){
    //             props.func();
    //         }
    //         else{
    //             console.log('props not send')
    //         }
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         toast.error("Something wrong");
    //     });
    //     props.handleClose();
       
    //     notify();
    //   };
  return (

<div>
    {/* <h5>Employment Details</h5> */}
    <Row>
        <Col>          
        <h5>Name : {props.viewOnboard.fullName}</h5>
        </Col>
        <Col>
        <h5>Employee ID: {employeeId}</h5>
        </Col>
    </Row>
     <Form
        ref={forms}
        className="formone"
        size="sm"
        // noValidate
        // validated={validated}
        handleClose={handleClose}
        style={{ padding: 10 }}
    onSubmit={handleSubmit}
    >
        <Row className="mb-4">
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
               
                <Form.Label>Type Of Employment *</Form.Label>
                <Form.Select
                    required
                    type="text"
                    placeholder="Type Of Employment"
                    controlid="employmentType"
                    value={form.employmentType}
                    onChange={(e) => setField("employmentType", e.target.value)}
                    isInvalid={!!errors.employmentType}
                >
                     <option value="">Select </option>
                    {empType.map((employmentType) => (
                        <option value={employmentType.employmentTypeName}>{employmentType.employmentTypeName}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.employmentType}
                </Form.Control.Feedback>
            </Form.Group>
            {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Business Unit *</Form.Label>
                <Form.Select
                    required
                    type="text"
                    placeholder="Businees Unit"
                    controlid="department"
                    value={form.department}
                    onChange={(e) => {
                        console.log(e.target.value);
                        //empty commit
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
                        <option value={departmentss.departmentName}>
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
                    controlid="designation"
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
            </Form.Group> */}




            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select Band *</Form.Label>
                <Form.Select
                    required
                    type="text"
                    placeholder="Band"
                    controlid="band"
                    value={form.band}
                    isInvalid={!!errors.band}
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
                    controlid="jobTitle"
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
                <Form.Label>Select Client </Form.Label>
                <Form.Select
                    // required
                    type="text"
                    placeholder="client"
                    controlid="client"
                    value={form.client}
                    onChange={(e) => setField("client", e.target.value)}
                    // isInvalid={!!errors.client}
                > 
                    <option value="">Select </option>
                    {client.map((clients) => (
                        <option value={clients.clientName}>{clients.clientName}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {/* {errors.client} */}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select Project </Form.Label>
                <Form.Select
                    // required
                    type="text"
                    placeholder="projectName"
                    controlid="projectName"
                    value={form.projectName}
                    // isInvalid={!!errors.projectName}

                    onChange={(e) => setField("projectName", e.target.value)}
                >
                    <option>Select</option>

                    {project.map((projects) => (
                        <option value={projects.projectName}>
                            {projects.projectName}
                        </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {/* {errors.projectName} */}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select IRM*</Form.Label>
                {/* <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select IRM"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.irm}
                    isInvalid={!!errors.irm}

                    onChange={(e) => setField("irm", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent> */}
                 <Form.Select
                    required
                    type="text"
                    placeholder="select IRM"
                    controlid="irm"
                    value={form.irm}
                    isInvalid={!!errors.irm}
                    onChange={(e) => setField("irm", e.target.value)}
                >
                    <option value="">Select</option>
                    {users.map((user) => (
                        <option value={user.fullName}>
                            {user.fullName}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select SRM*</Form.Label>
                {/* <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select SRM"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.srm}
                    isInvalid={!!errors.srm}

                    onChange={(e) => setField("srm", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent> */}
                <Form.Select
                    required
                    type="text"
                    placeholder="select srm"
                    controlid="srm"
                    value={form.srm}
                    isInvalid={!!errors.srm}
                    onChange={(e) => setField("srm", e.target.value)}
                >
                    <option value="">Select</option>
                    {users.map((user) => (
                        <option value={user.fullName}>
                            {user.fullName}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select BUH*</Form.Label>
                {/* <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select BUH"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.buh}
                    isInvalid={!!errors.buh}

                    onChange={(e) => setField("buh", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent> */}
                <Form.Select
                    required
                    type="text"
                    placeholder="select BUH"
                    controlid="buh"
                    value={form.buh}
                    isInvalid={!!errors.buh}
                    onChange={(e) => setField("buh", e.target.value)}
                >
                    <option value="">Select</option>
                    {users.map((user) => (
                        <option value={user.fullName}>
                            {user.fullName}
                        </option>
                    ))}
                </Form.Select>

            </Form.Group>
           


        </Row>
    </Form>
    <Button onClick={handleSubmit}  handleClose={handleClose}>Submit</Button> 
     
</div>
)
}

export default EmploymentDetailsTabbyPmo;