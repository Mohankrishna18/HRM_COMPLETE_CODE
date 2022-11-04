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

      employeeId,
      roleName,

    } = form;
    const newErrors = {};


    if (!employeeId || employeeId === "")
      newErrors.employeeId = "Please Enter Employee ID";
    if (!roleName || roleName === "")
      newErrors.roleName = "Please Enter a Role";


    return newErrors;
  };
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {

      axios
        .post("/user/addUser", form)
        .then((response) => {
          const user = response.data;
          if (response.data.status) {
            props.func();
            toast.success("User added successfully!!!");
          }
          else {
            console.log("Props Not Send");
          }


          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  // console.log(form.dateOfJoining)

  const [empID, setEmpID] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getAllEmployeeMasterData")
      .then((response) => {
        setEmpID(response.data.data);
        console.log(response.data.data);
      })

      .catch(() => {
        toast.error("data is not getting");
      });
  }, []);

  const [role, setRole] = useState([]);
  useEffect(() => {
    axios
      .get("/user/getAllRoles")
      .then((response) => {
        setRole(response.data.data);
        console.log(response.data.data)
      })
      .catch(() => {
        toast.error("Data is not getting");
      });
    // console.log(departments)
  }, []);

  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#f5896e",
          borderColor: "#ff9b44",
          float: "right",
          borderRadius: "25px",
          paddingBottom: "7px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {" "}
        <BsPlusLg />
        &nbsp;Add User
      </Button>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color: "white" }}>
          <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>Add User</Modal.Title>
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
              <Form.Group className="mb-3">
                <Form.Label>Employee ID *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Employee ID"
                  controlId="employeeId"
                  value={form.employeeId}
                  onChange={(e) => setField("employeeId", e.target.value)}
                  isInvalid={!!errors.employeeId}
                >
                  <option>Select</option>
                  {empID.map((empID1) => (
                    <option>{empID1.employeeId}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.employeeId}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Role *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Role"
                  controlId="roleName"
                  value={form.roleName}
                  onChange={(e) => setField("roleName", e.target.value)}
                  isInvalid={!!errors.roleName}
                >
                  <option>Select </option>
                  {role.map((role1) => (
                    <option>{role1.roleName}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.roleName}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
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