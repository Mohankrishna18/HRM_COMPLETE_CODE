import React, { useEffect, useRef, useLayoutEffect, useContext } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import Moment from "moment";
import axios from "../../../Uri";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "./ProjectUpdateTabs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectUpdate = (props) => {
  // console.log(props);
  const { data, setData } = useContext(UserContext);
  const [updateOnboard, setUpdateOnboard] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectManager, setProjectManager] = useState("");

  const [clientName, setclientName] = useState();

  const [businessUnit, setBusinessUnit] = useState();

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();
  const [status, setStatus] = useState();
  const [rate, setRate] = useState();
  const [priority, setPriority] = useState();
  const [status1, setStatus1] = useState(false);
  const [description, setDescription] = useState();
  const params = useParams();
  const history = useHistory();
  const pull_data = () => {
    setStatus1(!status1);
  };

  const [departments, setDepartments] = useState([]);
  const [clients, setClients] = useState([]);
  const statusEmp = "Active";
  const [reportingManager, setReportingManager] = useState([]);

  useEffect(() => {
    calls();
  }, [status1]);

  const calls = () => {
    axios
      .get("/clientProjectMapping/getAllClients")
      .then((resp) => {
        // console.log(resp);
        setClients(resp.data.data);
        if (resp.data.status) {
          axios
            .get("/dept/getAllDepartments")
            .then((respo) => {
              // console.log(respo);
              setDepartments(respo.data);
              if (respo.statusText === "OK") {
                axios
                  .get(`/emp/getActiveEmployees/${statusEmp}`)
                  .then((respon) => {
                    // console.log(respon);
                    setReportingManager(respon.data.data);
                    if (respon.data.status) {
                      loadData1();
                    } else {
                      // console.log("emplty");
                    }
                  })
                  .catch((err) => {
                    // console.log("Error4");
                  });
              }
            })
            .catch((err) => {
              // console.log("Error3");
            });
        }
      })
      .catch((err) => {
        // console.log("Error2");
      });
  };

  // console.log(params);
  const loadData1 = async () => {
    const response = await axios.get(
      `/clientProjectMapping/getOneProjectByProjectId/${params.id}`
    );
    setData(response.data.projectName);
    setUpdateOnboard(response.data);
    setProjectName(response.data.projectName);
    setProjectManager(response.data.projectManager);
    setBusinessUnit(response.data.businessUnit);
    setStartDate(response.data.startDate);
    setEndDate(response.data.endDate);
    setStatus(response.data.status);
    setRate(response.data.rate);
    setPriority(response.data.priority);
    setDescription(response.data.description);

    // console.log(response.data);
  };
  // useLayoutEffect(() => {
  //   loadData1();
  // }, [status1]);
  // console.log(updateOnboard);

  const [employeeId, setEmployeeId] = useState(updateOnboard.employeeId);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState("");
  const [errors1, setErrors1] = useState("");

  // // Get API's for Departments(Business Unit Head) Dropdown
  // const [departments, setDepartments] = useState([]);
  // useEffect(() => {
  //   loadDepartmentsData();
  //   loadData();
  // }, []);

 
  const startdate = Moment(startDate).format("YYYY-MM-DD");

  const enddate = Moment(endDate).format("YYYY-MM-DD");

  // Client Name
  // const loadData = async () => {
  //   const res = await axios.get("/clientProjectMapping/getAllClients");
  //   setClients(res.data.data);
  // };

  // const loadDepartmentsData = async () => {
  //   const res = await axios.get("/dept/getAllDepartments");
  //   setDepartments(res.data);
  // };

  // // Get API's for reportingManager(projectManger)
  // const statusEmp = "Active";
  // const [reportingManager, setReportingManager] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`/emp/getActiveEmployees/${statusEmp}`)
  //     .then((response) => {
  //       setReportingManager(response.data.data);
  //     })
  //     .catch(() => {
  //       toast.error("Data is not getting");
  //     });
  //   // console.log(departments)
  // }, []);

  const forms = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({
    //   clientName,
    //   projectName,
    //   businessUnit,
    //   startDate,
    //   endDate,
    //   rate,
    //   priority,
    //   status,
    //   projectManager,
    //   employeeId,
    //   description,
    // });
    if (errors == "") {
      axios
        .put(`/clientProjectMapping/updateProjectById/${params.id}`, {
          clientName,
          projectName,
          businessUnit,
          startDate,
          endDate,
          rate,
          employeeId,
          priority,
          status,
          projectManager,
          description,
        })
        .then((response) => {
          // console.log(response);
          if (response.data.status) {
            pull_data();
            // props.func();
            history.push("/app/Projects");
            toast.success("Project Updated successfully");
          } else {
            console.log("Props not Send");
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something Went Wrong");
        });
    } else {
      toast.error("Check Field");
    }
    props.handleClose();
  };

  return (
    <>
      <Container fluid>
        <Form
          ref={forms}
          className="formone"
          // noValidate
          // validated={validated}
          style={{ padding: 10 }}
          onSubmit={handleSubmit}
        >
          <Row className="mb-4">
            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Project Name</Form.Label>
              <Form.Control
                required
                type="text"
                className="projectName"
                placeholder="Project Name "
                controlid="projectName"
                defaultValue={projectName}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setErrors("Invalid Project Name");
                    // console.log(e.target.value);
                  } else if (e.target.value.length > 50) {
                    setErrors("Too Long");
                  } else {
                    // console.log(e.target.value);
                    setProjectName(e.target.value);
                    setErrors("");
                  }
                }}
                isInvalid={!!errors}
              ></Form.Control>
              {errors == "" ? (
                <div
                  style={{ backgroundImage: "none", borderColor: "none" }}
                ></div>
              ) : (
                <>
                  {" "}
                  <Form.Control.Feedback type="invalid">
                    {errors}
                  </Form.Control.Feedback>
                </>
              )}
            </Form.Group>

            {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
          <Form.Label>Client Name</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Client Name"
              controlid="clientName"
              defaultValue={clientName}
              onChange={(e) => setclientName(e.target.value)}
              isInvalid={!!errors.clientName}
            >
              <option>{clientName}</option>
             {clients.map((client) => (
                <option>{client.clientName}</option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.clientName}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Client Name</Form.Label>
              <Form.Control
                required
                className="clientName"
                type="text"
                controlid="clientName"
                placeholder="Client Name"
                // onChange={(event) => setclientName(event.target.value)}
                value={updateOnboard.clientName}
                maxLength={30}
                disabled
                onChange={(e) => setclientName(e.target.value)}
                isInvalid={!!errors.clientName}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.clientName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Business Unit</Form.Label>
              <Form.Select
                required
                type="text"
                placeholder="Business Unit Head"
                controlid="businessUnit"
                defaultValue={updateOnboard.businessUnit}
                onChange={(e) => setBusinessUnit(e.target.value)}
                isInvalid={!!errors.businessUnit}
              >
                <option>{updateOnboard.businessUnit}</option>
                {departments.map((department) => (
                  <option>{department.departmentName}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.businessUnit}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Start Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="Start Date"
                controlid="startDate"
                value={startdate}
                onChange={(e) => setStartDate(e.target.value)}
                isInvalid={!!errors.startDate}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.startDate}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>
                Project Manager{" "}
              </Form.Label>
              <Form.Select
                required
                className="projectManager"
                type="text"
                controlid="projectManager"
                placeholder="Project Manager"
                // onChange={(event) => setclientName(event.target.value)}
                defaultValue={projectManager}
                maxLength={30}
                onChange={(e) => setProjectManager(e.target.value)}
                isInvalid={!!errors.projectManager}
              >
                <option value={projectManager}>{projectManager} </option>
                {reportingManager.map((projectManager) => (
                  <option value={projectManager.fullName}>
                    {projectManager.fullName}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.projectManager}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>End Date</Form.Label>
              <Form.Control
                required
                type="date"
                placeholder="End Date"
                controlid="endDate"
                value={enddate}
                //min={startDate}
                onChange={(e) => setEndDate(e.target.value)}
                isInvalid={!!errors.endDate}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.endDate}
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Status</Form.Label>
              <Form.Select
                required
                type="text"
                placeholder="Status"
                controlid="status"
                className="status"
                defaultValue={status}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                isInvalid={!!errors.status}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>

                <option value="InActive">InActive</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.status}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Total Cost</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Cost "
                controlid="Cost"
                defaultValue={updateOnboard.rate}
                onChange={(e) => setRate(e.target.value)}
                isInvalid={!!errors.rate}
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.rate}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Priority</Form.Label>
              <Form.Select
                required
                type="text"
                placeholder="Priority"
                controlid="priority"
                defaultValue={priority}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                isInvalid={!!errors.priority}
              >
                <option value="">Select priority</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.priority}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="12" style={{ padding: 10 }}>
              <Form.Label style={{ color: "black" }}>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                type="text"
                name="description"
                placeholder="Description"
                controlid="description"
                defaultValue={updateOnboard.description}
                onChange={(e) => setDescription(e.target.value)}

                // onChange={changeHandler}
              />
            </Form.Group>
          </Row>
          <Row>
            <Col align="center" style={{ marginTop: "10px" }}>
              <Button
                style={{
                  backgroundColor: "#f5896e",
                  borderColor: "#f5896e",
                  width: "15%",
                  height: "120%",
                  borderRadius: "25px",
                  // float: "left",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </Button>
              &nbsp;&nbsp;
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
                onClick={() => history.push("/app/Projects")}
              >
                Back
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default ProjectUpdate;