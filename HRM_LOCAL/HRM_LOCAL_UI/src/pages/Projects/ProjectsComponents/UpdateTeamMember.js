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
import moment from "moment";

const UpdateTeamMember = (props) => {
  const params = useParams();
  const { data, setUpdateStatus, updateStatus } = useContext(UserContext);

  const [employeeId, setEmployeeId] = useState(props.updateOnboard.employeeId);

  const [fullName, setfullName] = useState(props.updateOnboard.fullName);
  const [designationName, setDesignationName] = useState(
    props.updateOnboard.designationName
  );
  const [departmentName, setDepartmentName] = useState(
    props.updateOnboard.departmentName
  );
  const [projectName, setProjectName] = useState(
    props.updateOnboard.projectName
  );
  const [startDate, setStartDate] = useState("");
  const [prmasterId, setPrmasterId] = useState();

  const [endDate, setEndDate] = useState();
  const [status, setStatus] = useState("");

  const [roles, setRoles] = useState([]);

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
  const [errors, setErrors] = useState("");

  // Get API's for roles Dropdown
  useEffect(() => {
    loadData();
  }, []);

  const teamUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  const loadData = async () => {
    const response = await axios.get(
      "/clientProjectMapping/getAllProjectRoles"
    );
    setRoles(response.data.data);
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
      fullName,
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
    if (!fullName || fullName === "" || !fullName.match(/^[aA-zZ\s]+$/))
      newErrors.fullName = "Please Enter Employee Name";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({
    //   employeeId,
    //   fullName,
    //   designationName,
    //   departmentName,
    //   startDate,
    //   endDate,
    //   prmasterId,
    //   assignedDate,
    //   status,
    //   projectAllocation,
    //   projectId,
    // });
    await axios
      .post(`/clientProjectMapping/addProjectTeam`, {
        employeeId,
        fullName,
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
        console.log(response)
        if (response.statusText === "OK") {
          // props.func();
          // props.pull_dataUpdate();
          teamUpdate();
        } else {
          console.log("Props not Send");
        }
        toast.success("Assigned successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
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
              controlid="employeeId"
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
              className="fullName"
              type="text"
              controlid="fullName"
              placeholder="Employee Name"
              disabled
              // onChange={(event) => setclientName(event.target.value)}
              value={fullName}
              maxLength={30}
              onChange={(e) => setfullName("fullName", e.target.value)}
              isInvalid={!!errors.fullName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
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
              controlid="designationName"
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
              controlid="departmentName"
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
              controlid="projectName"
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
              controlid="startDate"
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
              controlid="projectRolesName"
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
              controlid="endDate"
              value={endDate}
              min={moment(startDate).format("YYYY-MM-DD")}
              onChange={(e) => {
                if (startDate === "") {
                  setErrors("please select the start date");
                } else {
                  setEndDate(e.target.value);
                  setErrors("");
                }
              }}
              isInvalid={errors}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Status</Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlid="status"
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
              controlid="assignedDate"
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
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
                // float: "right",
                marginLeft: "280px",
                width: "20%",
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
