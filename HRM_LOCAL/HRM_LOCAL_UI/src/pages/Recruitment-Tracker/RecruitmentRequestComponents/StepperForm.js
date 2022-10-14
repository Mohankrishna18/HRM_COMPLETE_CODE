import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddRequisitionRequests from "./AddRequisitionRequests";
import axios from '../../../Uri'

const steps = ["Select master blaster campaign settings", "uggujjgh"];

const AddRR = (props) => {

    // props.func('My name is Dean Winchester & this is my brother Sammie')

    const navigate = useHistory();
    const [activeStep, setActiveStep] = useState(0);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState([]);

    const [clients, setClients] = useState([]);
    const [projects, setProjects] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [pocname, setPocName] = useState([]);

    const steps = [
        "Primary Information",
        "Additional Information",
    ];

    useEffect(() => {
        loadPocNames();
    }, []);

    const loadPocNames = async () => {
        const res = await axios.get("/emp/getAllEmployeeMasterData");
        setPocName(res.data.data);
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

    const userdata = JSON.parse(sessionStorage.getItem("userdata"));
    const userType = userdata.data.userType;
    const notify = () => toast();

    function setCourse(fiel, innerText) {
        setCourses({
            ...courses,
            [fiel]: innerText,
        });
    }
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
            // rrfCat,
            // rrfId,
            jobTitle,
            technology,
            role,
            // description,
            // rrfStatus,
            // workflowStatus,
            // positions,
            // pSkills,
            // sSkills,
            // pocname,
            // qualification,
            workLocation,
            // workingHours,
            empType,
            // yoe,
            // rate,
            // projectName,
            // uploadDoc,
            // clientName,
            // textAreaDesc,
            // comments,
            // departmentName
        } = form;
        const newErrors = {};
        console.log("Client stepper form");
        // validations for forms

        if (
            !jobTitle ||
            jobTitle === "" ||
            !jobTitle.match(/^(\w+\s)*\w+$/)
        )
            newErrors.jobTitle =
                "Please enter Job title";
        if (
            !empType ||
            empType === "" ||
            !empType.match(/^(\w+\s)*\w+$/)
        )
            newErrors.empType =
                "Please enter Employment Type";
        if (
            !workLocation ||
            workLocation === "" ||
            !workLocation.match(/^(\w+\s)*\w+$/)
        )
            newErrors.workLocation =
                "Please enter Work location";
        if (

            !technology ||
            technology === "" ||
            !technology.match(/^[a-zA-Z]+(\s[a-zA-Z]+)?$/)
            // takes only 'single space' between words.

        )
            newErrors.technology = " Please enter Technology";
        if (
            !role || role === "")
            // this validation is for 'only alphabets' with 'only single space in between'
            newErrors.role = "Please enter Role ";

        return newErrors;
    };
    const obje3 = { createdBy: userType };
    // let a = [];
    const handleSubmit = (e) => {
        e.preventDefault();
        //  const branch = JSON.parse(sessionStorage.getItem("branches"));
        //console.log(branch);
        //  const obje1 = { branches: branch };
        // const cours = JSON.parse(localStorage.getItem("courses1"));
        // console.log(cours);
        //a.push(cours);
        //const obje2 = { ccModel: cours };
        const formErrors = validateForm();
        console.log(Object.keys(formErrors).length);
        if (Object.keys(formErrors).length > 3) {
            setErrors(formErrors);
        } else {
            console.log(form);
            // const form1 = Object.assign(form, obje1);
            // const form2 = Object.assign(form1, obje2);
            // const lastForm = Object.assign(form2, obje3);
            // console.log(lastForm);
            // console.log(lastForm.branches);
            // const len1 = lastForm.branches;
            //const len = Object.keys(len1).length;
            //console.log(len);

            axios
                .post("/recruitmentTracker/createRequisitionRequest", form)
                .then((response) => {
                    console.log(response);
                    toast.success("Requisition Raised Successfully", { autoClose: 1000 });
                    // if (response.data.status) {
                    //     props.func();
                    // } else {
                    //     console.log("Props not send");

                    // }
                    // console.log("form submitted");
                    // notify();
                })
                .catch((err) => {
                    //toast.error("Given details already exist please give Unique values")
                    console.log("Something went wrong!");
                    // toast.error("Something went wrong!", { autoClose: 1000 });
                });
            //props.send();

        }
    };
    const handleNext = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        console.log(Object.keys(formErrors).length);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log("Form validation error");
        } else {
            console.log("Form validation success");
            // console.log(form);
            setActiveStep((nextStep) => nextStep + 1);
            // console.log(form.value);
        }
    };
    const handleNext1 = (e) => {
        e.preventDefault();
        console.log();
        const formErrors = validateForm();
        console.log(Object.keys(formErrors).length);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            console.log("Form validation error");
        } else {
            console.log("Form validation success");
            setActiveStep((nextStep) => nextStep + 1);
            console.log(form.value);
        }
    };
    const date = new Date();
    const date1 = Moment(date).format("YYYY-MM-DD");
    const handleBack = () => {
        setActiveStep((previousStep) => previousStep - 1);
    };
    return (
        <div>
            {activeStep === 0 && (
                <div>
                    {" "}
                    <Box sx={{ width: "100%" }}>
                        <Stepper activeStep={0} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    <Form className="formone">
                        <Row className="mb-5">
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Category *</Form.Label>
                                <Form.Select
                                    required
                                    className="rrfCat"
                                    type="text"
                                    controlId="rrfCat"
                                    placeholder="Requisition Request Status"
                                    value={form.rrfCat}
                                    onChange={(e) => setField("rrfCat", e.target.value)}
                                    isInvalid={!!errors.rrfCat}
                                >
                                    <option>Select </option>
                                    <option>Internal</option>
                                    <option>Client</option>

                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.rrfCat}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Business Unit *</Form.Label>
                                <Form.Select
                                    required
                                    className="departmentName"
                                    type="text"
                                    controlId="departmentName"
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
                                <Form.Label>Project Title *</Form.Label>
                                <Form.Select
                                    required
                                    className="projectName"
                                    type="text"
                                    controlId="projectName"
                                    placeholder="Project Name"
                                    value={form.projectName}
                                    maxLength={30}
                                    onChange={(e) => setField("projectName", e.target.value)}
                                    isInvalid={!!errors.projectName}
                                >
                                    <option>Select </option>
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

                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Client *</Form.Label>
                                <Form.Select
                                    required
                                    className="clientName"
                                    type="text"
                                    controlId="clientName"
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

                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Work Location *</Form.Label>
                                <Form.Control
                                    required
                                    className="workLocation"
                                    type="text"
                                    id="workLocation"
                                    controlId="workLocation"
                                    placeholder="Work Lcoation"
                                    // onChange={(event) => setFirstName(event.target.value)}
                                    value={form.workLocation}
                                    onChange={(e) => setField("workLocation", e.target.value)}
                                    isInvalid={!!errors.workLocation}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.workLocation}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Technology *</Form.Label>
                                <Form.Select
                                    required
                                    className="technology"
                                    type="text"
                                    controlId="technology"
                                    placeholder="Requisition Request Status"
                                    value={form.technology}
                                    onChange={(e) => setField("technology", e.target.value)}
                                    isInvalid={!!errors.technology}
                                >
                                    <option>Select </option>
                                    <option>React JS</option>
                                    <option>Vue JS</option>
                                    <option>Java Microservices</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.technology}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Role *</Form.Label>
                                <Form.Select
                                    required
                                    className="role"
                                    type="text"
                                    controlId="role"
                                    placeholder="Role"
                                    value={form.role}
                                    onChange={(e) => setField("role", e.target.value)}
                                    isInvalid={!!errors.role}
                                >
                                    <option>Select </option>
                                    <option>Java Developer</option>
                                    <option>React JS Developer</option>
                                    <option>Vue JS Developer</option>
                                    <option>Python Developer</option>
                                    <option>HR Manager</option>
                                    <option>Admin</option>
                                    <option>QA Tester</option>
                                    <option>Data Analyst</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.role}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="8" style={{ padding: 10 }}>
                                <Form.Label>Job Title *</Form.Label>
                                <Form.Control
                                    required
                                    className="jobTitle"
                                    type="text"
                                    id="jobTitle"
                                    controlId="jobTitle"
                                    placeholder="Job Title"
                                    // onChange={(event) => setFirstName(event.target.value)}
                                    value={form.jobTitle}
                                    onChange={(e) => setField("jobTitle", e.target.value)}
                                    isInvalid={!!errors.jobTitle}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.jobTitle}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>No. of Positions *</Form.Label>
                                <Form.Control
                                    required
                                    className="positions"
                                    type="number"
                                    id="positions"
                                    controlId="positions"
                                    placeholder="No. of Positions"
                                    // onChange={(event) => setFirstName(event.target.value)}
                                    value={form.positions}
                                    onChange={(e) => setField("positions", e.target.value)}
                                    isInvalid={!!errors.positions}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.positions}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Years of Experience *</Form.Label>
                                <Form.Control
                                    required
                                    className="yoe"
                                    type="number"
                                    id="yoe"
                                    controlId="yoe"
                                    placeholder="YOE"
                                    // onChange={(event) => setFirstName(event.target.value)}
                                    value={form.yoe}
                                    onChange={(e) => setField("yoe", e.target.value)}
                                    isInvalid={!!errors.yoe}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.yoe}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Primary Skills *</Form.Label>
                                <Form.Control
                                    required
                                    className="pSkills"
                                    type="text"
                                    id="pSkills"
                                    controlId="pSkills"
                                    placeholder="Primary Skills"

                                    value={form.pSkills}
                                    onChange={(e) => setField("pSkills", e.target.value)}
                                    isInvalid={!!errors.pSkills}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.pSkills}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Secondary Skills *</Form.Label>
                                <Form.Control
                                    required
                                    className="sSkills"
                                    type="text"
                                    id="sSkills"
                                    controlId="sSkills"
                                    placeholder="Secondary Skills"
                                    // onChange={(event) => setFirstName(event.target.value)}
                                    value={form.sSkills}
                                    onChange={(e) => setField("sSkills", e.target.value)}
                                    isInvalid={!!errors.sSkills}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.sSkills}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="12"
                                height="10rem"
                                style={{ padding: 10 }}
                            >
                                <Form.Label>Job Description</Form.Label>
                                <Form.Control
                                    required
                                    type="textarea"
                                    id="description"
                                    style={{ height: "80px" }}
                                    placeholder="Job Description"
                                    controlId="description"
                                    value={form.description}
                                    onChange={(e) => setField("description", e.target.value)}
                                    isInvalid={!!errors.description}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                            </Form.Group>{" "}
                            <Form.Group controlId="submit">
                                <br />
                                <Button
                                    type="submit"
                                    id="submitButton"
                                    onClick={handleNext}
                                    className="'my-2"
                                    variant="success"
                                    style={{
                                        width: "10rem",
                                        justifyContent: "center",
                                    }}
                                >
                                    Next
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            )}
            {activeStep === 1 && (
                <div>
                    {" "}
                    <Box sx={{ width: "100%" }}>
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Box>
                    <b />
                    {/* <ProgressBar now={100} label={100} /> */}
                    <Form className="formone">
                        <Row className="mb-5">
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Rate *</Form.Label>
                                <Form.Control
                                    name="rate"
                                    type="number"
                                    id="rate"
                                    controlId="rate"
                                    placeholder="Rate"
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
                                    controlId="empType"
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
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Working Hours *</Form.Label>
                                <Form.Control
                                    name="workingHours"
                                    type="number"
                                    id="workingHours"
                                    controlId="workingHours"
                                    placeholder="Working Hours"
                                    value={form.workingHours}
                                    onChange={(e) => setField("workingHours", e.target.value)}
                                    isInvalid={!!errors.workingHours}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.workingHours}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Educational Qualification *</Form.Label>
                                <Form.Control
                                    name="qualification"
                                    type="number"
                                    id="qualification"
                                    controlId="qualification"
                                    placeholder="Educational Qualification"
                                    value={form.qualification}
                                    onChange={(e) => setField("rate", e.target.value)}
                                    isInvalid={!!errors.qualification}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.qualification}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {" "}
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>POC Name *</Form.Label>
                                <Form.Select
                                    required
                                    className="pocname"
                                    type="text"
                                    controlId="pocname"
                                    placeholder="POC Name"
                                    value={form.pocname}
                                    maxLength={30}
                                    onChange={(e) => setField("pocname", e.target.value)}
                                    isInvalid={!!errors.pocname}
                                >
                                    <option>Select </option>
                                    {pocname.map((poc) => (
                                        <option value={poc.employeeId}>
                                            {poc.firstName}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.pocname}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                                <Form.Label>Job Status *</Form.Label>
                                <Form.Select
                                    required
                                    className="rrfStatus"
                                    type="text"
                                    controlId="rrfStatus"
                                    placeholder="Job Status"
                                    value={form.rrfStatus}
                                    onChange={(e) => setField("rrfStatus", e.target.value)}
                                    isInvalid={!!errors.rrfStatus}
                                >
                                    <option>Select </option>
                                    <option>Active</option>
                                    <option>In-active</option>
                                    <option>On Hold</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.rrfStatus}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Label>Comments</Form.Label>
                            <Form.Control
                                required
                                type="textarea"
                                id="comments"
                                style={{ height: "80px" }}

                                controlId="comments"
                                value={form.comments}
                                onChange={(e) => setField("comments", e.target.value)}
                                isInvalid={!!errors.comments}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {errors.comments}
                            </Form.Control.Feedback>

                            <Form.Group controlId="submit">
                                <br />
                                <Button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="'my-2"
                                    id="submitButton"
                                    style={{ width: "10rem" }}
                                    variant="success"
                                >
                                    Submit
                                </Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button
                                    type="submit"
                                    onClick={handleBack}
                                    className="'my-2"
                                    id="cancelButton"
                                    style={{ width: "10rem" }}
                                    variant="success"
                                >
                                    Cancel
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>
                </div>
            )}
        </div>
    );
};
export default AddRR;