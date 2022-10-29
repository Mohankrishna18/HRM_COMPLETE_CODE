// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import { Card, FormSelect, InputGroup } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { Row, Col } from "react-bootstrap";
// import axios from "../../../Uri";
// import { toast } from "react-toastify";
// //Assign team members to project
// import "react-toastify/dist/ReactToastify.css";

// const UpdateTeamMember = (props) => {
//   console.log(props.updateOnboard);
//   console.log(props.data);

//   const [employeeId, setEmployeeId] = useState(props.updateOnboard.employeeId);

//   const [employeeName, setEmployeeName] = useState(
//     props.updateOnboard.firstName
//   );
//   const [designationName, setDesignationName] = useState(
//     props.updateOnboard.designationName
//   );
//   const [departmentName, setDepartmentName] = useState(
//     props.updateOnboard.departmentName
//   );
//   const [projectName, setProjectName] = useState(
//     props.updateOnboard.projectName
//   );
//   const [startDate, setStartDate] = useState();
//   const [prmasterId, setPrmasterId] = useState();

//   const [endDate, setEndDate] = useState();
//   const [status, setStatus] = useState("");
//   console.log(props.updateOnboard.status);
//   const [roles, setRoles] = useState([]);
//   //console.log(props.updateOnboard.roles)
//   const [assignedDate, setAssignedDate] = useState();
//   const [priority, setPriority] = useState(props.updateOnboard.priority);

//   const [projectManager, setProjectManager] = useState(
//     props.updateOnboard.projectManager
//   );
//   const [description, setDescription] = useState(
//     props.updateOnboard.description
//   );

//   const [projectAllocation, setProjectAllocation] = useState("");
//   const [projectId, setProjectId] = useState(props.data.projectId);

//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});

//   // Get API's for roles Dropdown
//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     const response = await axios.get(
//       "/clientProjectMapping/getAllProjectRoles"
//     );
//     setRoles(response.data.data);
//     console.log(response.data);
//   };

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
//       employeeId,
//       employeeName,
//       designationName,
//       departmentName,
//       startDate,
//       endDate,
//       status,
//       prmasterId,
//       assignedDate,
//       projectAllocation,
//     } = form;
//     const newErrors = {};

//     if (!employeeId || employeeId === "" || !employeeId.match(/^[aA-zZ\s]+$/))
//       newErrors.employeeId = "";
//     if (
//       !employeeName ||
//       employeeName === "" ||
//       !employeeName.match(/^[aA-zZ\s]+$/)
//     )
//       newErrors.employeeName = "Please Enter Employee Name";
//     if (
//       !designationName ||
//       designationName === "" ||
//       !designationName.match(/^[aA-zZ\s]+$/)
//     )
//       newErrors.designation = "Please Enter Designation";
//     if (!departmentName || departmentName === "")
//       newErrors.departmentName = "Please Enter a Business Unit Head";

//     if (!projectName || projectName === "")
//       newErrors.projectName = "project Name";

//     if (!startDate || startDate === "")
//       newErrors.startDate = "Please Select startDate";

//     if (!endDate || endDate === "")
//       newErrors.endDate = "Please Select End Date";
//     if (
//       !prmasterId ||
//       prmasterId === "" ||
//       !prmasterId.matchmatch(/^[aA-zZ\s]+$/)
//     )
//       newErrors.prmasterId = "Please Enter role";
//     if (!status || status === "") newErrors.status = "Please select status";
//     if (!assignedDate || assignedDate === "")
//       newErrors.assignedDate = "Please Enter Assigned Date ";
//     if (!priority || priority === "")
//       newErrors.priority = "Please Select priority";

//     if (!projectManager || projectManager === "")
//       newErrors.projectManager = "Please Enter projectManager";
//     if (!description || description === "")
//       newErrors.description = "Please Enter Description";

//     if (!projectAllocation || projectAllocation === "")
//       newErrors.projectAllocation = "Please Enter projectAllocation";

//     return newErrors;
//   };

//   //testing for commit
//   const [user, setUser] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({
//       employeeId,
//       employeeName,
//       designationName,
//       departmentName,
//       startDate,
//       endDate,
//       prmasterId,
//       assignedDate,
//       status,
//       projectAllocation,
//       projectId,
//     });
//     axios
//       .post(`/clientProjectMapping/addProjectTeam`, {
//         employeeId,
//         employeeName,
//         designationName,
//         departmentName,
//         startDate,
//         endDate,
//         prmasterId,
//         assignedDate,
//         status,
//         projectAllocation,
//         projectId,
//       })
//       .then((response) => {
//         const user = response.data;
//         if (response.data.status) {
//           props.func();
//         } else {
//           console.log("Props not Send");
//         }
//         toast.success("Assigned successfully");
//         // console.log(user);
//       })
//       .catch((err) => {
//         console.log(err);
//         toast.error("Something Went Wrong");
//       });
//     props.handleClose();
//   };

//   return (
//     <>
//     <Form.Label style={{ fontSize: "20px", color: "#FF9E14" }}>{props.data.projectName}</Form.Label>
//       <Form
//         ref={forms}
//         className="formone"
//         // noValidate
//         // validated={validated}
//         style={{ padding: 10 }}
//         onSubmit={handleSubmit}
//       >
//         <Row className="mb-4">
//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Employee ID</Form.Label>
//             <Form.Control
//               required
//               className="employeeId"
//               type="text"
//               controlId="employeeId"
//               placeholder="employee ID"
//               // onChange={(event) => setclientName(event.target.value)}
//               value={employeeId}
//               maxLength={30}
//               disabled
//               onChange={(e) => setEmployeeId("employeeId", e.target.value)}
//               isInvalid={!!errors.employeeId}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.employeeId}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Employee Name</Form.Label>
//             <Form.Control
//               required
//               className="firstName"
//               type="text"
//               controlId="firstName"
//               placeholder="Employee Name"
//               disabled
//               // onChange={(event) => setclientName(event.target.value)}
//               value={employeeName}
//               maxLength={30}
//               onChange={(e) => setEmployeeName("employeeName", e.target.value)}
//               isInvalid={!!errors.employeeName}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.employeeName}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Designation</Form.Label>
//             <Form.Control
//               required
//               className="designationName"
//               type="text"
//               placeholder=""
//               disabled
//               controlId="designationName"
//               value={designationName}
//               onChange={(e) =>
//                 setDesignationName("designationName", e.target.value)
//               }
//               isInvalid={!!errors.designationName}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.designationName}
//             </Form.Control.Feedback>
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Business Unit</Form.Label>
//             <Form.Control
//               required
//               className="departmentName"
//               type="text"
//               placeholder=""
//               disabled
//               controlId="departmentName"
//               value={departmentName}
//               onChange={(e) =>
//                 setDepartmentName("departmentName", e.target.value)
//               }
//               isInvalid={!!errors.departmentName}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.departmentName}
//             </Form.Control.Feedback>
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//           {/*
//           <Form.Group as={Col} md="12" style={{ padding: 10 }}>
//             <Form.Label>Project Name</Form.Label>
//             <Form.Control
//               required
//               className="projectName"
//               type="text"
//               controlId="projectName"
//               placeholder="project Name"
//               disabled
//               // onChange={(event) => setclientName(event.target.value)}
//               value={projectName}
//               maxLength={30}
//               onChange={(e) => setProjectName("projectName", e.target.value)}
//               isInvalid={!!errors.projectName}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.projectName}
//             </Form.Control.Feedback>
//           </Form.Group> */}

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Allocation Start Date</Form.Label>
//             <Form.Control
//               required
//               type="date"
//               placeholder="Start Date"
//               controlId="startDate"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//               isInvalid={!!errors.startDate}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.startDate}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Role</Form.Label>
//             <Form.Select
//               required
//               className="projectRolesName"
//               type="text"
//               controlId="projectRolesName"
//               placeholder="project Role"
//               // onChange={(event) => setclientName(event.target.value)}
//               value={prmasterId}
//               maxLength={30}
//               onChange={(e) => setPrmasterId(e.target.value)}
//               isInvalid={!!errors.prmasterId}
//             >
//               <option>Select Role</option>

//               {roles.map((role) => (
//                 <option value={role.prmasterId}>{role.projectRolesName}</option>
//               ))}
//               {/* <option value="Team Lead">Team Lead</option>
//               <option value="Team Member">Team Member</option>

//               <option value="Business Analyst">Business Analyst</option> */}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               {errors.prmasterId}
//             </Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Allocation End Date</Form.Label>
//             <Form.Control
//               required
//               type="date"
//               placeholder="End Date"
//               controlId="endDate"
//               value={endDate}
//               min={startDate}
//               onChange={(e) => setEndDate(e.target.value)}
//               isInvalid={!!errors.endDate}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.endDate}
//             </Form.Control.Feedback>
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Status</Form.Label>
//             <Form.Select
//               required
//               type="text"
//               placeholder="Status"
//               controlId="status"
//               value={form.status}
//               onChange={(e) => setStatus(e.target.value)}
//               isInvalid={!!errors.status}
//             >
//               <option> Select Status</option>
//               <option value="Active">Active</option>
//               <option value="InActive">InActive</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">
//               {errors.status}
//             </Form.Control.Feedback>
//           </Form.Group>

//           {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Assigned Date</Form.Label>
//             <Form.Control
//               required
//               type="date"
//               placeholder="Assigned Date"
//               controlId="assignedDate"
//               onChange={(e) => setAssignedDate(e.target.value)}
//               isInvalid={!!errors.assignedDate}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.assignedDate}
//             </Form.Control.Feedback>
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group> */}

//           <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//             <Form.Label>Project Allocation Percentage</Form.Label>
//             <Form.Control
//               required
//               className="projectAllocation"
//               type="text"
//               placeholder="%"
//               value={form.projectAllocation}
//               onChange={(e) => setProjectAllocation(e.target.value)}
//               isInvalid={!!errors.projectAllocation}
//             ></Form.Control>
//             <Form.Control.Feedback type="invalid">
//               {errors.projectAllocation}
//             </Form.Control.Feedback>
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
//         </Row>
//         <Row>
//           <Col>
//             <Button
//               style={{
//                 backgroundColor: "#ff9b44",
//                 borderColor: "#ff9b44",
//                 // float: "right",
//                 marginLeft: "200px",
//                 width: "40%",
//                 height: "120%",
//                 borderRadius: "25px",
//               }}
//               type="submit"
//               onClick={handleSubmit}
//             >
//               Assign
//             </Button>
//           </Col>
//           {/* <Col>
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
//               </Col> */}
//         </Row>
//       </Form>
//     </>
//   );
// };

// export default UpdateTeamMember;

import React, { useEffect, useRef, useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
//Assign team members to project
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./ProjectUpdateTabs";

const UpdateTeamMember = (props) => {
  const params = useParams();
  const { data } = useContext(UserContext);
  console.log(props.updateOnboard);
  console.log(props.data);

  const [employeeId, setEmployeeId] = useState(props.updateOnboard.employeeId);

  const [employeeName, setEmployeeName] = useState(
    props.updateOnboard.firstName
  );
  const [designationName, setDesignationName] = useState(
    props.updateOnboard.designationName
  );
  const [departmentName, setDepartmentName] = useState(
    props.updateOnboard.departmentName
  );
  const [projectName, setProjectName] = useState(
    props.updateOnboard.projectName
  );
  const [startDate, setStartDate] = useState();
  const [prmasterId, setPrmasterId] = useState();

  const [endDate, setEndDate] = useState();
  const [status, setStatus] = useState("");
  console.log(props.updateOnboard.status);
  const [roles, setRoles] = useState([]);
  //console.log(props.updateOnboard.roles)
  const [assignedDate, setAssignedDate] = useState();
  const [priority, setPriority] = useState(props.updateOnboard.priority);

  const [projectManager, setProjectManager] = useState(
    props.updateOnboard.projectManager
  );
  const [description, setDescription] = useState(
    props.updateOnboard.description
  );

  const [projectAllocation, setProjectAllocation] = useState("");
  const [projectId, setProjectId] = useState(params.id);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // Get API's for roles Dropdown
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await axios.get(
      "/clientProjectMapping/getAllProjectRoles"
    );
    setRoles(response.data.data);
    console.log(response.data);
  };

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
      employeeId,
      employeeName,
      designationName,
      departmentName,
      startDate,
      endDate,
      status,
      prmasterId,
      assignedDate,
      projectAllocation,
    } = form;
    const newErrors = {};

    if (!employeeId || employeeId === "" || !employeeId.match(/^[aA-zZ\s]+$/))
      newErrors.employeeId = "";
    if (
      !employeeName ||
      employeeName === "" ||
      !employeeName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.employeeName = "Please Enter Employee Name";
    if (
      !designationName ||
      designationName === "" ||
      !designationName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.designation = "Please Enter Designation";
    if (!departmentName || departmentName === "")
      newErrors.departmentName = "Please Enter a Business Unit Head";

    if (!projectName || projectName === "")
      newErrors.projectName = "project Name";

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Select startDate";

    if (!endDate || endDate === "")
      newErrors.endDate = "Please Select End Date";
    if (
      !prmasterId ||
      prmasterId === "" ||
      !prmasterId.matchmatch(/^[aA-zZ\s]+$/)
    )
      newErrors.prmasterId = "Please Enter role";
    if (!status || status === "") newErrors.status = "Please select status";
    if (!assignedDate || assignedDate === "")
      newErrors.assignedDate = "Please Enter Assigned Date ";
    if (!priority || priority === "")
      newErrors.priority = "Please Select priority";

    if (!projectManager || projectManager === "")
      newErrors.projectManager = "Please Enter projectManager";
    if (!description || description === "")
      newErrors.description = "Please Enter Description";

    if (!projectAllocation || projectAllocation === "")
      newErrors.projectAllocation = "Please Enter projectAllocation";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      employeeId,
      employeeName,
      designationName,
      departmentName,
      startDate,
      endDate,
      prmasterId,
      assignedDate,
      status,
      projectAllocation,
      projectId,
    });
    axios
      .post(`/clientProjectMapping/addProjectTeam`, {
        employeeId,
        employeeName,
        designationName,
        departmentName,
        startDate,
        endDate,
        prmasterId,
        assignedDate,
        status,
        projectAllocation,
        projectId,
      })
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
        } else {
          console.log("Props not Send");
        }
        toast.success("Assigned successfully");
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
      <Form.Label style={{ fontSize: "20px", color: "#FF9E14" }}>
        {"Project Name : " + data}
      </Form.Label>
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
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              className="employeeId"
              type="text"
              controlId="employeeId"
              placeholder="employee ID"
              // onChange={(event) => setclientName(event.target.value)}
              value={employeeId}
              maxLength={30}
              disabled
              onChange={(e) => setEmployeeId("employeeId", e.target.value)}
              isInvalid={!!errors.employeeId}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.employeeId}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              required
              className="firstName"
              type="text"
              controlId="firstName"
              placeholder="Employee Name"
              disabled
              // onChange={(event) => setclientName(event.target.value)}
              value={employeeName}
              maxLength={30}
              onChange={(e) => setEmployeeName("employeeName", e.target.value)}
              isInvalid={!!errors.employeeName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.employeeName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation</Form.Label>
            <Form.Control
              required
              className="designationName"
              type="text"
              placeholder=""
              disabled
              controlId="designationName"
              value={designationName}
              onChange={(e) =>
                setDesignationName("designationName", e.target.value)
              }
              isInvalid={!!errors.designationName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.designationName}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Business Unit</Form.Label>
            <Form.Control
              required
              className="departmentName"
              type="text"
              placeholder=""
              disabled
              controlId="departmentName"
              value={departmentName}
              onChange={(e) =>
                setDepartmentName("departmentName", e.target.value)
              }
              isInvalid={!!errors.departmentName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.departmentName}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* 
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              required
              className="projectName"
              type="text"
              controlId="projectName"
              placeholder="project Name"
              disabled
              // onChange={(event) => setclientName(event.target.value)}
              value={projectName}
              maxLength={30}
              onChange={(e) => setProjectName("projectName", e.target.value)}
              isInvalid={!!errors.projectName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectName}
            </Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Allocation Start Date</Form.Label>
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
            <Form.Label>Role</Form.Label>
            <Form.Select
              required
              className="projectRolesName"
              type="text"
              controlId="projectRolesName"
              placeholder="project Role"
              // onChange={(event) => setclientName(event.target.value)}
              value={prmasterId}
              maxLength={30}
              onChange={(e) => setPrmasterId(e.target.value)}
              isInvalid={!!errors.prmasterId}
            >
              <option>Select Role</option>

              {roles.map((role) => (
                <option value={role.prmasterId}>{role.projectRolesName}</option>
              ))}
              {/* <option value="Team Lead">Team Lead</option>
              <option value="Team Member">Team Member</option>

              <option value="Business Analyst">Business Analyst</option> */}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.prmasterId}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Allocation End Date</Form.Label>
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
              value={form.status}
              onChange={(e) => setStatus(e.target.value)}
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

          {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Assigned Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Assigned Date"
              controlId="assignedDate"
              onChange={(e) => setAssignedDate(e.target.value)}
              isInvalid={!!errors.assignedDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.assignedDate}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Project Allocation Percentage</Form.Label>
            <Form.Control
              required
              className="projectAllocation"
              type="text"
              placeholder="%"
              value={form.projectAllocation}
              onChange={(e) => setProjectAllocation(e.target.value)}
              isInvalid={!!errors.projectAllocation}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.projectAllocation}
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
                // float: "right",
                marginLeft: "200px",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Assign
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

export default UpdateTeamMember;
