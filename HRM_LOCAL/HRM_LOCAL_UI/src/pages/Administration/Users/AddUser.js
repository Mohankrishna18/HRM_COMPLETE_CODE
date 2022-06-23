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
      // console.log(form);
      // console.log("form submitted");
      axios
        .post("/user/addUser", form)
        .then((response) => {
          const user = response.data;
          if(response.data.status){
            props.func();
          
          }
          else{
            console.log("Props Not Send");
          }
          toast.success("Employee Onboarded Successfully");
          // console.log(user);
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
          backgroundColor: "#ff9b44",
          color: "#F4F8F6",
          float: "right",
          borderRadius: "25px",
          paddingBottom: "11.5px",
          marginTop: "100px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add New Onboard
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>OnBoarding Form</Modal.Title>
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
            <Row className="mb-5">
              
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
                  <option>Select </option>
                  {empID.map((empID1) => (
                    <option>{empID1.employeeId}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.employeeId}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
            <Button
              style={{ backgroundColor: "#FF0000", float: "right" }}
              type="cancel"
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              style={{ backgroundColor: "#4CBB17", float: "right" }}
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddUser;
