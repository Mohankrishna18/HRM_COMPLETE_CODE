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
import "react-toastify/dist/ReactToastify.css";
//vipul

function AddUser(props) {

  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
      description,
      duration,
      toDate,
      project,
      fromDate,
      status,
      taskName,
      taskType,
      // timesheet
    } = form;
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
    // if (!status || status === "")
    //   newErrors.status = "Please Enter Status";
    if (!fromDate || fromDate === "")
      newErrors.fromDate = "Please Enter Start date";
    // if (!toDate || toDate === "")
    //   newErrors.toDate = "Please Enter End date";
    if (!duration || duration === "")
      newErrors.duration = "Please Enter End time";
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
          }
          else {
            console.log("Props Not Send");
          }


          setTimeout(5000);
          setForm({});
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  // console.log(form.dateOfJoining)


  // useEffect(() => {
  //   axios
  //     .get("/clientProjectMapping/getAllProjects")
  //     .then((response) => {
  //       console.log(response.data.data);
  //     })

  //     .catch(() => {
  //       toast.error("data is not getting");
  //     });
  // }, []);


  const [task, setTask] = useState([]);
  useEffect(() => {
    axios
      .get(`/clientProjectMapping/getAllProjects`)
      .then((response) => {
        console.log(response.data.data);
        setTask(response.data.data);

      });
  }, []);
  console.log(task);

  // useEffect(() => {
  //   axios
  //     .get("/clientProjectMapping/getAllProjects")
  //     .then((response) => {console.log(response.data)});
  // }, []);

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
          paddingBottom: "7px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {" "}
        <BsPlusLg />
        &nbsp;Add Task
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color: "white" }}>
          <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>Add Task</Modal.Title>
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
              {/* <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Timesheet date*</Form.Label>
                <Form.Control
                  required
                  type="date"
                  controlId="timesheet "
                  value={form.timesheet}
                  onChange={(e) => setField("timesheet", e.target.value)}
                  isInvalid={!!errors.timesheet}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.timesheet}
                </Form.Control.Feedback>
              </Form.Group>  */}

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Project *</Form.Label>
                <Form.Select
                  type="text"
                  placeholder="project"
                  required
                  controlId="project"
                  value={form.project}
                  onChange={(e) => setField("project", e.target.value)}
                  isInvalid={!!errors.project}
                >
                  {/* <option>Select Project</option>
                  <option>hrm</option>
                  <option>it</option>
                  <option>dep</option> */}
                  {/* {task.map((item) => (
                    <option key={item.projectName} value={item.projectName}>
                      {item.projectName}
                    </option>
                  ))} */}
                  <option>Select </option>
                  {task.map((item) => (
                    <option>{item.projectName}</option>
                  ))}


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
                  controlId="taskName"
                  value={form.taskName}
                  onChange={(e) => setField("taskName", e.target.value)}
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
                  controlId="fromDate"
                  value={form.fromDate}
                  onChange={(e) => setField("fromDate", e.target.value)}
                  isInvalid={!!errors.fromDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fromDate}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>To Date*</Form.Label>
                <Form.Control type="date" placeholder="Enter "
                  controlId="toDate"
                  value={form.toDate}
                  onChange={(e) => setField("toDate", e.target.value)}
                // isInvalid={!!errors.toDate}
                />

                {/* <Form.Control.Feedback type="invalid">
                  {errors.toDate}
                </Form.Control.Feedback> */}

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
                controlId="CloseDate"
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
                controlId="StartTime"
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
                  controlId="duration"
                  value={form.duration}
                  onChange={(e) => setField("duration", e.target.value)}
                  isInvalid={!!errors.duration}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.duration}
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
                // isInvalid={!!errors.status}

                >
                  <option>Select status</option>
                  <option>open</option>
                  <option>closed</option>
                  <option>In progress</option>

                </Form.Select>
              </Form.Group>

              {/* <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback> */}


              <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Priority *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="priority"
                  controlId="priority"
                  value={form.priority}
                  onChange={(e) => setField("priority", e.target.value)}
                // isInvalid={!!errors.status}

                >
                  <option>Select priority</option>
                  <option>P1</option>
                  <option>P2</option>
                  <option>P3</option>
                  <option>P4</option>

                </Form.Select>
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter the Description "
                  controlId="description"
                  as="textarea"
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
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
    </div >
  );
}
export default AddUser;