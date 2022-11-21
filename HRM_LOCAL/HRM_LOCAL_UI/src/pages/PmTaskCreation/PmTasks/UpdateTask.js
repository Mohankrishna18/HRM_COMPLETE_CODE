import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
//vipul

import "react-toastify/dist/ReactToastify.css";

const UpdateTask = (props) => {
  console.log(props);

  //console.log(props.updateOnboard);
  const [projectId, setProjectId] = useState(props.updateOnboard.projectId);
  const [userId, setUserId] = useState(props.updateOnboard.userId);
  const [userStory, setUserStory] = useState(props.updateOnboard.userStory);
  const [taskTitle, setTaskTitle] = useState(props.updateOnboard.taskTitle);
  const [data, setData] = useState([]);
  console.log(data);
  const [taskType, setTaskType] = useState(props.updateOnboard.taskType);
  const [estimatedHours, setEstimatedHours] = useState(
    props.updateOnboard.estimatedHours
  );
  // const [StartDate,setActualStartDate]=useState(props.updateOnboard.actualStartDate);
  // const [actualEndDate,setActualEndDate]=useState(props.updateOnboard.actualEndDate);
  //const [AssignedDate,setAssignedDate]=useState(props.updateOnboard.assignedDate)
  const [actualHours, setActualHours] = useState(
    props.updateOnboard.actualHours
  );
  // const [toDate, setToDate] = useState(props.updateOnboard.toDate);
  // const [fromDate, setFromDate] = useState(props.updateOnboard.fromDate);
  const [plannedStartDate, setPlannedStartDate] = useState(
    props.updateOnboard.plannedStartDate
  );
  const [plannedEndDate, setPlannedEndDate] = useState(
    props.updateOnboard.plannedEndDate
  );
  const [priority, setPriority] = useState(props.updateOnboard.priority);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [description, setDescription] = useState(
    props.updateOnboard.description
  );
  const [assignDate, setAssignDate] = useState(props.updateOnboard.assignDate);
  const [assignedTo, setAssignedto] = useState(props.updateOnboard.assignedTo);
  console.log(assignedTo);
  const [projectName, setProjectName] = useState(
    props.updateOnboard.projectName
  );
  console.log(assignedTo);

  // const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  console.log(props.updateOnboard.projectId);

  console.log(props.updateOnboard.projectId);
  console.log(props.updateOnboard.projectName);
  const handleClose = () => {
    props.handleClose();
    // setShow()
  };
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
    // const {
    //   // description,
    //   // duration,
    //   // toDate,
    //   project,
    //   fromDate,
    //   status,
    //   taskName,
    //   taskType,
    //   // timesheet
    // } = form;
    const newErrors = {};

    // if (!timesheet || timesheet === "")
    //   newErrors.timesheet = "Please Enter Timesheet date";

    if (!taskType || taskType === "")
      newErrors.taskType = "Please Enter Task name";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (!plannedStartDate || plannedStartDate === "")
      newErrors.plannedStartDate = "Please Enter Start date";

    if (!plannedEndDate || plannedEndDate === "")
      newErrors.plannedEndDate = "Please Enter Start date";
    // if (!toDate || toDate === "")
    //   newErrors.toDate = "Please Enter End date";
    //   if (!fromDate || fromDate === "")
    //   newErrors.fromDate = "Please Enter End date";

    // if (!duration || duration === "")
    //   newErrors.duration = "Please Enter End time";
    // if (!description || description === "") {
    //   newErrors.description = "Please Enter Description";
    // }
    // else if (!description.length >= 300) {
    //   newErrors.description = "your description is too long";
    // }

    return newErrors;
  };
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    // handleClose();
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(form);

      axios
        .put(`/task/updateTask/${props.updateOnboard.taskId}`, {
          userId: userId,
          projectName: props.updateOnboard.projectName,
          assignedTo: assignedTo,
          projectId: props.updateOnboard.projectId,
          userStory: userStory,
          taskTitle: taskTitle,
          taskType: taskType,
          estimatedHours: estimatedHours,
          actualHours: actualHours,

          plannedStartDate: plannedStartDate,
          plannedEndDate: plannedEndDate,
          assignDate: assignDate,
          status: status,
          priority: priority,
        })
        .then((response) => {
          const user = response.data;
          console.log(user);
          //setData(user.status);
          //console.log(user.status);
          if (user.status) {
            props.func();
            toast.success("Task updated successfully!!!");
          } else {
            console.log("Props not Send");
          }
          //toast.success("Task updated successfully!!!");
          // console.log(user);
        });
      props.handleClose();
    }
  };
  const [task, setTask] = useState([]);
  useEffect(() => {
    axios.get(`/task/getTaskByAssign/{assignedTo}`).then((response) => {
      console.log(response.data);
      setTask(response.data.data);
    });
  }, []);
  console.log(task);

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadDated();
  }, [form.projectId]);

  const loadDated = async (e) => {
    const response = await axios.get(
      `/clientProjectMapping/getAllProjectTeams/Active/${props.updateOnboard.projectId}`
    );

    setProjects(response.data.data);
    console.log(response.data.data);
  };
  console.log(projects);

  return (
    <div>
      <Form
        ref={forms}
        className="formone"
        style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Project</Form.Label>
            <Form.Control
              disabled
              required
              type="text"
              placeholder="Project Name"
              controlId="projectName"
              defaultValue={props.updateOnboard.projectName}
              value={projectName}
              onChange={(e) => setField("projectName", e.target.value)}
              isInvalid={!!errors.projectId}
            ></Form.Control>

            <Form.Control.Feedback type="invalid">
              {errors.projectId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>User Story </Form.Label>
            <Form.Control
              disabled
              required
              className="userStory"
              type="text"
              placeholder="User Story"
              // onChange={(event) => setclientName(event.target.value)}

              defaultValue={props.updateOnboard.userStory}
              value={userStory}
              maxLength={30}
              onChange={(e) => setField("userStory", e.target.value)}
              isInvalid={!!errors.userStory}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.userStory}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="12">
            <Form.Label>Task Title *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task Title"
              controlId="taskTitle"
              defaultValue={props.updateOnboard.taskTitle}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              isInvalid={!!errors.taskTitle}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.taskTitle}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Task Type *</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Task Type"
              controlId="taskType"
              value={form.taskType}
              defaultValue={props.updateOnboard.taskType}
              onChange={(e) => setField("taskType", e.target.value)}
              isInvalid={!!errors.taskType}
            >
              <option>Select Task Type</option>
              <option>Analysis</option>
              <option>Development</option>
              <option>Code Review</option>
              <option>Unit Testing</option>
              <option>Code Integration</option>
              <option>Integration Testing</option>
              <option>Design Review</option>
              <option>TestCase Creation</option>
              <option>Testcase Review</option>
              <option>Testcase Execution</option>
              <option>Deployment</option>
              <option>others</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.taskType}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>Estimated Hours *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Estimated Hours"
              controlId="estimatedHours"
              defaultValue={props.updateOnboard.estimatedHours}
              value={estimatedHours}
              onChange={(e) => setEstimatedHours(e.target.value)}
              isInvalid={!!errors.estimatedHours}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.estimatedHours}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>Priority </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="priority"
              controlId="priority"
              value={priority}
              defaultValue={props.updateOnboard.priority}
              onChange={(e) => setPriority(e.target.value)}
              isInvalid={!!errors.priority}
            >
              <option> Select Priority</option>

              <option>P1</option>
              <option>P2</option>
              <option>P3</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Planned Start Date*</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Planned Start Date"
              controlId="plannedStartDate "
              defaultValue={props.updateOnboard.plannedStartDate.split("T")[0]}
              value={plannedStartDate.split("T")[0]}
              onChange={(e) => setPlannedStartDate(e.target.value)}
              isInvalid={!!errors.plannedStartDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.plannedStartDate}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Status *</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="status"
              controlId="status"
              defaultValue={props.updateOnboard.status}
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              isInvalid={!!errors.status}
            >
              <option> Select Status</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="OnHold">On Hold</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Planned Start Date *</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="plannedStartDate"
                  controlId="plannedStartDate"
                  value={form.plannedStartDate}
                  onChange={(e) => setField("plannedStartDate", e.target.value)}
                  isInvalid={!!errors.plannedStartDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.plannedStartDate}
                </Form.Control.Feedback>
              </Form.Group> */}

          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Planned End Date*</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Planned End Date"
              controlId="plannedEndDate "
              defaultValue={props.updateOnboard.plannedEndDate.split("T")[0]}
              value={plannedEndDate.split("T")[0]}
              onChange={(e) => setPlannedEndDate(e.target.value)}
              isInvalid={!!errors.plannedEndDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.plannedEndDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Actual Start Date </Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Assign Date"
              controlId="assignDate"
              value={form.assignDate}
              onChange={(e) => setField("assignDate", e.target.value)}
              isInvalid={!!errors.assignDate}
            />
            {/* <Form.Control.Feedback type="invalid">
                  {errors.assignDate}
                </Form.Control.Feedback> */}
          </Form.Group>

          {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Priority </Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="priority"
                  controlId="priority"
                  value={form.priority}
                  onChange={(e) => setField("priority", e.target.value)}
                  isInvalid={!!errors.priority}
                >
                  <option>Select priority</option>
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.priority}
                </Form.Control.Feedback>
              </Form.Group> */}

          {/*
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Actual Start Date </Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Assign Date"
                  controlId="assignDate"
                  value={form.assignDate}
                  onChange={(e) => setField("assignDate", e.target.value)}
                  isInvalid={!!errors.assignDate}
                /> */}
          {/* <Form.Control.Feedback type="invalid">
          {/* <Form.Control.Feedback type="invalid">
                  {errors.assignDate}
                </Form.Control.Feedback> */}
          {/* </Form.Group> */}
          {/* </Form.Group> */}

          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Assigned To *</Form.Label>
            <Form.Select
              required
              type="text"
              //placeholder="assignedTo"
              controlId="assignedTo"
              // value={assignedTo}
              defaultValue={assignedTo}
              onChange={(e) => setAssignedto(e.target.value)}
              isInvalid={!!errors.assignedTo}
            >
              {/* <option>mohan</option>
                  <option>sravya</option>
                  <option>divya</option>
                  <option>madhu</option> */}
              <option>{assignedTo}</option>
              {projects.map((item) => {
                return (
                  <option value={item.employeeName}>{item.employeeName}</option>
                );
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.assignedTo}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Description "
              controlId="description"
              as="textarea"
              value={form.description}
              onChange={(e) => setField("description", e.target.value)}
              // isInvalid={!!errors.description}
              maxlength="100"
            />
          </Form.Group>
        </Row>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
                borderColor: "#f5896e",
                float: "right",
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
            <Button
              style={{
                backgroundColor: "#B6B6B4",
                borderColor: "#B6B6B4",
                alignItems: "right",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="close"
              onClick={handleClose}
            >
              Close
            </Button>
            {/* <Button
              style={{
                backgroundColor: "#B6B6B4",
                borderColor: "#B6B6B4",
                alignItems: "right",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="close"
              onClick={handleClose}
            >
              Close
            </Button> */}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateTask;
