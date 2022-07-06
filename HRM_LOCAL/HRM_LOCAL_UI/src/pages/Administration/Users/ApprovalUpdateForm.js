import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalUpdateForm = (props) => {

  console.log(props.updateOnboard);

  const [employeeId, setEmployeeId] = useState(props.updateOnboard.employeeId);
  const [userName, setUserName] = useState(props.updateOnboard.userName);
  const [roleName, setRoleName] = useState(
    props.updateOnboard.roleName
  );

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow();
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
      userName,
      roleName,

    } = form;
    const newErrors = {};


    if (!employeeId || employeeId === "")
      newErrors.employeeId = "Please Enter Employee ID";
    if (!userName || userName === "")
      newErrors.userName = "Please Enter User Name";
    if (!roleName || roleName === "")
      newErrors.roleName = "Please Enter Role";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/user/updateUserById/${props.updateOnboard.employeeId}`, {

        employeeId,
        userName,
        roleName,

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
        toast.success("Role updated successfully!!!");
        // console.log(user);
      })
      // .catch((err) => {
      //   console.log(err);
      //   toast.error("Something Went Wrong");

      // });
    props.handleClose();
  };


  const [empIDs, setEmpIDs] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((response) => {
        setEmpIDs(response.data.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
  }, []);

  const [roles, setRoles] = useState([]);
  useEffect(() => {
    axios
      .get("/user/getAllRoles")
      .then((response) => {
        setRoles(response.data.data);
      })
      .catch(() => {
        toast.error("data is not getting");
      });
    // console.log(departments)
  }, []);

  return (
    <div>
          <Form
            ref={forms}
            className="formone"
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom:10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Employee ID"
                  controlId="employeeId"
                  value={employeeId}
                  isInvalid={!!errors.employeeId}
                >

                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.employeeId}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="User Name"
                  controlId="userName"
                  value={userName}
                  isInvalid={!!errors.userName}
                >
                 
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.userName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Role"
                  controlId="roleName"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  isInvalid={!!errors.roleName}
                >
                 
                  {roles.map((roless) => (
                    <option>{roless.roleName}</option>
                  ))}
                </Form.Select>
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
              onclick={handleSubmit}
            >
              Submit
            </Button>
            <Col>
           
            </Col>
            </Col>
            </Row>
          </Form>

    </div>
  );
};

export default ApprovalUpdateForm;