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

  const [description, setDescription] = useState(props.updateOnboard.description);
  const [taskName, setTaskName] = useState(props.updateOnboard.taskName);
  const [fromDate, setFromDate] = useState(props.updateOnboard.fromDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [project, setProject] = useState(props.updateOnboard.project);
  const [duration, setDuration] = useState(props.updateOnboard.duration);
  const [taskType, setTaskType] = useState( props.updateOnboard.taskType);
  const [toDate, setToDate] = useState(props.updateOnboard.toDate);
  const [priority, setPriority] = useState(props.updateOnboard.priority);


  // const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
    if (!project || project === "")
      newErrors.project = "Please Enter project name";
    if (!taskName || taskName === "") { newErrors.taskName = "Please Enter Task name"; }
    else if (!taskName.match(/^[aA-zZ\s]+$/)) {
      newErrors.taskName = "Please Enter valid Task name";
    }
    if (!taskType || taskType === "")
      newErrors.taskType = "Please Enter Task name";
    if (!status || status === "")
      newErrors.status = "Please Enter Status";
    if (!fromDate || fromDate === "")
      newErrors.fromDate = "Please Enter Start date";
    if (!toDate || toDate === "")
      newErrors.toDate = "Please Enter End date";
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
      .put(`/task/updateTask/${props.updateOnboard.taskId}`,
        {
          description: description,
          duration: duration,
          fromDate: fromDate,
          project: project,
          status: status,
          taskName: taskName,
          taskType: taskType,
          toDate: toDate,
          priority: priority,
          })
      .then((response) => {
        const user = response.data;
        console.log(response);
        if (response.data.status) {
          props.func();
        }
        else {
          console.log("Props not Send")
        }
        toast.success("Task updated successfully!!!");
        // console.log(user);
      })
      props.handleClose();
    }
  };
  const [task,setTask]=useState([]);
  useEffect(() => {
    axios
      .get(`/clientProjectMapping/getAllProjects`)
      .then((response) => {
        console.log(response.data.data);
        setTask(response.data.data);
       
      });
  }, []);
console.log(task);
  // console.log(form.dateOfJoining)

  // const [empID, setEmpID] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/emp/getAllEmployeeMasterData")
  //     .then((response) => {
  //       setEmpID(response.data.data);
  //       console.log(response.data.data);
  //     })

  //     .catch(() => {
  //       toast.error("data is not getting");
  //     });
  // }, []);

  // const [role, setRole] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("/user/getAllRoles")
  //     .then((response) => {
  //       setRole(response.data.data);
  //       console.log(response.data.data)
  //     })
  //     .catch(() => {
  //       toast.error("Data is not getting");
  //     });
  //   // console.log(departments)
  // }, []);
  return (
    <div>
      <Form
        ref={forms}
        className="formone"
        style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
              {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Timesheet date*</Form.Label>
                <Form.Control
                  required
                  type="date"
                  controlid="timesheet "
                  value={form.timesheet}
                  onChange={(e) => setField("timesheet", e.target.value)}
                  isInvalid={!!errors.timesheet}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.timesheet}
                </Form.Control.Feedback>
              </Form.Group> */}

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Project *</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="project"
                  required
                  controlid="project"
                  defaultValue={props.updateOnboard.project}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  isInvalid={!!errors.project}

                >
                  
                   <option >select</option>
                   <option>{props.updateOnboard.project}</option>
                  {task.map((item) => ( 
                    <option key={item.projectId} value={item.projectName}>{item.projectName}</option>
                  ))}
                  
                   

                   {/* 
                  {task.map((item) => (
                    // if(item.projectName==props.updateOnboard.project){
                      
                    <option>{item.projectName}</option>
                  ))} */}

                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.project}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Task *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Task Name"
                  controlid="taskName"
                  defaultValue={props.updateOnboard.taskName} 
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  isInvalid={!!errors.taskName}

                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.taskName}
                </Form.Control.Feedback>
              </Form.Group>

              
              
              
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>From date*</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="fromDate"
                  controlid="fromDate"
                  defaultValue={props.updateOnboard.fromDate.split("T")[0]}
                  value={fromDate.split("T")[0]}
                  onChange={(e) => setFromDate(e.target.value)}
                  isInvalid={!!errors.fromDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fromDate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>To Date*</Form.Label>
                <Form.Control type="date" placeholder="Enter "
                  controlid="toDate"
                  defaultValue={props.updateOnboard.toDate.split("T")[0]}
                  value={toDate.split("T")[0]}
                  onChange={(e) => setToDate(e.target.value)}
                  isInvalid={!!errors.toDate}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.toDate}
                </Form.Control.Feedback>

              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Task Type *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Task Type"
                  controlid="taskType"
                  defaultValue={props.updateOnboard.taskType}
                  value={taskType}
                  onChange={(e) => setTaskType(e.target.value)}
                  isInvalid={!!errors.taskType}

                >
                  <option>Select Task Type</option>
                  <option>Analysis</option>
                  <option>Development</option>
                  <option>Code Review</option>
                  <option>Unit Testing</option>
                  <option>Code Integration</option>
                  <option>Integration Testing</option>
                  <option>Analysis</option>
                  <option>Design Review</option>
                  <option>TestCase Creation</option>
                  <option>Testcase Review</option>
                  <option>Testcase Execution</option>
                  <option>Deployment</option>

                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.taskType}
                </Form.Control.Feedback>

              </Form.Group>

              {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>CloseDate*</Form.Label>
                <Form.Control type="date" placeholder="Enter "
                controlid="CloseDate"
                value={form.CloseDate}
                onChange={(e) => setField("CloseDate", e.target.value)}
                isInvalid={!!errors.CloseDate} 
                />

                <Form.Control.Feedback type="invalid">
                  {errors.CloseDate}
                </Form.Control.Feedback>

              </Form.Group> */}

              {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>StartTime</Form.Label>
                <Form.Control type="time" placeholder="Enter "
                controlid="StartTime"
                value={form.StartTime}
                onChange={(e) => setField("StartTime", e.target.value)}
                isInvalid={!!errors.StartTime} 
                />

                <Form.Control.Feedback type="invalid">
                  {errors.StartTime}
                </Form.Control.Feedback> */}

              {/* </Form.Group> */}
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="time" placeholder="Enter "
                  controlid="duration"
                  value={duration}
                  defaultValue={props.updateOnboard.duration}
                  onChange={(e) => setDuration(e.target.value)}
                  // isInvalid={!!errors.duration}
                />

                {/* <Form.Control.Feedback type="invalid">
                  {errors.duration}
                </Form.Control.Feedback> */}

              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Status *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="status"
                  controlid="status"
                  defaultValue={props.updateOnboard.status}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  isInvalid={!!errors.status}

                >
                  {/* <option>Select status </option> */}
                  {/* <option>props.updateOnboard.status</option> */}
                  <option>open</option>
                  <option>closed</option>
                  <option>In progress</option>

                </Form.Select>
                
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>

                </Form.Group>

                
                <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Priority *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="priority"
                  controlid="priority"
                  defaultValue={props.updateOnboard.priority}
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                isInvalid={!!errors.priority}

                >
                  <option>Select priority</option>
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                  <option>P4</option>

                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.priority}
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter the Description "
                  controlid="description"
                  as="textarea"
                  value={description}
                  defaultValue={props.updateOnboard.description}
                  onChange={(e) => setDescription(e.target.value)}
                  // isInvalid={!!errors.description}
                  
                  maxlength="100"
                />

                {/* <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback> */}

              </Form.Group>


            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
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
                    alignItems: "center",
                    width: "40%",
                    height: "120%",
                    borderRadius: "25px",
                  }}

                  type="close"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Col>
            </Row>
      </Form>

    </div>
  );
};

export default UpdateTask;