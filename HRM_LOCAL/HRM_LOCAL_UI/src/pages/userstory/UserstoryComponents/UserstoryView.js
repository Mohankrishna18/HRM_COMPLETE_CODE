import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const UserstoryUpdate = (props) => {
  console.log(props.updateOnboard);
  console.log(props.updateOnboard.projectName);


  //const [clientName, setclientName] = useState(props.updateOnboard.clientName);

  const [storyTitle, setStoryTitle] = useState(props.updateOnboard.storyTitle);
  const [startDate, setStartDate] = useState(props.updateOnboard.startDate);

  const [endDate, setEndDate] = useState(props.updateOnboard.endDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [acceptanceCriteria, setAcceptanceCriteria] = useState(props.updateOnboard.acceptanceCriteria);
  const [priority, setPriority] = useState(props.updateOnboard.priority);
  const [role, setRole] = useState(
    props.updateOnboard.role
  );
  const [goal, setGoal] = useState(
    props.updateOnboard.goal
  );
  const [reason, setReason] = useState(
    props.updateOnboard.reason
  );
  const [projectName, setProjectName] = useState(props.updateOnboard.projectName);
  const [assignedTo, setAssignedTo] = useState(
    props.updateOnboard.assignedTo
  );
  const [estimatedHours, setEstimatedHours] = useState(
    props.updateOnboard.estimatedHours
  );
  const [actualHours, setActualHours] = useState(
    props.updateOnboard.estimatedHours
  );
  const [remainingHours, setremainingHours] = useState(
    props.updateOnboard.remainingHours
  );
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);


  // const loadData = async () => {
  //   const res = await axios.get("/userStory/getAllUserStory");
  //   setClients(res.data);
  //   console.log(res.data);
  // };

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
      projectName,
      storyTitle,
      acceptanceCriteria,
      role,
      goal,
      priority,
      reason,
      assignedTo,
      estimatedHours,
      actualHours,
      remainingHours,
      startDate,
      endDate,
      status,
    } = form;
    const newErrors = {};


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
    if (!storyTitle || storyTitle === "")
      newErrors.storyTitle = "Please Enter storytitle";

    if (!acceptanceCriteria || acceptanceCriteria === "")
      newErrors.acceptanceCriteria = "Please Enter acceptance Criteria";
    if (!role || role === "")
      newErrors.role = "Please Enter role";
    if (!goal || goal === "")
      newErrors.acceptanceCriteria = "Please Enter goal";
    if (!reason || reason === "")
      newErrors.reason = "Please Enter reason";
    if (!assignedTo || assignedTo === "")
      newErrors.assignedTo = "Please Enter assignedTo";
    if (!estimatedHours || estimatedHours === "")
      newErrors.estimatedHours = "Please Enter estimatedHours";

    if (!actualHours || actualHours === "")
      newErrors.actualHours = "Please Enter actualHours";

    if (!remainingHours || remainingHours === "")
      newErrors.remainingHours = "Please Enter remainingHours";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/userStory/updateUserStoryById/${props.updateOnboard.storyId}`,
        {
          storyTitle:storyTitle,
          projectName:projectName,
          acceptanceCriteria:acceptanceCriteria,
          role:role,
          goal:goal,
          priority:priority,
          reason:reason,
          assignedTo:assignedTo,
          estimatedHours: estimatedHours,
          actualHours : actualHours,
          remainingHours : remainingHours,
          startDate :startDate,
          endDate :endDate,
          status: status,
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
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              required
              className="projectName"
              type="text"
              controlId="projectName"
              placeholder="project Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={projectName}
              maxLength={30}
              onChange={(e) => setProjectName(e.target.value)}
              isInvalid={!!errors.projectName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>story Title</Form.Label>
            <Form.Control
              required
              className="storyTitle"
              type="text"
              controlId="storyTitle"
              placeholder="story Title"
              // onChange={(event) => setclientName(event.target.value)}
              value={storyTitle}
              maxLength={30}
              onChange={(e) => setStoryTitle("storyTitle", e.target.value)}
              isInvalid={!!errors.storyTitle}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.storyTitle}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>acceptance Criteria</Form.Label>
            <Form.Control
              required
              className="acceptanceCriteria"
              type="text"
              controlId="acceptanceCriteria"
              placeholder="acceptance Criteria"
              // onChange={(event) => setclientName(event.target.value)}
              value={acceptanceCriteria}
              maxLength={30}
              onChange={(e) => setAcceptanceCriteria("acceptanceCriteria", e.target.value)}
              isInvalid={!!errors.acceptanceCriteria}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.acceptanceCriteria}
            </Form.Control.Feedback>
          </Form.Group>



          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>role</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="role "
              controlId="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              isInvalid={!!errors.role}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.role}
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
            <Form.Label>Goal</Form.Label>
            <Form.Control
              required
              type="text"
              name="goal"
              placeholder="goal"
              controlId="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              isInvalid={!!errors.role}
            // onChange={changeHandler}

            />
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Reason</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="reason"
              controlId="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              isInvalid={!!errors.reason}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.reason}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>EstimatedHours</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="estimatedHours"
              controlId="estimatedHours"
              value={estimatedHours}
              onChange={(e) => setEstimatedHours(e.target.value)}
              isInvalid={!!errors.estimatedHours}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.estimatedHours}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Actual Hours</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="actualHours"
              controlId="actualHours"
              value={actualHours}
              onChange={(e) => setActualHours(e.target.value)}
              isInvalid={!!errors.actualHours}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.actualHours}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>remaining Hours</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="remainingHours"
              controlId="remainingHours"
              value={remainingHours}
              onChange={(e) => setRemainingHours(e.target.value)}
              isInvalid={!!errors.remainingHours}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.remainingHours}
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
            <Form.Label>AssignedTo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="assignedTo"
              controlId="assignedTo"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              isInvalid={!!errors.assignedTo}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.assignedTo}
            </Form.Control.Feedback>
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

export default UserstoryUpdate;