import React, { useEffect, useRef, useLayoutEffect, useContext, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col, Card } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useHistory } from "react-router-dom";
import Moment from "moment";
import { UserContext } from './UpdateRequisition';
import './utils/RT.css';

const UpdateRR = (props) => {

  const [raisedOn, setRaisedOn] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [reqType1, setReqType1] = useState();
  const [reqType2, setReqType2] = useState();
  const [reqType3, setReqType3] = useState();
  const [description, setDescription] = useState();
  const [rrStatus, setRrStatus] = useState();
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
  const [pocname, setPocname] = useState([]);
  const [newPOCName, setNewPOCName] = useState();
  const [yoe, setYoe] = useState();
  const [rate, setRate] = useState();
  const [qualification, setQualification] = useState();
  const [uploadDoc, setUploadDoc] = useState();
  const [projectName, setProjectName] = useState();
  const [initDate, setInitDate] = useState();
  const [resourceRequiredDate, setResourceRequiredDate] = useState();
  const [interviewPanel1, setInterviewPanel1] = useState([]);
  const [interviewPanel2, setInterviewPanel2] = useState([]);
  const [hrPanel, setHrPanel] = useState([]);
  const [newInterviewPanel1, setNewInterviewPanel1] = useState();
  const [newInterviewPanel2, setNewInterviewPanel2] = useState();
  const [newHrPanel, setNewHrPanel] = useState();


  const [clientName, setClientName] = useState();
  const [comments, setComments] = useState();

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [status1, setStatus1] = useState(false);
  const pull_data = () => {
    setStatus1(!status1);
  };


  // useState for phone number
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");

  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);
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
  // const [paymentMethod, setPaymentMethod] = useState(props.data.data);

  // const radioChangeHandler = (e) => {
  //   setPaymentMethod(e.target.value);
  // };

  // var initDate = Moment()
  // .utcOffset('+05:30')
  // .format('YYYY-MM-DD hh:mm:ss');

  const loadPocNames = async () => {
    const res = await axios.get("/emp/getAllEmployeeMasterData");
    setPocname(res.data.data);

  };

  const loadClients = async () => {
    const res = await axios.get("/clientProjectMapping/getAllClients");
    setClients(res.data.data);

  };

  const loadDepartmentsData = async () => {
    const res = await axios.get("/dept/getAllDepartments");

    setDepartments(res.data);

  };

  // const loadHRDeptEmployees = async () => {
  //   const res = await axios.get("/emp/getEmployeesByDepartment/HR");
  //  sData1 = res.data.data.filter(item => item.status === 'Active')
  //   setHrPanel(sData1);
  //   // console.log(sData1);
  //   console.log(sData1);

  // }
  const loadHRDeptEmployees = () => {
    axios.get("/emp/getEmployeesByDepartment/HR").then((res) => {

      const dat = res.data.data.filter(item => item.status == "Active")
      setHrPanel(dat)
    }).catch((err) => {
      console.log(err)
    })
  }

  const loadProjects = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setProjects(res.data.data);

  };
  useEffect(() => {
    loadDepartmentsData();
    loadProjects();
    loadClients();
    loadPocNames();
    loadHRDeptEmployees();
  }, []);

  const loadData1 = async () => {
    const response = await axios.get(
      `/recruitmentTracker/getDataById/${params.id}`
    );
    setRaisedOn(response.data.data.raisedOn);
    console.log(response.data.data.raisedOn);
    setRequisitionId(response.data.data.requisitionId);
    setJobTitle(response.data.data.jobTitle);
    setReqType1(response.data.data.reqType1);
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
    // setDepartments(response.data.departments);
    setNewDepartmentName(response.data.data.departmentName);
    // setClients(response.data.clients);
    // setProjects(response.data.projects);
    setNewProject(response.data.data.projectName);
    setNewClient(response.data.data.clientName);
    // setPocname(response.data.pocname);
    setNewPOCName(response.data.data.pocname);
    setYoe(response.data.data.yoe);
    setRate(response.data.data.rate);
    setUploadDoc(response.data.data.uploadDoc);
    setComments(response.data.data.comments);
    setInitDate(response.data.data.requestInitiatedDate);

    setResourceRequiredDate(response.data.data.resourceRequiredDate);
    // console(response.data.data.resourceRequiredDate);
    setNewInterviewPanel1(response.data.data.interviewPanel1);
    setNewInterviewPanel2(response.data.data.interviewPanel2);
    setNewHrPanel(response.data.data.hrPanel);
    setQualification(response.data.data.qualification);
  }

  useEffect(() => {
    loadData1();
  }, [status1]);
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
          hrPanel: newHrPanel
        }
      )
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          pull_data();

          toast.success("Requisition Updated successfully");
          routeToRRPage();
        } else {
          console.log("Props not Send");
        }


      })
      .catch((err) => {

        toast.error("Something Went Wrong");
      });
    // props.handleClose();
  };
  return (
    <div className="example" style={{ paddingLeft: "12px" }}>
      <h5 style={{ paddingTop: "13px" }}>Update Requisition</h5>
      <Form
        // ref={forms}
        className="formone"
        // noValidate
        // validated={validated}
        style={{ padding: 10 }}
   

      >
        <Row>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>AERF ID</Form.Label>
            <Form.Control
              required
              className="requisitionId"
              type="text"
              controlId="requisitionId"
              value={requisitionId}
              disabled
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
              controlId="jobTitle"
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
              // onChange={(e) => setField("reqType1", e.target.value)}
              value="Internal"
            />
            <Form.Check
              required
              inline
              label="External"
              name="reqType1"
              type='radio'
              checked={reqType1 === 'External' ? true : false}
              // id={`inline-${type}-2`}
              // onChange={(event) => setLeaveOrwfh(event.target.value)}
              onChange={(e) => setField("reqType1", e.target.value)}
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
              //id={`inline-${type}-1`}
              //onChange={(event) => setInternalOrExternal(event.target.value)}
              onChange={(e) => setField("reqType2", e.target.value)}
              value="New Recruitment"
            />
            <Form.Check
              required
              inline
              label="Replacement"
              name="reqType2"
              type='radio'
              checked={reqType2 === 'Replacement' ? true : false}
              // id={`inline-${type}-2`}
              // onChange={(event) => setLeaveOrwfh(event.target.value)}
              onChange={(e) => setField("reqType2", e.target.value)}
              value="Replacement"

            />

          </Card>

          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Requirement Type</Form.Label>
            <Form.Select
              required
              className="reqType3"
              type="text"
              controlId="reqType3"
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

              controlId="empType"
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
              controlId="departmentName"
              defaultValue={newDepartmentName}
              onChange={(e) => setNewDepartmentName(e.target.value)}
              isInvalid={!!errors.departmentName}
            >
              <option>{newDepartmentName}</option>
              {departments.map((departmentss) => (
                <option value={departmentss.departmentName}>{departmentss.departmentName}</option>
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
              controlId="clientName"
              defaultValue={newClient}
              onChange={(e) => setNewClient(e.target.value)}
              isInvalid={!!errors.clientName}
            >
              <option>{newClient}</option>
              {clients.map((client) => (
                <option value={client.clientName}>{client.clientName}</option>
              ))}
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
              controlId="projectName"
              defaultValue={newProject}
              onChange={(e) => setNewProject(e.target.value)}
              isInvalid={!!errors.projectName}
            >
              <option>{newProject}</option>
              {projects.map((project) => (
                <option value={project.projectName}>{project.projectName}</option>
              ))}
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

                controlId="workLocation"
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
              controlId="technology"
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

              controlId="role"
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
              controlId="allocType"
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
              controlId="positions"

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
                type="text"

                controlId="yoe"
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

              controlId="priority"
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
              controlId="pSkills"
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
              controlId="sSkills"
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
              type="textarea"
              id="description"
              style={{ height: "80px" }}
              controlId="description"
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
              controlId="rate"
              value={rate}
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
              type="text"
              controlId="workingHours"


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
              controlId="qualification"
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
              controlId="pocname"
              defaultValue={newPOCName}
              onChange={(e) => setNewPOCName(e.target.value)}
              isInvalid={!!errors.pocname}
            >
              <option>{newPOCName}</option>
              {pocname.map((poc) => (
                <option value={poc.fullName}>{poc.fullName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.pocname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Upload Document </Form.Label>
            <Form.Control
              name="uploadDoc"
              type="file"
              id="uploadDoc"
              controlId="uploadDoc"

              value={uploadDoc}
              onChange={(e) => setUploadDoc(e.target.value)}
              isInvalid={!!errors.uploadDoc}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.uploadDoc}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Comments</Form.Label>
            <Form.Control
              required
              name="comments"
              type="textarea"
              controlId="comments"
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
              controlId="interviewPanel1"
              defaultValue={newInterviewPanel1}
              onChange={(e) => setNewInterviewPanel1(e.target.value)}
              isInvalid={!!errors.interviewPanel1}
            >
              <option>{newInterviewPanel1}</option>
              {pocname.map((panel1) => (
                <option value={panel1.fullName}>{panel1.fullName}</option>
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
              controlId="interviewPanel2"
              defaultValue={newInterviewPanel2}
              onChange={(e) => setNewInterviewPanel2(e.target.value)}
              isInvalid={!!errors.interviewPanel2}
            >
              <option>{newInterviewPanel2}</option>
              {pocname.map((panel2) => (
                <option value={panel2.fullName}>{panel2.fullName}</option>
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
              controlId="hrPanel"
              defaultValue={newHrPanel}
              onChange={(e) => setNewHrPanel(e.target.value)}
              isInvalid={!!errors.hrPanel}
            >
              {/* <option>{hrPanel}</option> */}
              {hrPanel.map((HRpanel) => (
                <option value={HRpanel.fullName}>{HRpanel.fullName}</option>
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
              controlId="initDate"
              value={Moment(initDate).format("YYYY-MM-DD")}
              onChange={(e) => setInitDate(e.target.value)}
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
              controlId="resourceRequiredDate"
              value={Moment(resourceRequiredDate).format("YYYY-MM-DD")}
              onChange={(e) => setResourceRequiredDate(e.target.value)}
              isInvalid={!!errors.resourceRequiredDate}
            >

            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.resourceRequiredDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Raised Date</Form.Label>
            <Form.Control
              required
              type="date"
              disabled
              controlId="raisedOn"
              value={Moment(raisedOn).format("YYYY-MM-DD")}
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
          <Col>
            <Button
              style={{
                backgroundColor: "#f5896e",
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
            {/* <Button
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
            </Button> */}
            <Button
              variant="primary"
              style={{
                backgroundColor: "#B6B6B4",
                borderColor: "#B6B6B4",
                // alignItems: "center",
                width: "15%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="cancel"
              onClick={() => history.push("/app/rrf")}
            >
              Back
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
export default UpdateRR;