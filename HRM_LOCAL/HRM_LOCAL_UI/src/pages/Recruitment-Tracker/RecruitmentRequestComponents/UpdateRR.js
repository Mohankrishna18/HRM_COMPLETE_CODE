import React, { useEffect, useRef, useLayoutEffect, useContext , useState} from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useHistory } from "react-router-dom";

function UpdateRR(props) {

  console.log(props.updateOnboard);
  const { data, setData } = useContext(UserContext);
  const [jobTitle, setJobTitle] = useState(props.updateOnboard.jobTitle);
  const [description, setDescription] = useState(props.updateOnboard.description);
  const [rrStatus, setRrStatus] = useState(props.updateOnboard.rrStatus);
  const [rrfCat, setRrfCat] = useState(props.updateOnboard.rrfCat);
  const [technology, setTechnology] = useState(props.updateOnboard.technology);
  const [positions, setPositions] = useState(props.updateOnboard.positions);
  const [pSkills, setPSkills] = useState(props.updateOnboard.pSkills);
  const [sSkills, setSSkills] = useState(props.updateOnboard.sSkills);
  const [textAreaDesc, setTextAreaDesc] = useState(props.updateOnboard.textAreaDesc);
  const [workLocation, setWorkLocation] = useState(props.updateOnboard.workLocation);
  const [workingHours, setWorkingHours] = useState(props.updateOnboard.workingHours);
  const [empType, setEmpType] = useState(props.updateOnboard.empType);
  const [role, setRole] = useState(props.updateOnboard.role);
  const [departments, setDepartments] = useState([]);
  const [newDepartmentName, setNewDepartmentName] = useState(props.updateOnboard.departmentName);
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState(props.updateOnboard.clientName);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(props.updateOnboard.projectName);
  const [pocname, setPocname] = useState([]);
  const [newPOCName, setNewPOCName] = useState(props.updateOnboard.pocname);
  const [yoe, setYoe] = useState(props.updateOnboard.yoe);
  const [rate, setRate] = useState(props.updateOnboard.rate);
  const [qualification, setQualification] = useState(props.updateOnboard.qualification);
  const [uploadDoc, setUploadDoc] = useState(props.updateOnboard.uploadDoc);
  const [projectName, setProjectName] = useState(props.updateOnboard.projectName);

  const [clientName, setClientName] = useState(props.updateOnboard.clientName);
  const [comments, setComments] = useState(props.updateOnboard.comments);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [status1, setStatus1] = useState(false);
  const pull_data = () => {
    setStatus1(!status1);
  };

  const handleClose = () => setShow();
  // useState for phone number
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);
  const params = useParams();
  const history = useHistory();
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



  const loadPocNames = async () => {
    const res = await axios.get("/emp/getAllEmployeeMasterData");
    setPocname(res.data.data);
    console.log(res.data.data);
  };

  const loadClients = async () => {
    const res = await axios.get("/clientProjectMapping/getAllClients");
    setClients(res.data.data);
    console.log(res.data.data);
  };

  const loadDepartmentsData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);
  };

  const loadProjects = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setProjects(res.data.data);
    console.log(res.data.data);
  };
  useEffect(() => {
    loadDepartmentsData();
    loadProjects();
    loadClients();
    loadPocNames();
  }, []);

  console.log(params);
  const loadData1 = async () => {
    const response = await axios.get(
      `/recruitmentTracker/getDataById/${params.id}`
    );
    setData(response.data.jobTitle);
    }

    useLayoutEffect(() => {
      loadData1();
    }, [status1]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rrfCat,jobTitle,technology,role,description,positions,pSkills,sSkills,qualification,workLocation,workingHours,empType,yoe,rate,projectName,uploadDoc,clientName,textAreaDesc,comments,newDepartmentName,newPOCName)
    axios
      .put(
        `/recruitmentTracker/updateRR/${props.updateOnboard.rrfId}`,
        {
          rrfCat: rrfCat,
          // rrfId,
          jobTitle: jobTitle,
          technology:technology,
          role:role,
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
          textAreaDesc: textAreaDesc,
          comments: comments,
          departmentName: newDepartmentName
        }
      )
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          pull_data();
          // props.func();
          toast.success("Requisition Updated successfully");
        } else {
          console.log("Props not Send");
        }
        toast.success("Form Submitted successfully");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    props.handleClose();
  };
  return (
    <>
      <Form
        ref={forms}
        className="formone"
        // noValidate
        // validated={validated}
        style={{ padding: 10 }}
        onSubmit={handleSubmit}

      >
        <Row>
        <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              required
              className="jobTitle"
              type="text"
              controlId="jobTitle"
              placeholder="Job Title"
             
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
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Category </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Category"
              controlId="rrfCat"
              value={rrfCat}
              onChange={(e) => setRrfCat(e.target.value)}
              isInvalid={!!errors.rrfCat}
            >
              <option>{rrfCat} </option>
              <option>Internal</option>
              <option>External</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.rrfCat}
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
        </Row>
        <Row>
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
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Work Location</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                required
                type="text"
                placeholder="Work Location"
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
            <Form.Select
              required
              type="text"
              placeholder="Technology"
              controlId="technology"
              value={technology}
              onChange={(e) => setTechnology(e.target.value)}
              isInvalid={!!errors.technology}
            >
              <option>{technology}</option>
              <option>React JS</option>
              <option>Vue JS</option>
              <option>Java Microservices</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.technology}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Role </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Role"
              controlId="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              isInvalid={!!errors.role}
            >
              <option>{role} </option>
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

        </Row>
        <Row>
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Primary Skills</Form.Label>
            <Form.Control
              required
              className="pSkills"
              type="text"
              controlId="pSkills"
              placeholder="Primary Skills"
             
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
        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Secondary Skills</Form.Label>
            <Form.Control
              required
              name="sSkills"
              type="text"
              controlId="sSkills"
              placeholder="Secondary Skills"
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


          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>No. of Positions</Form.Label>
            <Form.Control
              required
              name="positions"
              type="number"
              controlId="positions"
              placeholder="Positions"
              value={positions}
              onChange={(e) => setPositions(e.target.value)}
              isInvalid={!!errors.positions}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.positions}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Years of Experience</Form.Label>
            <InputGroup hasValidation>

              <Form.Control
                required
                type="text"
                placeholder="Years of Experience"
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
            <Form.Label>Rate</Form.Label>
            <Form.Control
              required
              className="rate"
              type="number"
              controlId="rate"
              placeholder="Rate"
             
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              isInvalid={!!errors.rate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.rate}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Employment Type </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Employment Type"
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
            <Form.Label>Working Hours</Form.Label>
            <Form.Control
              required
              className="workingHours"
              type="text"
              controlId="workingHours"
              placeholder="Working Hours"
           
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
              placeholder="Educational Qualification"
              
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
            <Form.Label>POC Name</Form.Label>
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
                <option value={poc.employeeId}>{poc.firstName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.pocname}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Upload Job Description Document</Form.Label>
            <Form.Control
              required
              className="uploadDoc"
              type="file"
              controlId="uploadDoc"
              placeholder="Upload Job Description Document"
             
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
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              required
              name="description"
              type="textarea"
              controlId="description"
              style={{ height: "80px" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              isInvalid={!!errors.description}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
    </>
  )
}

export default UpdateRR;
