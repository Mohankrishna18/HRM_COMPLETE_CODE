import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
//vipul

function AddUser(props) {
  console.log(props.projectId);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();

  }, [props.projectId]);

  const loadData =  async(e) => {
    const response = await axios.get(`/clientProjectMapping/getAllProjectTeams/Active/${props.projectId}`);

    setData(response.data.data);
    console.log(response.data.data);
    console.log(data)
  };

  //const [filteredData, setFileteredData] = useState([]);
  // const result = data.filter(emp => emp.status === "Active")
  //setFileteredData(result)
  // console.log(result);

  console.log("testing line for storydta " + props.userId);
  console.log("testing for project Name in line number" + props.projectName);

  const handleClose = () => setShow();
  const handleShow = () => setShow(true);

  const forms = useRef(null);

  function setField(field, value) {
    setForm({
      ...form,
      userId: props.userId,
      projectName: props.projectName,
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
      userId,
      projectName,
      userStory,
      taskTitle,
      taskType,
      estimatedHours,
      //actualHours,
      description,
      plannedEndDate,
      plannedStartDate,
      status,
      assignedTo,
      priority,
      assignDate,
    } = form;
    const newErrors = {};

    if (!userId || userId === "") newErrors.userId = "Please Enter User Id";

    if (!projectName || projectName === "")
      newErrors.projectName = "Please Enter User Id";

    // if (!userStory || userStory === "") {
    //   newErrors.userStory = "Please Enter User Story";
    // } else if (!userStory.match(/^[aA-zZ\s]+$/)) {
    //   newErrors.userStory = "Please Enter valid User Story";
    // }

    if (!taskTitle || taskTitle === "")
      newErrors.taskTitle = "Please Enter Task Title";
    if (!taskType || taskType === "")
      newErrors.taskType = "Please Enter Task Type";
    if (!assignedTo || assignedTo === "" || assignedTo === "Assigned To")
      newErrors.assignedTo = "Please Enter Assigned To";

    if (!estimatedHours || estimatedHours === "" || estimatedHours.length > 3) {
      newErrors.estimatedHours = "Please Enter Estimated Hours";
    } else if (!estimatedHours.match(/^[0-9,hH\s]+$/)) {
      newErrors.estimatedHours = "Please Enter Estimated Hours";
    } else if (estimatedHours.length > 3) {
      newErrors.estimatedHours = "Please Correct Enter Estimated Hours";
    }

    // if (!actualHours || actualHours === "" || actualHours.length > 3) {
    //   newErrors.actualHours = "Please Enter Actual Hours";
    // } else if (!actualHours.match(/^[0-9,hH\s]+$/)) {
    //   newErrors.actualHours = "Please Enter Actual Hours";
    // } else if (actualHours.length > 3) {
    //   newErrors.actualHours = "Please Enter Correct Actual Hours";
    // }

    if (!plannedStartDate || plannedStartDate === "")
      newErrors.plannedStartDate = "Please Enter Start date";

    if (!plannedEndDate || plannedEndDate === "")
      newErrors.plannedEndDate = "Please Enter End date";

    // if (!priority || priority === "")
    //   newErrors.priority = "Please Enter Priority";

    return newErrors;
  };

  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log(formErrors);
    } else {
      console.log(form);

      axios
        .post("/task/createNewTask", form)
        .then((response) => {
          const user = response.data;

          if (response.data.status) {
            props.func();
            toast.success("NewTask added successfully!!!");
          } else {
            console.log("Props Not Send");
          }

          setTimeout(5000);
          setForm({});
          setErrors({});
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  useEffect(() => {
    setField("userId", props.userId);
    setField("projectName", props.projectName);
  }, [props.userId, props.projectName]);

  const [task, setTask] = useState([]);

  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjects`).then((response) => {
      console.log(response.data.data);
      setTask(response.data.data);
    });
  }, []);

  return (
    <div>
      <Button

variant="warning"

onClick={handleShow}

style={{

  backgroundColor: "#ff9b44",

  color: "#F4F8F6",

  float: "right",

  borderRadius: "25px",

  // paddingBottom: "11.5px",

  // marginTop: "100px",

}}

>

<FaPlus />

{" "}

Add Task

</Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#FF9E14",paddingTop:"5px",paddingBottom:"5px" }}
        >
          <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>
            Add Task
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>User Story Id *</Form.Label>
                <Form.Control
                  disabled
                  required
                  type="text"
                  placeholder="User Id"
                  controlId="userId"
                  value={form.userId}
                  onChange={(e) => setField("userId", e.target.value)}
                  isInvalid={!!errors.userId}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.userId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Project</Form.Label>
                <Form.Control
                  disabled
                  required
                  type="text"
                  placeholder="Project"
                  controlId="projectName"
                  defaultValue={props.projectName}
                  value={form.projectName}
                  onChange={(e) => setField("projectName", e.target.value)}
                  isInvalid={!!errors.projectName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.projectName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>User Story</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="UserStory"
                  controlId="userStory"
                  value={form.userStory}
                  onChange={(e) => setField("userStory", e.target.value)}
                  isInvalid={!!errors.taskType}
                >
                  <option>Select Task Type</option>
                  <option>MYTASK</option>
                  <option>TaskManagement</option>
                  
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.userStory}
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
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.taskType}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="12">
                <Form.Label>Task Title *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Task Title"
                  controlId="taskTitle"
                  value={form.taskTitle}
                  onChange={(e) => setField("taskTitle", e.target.value)}
                  isInvalid={!!errors.taskTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.taskTitle}
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
                  <option>Select status</option>
                  <option>Todo</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
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

             
              {/* <Form.Group className="mb-3" as={Col} md="3">
                <Form.Label>Actual Hours *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Actual Hours"
                  maxLength={3}
                  controlId="actualHours"
                  value={form.actualHours}
                  onChange={(e) => setField("actualHours", e.target.value)}
                  isInvalid={!!errors.actualHours}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.actualHours}
                </Form.Control.Feedback>
              </Form.Group> */}

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

              <Form.Group className="mb-3" as={Col} md="6">
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
                  {data.map((item) => {
                    return (
                      <option value={item.employeeId}>
                        {item.employeeName}
                      </option>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddUser;
