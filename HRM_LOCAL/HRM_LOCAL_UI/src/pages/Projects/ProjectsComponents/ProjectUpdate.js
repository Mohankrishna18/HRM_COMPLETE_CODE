import React, { useEffect, useRef } from "react"; 
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ProjectUpdate = (props) => {
  console.log(props.updateOnboard);

  const [clientName, setclientName] = useState(props.updateOnboard.clientName);

  const [projectName, setProjectName] = useState(
    props.updateOnboard.projectName
  );
  const[businessUnit,setBusinessUnit]=useState(props.updateOnboard.businessUnit)
  
  const [startDate, setStartDate] = useState(props.updateOnboard.startDate);

  const [projectManager,setProjectManager]=useState(props.updateOnboard.projectManager);
  const [endDate, setEndDate] = useState(props.updateOnboard.endDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [rate, setRate] = useState(props.updateOnboard.rate);
  const [priority, setPriority] = useState(props.updateOnboard.priority);

  const [description, setDescription] = useState(
    props.updateOnboard.description
  );

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);

  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);

  // Get API's for Departments(Business Unit Head) Dropdown
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    loadDepartmentsData();
  }, []);

  const loadDepartmentsData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);
  };

  // Get API's for reportingManager(projectManger)
const [reportingManager, setReportingManager] = useState([]);
  useEffect(() => {
    axios.get("/emp/getreportingmanager").then((response) => {
      console.log(response.data);
      setReportingManager(response.data.data);
    });
  }, []);


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
      clientName,
      projectName,
      businessUnit,
      startDate,
      endDate,
      status,
      rate,
      priority,
      projectManager,
      description,
    } = form;
    const newErrors = {};

    if (!clientName || clientName === "" || !clientName.match(/^[aA-zZ\s]+$/))
      newErrors.clientName = "Please Select Client";
    if (
      !projectName ||
      projectName === "" ||
      !projectName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.projectName = "Please Enter Project Name";

    if (!businessUnit || businessUnit === "")
      newErrors.businessUnit = "Please Enter a Business Unit";
    if (!startDate || startDate === "")
      newErrors.startDate = "Please Select startDate";

    if (!endDate || endDate === "")
      newErrors.endDate = "Please Select End Date";
    if (!rate || rate === "" || rate.match(/[^0-9]/g))
      newErrors.rate = "Please Enter rate";
    if (!status || status === "") newErrors.status = "Please select status";
    if (!priority || priority === "")
      newErrors.priority = "Please Select priority";

    if (!projectManager || projectManager === "")
      newErrors.projectManager = "Please Enter projectManager";
    if (!description || description === "")
      newErrors.description = "Please Enter Description";
    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");
console.log(props.updateOnboard.businessUnit)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      clientName,
      projectName,
      businessUnit,
      startDate,
      endDate,
      rate,
      priority,
      status,
      projectManager,
      description,
    })
    axios
      .put(
        `/clientProjectMapping/updateProjectById/${props.updateOnboard.projectId}`,
        {
          clientName,
          projectName,
          businessUnit,
          startDate,
          endDate,
          rate,
          priority,
          status,
          projectManager,
          description,
        }
      )
      .then((response) => {
        const user = response.data;
        console.log(response.data.status);
        if (response.data.status) {
          props.func();
          toast.success("Project Updated successfully");
        } else {
          console.log("Props not Send");
        }
        
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
        <Row className="mb-4">
        <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              required
              type="text"
              className="projectName"
              placeholder="projectName "
              controlId="projectName"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              isInvalid={!!errors.projectName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              required
              className="clientName"
              type="text"
              controlId="clientName"
              placeholder="Client Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={clientName}
              maxLength={30}
              disabled
              onChange={(e) => setclientName("clientName", e.target.value)}
              isInvalid={!!errors.clientName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.clientName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Business Unit*</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Business Unit Head"
              controlId="businessUnit"
              value={businessUnit}
              onChange={(e) => setBusinessUnit(e.target.value)}
              isInvalid={!!errors.businessUnit}
            >
            
            {departments.map((department) => (
                <option>
                  {department.departmentName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.businessUnit}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Start Date"
              controlId="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              isInvalid={!!errors.startDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Project Manager *</Form.Label>
            <Form.Select
              required
              className="projectManager"
              type="text"
              controlId="projectManager"
              placeholder="Project Manager"
              // onChange={(event) => setclientName(event.target.value)}
              value={projectManager}
              maxLength={30}
              onChange={(e) => setProjectManager(e.target.value)}
              isInvalid={!!errors.projectManager}
            >
              {reportingManager.map((reportingManagerr) => (
                <option>
                  {reportingManagerr.projectManager}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.projectManager}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="End Date"
              controlId="endDate"
              value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              isInvalid={!!errors.endDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Status</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlId="status"
              defaultValue={status}
              onChange={(e) => setStatus("status", e.target.value)}
              isInvalid={!!errors.status}
            >
    
              <option value="Active">Active</option>

              <option value="InActive">InActive</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Rate</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Rate "
              controlId="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              isInvalid={!!errors.rate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.rate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Priority</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Priority"
              controlId="priority"
              defaultValue={priority}
              onChange={(e) => setPriority(e.target.value)}
              isInvalid={!!errors.priority}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              type="text"
              name="description"
              placeholder="Description"
              controlId="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}

              // onChange={changeHandler}
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "#ff9b44",
                borderColor: "#ff9b44",
                // float: "right",
                marginLeft: "450px",
                width: "20%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Col>
          {/* <Col>
                <Button
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
                </Button>
              </Col> */}
        </Row>
      </Form>
    </>
  );
};

export default ProjectUpdate;
