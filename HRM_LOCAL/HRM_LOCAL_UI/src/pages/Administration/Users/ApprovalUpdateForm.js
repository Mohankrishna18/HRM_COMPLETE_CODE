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
  const [roleName, setRoleName] = useState(
    props.updateOnboard.roleName
  );

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
      roleName,

    } = form;
    const newErrors = {};


    if (!employeeId || employeeId === "")
      newErrors.employeeId = "Please Enter Employee ID";
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
        roleName,
       
      })
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
        }
        else {
          console.log("Props not Send")
        }
        toast.success("Form Submitted successfully");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });

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
    <Card className="scroll">
      <Card.Header>
        <Card.Body>
          <Card.Title>Employee Onboarding</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Employee Onboarding Form
          </Card.Subtitle>

          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-5">

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
                  <option>Select </option>
                  {roles.map((roless) => (
                    <option>{roless.roleName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Button
              style={{ backgroundColor: "#eb4509", float: "right" }}
              type="submit"
              onclick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card.Header>
    </Card>
  );
};

export default ApprovalUpdateForm;