import React, { useState ,useRef, useEffect} from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';


function EmploymentDetailsTabbyPmo(props) { 
 const onboardingId1= props.viewOnboard.onboardingId;
 console.log(props)
console.log(onboardingId1);
    const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const {
        employmentType,
        department,
        designation,
        irm,
        srm,
        buh,
        projectName,
        client,
        band,
        jobTitle
    
    } = form;
    const newErrors = {};

    if (!designation || designation === "")
      newErrors.designation = "Please Enter Business Unit";
    if (!department || department === "")
      newErrors.department = "Please Enter Department";
    if (!employmentType || employmentType === "")
      newErrors.employmentType = "Please Enter type of Employeement";
    
    if (!jobTitle || jobTitle === "")
      newErrors.jobTitle = "Please Enter type of Job Title";
    if (!client || client === "") newErrors.client = "Please Select Client";
    if (!projectName || projectName === "")
      newErrors.projectName = "Please Select ProjectName";
      if (!band || band === "")
      newErrors.band = "Please Select Band";
      if (!irm || irm === "") newErrors.irm = "Please Select irm";
      if (!srm || srm === "") newErrors.srm = "Please Select srm";
      if (!buh || buh === "") newErrors.buh = "Please Select buh";
    return newErrors;
   
  };

  const handleSubmit = (e) => {     
    // let onboardingId = props.onboardID.onboardingId;
    // console.log(props.onboardID);
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      axios    
        .put(`/emp/updateEmpdDetails/${onboardingId1}`, form)
        .then((response) => {
        //   const user = response.data;
        //   if (user.status) {
        //     props.func();
        //   } else { 
        //     console.log("Props Not Send");
        //   }
          toast.success("Employment Details Added Successfully");
        //   console.log(user);
          setTimeout(5000);
          handleClose();
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

  const [users, setUsers] = useState({});
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/emp/getAllEmployeeMasterData");
      console.log(response.data.data);
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);
  
     console.log(props.viewOnboard.onboardingId);
    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        
        const obj = { onboardingStatus: "PMOApproved" };
        axios.put(`/emp/updateApprovStatus/${onboardingId1}`,obj)
        .then((res)=>{
            console.log(res)
            if(res.status == 200){
                props.func();
            }
            else{
                console.log('props not send')
            }
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Something wrong");
        });
        props.handleClose();
       
        notify();
      };
  return (

<div>
    {/* <h5>Employment Details</h5> */}
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
                        <option value={clients.clientName}>{clients.clientName}</option>
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
                    isInvalid={!!errors.projectName}

                    onChange={(e) => setField("projectName", e.target.value)}
                >
                    <option>Select</option>
                    <option value="HRM">HRM</option>
                    <option value="MDM">MDM</option>
                    {project.map((projects) => (
                        <option value={projects.projectName}>
                            {projects.projectName}
                        </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.projectName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select IRM*</Form.Label>
                <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select IRM"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.irm}
                    isInvalid={!!errors.irm}

                    onChange={(e) => setField("irm", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select SRM*</Form.Label>
                <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select SRM"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.srm}
                    isInvalid={!!errors.srm}

                    onChange={(e) => setField("srm", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Select BUH*</Form.Label>
                <AutoCompleteComponent
                    outlined
                    dataSource={users}
                    placeholder="select BUH"
                    fields={{ value: "fullName", display: "fullName" }}
                    value={form.buh}
                    isInvalid={!!errors.buh}

                    onChange={(e) => setField("buh", e.target.itemData.fullName)}
                // query={dataQuery}
                ></AutoCompleteComponent>

            </Form.Group>
           


        </Row>
    </Form>
    <Button onClick={handleSubmit}>Submit</Button> 
     
</div>
)
}

export default EmploymentDetailsTabbyPmo;


