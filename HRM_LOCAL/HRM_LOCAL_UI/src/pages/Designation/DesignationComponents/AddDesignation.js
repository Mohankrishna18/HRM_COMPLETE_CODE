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

function AddDesignation(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);
  const [departments, setDepartments] = useState([]);


  // Get API's for Departments Dropdown
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);


  };

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
      designationName,

    } = form;

    const newErrors = {};

    if (!departmentName || departmentName === "")
      newErrors.departmentName = "Please Select Business Unit Name";

    if (
      !designationName ||
      designationName === "" ||
      !designationName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.designationName = "Please Enter Designation Name";
    return newErrors;
  };
  //testing for commit
  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // e.target.reset();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length)
    console.log(form)
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      // console.log("form submitted");
      axios
        .post("/designation/postDesignationMaster", form)
        .then((response) => {
          const user = response;
          console.log(user)
          if (user.status == 200) {
            props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Designation added Successfully");
          console.log(user);
          // console.log(user);
          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  // console.log(form.startDate)

  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#f5896e",
          borderColor: "#f5896e",
          float: "right",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add Designation
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Add Designation</Modal.Title>
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
                <Form.Label>Business Unit Name *</Form.Label>
                <Form.Select
                  required
                  className="departmentName"
                  type="text"
                  controlId="departmentName"
                  placeholder="Business Unit Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.departmentId}
                  maxLength={30}
                  onChange={(e) => setField("departmentName", e.target.value)}
                  isInvalid={!!errors.departmentId}
                ><option>Select Business Unit</option>

                  {departments.map((departmentName) => (

                    <option value={departmentName.departmentName}>{departmentName.departmentName}</option>

                  ))}</Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.departmentId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Designation Name *</Form.Label>
                <Form.Control
                  required
                  className="designationName"
                  type="text"
                  controlId="designationName"
                  placeholder="Designation Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.designationName}
                  maxLength={30}
                  onChange={(e) => setField("designationName", e.target.value)}
                  isInvalid={!!errors.designationName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.designationName}
                </Form.Control.Feedback>
              </Form.Group>


            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#f5896e",
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
export default AddDesignation;