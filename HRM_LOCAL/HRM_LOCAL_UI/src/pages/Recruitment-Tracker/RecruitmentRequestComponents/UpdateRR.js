import React, { useEffect, useRef, useLayoutEffect, useContext, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Row, Col, Card } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useHistory } from "react-router-dom";
import Moment from "moment";
import './utils/RT.css';

const UpdateRR = () => {
  const [raisedBy, setRaisedBy] = useState();
  const [raisedOn, setRaisedOn] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [reqType1, setReqType1] = useState();

  const [reqType2, setReqType2] = useState();
  const [reqType3, setReqType3] = useState();
  const [description, setDescription] = useState();

  const [technology, setTechnology] = useState();
  const [priority, setPriority] = useState();
  const [positions, setPositions] = useState();
  const [pSkills, setPSkills] = useState();
  const [sSkills, setSSkills] = useState();
  const [allocType, setAllocType] = useState();
  const [requisitionId, setRequisitionId] = useState();
  const [workLocation, setWorkLocation] = useState();
  const [workingHours, setWorkingHours] = useState();
  const [empType, setEmpType] = useState();
  const [role, setRole] = useState();
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState();
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState();
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState();
  const [pocname, setPocName] = useState([]);
  const [newPOCName, setNewPOCName] = useState();
  const [yoe, setYoe] = useState();
  const [rate, setRate] = useState();
  const [qualification, setQualification] = useState();
  const [uploadDoc, setUploadDoc] = useState();
  const [projectName, setProjectName] = useState();
  const [initDate, setInitDate] = useState();
  const [reqDate, setReqDate] = useState();

  const [hrPanel, setHrPanel] = useState([]);
  const [newInterviewPanel1, setNewInterviewPanel1] = useState();
  const [newInterviewPanel2, setNewInterviewPanel2] = useState();
  const [newHrPanel, setNewHrPanel] = useState();
  const [date, setDate] = useState();
  const [requiredDate, setRequiredDate] = useState();

  const [loading, setLoading] = React.useState(false);
  const closeLoading = () => setLoading(!loading);

  const [comments, setComments] = useState();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});




  // useState for phone number

  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");

  const params = useParams();
  const history = useHistory();
  // const forms = useRef(null);


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

  const calls = () => {
    setLoading(true)

    axios.get("/dept/getAllDepartments").then((resp) => {
      // console.log(resp)

      setDepartments(resp.data);
      if (resp.data.status) {
        axios.get("/clientProjectMapping/getAllClients").then((respo) => {
          // console.log(respo)

          setClients(respo.data.data);
          if (respo.statusText === "OK") {
            axios.get("/clientProjectMapping/getAllProjects").then((respon) => {
              // console.log(respon)
              // setProjects(respon.data.data)
              if (respon.data.status) {
                axios.get("/emp/getAllEmployeeMasterData").then((respons) => {
                  const sData2 = respons.data.data.filter(item => item.status === 'Active')
                  setPocName(sData2);
                  if (respons.data.status) {
                    axios.get("/emp/getEmployeesByDepartment/HR").then((response) => {
                      const sData1 = response.data.data.filter(item => item.status === 'Active')
                      // console.log(sData1)
                      setHrPanel(sData1);
                      closeLoading();
                    }).catch((err) => {
                      console.log("Error6");
                    })

                  }

                }).catch((err) => {
                  console.log("Error5");
                })

              }
            }).catch((err) => {
              console.log("Error4");
            })

          }

        }).catch((err) => {
          console.log("Error3")
        })
      }

    }).catch((err) => {
      console.log("Error2")
    })

  }
  useEffect(() => {
    calls();
  }, []);
  const loadData1 = async () => {
    const response = await axios.get(
      `/recruitmentTracker/getDataById/${params.id}`
    );
    setRaisedOn(response.data.data.raisedOn);

    setRaisedBy(response.data.data.raisedBy);

    setDate(Moment(response.data.data.requestInitiatedDate).format('YYYY-MM-DD'));

    setRequiredDate(Moment(response.data.data.resourceRequiredDate).format('YYYY-MM-DD'));

    setReqDate(response.data.data.resourceRequiredDate);
    setRequisitionId(response.data.data.requisitionId);
    setJobTitle(response.data.data.jobTitle);
    setReqType1(response.data.data.reqType1);
    setInitDate(response.data.data.requestInitiatedDate);

    setReqType2(response.data.data.reqType2);
    setReqType3(response.data.data.reqType3);
    setDescription(response.data.data.description);
    setTechnology(response.data.data.technology);
    setPriority(response.data.data.priority);
    setAllocType(response.data.data.allocType);
    setPositions(response.data.data.positions);
    setPSkills(response.data.data.pSkills);
    setSSkills(response.data.data.sSkills);
    setWorkLocation(response.data.data.workLocation);
    setWorkingHours(response.data.data.workingHours);
    setEmpType(response.data.data.empType);
    setRole(response.data.data.role);
    setNewDepartmentName(response.data.data.departmentName);
    setNewProject(response.data.data.projectName);
    setNewClient(response.data.data.clientName);
    setNewPOCName(response.data.data.pocname);
    setYoe(response.data.data.yoe);
    setRate(response.data.data.rate);
    setUploadDoc(response.data.data.uploadDoc);
    setComments(response.data.data.comments);
    setNewInterviewPanel1(response.data.data.interviewPanel1);
    setNewInterviewPanel2(response.data.data.interviewPanel2);
    setNewHrPanel(response.data.data.hrPanel);
    setQualification(response.data.data.qualification);

  }

  useEffect(() => {
    loadData1();
  }, []);

  //number validation
  const preventMinus = (e) => {
    if (e.code === 'Minus') {
      e.preventDefault();
    }
  };
  //number validation - pasting negative numbers
  const preventPasteNegative = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = parseFloat(clipboardData.getData('text'));

    if (pastedData < 0) {
      e.preventDefault();
    }
  };

  const routeToRRPage = () => history.push("/app/rrf")
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(
        `/recruitmentTracker/updateRR/${params.id}`,
        {
          requisitionId: requisitionId,
          jobTitle: jobTitle,
          technology: technology,
          role: role,
          description: description,
          positions: positions,
          pSkills: pSkills,
          sSkills: sSkills,
          pocname: newPOCName,
          raisedBy: raisedBy,
          qualification: qualification,
          workLocation: workLocation,
          workingHours: workingHours,
          empType: empType,
          yoe: yoe,
          rate: rate,
          projectName: newProject,
          uploadDoc: uploadDoc,
          clientName: newClient,
          raisedOn: raisedOn,
          comments: comments,
          priority: priority,
          departmentName: newDepartmentName,
          interviewPanel1: newInterviewPanel1,
          interviewPanel2: newInterviewPanel2,
          hrPanel: newHrPanel,
          reqType1: reqType1,
          reqType2: reqType2,
          reqType3: reqType3,
          requestInitiatedDate: initDate,
          allocType: allocType,
          resourceRequiredDate: reqDate
        }
      )
      .then((response) => {
        if (response.data.status) {
          toast.success("Requisition Updated successfully", { autoClose: 500 });
          routeToRRPage();
        } else {
          console.log("Updation Failed");
        }
      })
      .catch((err) => {
        toast.error("Something Went Wrong");
      });



  };
  return (
    <div className="example" style={{ paddingLeft: "12px" }}>
      {loading ?
        (<>
          <h5 style={{ paddingTop: "13px" }}>Update Requisition</h5>
          <Form
            // ref={forms}
            className="formone"

            style={{ padding: 10 }}


          >
            <Row>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>AERF ID</Form.Label>
                <Form.Control
                  required
                  className="requisitionId"
                  type="text"
                  controlid="requisitionId"
                  value={requisitionId}
                  // disabled
                  onChange={(e) => setRequisitionId(e.target.value)}
                  isInvalid={!!errors.requisitionId}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.requisitionId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8" style={{ padding: 10 }}>
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  required
                  className="jobTitle"
                  type="text"
                  controlid="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  isInvalid={!!errors.jobTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.jobTitle}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Card as={Col} md="2" style={{ padding: 5 }}>
                <Form.Check
                  required
                  inline
                  label="Internal"
                  name="reqType1"
                  type='radio'
                  checked={reqType1 === 'Internal' ? true : false}
                  onChange={(e) => setReqType1(e.target.value)}
                  value="Internal"
                />
                <Form.Check
                  required
                  inline
                  label="External"
                  name="reqType1"
                  type='radio'
                  checked={reqType1 === 'External' ? true : false}


                  onChange={(e) => setReqType1(e.target.value)}
                  value="External"

                />
              </Card>
              <Card as={Col} md="2" style={{ padding: 5 }}>
                <Form.Check
                  required
                  inline
                  label="New Recruitment"
                  name="reqType2"
                  type='radio'
                  checked={reqType2 === 'New Recruitment' ? true : false}
                  onChange={(e) => setReqType2(e.target.value)}
                  value="New Recruitment"
                />
                <Form.Check
                  required
                  inline
                  label="Replacement"
                  name="reqType2"
                  type='radio'
                  checked={reqType2 === 'Replacement' ? true : false}
                  onChange={(e) => setReqType2(e.target.value)}
                  value="Replacement"

                />

              </Card>

              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Requirement Type</Form.Label>
                <Form.Select
                  required
                  className="reqType3"
                  type="text"
                  controlid="reqType3"
                  value={reqType3}
                  onChange={(e) => setReqType3(e.target.value)}
                  isInvalid={!!errors.reqType3}
                >
                  <option>{reqType3}</option>
                  <option>Staffing</option>
                  <option>Project</option>
                  <option>Pilot</option>

                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.reqType3}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Employment Type </Form.Label>
                <Form.Select
                  required
                  type="text"

                  controlid="empType"
                  value={empType}
                  onChange={(e) => setEmpType(e.target.value)}
                  isInvalid={!!errors.empType}
                >
                  <option>{empType}</option>
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
                <Form.Label>Business unit</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="departmentName"
                  defaultValue={newDepartmentName}
                  // onChange={(e) => setNewDepartmentName(e.target.value)}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setNewDepartmentName(e.target.value)
                    axios.get(`/clientProjectMapping/getClientsByBusinessUnits/${e.target.value}`).then((response) => {
                      // console.log(response.data);
                      setClients(response.data);
                      setNewProject("");
                      setNewClient("")


                    })
                  }
                  }
                  isInvalid={!!errors.departmentName}
                >

                  <option>{newDepartmentName}</option>
                  {departments.map((departmentss, i) => (
                    <option key={i} value={departmentss.departmentName}>{departmentss.departmentName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.departments}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Client</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="clientName"
                  defaultValue={newClient}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    setNewClient(e.target.value)
                    axios.get(`/clientProjectMapping/getProjectsByClientName/${e.target.value}`).then((response) => {
                      // console.log(response.data.data);

                      setProjects(response.data.data);
                      setNewProject("");
                    })
                  }
                  }
                  isInvalid={!!errors.clientName}
                >

                  <option>{newClient}</option>

                  {clients.map((client, i) => (
                    <option key={i} value={client.clientName}>{client.clientName}</option>
                  ))}
                  <option value="">None</option>
                  {/* {(clients && clients.length > 0) ? (
                    clients.map((client, i) => (
                      <option key={i} value={client.clientName}>
                        {client.clientName}
                      </option>
                    ))) : (<option></option>)} */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.clients}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Project</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="projectName"
                  defaultValue={newProject}
                  onChange={(e) => {

                    setNewProject(e.target.value)

                  }
                  }
                  isInvalid={!!errors.projectName}
                >
                  <option>{newProject}</option>

                  {projects.map((project, i) => (
                    <option key={i} value={project.projectName}>{project.projectName}</option>
                  ))}
                  <option value="">None</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.projects}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>

              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Work Location</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    required
                    type="text"

                    controlid="workLocation"
                    isInvalid={seconderrors}
                    value={workLocation}
                    onChange={(e) => {
                      setWorkLocation(e.target.value);
                      if (e.target.value.length > 10) {
                        setSecondErrors("Phonenumber length should be 10 characters");
                      }
                      else {
                        setSecondErrors("")
                      };
                    }
                    }

                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.workLocation}
                    {seconderrors}

                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Technology</Form.Label>
                <Form.Control
                  required
                  className="technology"
                  type="text"
                  controlid="technology"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                  isInvalid={!!errors.technology}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.technology}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Role </Form.Label>
                <Form.Control
                  required
                  type="text"

                  controlid="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  isInvalid={!!errors.role}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Allocation Type</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="allocType"
                  value={allocType}
                  onChange={(e) => setAllocType(e.target.value)}
                  isInvalid={!!errors.allocType}
                >
                  <option>{allocType}</option>
                  <option>Billable</option>
                  <option>Non-Billable</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.allocType}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" style={{ padding: 10 }}>
                <Form.Label>No. of Positions</Form.Label>
                <Form.Control
                  required
                  name="positions"
                  type="number"
                 
                  controlid="positions"
                  min="0"
                  onKeyPress={preventMinus}
                  onPaste={preventPasteNegative}
                  value={positions}
                  onChange={(e) => setPositions(e.target.value)}
                  isInvalid={!!errors.positions}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.positions}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="2" style={{ padding: 10 }}>
                <Form.Label>Years of Experience</Form.Label>
                <InputGroup hasValidation>

                  <Form.Control
                    required
                    type="number"
                    controlid="yoe"
                    min="0"
                    onKeyPress={preventMinus}
                    onPaste={preventPasteNegative}
                    isInvalid={thirderrors}
                    value={yoe}
                    onChange={(e) => {
                      setYoe(e.target.value);
                      if (e.target.value.length > 10) {
                        setThirdErrors("YOE length should be 10 characters");
                      }
                      else {
                        setThirdErrors("")
                      };
                    }
                    }
                  // onChange={(e) => setPhoneNumber(e.target.value)}
                  // isInvalid={!!errors.phoneNumber}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.yoe}
                    {thirderrors}

                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  required
                  type="text"

                  controlid="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  isInvalid={!!errors.priority}
                >
                  <option>{priority}</option>
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.priority}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Primary Skills</Form.Label>
                <Form.Control
                  required
                  className="pSkills"
                  type="text"
                  controlid="pSkills"
                  value={pSkills}
                  onChange={(e) => setPSkills(e.target.value)}
                  isInvalid={!!errors.pSkills}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.pSkills}
                </Form.Control.Feedback>
              </Form.Group>




            </Row>
            <Row>
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Secondary Skills</Form.Label>
                <Form.Control
                  required
                  name="sSkills"
                  type="text"
                  controlid="sSkills"
                  value={sSkills}
                  onChange={(e) => setSSkills(e.target.value)}
                  isInvalid={!!errors.sSkills}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.sSkills}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="12" height="10rem" style={{ padding: 10 }}>
                <Form.Label>Job Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  id="description"
                  style={{ height: "80px" }}
                  controlid="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  isInvalid={!!errors.description}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>

              </Form.Group>
            </Row>
            <Row>



              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  required
                  className="rate"
                  type="number"
                  controlid="rate"
                  value={rate}

                  min="0"
                  onKeyPress={preventMinus}
                  onPaste={preventPasteNegative}
                  onChange={(e) => setRate(e.target.value)}
                  isInvalid={!!errors.rate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.rate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Working Hours</Form.Label>
                <Form.Control
                  required
                  className="workingHours"
                  type="number"
                  controlid="workingHours"
                  min="0"
                  onKeyPress={preventMinus}
                  onPaste={preventPasteNegative}

                  value={workingHours}
                  onChange={(e) => setWorkingHours(e.target.value)}
                  isInvalid={!!errors.workingHours}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.workingHours}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Educational Qualification</Form.Label>
                <Form.Control
                  required
                  className="qualification"
                  type="text"
                  controlid="qualification"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  isInvalid={!!errors.qualification}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.qualification}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>

              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Contact Name</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="pocname"
                  // defaultValue={newPOCName}
                  value={newPOCName}
                  onChange={(e) => setNewPOCName(e.target.value)}
                  isInvalid={!!errors.pocname}
                >
                  <option>Select</option>
                  {pocname.map((poc, i) => (
                    <option key={i} value={poc.fullName}>{poc.fullName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.pocname}
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Upload Document </Form.Label>
                <Form.Control
                  name="uploadDoc"
                  type="file"
                  id="uploadDoc"
                  controlid="uploadDoc"

                  value={uploadDoc}
                  onChange={(e) => setUploadDoc(e.target.value)}
                  isInvalid={!!errors.uploadDoc}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.uploadDoc}
                </Form.Control.Feedback>
              </Form.Group> */}
            </Row>

            <Row>
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  required
                  name="comments"
                  as="textarea"
                  controlid="comments"
                  style={{ height: "80px" }}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  isInvalid={!!errors.comments}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.comments}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Interview Panel1</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="interviewPanel1"
                  // defaultValue={newInterviewPanel1}
                  value={newInterviewPanel1}
                  onChange={(e) => setNewInterviewPanel1(e.target.value)}
                  isInvalid={!!errors.interviewPanel1}
                >
                  <option>Select</option>
                  {pocname.map((panel1, i) => (
                    <option key={i} value={panel1.fullName}>{panel1.fullName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.interviewPanel1}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Interview Panel2</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="interviewPanel2"
                  // defaultValue={newInterviewPanel2}
                  value={newInterviewPanel2}
                  onChange={(e) => setNewInterviewPanel2(e.target.value)}
                  isInvalid={!!errors.interviewPanel2}
                >
                  <option>Select</option>
                  {pocname.map((panel2, i) => (
                    <option key={i} value={panel2.fullName}>{panel2.fullName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.interviewPanel2}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>HR Panel</Form.Label>
                <Form.Select
                  required
                  type="text"
                  controlid="hrPanel"
                  // defaultValue={newHrPanel}
                  value={newHrPanel}
                  onChange={(e) => setNewHrPanel(e.target.value)}
                  isInvalid={!!errors.hrPanel}
                >
                  <option>Select</option>
                  {hrPanel.map((HRpanel, i) => (
                    <option key={i} value={HRpanel.fullName}>{HRpanel.fullName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.hrPanel1}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Request Initiated Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  controlid="initDate"
                  defaultValue={date}
                  onChange={(e) => setInitDate((Moment(e.target.value).format("YYYY-MM-DD")))}
                  isInvalid={!!errors.initDate}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.initDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Resource Required Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  controlid="reqDate"
                  min={initDate}
                  defaultValue={requiredDate}
                  onChange={(e) => setReqDate((Moment(e.target.value).format("YYYY-MM-DD")))}
                  isInvalid={!!errors.reqDate}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.reqDate}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Raised By</Form.Label>
                <Form.Control
                  required
                  type="text"
                  disabled
                  controlid="raisedBy"

                  value={raisedBy}
                  onChange={(e) => setRaisedBy(e.target.value)}
                  isInvalid={!!errors.raisedBy}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.raisedBy}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" style={{ padding: 10 }}>
                <Form.Label>Request Raised Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  disabled
                  controlid="raisedOn"
                  // value={raisedOn}
                  value={Moment(raisedOn).format("YYYY-MM-DD")}
                  // value={Moment(raisedOn).format("DD-MM-YYYY")}
                  onChange={(e) => setRaisedOn(e.target.value)}
                  isInvalid={!!errors.raisedOn}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.raisedOn}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlid="submit">
                <br />
                <Button
                  type="submit"
                  onClick={handleSubmit}

                  className="'my-2"
                  id="submitButton"
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#ff9b44", width: "10rem", borderRadius: "25px"
                  }}
                  variant="success"


                >
                  Submit
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  type="submit"

                  className="'my-2"
                  id="cancelButton"
                  style={{
                    backgroundColor: "#B6B6B4",
                    borderColor: "#B6B6B4", width: "10rem", borderRadius: "25px"
                  }}
                  variant="success"
                  onClick={() => history.push("/app/rrf")}
                >
                  Back
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </>) :
        (<>
          <Backdrop
            sx={{
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open
            onClick={closeLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop></>)
      }
    </div>
  )
}
export default UpdateRR;



