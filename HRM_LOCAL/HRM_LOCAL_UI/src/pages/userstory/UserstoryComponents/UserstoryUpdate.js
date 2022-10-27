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
  const [acceptanceCriteria, setAcceptanceCriteria] = useState(
    props.updateOnboard.acceptanceCriteria
  );
  const [actualHours, setActualHours] = useState(
    props.updateOnboard.actualHours
  );
  const [assignedTo, setAssignedTo] = useState(props.updateOnboard.assignedTo); //not in use
  const [endDate, setEndDate] = useState(props.updateOnboard.endDate);
  const [estimatedHours, setEstimatedHours] = useState(
    props.updateOnboard.estimatedHours
  );
  const [priority, setPriority] = useState(props.updateOnboard.priority);
  console.log(priority);
  const [startDate, setStartDate] = useState(props.updateOnboard.startDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [goal, setGoal] = useState(props.updateOnboard.goal);
  const [projectName, setProjectName] = useState(
    props.updateOnboard.projectName
  );
  console.log(projectName);
  const [reason, setReason] = useState(props.updateOnboard.reason);
  const [remainingHours, setRemainingHours] = useState(
    props.updateOnboard.remainingHours
  );
  const [role, setRole] = useState(props.updateOnboard.role);
  const [storyTitle, setStoryTitle] = useState(props.updateOnboard.storyTitle);
  const [assignedDate, setAssignDate] = useState(
    props.updateOnboard.assignedDate
  );
  const [projectId, setProjectId] = useState(props.updateOnboard.projectId);
  console.log(projectId);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);

  const [projects, setProjects] = useState([]);
  // const [manager,setManager] = useState([]);

  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjects`).then((response) => {
      console.log(response.data.data);
      setTask(response.data.data);
    });
  }, []);
  console.log(task);

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
    const {} = form;
    const newErrors = {};

    if (
      !projectName ||
      projectName === "" ||
      !projectName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.projectName = "Please Enter Project Name";
    else if (!projectName.match(/^[aA-zZ\s]+$/)) {
      newErrors.projectName = "Please Enter valid Project name";
    }

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Select startDate";

    if (!endDate || endDate === "")
      newErrors.endDate = "Please Select End Date";

    // if (!assignedDate || assignedDate === "")
    //   newErrors.assignedDate = "Please Select assigned Date";

    if (!status || status === "") newErrors.status = "Please select status";
    // if (!priority || priority === "")
    //   newErrors.priority = "Please Select priority";
    if (!storyTitle || storyTitle === "")
      newErrors.storyTitle = "Please Enter storytitle";
    else if (!storyTitle.match(/^[aA-zZ\s]+$/)) {
      newErrors.storyTitle = "Please Enter valid User Story";
    }

    if (!acceptanceCriteria || acceptanceCriteria === "")
      newErrors.acceptanceCriteria = "Please Enter acceptance Criteria";
    else if (!acceptanceCriteria.match(/^[aA-zZ\s]+$/)) {
      newErrors.acceptanceCriteria = "Please Enter valid acceptance Criteria";
    }

    // if (!role || role === "") newErrors.role = "Please Enter role";
    // else if (!role.match(/^[aA-zZ\s]+$/)) {
    //   newErrors.role = "Please Enter valid role";
    //}
    if (!goal || goal === "")
      newErrors.acceptanceCriteria = "Please Enter goal";
    else if (!goal.match(/^[aA-zZ\s]+$/)) {
      newErrors.goal = "Please Enter valid goal";
    }
    if (!reason || reason === "") newErrors.reason = "Please Enter reason";
    else if (!reason.match(/^[aA-zZ\s]+$/)) {
      newErrors.reason = "Please Enter valid reason";
    }

    // if (!estimatedHours || estimatedHours === "")
    //   newErrors.estimatedHours = "Please Enter estimatedHours";

    if (!actualHours || actualHours === "")
      newErrors.actualHours = "Please Enter actualHours";

    if (!remainingHours || remainingHours === "")
      newErrors.remainingHours = "Please Enter remainingHours";

    if (!assignedTo || assignedTo === "")
      newErrors.assignedTo = "Please Enter assignedTo";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/userStory/updateUserStoryById/${props.updateOnboard.storyId}`, {
        storyTitle: storyTitle, //
        projectId: projectId,
        projectName: projectName, //
        acceptanceCriteria: acceptanceCriteria, //
        // role: role, //
       // goal: goal, //
        priority: priority, //
        reason: reason, //
        assignedDate: assignedDate, //
        assignedTo: assignedTo, //
        estimatedHours: estimatedHours, //
        actualHours: actualHours, //
       // remainingHours: remainingHours, //
        startDate: startDate, //
        endDate: endDate, //
        status: status, //
      })
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
          toast.success("Form Submitted successfully");
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
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Project Name*</Form.Label>

            <Form.Control
              disabled
              required
              type="text"
              placeholder="User Id"
              controlId="projectName"
              defaultValue={projectName}
              value={form.projectName}
              onChange={(e) => setField("projectName", e.target.value)}
              isInvalid={!!errors.projectName}
            ></Form.Control>

            <Form.Control.Feedback type="invalid">
              {errors.projectName}
            </Form.Control.Feedback>
          </Form.Group><br/>
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Story Title*</Form.Label>

            <Form.Control
              required
              type="text"
              controlId="storyTitle"
              placeholder="Story Title"
              // onChange={(event) => setclientName(event.target.value)}

              // value={acceptanceCriteria}

              defaultValue={props.updateOnboard.storyTitle}
              maxLength={30}
              onChange={(e) => setStoryTitle(e.target.value)}
              isInvalid={!!errors.storyTitle}
            ></Form.Control>

            <Form.Control.Feedback type="invalid">
              {errors.storyTitle}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>acceptance Criteria</Form.Label>
            <Form.Control
              required
              type="text"
              controlId="acceptanceCriteria"
              as="textarea"
              placeholder="acceptance Criteria"
              // onChange={(event) => setclientName(event.target.value)}
              // value={acceptanceCriteria}
              defaultValue={props.updateOnboard.acceptanceCriteria}
              maxLength={30}
              onChange={(e) => setAcceptanceCriteria(e.target.value)}
              isInvalid={!!errors.acceptanceCriteria}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.acceptanceCriteria}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>role</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="role "
              controlId="role"
              defaultValue={props.updateOnboard.role}
              // value={role}
              onChange={(e) => setRole(e.target.value)}
              isInvalid={!!errors.role}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.role}
            </Form.Control.Feedback>
          </Form.Group> */}

          
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
         

          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>EstimatedHours*</Form.Label>
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
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Priority</Form.Label>

            <Form.Select
              required
              type="text"
              placeholder="Priority"
              controlId="priority"
              defaultValue={props.updateOnboard.priority}
              onChange={(e) => setPriority(e.target.value)}
              isInvalid={!!errors.priority}
            >
              <option> Select Priority</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" style={{ padding: 10 }}>
            <Form.Label>Status*</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlId="status"
              // value={status}
              defaultValue={props.updateOnboard.status}
              onChange={(e) => setStatus(e.target.value)}
              isInvalid={!!errors.status}
            >
              <option> Select Status</option>

              <option value="Open">Open</option>

              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>

              <option value="On Hold">On Hold</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group> */}
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group> */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Planned Start Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Start Date"
              controlId="startDate"
              defaultValue={props.updateOnboard.startDate}
              value={startDate.split("T")[0]}
              //value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              isInvalid={!!errors.startDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Planned End Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="End Date"
              controlId="endDate"
              defaultValue={props.updateOnboard.endDate}
              value={endDate.split("T")[0]}
              //value={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              isInvalid={!!errors.endDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

        
          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
          </Form.Group> */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Actual Start Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Assigned Date"
              controlId="assignedDate"
              defaultValue={props.updateOnboard.assignedDate.split("T")[0]}
              value={assignedDate.split("T")[0]}
              onChange={(e) => setAssignDate(e.target.value)}
              isInvalid={!!errors.assignedDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.assignedDate}
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
