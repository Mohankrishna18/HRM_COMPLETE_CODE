import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function EmploymentDetailsTab(props) {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;
    const empId = localStorage.getItem('item')


    const [ferrors, setFErrors] = useState("");
    const [serror, setSerror] = useState("");
    const [thirderrors, setThirdErrors] = useState("");
    const [fourerror, setFourerror] = useState("");
    const [fiveerrors, setFiveErrors] = useState("");
    const [sixerror, setSixerror] = useState("");

    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [designationName, setDesignationName] = useState("");
    const [reportingManager, setReportingManager] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [departmentName, setDepartmentName] = useState("");
    const [projectName, setProjectName] = useState("");

    const [band, setBand] = useState("");

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
    console.log(designations)
  
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
  
    }, []);
    console.log(departments)

    const [bands, setBands] = useState([]);
    useEffect(() => {
      axios
        .get("/bands/getAllBands")
        .then((response) => {
          setBands(response.data.data);
        })
        .catch(() => {
          toast.error("data is not getting");
        });
  
    }, []);
    console.log(bands)
  
    const [employmentTypes, setEmploymentTypes] = useState([]);
    useEffect(() => {
      axios
        .get("/employmentType/getAllEmployments")
        .then((response) => {
            setEmploymentTypes(response.data.data);
        })
        .catch(() => {
          toast.error("data is not getting");
        });
    }, []);
    console.log(employmentTypes)

    const [reportingManagers, setReportingMangers] = useState([]);
    useEffect(() => {
      axios
        .get("/emp/getreportingmanager")
        .then((response) => {
            setReportingMangers(response.data.data);
        })
        .catch(() => {
          toast.error("data is not getting");
        });
    }, []);
    console.log(reportingManagers)

    const [project, setProject] = useState([]);
    useEffect(() => {
        axios
          .get("/clientProjectMapping/getAllProjects")
          .then((response) => {
            setProject(response.data.data);
          })
          .catch(() => {
            toast.error("data is not getting");
          });
      }, []);
      console.log(project)
    


    useEffect(() => {
        axios
            .get(`/emp/getEmploymentDetails/${empId}`)
            .then((response) => {
                setPrimarySkills(response.data.data.primarySkills);
                setSecondarySkills(response.data.data.secondarySkills);
                setEmploymentType(response.data.data.employmentType);
                setDepartmentName(response.data.data.departmentName);
                setProjectName(response.data.data.projectName);
                setBand(response.data.data.band);
                setReportingManager(response.data.data.reportingManager);
                setDesignationName(response.data.data.designationName);
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        try{
        await axios.put(`/emp/updateEmploymentDetails/${empId}`, {
           primarySkills,
           secondarySkills,
           employmentType,
           band,
           departmentName,
           designationName,
           reportingManager,
           projectName
        });
        toast.success("Form Submitted Successfully");
    }
    catch(error){
        toast.error("Somethingwent Wrong");
  } 
    };

    return (

        <div>
            {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Employment Details
                </Card.Title>
            </Card> */}

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Primary Skills</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primary Skills"
                            controlId="primarySkils"
                            value={primarySkills}
                            maxLength={15}
                            name="primarySkills"
                            onChange={(e) =>
                                setPrimarySkills(e.target.value)
                            }
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Secondary Skills</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Secondary Skills"
                            controlId="secondarySkills"
                            value={secondarySkills}
                            maxLength={15}
                            name="secondarySkills"
                            onChange={(e) =>
                                setSecondarySkills(e.target.value)
                            }
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Employment Type</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Employment Type"
                            controlId="employmentType"
                            value={employmentType}
                            maxLength={15}
                            name="employmentType"
                            onChange={(e) =>
                                setEmploymentType(e.target.value) 

                            }
                        >
                  {employmentTypes.map((em) => (
                    <option value={em.employmentTypeName}>
                        {em.employmentTypeName}
                    </option>
                  ))}

                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Band</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Band"
                            controlId="band"
                            name="band"
                            value={band}
                            onChange={(event) => setBand(event.target.value)}
                        >
                            <option>Select</option>
                  {bands.map((b) => (
                    <option value={b.bandName}>
                        {b.bandName}
                    </option>
                  ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Business Unit</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Business Unit Name"
                            controlId="departmentName"
                            value={departmentName}
                            maxLength={25}
                            name="departmentName"
                            onChange={(e) =>{
                                setDepartmentName(e.target.value)
                                axios
                                .get(
                                  `/designation/getDesignationByDepartment/${e.target.value}`
                                )
                                .then((response) => {
                                  console.log(response.data);
                                  setDesignations(response.data);
                                });

                            }}
                        >
                             <option>Select </option>
                  {departments.map((departmentss) => (
                    <option value={departmentss.departmentName}>
                      {departmentss.departmentName}
                    </option>
                  ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Designation</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Designation Name"
                            controlId="designationName"
                            value={designationName}
                            maxLength={25}
                            name="designationName"
                            onChange={(e) =>
                                setDesignationName(e.target.value)
                            }
                        >
                             <option>Select</option>
                  {designations.map((designation) => (
                    <option value={designation.designationName}>
                        {designation.designationName}
                    </option>
                  ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Reporting Manager *</Form.Label>
                        <Form.Select
                        disabled
                            placeholder="select Manager"
                            value={reportingManager}
                            onChange={(e) => {
                                setReportingManager(e.target.value)
                            }}
                        >
                            <option>Select </option>
                            {reportingManagers.map((r) => (
                    <option value={r.reportingmanager}>
                        {r.reportingmanager}
                    </option>
                  ))}

                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>IRM *</Form.Label>
                        <Form.Select
                        disabled
                            placeholder="select IRM"
                           // value={irm}
                            onChange={(e) => {
                                setReportingManager(e.target.value)
                            }}
                        >
                            <option>Select </option>
                            {reportingManagers.map((r) => (
                    <option value={r.reportingmanager}>
                        {r.reportingmanager}
                    </option>
                  ))}

                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>SRM *</Form.Label>
                        <Form.Select
                        disabled
                            placeholder="select SRM"
                            //value={reportingManager}
                            onChange={(e) => {
                                setReportingManager(e.target.value)
                            }}
                        >
                            <option>Select </option>
                            {reportingManagers.map((r) => (
                    <option value={r.reportingmanager}>
                        {r.reportingmanager}
                    </option>
                  ))}

                        </Form.Select>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Project</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Project"
                            controlId="project"
                            value={projectName}
                            maxLength={15}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        >
                            <option>Select</option>
                            {project.map((p) => (
                    <option value={p.projectName}>
                        {p.projectName}
                    </option>
                  ))}                           
                        </Form.Select>
                    </Form.Group> */}
                </Row>

                <Button
                    className="rounded-pill" md="3"
                    style={{ backgroundColor: "#f5896e",
                    borderColor: "#ff9b44", float: "right" }}
                    type="submit"
                    size="lg"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default EmploymentDetailsTab;
