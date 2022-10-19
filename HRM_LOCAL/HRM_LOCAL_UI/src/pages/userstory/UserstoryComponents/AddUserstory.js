// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import axios from "../../../Uri";
// import { Row, Col } from "react-bootstrap";
// import { BsPlusLg } from "react-icons/bs";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { InputGroup } from "react-bootstrap";
// import "react-toastify/dist/ReactToastify.css";
// import { FaPlus } from "react-icons/fa";

// function AddUserstory(props) {
//   const [show, setShow] = useState(false);
//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});
//   const [thirderrors, setThirdErrors] = useState("");
//   const [clients, setClients] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [manager, setManager] = useState([]);
//   const [roles,setRoles] = useState([]);

//   useEffect(() => {
//     loadData();
//     loadDatad();
//   }, []);

//   const loadData = async () => {
//     const res = await axios.get("/clientProjectMapping/getAllProjects");
//     setProjects(res.data.data);
//     console.log(res.data.data);
//   };
//   const loadDatad = async () => {
//     const res = await axios.get("/clientProjectMapping/getAllProjectRoles");
//     setRoles(res.data.data);
//     console.log(res.data.data);
//   };
//   const [empName, setEmpName] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/emp/getAllEmployeeMasterData")
//       .then((response) => {
//         setEmpName(response.data.data);
//         // console.log(response.data.data);
//       })
//       .catch(() => {
//         // toast.error("data is not getting");
//       });
//   }, []);

//   // Get API's for Project Manager Dropdown
//   // useEffect(() => {
//   //   axios.get(`/emp/getEmployeesDataForReportingManager/${employeeid}`).then((res) => {
//   //     console.log(res.data);
//   //     setManager(res.data);
//   //   });
//   // }, []);

//   const handleClose = () => setShow();
//   const handleShow = () => setShow(true);

//   const forms = useRef(null);

//   function setField(field, value) {
//     setForm({
//       ...form,
//       [field]: value,
//     });

//     if (!!errors[field])
//       setErrors({
//         ...errors,
//         [field]: null,
//       });
//   }

//   const validateForm = () => {
//     const {
//       storyTitle,
//       projectId,
//       projectName,
//       acceptanceCriteria,
//       role,
//       goal,
//       priority,
//       reason,
//       estimatedHours,
//      // actualHours,
//       remainingHours,
//       assignedDate,
//       startDate,
//       endDate,
//       status,
//     } = form;

//     const newErrors = {};

//     if (
//       !projectId ||
//       projectId === "" ||
//       !projectId.match(/^[aA-zZ\s]+$/)
//     )
//       newErrors.projectId = "Please Enter Project Name";
//     else if (!projectId.match(/^[aA-zZ\s]+$/)) {
//       newErrors.projectId = "Please select Project";
//     }

//     if (!startDate || startDate === "")
//       newErrors.startDate = "Please Enter Start Date";

//     if (!endDate || endDate === "") newErrors.endDate = "Please Enter End Date";

//     if (!storyTitle || storyTitle === "")
//       newErrors.storyTitle = "Please Enter storytitle";
//     else if (!storyTitle.match(/^[aA-zZ\s]+$/)) {
//       newErrors.storyTitle = "Please Enter valid story Title";
//     }

//     if (!status || status === "") newErrors.status = "Please Enter Status";

//     // if (!rate || rate === "") newErrors.rate = "Please Enter Rate";

//     if (!priority || priority === "")
//       newErrors.priority = "Please Enter Priority";

//     if (!acceptanceCriteria || acceptanceCriteria === "")
//       newErrors.acceptanceCriteria = "Please Enter acceptance Criteria";
//     else if (!acceptanceCriteria.match(/^[aA-zZ\s]+$/)) {
//       newErrors.acceptanceCriteria = "Please Enter valid acceptance Criteria";
//     }

//     if (!role || role === "") newErrors.role = "Please Enter role";
//     else if (!role.match(/^[aA-zZ\s]+$/)) {
//       newErrors.role = "Please Enter valid role";
//     }
//     if (!goal || goal === "")
//       newErrors.acceptanceCriteria = "Please Enter goal";
//     else if (!goal.match(/^[aA-zZ\s]+$/)) {
//       newErrors.goal = "Please Enter valid goal";
//     }
//     if (!reason || reason === "") newErrors.reason = "Please Enter reason";
//     else if (!reason.match(/^[aA-zZ\s]+$/)) {
//       newErrors.reason = "Please Enter valid reason";
//     }

//     if (!estimatedHours || estimatedHours === "" || estimatedHours.length > 3) {
//       newErrors.estimatedHours = "Please Enter Estimated Hours";
//     } else if (!estimatedHours.match(/^-?\d*(\.\d+)?$/)) {
//       newErrors.estimatedHours = "Please Enter Estimated Hours";
//     } else if (estimatedHours.length > 3) {
//       newErrors.estimatedHours = "Please Enter Correct Estimated Hours";
//     }

//     // if (!actualHours || actualHours === "" || actualHours.length > 3) {
//     //   newErrors.actualHours = "Please Enter Estimated Hours";
//     // } else if (!actualHours.match(/^-?\d*(\.\d+)?$/)) {
//     //   newErrors.actualHours = "Please Enter Estimated Hours";
//     // } else if (actualHours.length > 3) {
//     //   newErrors.actualHours = "Please Enter Correct Estimated Hours";
//     // }

//     if (!remainingHours || remainingHours === "" || remainingHours.length > 3) {
//       newErrors.remainingHours = "Please Enter Estimated Hours";
//     } else if (!remainingHours.match(/^-?\d*(\.\d+)?$/)) {
//       newErrors.remainingHours = "Please Enter Estimated Hours";
//     } else if (remainingHours.length > 3) {
//       newErrors.remainingHours = "Please Enter Correct Estimated Hours";
//     }
//     if (!assignedDate || assignedDate === "") {
//       newErrors.assignedDate = "Please Enter Assigned Date";
//     }

//     return newErrors;
//   };

//   //testing for commit
//   const [user, setUser] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(form);
//     const formErrors = validateForm();
//     console.log(Object.keys(formErrors).length);
//     if (Object.keys(formErrors).length > 2) {
//       setErrors(formErrors);
//     } else {
//       console.log(form);
//       console.log("form submitted");
//       axios
//         .post("/userStory/addUserStory", form)
//         .then((response) => {
//           const user = response.data;
//           console.log(user);
//           if (user.status) {
//             props.func();
//             toast.success("UserStory added Successfully");
//           } else {
//             console.log("Props Not Send");
//           }

//           // console.log(user);
//           // console.log(user);
//           setTimeout(5000);
//           handleClose();
//         })
//         .catch((err) => {
//           toast.error("Something Went Wrong");
//         });
//     }
//   };

//   return (
//     <div>
//     <Button

// variant="warning"

// onClick={handleShow}

// style={{

//   backgroundColor: "#ff9b44",

//   color: "#F4F8F6",

//   float: "right",

//   borderRadius: "25px",

//   // paddingBottom: "11.5px",

//   // marginTop: "100px",

// }}

// >

// <FaPlus />

// {" "}

// Add UserStory

// </Button>
//       <Modal
//         size="lg"

//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton style={{ backgroundColor: "#FF9E14",paddingTop:"5px",paddingBottom:"5px" }}>
//           <Modal.Title >Add Userstory</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form
//             ref={forms}
//             className="formone"
//             // noValidate
//             // validated={validated}
//             style={{ padding: 10 }}
//             onSubmit={handleSubmit}
//           >
//             <Row className="mb-4">
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Project Name *</Form.Label>
//                 <Form.Select
//                   required
//                   className="projectId"
//                   type="text"
//                   placeholder="Project Name"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.projectName}
//                   maxLength={30}
//                   onChange={(e) => setField("projectName", e.target.value)}
//                   isInvalid={!!errors.projectName}
//                 >
//                   <option>Select project</option>

//                   {projects.map((project) => (
//                     <option value={project.projectId}>
//                       {project.projectName}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.projectName}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Story Title *</Form.Label>
//                 <Form.Control
//                   required
//                   className="storyTitle"
//                   type="text"
//                   // controlId="storyTitle"
//                   placeholder="Enter Story Title"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.storyTitle}
//                   maxLength={30}
//                   onChange={(e) => setField("storyTitle", e.target.value)}
//                   isInvalid={!!errors.storyTitle}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.storyTitle}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Acceptance Criteria *</Form.Label>
//                 <Form.Control
//                   required
//                   className="acceptanceCriteria"
//                   type="text"
//                   controlId="acceptanceCriteria"
//                   placeholder="Acceptance Criteria"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.acceptanceCriteria}
//                   maxLength={30}
//                   onChange={(e) =>
//                     setField("acceptanceCriteria", e.target.value)
//                   }
//                   isInvalid={!!errors.acceptanceCriteria}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.AcceptanceCriteria}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Role</Form.Label>
//                 <Form.Select
//                   required
//                   className="role"
//                   type="text"
//                   placeholder="Role"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.role}
//                   maxLength={30}
//                   onChange={(e) => setField("role", e.target.value)}
//                   isInvalid={!!errors.role}
//                 >
//                   <option>Select Role</option>

//                   {roles.map((role) => (
//                     <option value={role.projectRolesName}>
//                       {role.projectRolesName}
//                     </option>
//                   ))}
//                 </Form.Select>
//                 {/* <Form.Control.Feedback type="invalid">
//                   {errors.projectId}
//                 </Form.Control.Feedback> */}
//               </Form.Group>
//               {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Role </Form.Label>
//                 <Form.Control
//                   required
//                   className="role"
//                   type="text"
//                   controlId="role"
//                   placeholder="Role"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.role}
//                   maxLength={30}
//                   onChange={(e) => setField("role", e.target.value)}
//                   isInvalid={!!errors.Role}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.role}
//                 </Form.Control.Feedback>
//               </Form.Group> */}
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Goal </Form.Label>
//                 <Form.Control
//                   required
//                   className="goal"
//                   type="text"
//                   controlId="goal"
//                   placeholder="goal"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.goal}
//                   maxLength={30}
//                   onChange={(e) => setField("goal", e.target.value)}
//                   isInvalid={!!errors.goal}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.goal}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Reason *</Form.Label>
//                 <Form.Control
//                   required
//                   className="reason"
//                   type="text"
//                   controlId="reason"
//                   placeholder="reason"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.reason}
//                   maxLength={30}
//                   onChange={(e) => setField("reason", e.target.value)}
//                   isInvalid={!!errors.reason}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.reason}
//                 </Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Priority *</Form.Label>
//                 <Form.Select
//                   required
//                   type="text"
//                   placeholder="priority"
//                   controlId="priority"
//                   value={form.priority}
//                   onChange={(e) => setField("priority", e.target.value)}
//                   isInvalid={!!errors.priority}
//                 >
//                   <option> Select Priority</option>
//                   <option value="P1">P1</option>
//                   <option value="P2">P2</option>
//                   <option value="P3">P3</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.status}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Estimated Hours *</Form.Label>
//                 <Form.Control
//                   required
//                   className="EstimatedHours"
//                   type="text"
//                   controlId="estimatedHours"
//                   placeholder="estimatedHours"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.estimatedHours}
//                   maxLength={30}
//                   onChange={(e) => setField("estimatedHours", e.target.value)}
//                   isInvalid={!!errors.estimatedHours}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.estimatedHours}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Actual Hours *</Form.Label>
//                 <Form.Control
//                   required
//                   className="actualHours"
//                   type="text"
//                   controlId="actualHours"
//                   placeholder="actualHours"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.actualHours}
//                   maxLength={30}
//                   onChange={(e) => setField("actualHours", e.target.value)}
//                   isInvalid={!!errors.actualHours}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.actualHours}
//                 </Form.Control.Feedback>
//               </Form.Group> */}
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Remaining Hours *</Form.Label>
//                 <Form.Control
//                   required
//                   className="remainingHours"
//                   type="text"
//                   controlId="remainingHours"
//                   placeholder="remaining Hours"
//                   // onChange={(event) => setclientName(event.target.value)}
//                   value={form.remainingHours}
//                   maxLength={30}
//                   onChange={(e) => setField("remainingHours", e.target.value)}
//                   isInvalid={!!errors.remainingHours}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.remainingHours}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Status *</Form.Label>
//                 <Form.Select
//                   required
//                   type="text"
//                   placeholder="Status"
//                   controlId="status"
//                   value={form.status}
//                   onChange={(e) => setField("status", e.target.value)}
//                   isInvalid={!!errors.status}
//                 >
//                   <option> Select Status</option>
//                   <option value="ToDo">To Do</option>
//                   <option value="InProgress">In Progress</option>
//                   <option value="Completed">Completed</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.status}
//                 </Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Start Date *</Form.Label>
//                 <Form.Control
//                   required
//                   type="date"
//                   placeholder="Start Date"
//                   controlId="startDate"
//                   value={form.startDate}

//                   onChange={(e) => setField("startDate", e.target.value)}
//                   isInvalid={!!errors.startDate}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.startDate}
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>End Date *</Form.Label>
//                 <Form.Control
//                   required
//                   type="date"
//                   placeholder="End Date"
//                   controlId="endDate"
//                   value={form.endDate}
//                   min={form.startDate}
//                   onChange={(e) => setField("endDate", e.target.value)}
//                   isInvalid={!!errors.endDate}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.endDate}
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//               {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Assigned To</Form.Label>
//                 <Form.Control
//                   required
//                   type="text"
//                   placeholder="AssignedTo"
//                   controlId="assignedTo"
//                   value={form.assignedTo}
//                   onChange={(e) => setField("assignedTo", e.target.value)}
//                   isInvalid={!!errors.assignedTo}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.assignedTo}
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group> */}
//               <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                 <Form.Label>Assigned Date *</Form.Label>
//                 <Form.Control
//                   required
//                   type="date"
//                   placeholder="Assigned Date"
//                   controlId="assignedDate"
//                   value={form.assignedDate}
//                   min={form.startDate}
//                   onChange={(e) => setField("assignedDate", e.target.value)}
//                   isInvalid={!!errors.assignedDate}
//                 ></Form.Control>
//                 <Form.Control.Feedback type="invalid">
//                   {errors.assignedDate}
//                 </Form.Control.Feedback>
//                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//               </Form.Group>
//             </Row>
//             <Row>
//               <Col>
//                 <Button
//                   style={{
//                     backgroundColor: "#ff9b44",
//                     borderColor: "#ff9b44",
//                     float: "right",
//                     width: "40%",
//                     height: "120%",
//                     borderRadius: "25px",
//                   }}
//                   type="submit"
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </Button>
//               </Col>
//               <Col>
//                 <Button
//                   style={{
//                     backgroundColor: "#B6B6B4",
//                     borderColor: "#B6B6B4",
//                     alignItems: "center",
//                     width: "40%",
//                     height: "120%",
//                     borderRadius: "25px",
//                   }}
//                   type="cancel"
//                   onClick={handleClose}
//                 >
//                   Close
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
// export default AddUserstory;

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
import { FaPlus } from "react-icons/fa";

function AddUserstory(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [thirderrors, setThirdErrors] = useState("");
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [manager, setManager] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    loadData();
    loadDatad();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setProjects(res.data.data);
    console.log(res.data.data);
  };
  const loadDatad = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjectRoles");
    setRoles(res.data.data);
    console.log(res.data.data);
  };
  const [empName, setEmpName] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((response) => {
        setEmpName(response.data.data);
        // console.log(response.data.data);
      })
      .catch(() => {
        // toast.error("data is not getting");
      });
  }, []);

  // Get API's for Project Manager Dropdown
  // useEffect(() => {
  //   axios.get(`/emp/getEmployeesDataForReportingManager/${employeeid}`).then((res) => {
  //     console.log(res.data);
  //     setManager(res.data);
  //   });
  // }, []);

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
      storyTitle,
      projectId,
      acceptanceCriteria,
      role,
      goal,
      priority,
      reason,
      estimatedHours,
      // actualHours,
      remainingHours,
      assignedDate,
      startDate,
      endDate,
      status,
    } = form;

    const newErrors = {};

    if (!projectId || projectId === "" || !projectId.match(/^[aA-zZ\s]+$/))
      newErrors.projectId = "Please Enter Project Name";
    else if (!projectId.match(/^[aA-zZ\s]+$/)) {
      newErrors.projectId = "Please select Project";
    }

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";

    // if (!endDate || endDate === "") newErrors.endDate = "Please Enter End Date";

    if (!storyTitle || storyTitle === "")
      newErrors.storyTitle = "Please Enter storytitle";
    else if (!storyTitle.match(/^[aA-zZ\s]+$/)) {
      newErrors.storyTitle = "Please Enter valid story Title";
    }

    if (!status || status === "") newErrors.status = "Please Enter Status";

    // if (!rate || rate === "") newErrors.rate = "Please Enter Rate";

    // if (!priority || priority === "")
    //   newErrors.priority = "Please Enter Priority";

    if (!acceptanceCriteria || acceptanceCriteria === "")
      newErrors.acceptanceCriteria = "Please Enter acceptance Criteria";
    else if (!acceptanceCriteria.match(/^[aA-zZ\s]+$/)) {
      newErrors.acceptanceCriteria = "Please Enter valid acceptance Criteria";
    }

    // if (!role || role === "") newErrors.role = "Please Enter role";
    // else if (!role.match(/^[aA-zZ\s]+$/)) {
    //   newErrors.role = "Please Enter valid role";
    // }
    if (!goal || goal === "")
      newErrors.acceptanceCriteria = "Please Enter goal";
    else if (!goal.match(/^[aA-zZ\s]+$/)) {
      newErrors.goal = "Please Enter valid goal";
    }
    // if (!reason || reason === "") newErrors.reason = "Please Enter reason";
    // else if (!reason.match(/^[aA-zZ\s]+$/)) {
    //   newErrors.reason = "Please Enter valid reason";
    // }

    if (!estimatedHours || estimatedHours === "" || estimatedHours.length > 3) {
      newErrors.estimatedHours = "Please Enter Estimated Hours";
    } else if (!estimatedHours.match(/^-?\d*(\.\d+)?$/)) {
      newErrors.estimatedHours = "Please Enter Estimated Hours";
    } else if (estimatedHours.length > 3) {
      newErrors.estimatedHours = "Please Enter Correct Estimated Hours";
    }

    // if (!actualHours || actualHours === "" || actualHours.length > 3) {
    //   newErrors.actualHours = "Please Enter Estimated Hours";
    // } else if (!actualHours.match(/^-?\d*(\.\d+)?$/)) {
    //   newErrors.actualHours = "Please Enter Estimated Hours";
    // } else if (actualHours.length > 3) {
    //   newErrors.actualHours = "Please Enter Correct Estimated Hours";
    // }

    if (!remainingHours || remainingHours === "" || remainingHours.length > 3) {
      newErrors.remainingHours = "Please Enter Estimated Hours";
    } else if (!remainingHours.match(/^-?\d*(\.\d+)?$/)) {
      newErrors.remainingHours = "Please Enter Estimated Hours";
    } else if (remainingHours.length > 3) {
      newErrors.remainingHours = "Please Enter Correct Estimated Hours";
    }
    // if (!assignedDate || assignedDate === "") {
    //   newErrors.assignedDate = "Please Enter Assigned Date";
    // }

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 2) {
      setErrors(formErrors);
    } else {
      console.log(form);
      console.log("form submitted");
      axios
        .post("/userStory/addUserStory", form)
        .then((response) => {
          const user = response.data;
          console.log(user);
          if (user.status) {
            props.func();
            toast.success("UserStory added Successfully");
          } else {
            console.log("Props Not Send");
          }

          // console.log(user);
          // console.log(user);
          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };

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
        <FaPlus /> Add UserStory
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#FF9E14",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        >
          <Modal.Title>Add Userstory</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
                <Form.Label>Project *</Form.Label>
                <Form.Select
                  required
                  className="projectId"
                  type="text"
                  placeholder="Project Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.projectId}
                  maxLength={30}
                  onChange={(e) => setField("projectId", e.target.value)}
                  isInvalid={!!errors.projectId}
                >
                  <option>Select project</option>

                  {projects.map((project) => (
                    <option value={project.projectId}>
                      {project.projectName}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.projectId}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Story Title *</Form.Label>
                <Form.Control
                  required
                  className="storyTitle"
                  type="text"
                  // controlId="storyTitle"
                  placeholder="Enter Story Title"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.storyTitle}
                  maxLength={30}
                  onChange={(e) => setField("storyTitle", e.target.value)}
                  isInvalid={!!errors.storyTitle}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.storyTitle}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                <Form.Label>Acceptance Criteria *</Form.Label>
                <Form.Control
                  required
                  className="acceptanceCriteria"
                  type="text"
                  controlId="acceptanceCriteria"
                  placeholder="Acceptance Criteria"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.acceptanceCriteria}
                  maxLength={300}
                  onChange={(e) =>
                    setField("acceptanceCriteria", e.target.value)
                  }
                  isInvalid={!!errors.acceptanceCriteria}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.AcceptanceCriteria}
                </Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Role</Form.Label>
                <Form.Select
                  required
                  className="role"
                  type="text"
                  placeholder="Role"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.role}
                  maxLength={30}
                  onChange={(e) => setField("role", e.target.value)}
                  isInvalid={!!errors.role}
                >
                  <option>Select Role</option>

                  {roles.map((role) => (
                    <option value={role.projectRolesName}>
                      {role.projectRolesName}
                    </option>
                  ))}
                </Form.Select>
               
              </Form.Group> */}
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Role </Form.Label>
                <Form.Control
                  required
                  className="role"
                  type="text"
                  controlId="role"
                  placeholder="Role"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.role}
                  maxLength={30}
                  onChange={(e) => setField("role", e.target.value)}
                  isInvalid={!!errors.Role}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.role}
                </Form.Control.Feedback>
              </Form.Group> */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Estimated Hours *</Form.Label>
                <Form.Control
                  required
                  className="EstimatedHours"
                  type="text"
                  controlId="estimatedHours"
                  placeholder="estimatedHours"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.estimatedHours}
                  maxLength={30}
                  onChange={(e) => setField("estimatedHours", e.target.value)}
                  isInvalid={!!errors.estimatedHours}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.estimatedHours}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
                  <option> Select Priority</option>
                  <option value="P1">P1</option>
                  <option value="P2">P2</option>
                  <option value="P3">P3</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Status *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Status"
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
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Reason </Form.Label>
                <Form.Control
                  required
                  className="reason"
                  type="text"
                  controlId="reason"
                  placeholder="reason"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.reason}
                  maxLength={30}
                  onChange={(e) => setField("reason", e.target.value)}
                  isInvalid={!!errors.reason}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.reason}
                </Form.Control.Feedback>
              </Form.Group>

              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Actual Hours *</Form.Label>
                <Form.Control
                  required
                  className="actualHours"
                  type="text"
                  controlId="actualHours"
                  placeholder="actualHours"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.actualHours}
                  maxLength={30}
                  onChange={(e) => setField("actualHours", e.target.value)}
                  isInvalid={!!errors.actualHours}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.actualHours}
                </Form.Control.Feedback>
              </Form.Group> */}
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Remaining Hours *</Form.Label>
                <Form.Control
                  required
                  className="remainingHours"
                  type="text"
                  controlId="remainingHours"
                  placeholder="remaining Hours"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.remainingHours}
                  maxLength={30}
                  onChange={(e) => setField("remainingHours", e.target.value)}
                  isInvalid={!!errors.remainingHours}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.remainingHours}
                </Form.Control.Feedback>
              </Form.Group> */}

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Start Date *</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Start Date"
                  controlId="startDate"
                  value={form.startDate}
                  onChange={(e) => setField("startDate", e.target.value)}
                  isInvalid={!!errors.startDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.startDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="End Date"
                  controlId="endDate"
                  value={form.endDate}
                  min={form.startDate}
                  onChange={(e) => setField("endDate", e.target.value)}
                  isInvalid={!!errors.endDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.endDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Assigned To</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="AssignedTo"
                  controlId="assignedTo"
                  value={form.assignedTo}
                  onChange={(e) => setField("assignedTo", e.target.value)}
                  isInvalid={!!errors.assignedTo}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.assignedTo}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Goal </Form.Label>
                <Form.Control
                  required
                  className="goal"
                  type="text"
                  controlId="goal"
                  placeholder="goal"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.goal}
                  maxLength={30}
                  onChange={(e) => setField("goal", e.target.value)}
                  isInvalid={!!errors.goal}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.goal}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Actual Start Date</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Assigned Date"
                  controlId="assignedDate"
                  value={form.assignedDate}
                  min={form.startDate}
                  onChange={(e) => setField("assignedDate", e.target.value)}
                  isInvalid={!!errors.assignedDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.assignedDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                  type="cancel"
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
export default AddUserstory;
