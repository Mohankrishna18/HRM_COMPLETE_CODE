import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Card, FormSelect, InputGroup } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import axios from '../../../Uri'
import { toast } from 'react-toastify'
//vipul

import 'react-toastify/dist/ReactToastify.css'

const UpdateTask = (props) => {
  console.log(props.projectId)
  console.log(props.projectName)

  const [userId, setUserId] = useState(props.updateOnboard.userId)
  const [userStory, setUserStory] = useState(props.updateOnboard.userStory)
  const [taskTitle, setTaskTitle] = useState(props.updateOnboard.taskTitle)
  const [taskType, setTaskType] = useState(props.updateOnboard.taskType)
  const [assignedTo, setAssignedTo] = useState(props.updateOnboard.assignedTo)
 
  console.log(props.updateOnboard);
  const [estimatedHours, setEstimatedHours] = useState(
    props.updateOnboard.estimatedHours,
  )
  const [actualHours, setActualHours] = useState(
    props.updateOnboard.actualHours,
  )
  // const [toDate, setToDate] = useState(props.updateOnboard.toDate);
  // const [fromDate, setFromDate] = useState(props.updateOnboard.fromDate);
  const [plannedStartDate, setPlannedStartDate] = useState(
    props.updateOnboard.plannedStartDate,
  )

  const [plannedEndDate, setPlannedEndDate] = useState(
    props.updateOnboard.plannedEndDate,
  )
  const [priority, setPriority] = useState(props.updateOnboard.priority)
  const [status, setStatus] = useState(props.updateOnboard.status)
  const [description, setDescription] = useState(
    props.updateOnboard.description,
  )

  useEffect(() => {
    loadData()
  }, [props.projectId])

  const loadData = async (e) => {
    const response = await axios.get(
      `/clientProjectMapping/getAllProjectTeams/Active/${props.projectId}`,
    )
    setData(response.data.data)
    console.log(response.data.data)
  }
  const [data, setData] = useState([])

  // const [selectedMembers,setSelectedMembers] = useState();
  // console.log(selectedMembers)

  // const loadDated =  async(e) => {
  //   const response = await axios.get(`/clientProjectMapping/getAllProjectTeams/Active/${props.projectId}`);
  //   console.log(response);

  //   setSelectedMembers(response.data.data);
  //   console.log('chudu bey')
  //   console.log(response.data.data);

   //};

  const result = data.filter((emp) => emp.status === 'Active')

  console.log(result + 'result is here bro')

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const handleClose = () => {
    props.handleClose()
    // setShow()
  }
  const handleShow = () => setShow(true)

  const forms = useRef(null)

  function setField(field, value) {
    setForm({
      ...form,
      [field]: value,
    })
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      })
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
    const newErrors = {}

    if (!userId || userId === '') newErrors.userId = 'Please Enter project name'
    if (!userStory || userStory === '') {
      newErrors.userStory = 'Please Enter Task name'
    } else if (!userStory.match(/^[aA-zZ\s]+$/)) {
      newErrors.userStory = 'Please Enter valid Task name'
    }
    if (!taskType || taskType === '')
      newErrors.taskType = 'Please Enter Task name'

    if (!status || status === '') newErrors.status = 'Please Enter Status'

    if (!plannedStartDate || plannedStartDate === '')
      newErrors.plannedStartDate = 'Please Enter Start date'

    if (!plannedEndDate || plannedEndDate === '')
      newErrors.plannedEndDate = 'Please Enter Start date'
    // if (!priority || priority === '')
    //   newErrors.priority = 'Please Enter Priority'
    if (!assignedTo || assignedTo === '')
      newErrors.assignedTo = 'Please Enter Assigned to'
    if (!estimatedHours || estimatedHours === '')
      newErrors.estimatedHours = 'Please Enter Estimated Hours'
    // if (!actualHours || actualHours === "")
    //   newErrors.actualHours = "Please Enter Actual Hours";

    return newErrors
  }
  //testing for commit
  const [user, setUser] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form);
    // handleClose();
    // e.target.reset();
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
    } else {
      console.log(form)

      axios
        .put(`/task/updateTask/${props.updateOnboard.taskId}`, {
       
          userId: userId,
          userStory: userStory,
          
          taskTitle: taskTitle,
          taskType: taskType,
          estimatedHours: estimatedHours,
          // actualHours: actualHours,
          description: description,
          // toDate: toDate,
          // fromDate:fromDate,
          assignedTo: assignedTo,
          status: status,
          priority: priority,
          plannedStartDate: plannedStartDate,
          plannedEndDate: plannedEndDate,
        })
        .then((response) => {
          const user = response.data
          console.log(response)
          if (response.data.status) {
            props.func()
          } else {
            console.log('Props not Send')
          }
          toast.success('Task updated successfully!!!')
          // console.log(user);
        })
      props.handleClose()
    }
  }
  const [task, setTask] = useState([])
  useEffect(() => {
    axios.get(`/clientProjectMapping/getAllProjects`).then((response) => {
      console.log(response.data.data)
      setTask(response.data.data)
    })
  }, [])
  console.log(task)
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
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>User Id *</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="UserId"
              required
              controlid="userId"
              defaultValue={props.updateOnboard.userId}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              isInvalid={!!errors.userId}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectId}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
                <Form.Label>Project</Form.Label>
                <Form.Control
                  disabled
                  required
                  type="text"
                  placeholder="Project"
                  controlid="projectName"
                  defaultValue={props.projectName}
                  value={form.projectName}
                  onChange={(e) => setField("projectName", e.target.value)}
                  isInvalid={!!errors.projectName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.projectId}
                </Form.Control.Feedback>
              </Form.Group>
          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>User Story *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="User Story"
              controlid="userStory"
              defaultValue={props.updateOnboard.userStory}
              value={userStory}
              onChange={(e) => setUserStory(e.target.value)}
              isInvalid={!!errors.userStory}
            ></Form.Control>
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
          <Form.Group className="mb-3" as={Col} md="12">
            <Form.Label>Task Title *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Task Title"
              controlid="taskTitle"
              defaultValue={props.updateOnboard.taskTitle}
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              isInvalid={!!errors.taskTitle}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.taskTitle}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>Estimated Hours *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Estimated Hours"
              controlid="estimatedHours"
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
          <Form.Group className="mb-3" as={Col} md="3">
            <Form.Label>Priority </Form.Label>
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
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.priority}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="3">
                <Form.Label>Complexity </Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="complexity"
                  controlid="complexity"
                  defaultValue={props.updateOnboard.complexity}
                  value={form.complexity}
                  onChange={(e) => setField("complexity", e.target.value)}
                  isInvalid={!!errors.complexity}
                >
                  <option>Select Complexity</option>
                  <option>Highly Complex</option>
                  <option>Medium Complex</option>
                  <option>Moderate</option>
                  <option>Simple</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.complexity}
                </Form.Control.Feedback>
              </Form.Group>

          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Planned Start Date*</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Planned Start Date"
              controlid="plannedStartDate "
              defaultValue={props.updateOnboard.plannedStartDate.split('T')[0]}
              value={plannedStartDate.split('T')[0]}
              onChange={(e) => setPlannedStartDate(e.target.value)}
              isInvalid={!!errors.plannedStartDate}
            />
            <Form.Control.Feedback type="invalid">
              {errors.plannedStartDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" as={Col} md="6">
            <Form.Label>Planned End Date*</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Planned End Date"
              controlid="plannedEndDate "
              defaultValue={props.updateOnboard.plannedEndDate.split('T')[0]}
              value={plannedEndDate.split('T')[0]}
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
                  controlid="assignDate"
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
              controlid="assignedTo"
              //defaultValue={props.updateOnboard.assignedTo}
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              isInvalid={!!errors.assignedTo}
            >
              <option>Assigned To</option>
              {/* <option>mohan</option>
                  <option>sravya</option>
                  <option>divya</option>
                  <option>madhu</option> */}
              {data.map((item) => {
                return (
                  <option value={item.employeeName}>{item.employeeName}</option>
                )
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
                float: 'right',
                width: '40%',
                height: '120%',
                borderRadius: '25px',
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
                backgroundColor: '#B6B6B4',
                borderColor: '#B6B6B4',
                alignItems: 'center',
                width: '40%',
                height: '120%',
                borderRadius: '25px',
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
  )
}

export default UpdateTask;