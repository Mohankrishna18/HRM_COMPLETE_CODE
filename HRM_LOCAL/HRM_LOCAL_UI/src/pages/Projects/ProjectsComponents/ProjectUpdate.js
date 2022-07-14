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
  
  const [projectName, setProjectName] = useState(props.updateOnboard.projectName);
  const [startDate, setStartDate] = useState(props.updateOnboard.startDate);

  const [endDate, setEndDate] = useState(props.updateOnboard.endDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [rate, setRate] = useState(props.updateOnboard.rate);
  const [priority, setPriority] = useState(props.updateOnboard.priority);

  const [projectManager, setProjectManager] = useState(
    props.updateOnboard.projectManager
  );
  const [description, setDescription] = useState(
    props.updateOnboard.description
  );

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);

 
  // const loadData = async () => {
  //   const res = await axios.get("/clientProjectMapping/getAllClients");
  //   setClients(res.data.data);
  //   console.log(res.data);
  // };

  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/clientProjectMapping/updateProjectById/${props.updateOnboard.projectId}`,
        {
          clientName,
          projectName,
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
        if (response.data.status) {
          props.func();
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
        <Row className="mb-4">
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
            >
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.clientName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              required
              className="projectName"
              type="text"
              controlId="projectName"
              placeholder="Project Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={projectName}
              maxLength={30}
              onChange={(e) => setProjectName("projectName", e.target.value)}
              isInvalid={!!errors.projectName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectName}
            </Form.Control.Feedback>
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
              value={status}
              onChange={(e) => setStatus("status", e.target.value)}
              isInvalid={!!errors.status}
            >
              <option> Select Status</option>

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
              value={priority}
              onChange={(e) => setPriority("priority", e.target.value)}
              isInvalid={!!errors.priority}
            >
               <option> Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Project Manager</Form.Label>
            <Form.Control
              required
              type="text"
              name="projectManager"
              placeholder="Project Manager"
              controlId="projectManager"
              value={projectManager}
              onChange={(e) => setProjectManager(e.target.value)}
              // onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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