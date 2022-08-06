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

function AddDepartment(props) {
  
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
      departmentName,
      businessUnitHead,

    } = form;
    const newErrors = {};


    if (!departmentName || departmentName === "")
      newErrors.departmentName = "Please Enter Business Unit";
    if (!businessUnitHead || businessUnitHead === "")
      newErrors.businessUnitHead = "Please Enter a Business Unit Head";
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
      console.log(form.businessUnitHead);
      axios
        .post("/dept/postDepartmentMaster", form)
        .then((response) => {
          const user = response.data;
          if (response.data.status) {
            props.func();
            toast.success("Business Unit added successfully!!!");
          }
          else {
            toast.error("Business Unit already exists");
          }
          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Business Unit already exists");
        });
    }
  };
  // console.log(form.dateOfJoining)

//   const [empID, setEmpID] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/emp/getUsersNamesByBand")
//       .then((response) => {
//         setEmpID(response.data);
//         console.log(response.data);
//       })
      
//       .catch(() => {
//         toast.error("data is not getting");
//       });
//   }, []);

  const [role, setRole] = useState([]);
  useEffect(() => {
    axios
      .get("/emp/getUsersNamesByBand")
      .then((response) => {
        setRole(response.data);
        console.log(response.data)
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
          paddingBottom: "7px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {" "}
        <BsPlusLg />
        &nbsp;Add Business Unit
      </Button>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14", color : "white" }}>
          <Modal.Title style={{ backgroundColor: "#FF9E14", color : "white" }}>Add Business Unit</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom:10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Business Unit *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Business Unit"
                  controlId="department_name"
                  value={form.departmentName}
                  onChange={(e) => setField("departmentName", e.target.value)}
                  isInvalid={!!errors.departmentName}
                >
                  {/* <option>Select</option>
                  {empID.map((empID1) => (
                    <option>{empID1.employeeId}</option>
                  ))} */}
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.departmentName}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Business Unit Head *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Business Unit Head"
                  controlId="businessUnitHead"
                  value={form.businessUnitHead}
                  onChange={(e) => setField("businessUnitHead", e.target.value)}
                  isInvalid={!!errors.businessUnitHead}
                >
                  <option>Select </option>
                  {role.map((role1) => (
                    <option value={role1.employeeId}>
                      {role1.name}
                    </option>
                  ))}
           
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.businessUnitHead}
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
export default AddDepartment;
