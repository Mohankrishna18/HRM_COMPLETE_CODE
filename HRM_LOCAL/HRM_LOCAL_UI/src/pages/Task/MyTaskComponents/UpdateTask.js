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

  //console.log(props.updateOnboard);
const[projectName,setProjectNamew]=useState(props.updateOnboard.projectName);
  const [userId,setUserId] = useState(props.updateOnboard.userId);
  const [userStory, setUserStory] = useState(props.updateOnboard.userStory);
  const [taskTitle, setTaskTitle] = useState(props.updateOnboard.taskTitle);
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

  // const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

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
          projectName:props.projectName,
          assignedTo: props.assignTo,
          userStory: userStory,
          taskTitle: taskTitle,
          taskType: taskType,
          estimatedHours: estimatedHours,
          actualHours: actualHours,
          //   // actualEndDate:actualEndDate,
          //   // actualStartDate:actualStartDate,
          //  // assignedDate:assignedDate,
          //   toDate: toDate,
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

              defaultValue={projectName}

              value={form.projectName}

              onChange={(e) => setField("projectName", e.target.value)}

              isInvalid={!!errors.projectName}

            ></Form.Control>

            <Form.Control.Feedback type="invalid">

              {errors.projectName}

            </Form.Control.Feedback>

          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>UserStory *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="User Story"
                  controlId="userstory"
                  value={form.userstory}
                  onChange={(e) => setField("userstory", e.target.value)}
                  isInvalid={!!errors.userstory}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.userstory}
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
                  maxLength={3}
                  placeholder="Estimated Hours"
                  controlId="estimatedHours"
                  value={form.estimatedHours}
                  onChange={(e) => setField("estimatedHours", e.target.value)}
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
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Status *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="status"
                  controlId="status"
                  value={form.status}
                  onChange={(e) => setField("status", e.target.value)}
                  isInvalid={!!errors.status}
                >
                 <option> Select Status</option>
                  <option value="Open">Open</option>
                  <option value="InProgress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="OnHold">On Hold</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3" as={Col} md="6">
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
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Planned End Date *</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Enter "
                  controlId="plannedEndDate"
                  value={form.plannedEndDate}
                  min={form.plannedStartDate}
                  onChange={(e) => setField("plannedEndDate", e.target.value)}
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
                  {errors.assignDate}
                </Form.Control.Feedback> */}
              {/* </Form.Group> */}


              {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Assigned To *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="assignedTo"
                  controlId="assignedTo"
                  value={form.assignedTo}
                  onChange={(e) => setField("assignedTo", e.target.value)}
                  isInvalid={!!errors.assignedTo}
                >
                  <option>Assigned To</option>
                  {/* <option>mohan</option>
                  <option>sravya</option>
                  <option>divya</option>
                  <option>madhu</option> */}
                {/* {
                    result.map((item) => {
                      return (
                        <option value={item.employeeId}>{item.employeeName}</option>
                      )
                    })
                  }
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.assignedTo}
                </Form.Control.Feedback>
              </Form.Group>   */}

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
                backgroundColor: "#ff9b44",
                borderColor: "#ff9b44",
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
           
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateTask;