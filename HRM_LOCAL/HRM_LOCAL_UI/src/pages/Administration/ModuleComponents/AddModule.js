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

function AddModule(props) {

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


      moduleName,

    } = form;
    const newErrors = {};



    if (!moduleName || moduleName === "")
      newErrors.moduleName = "Please Enter a Module Name";


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
        .post("/user/addModule", form)
        .then((response) => {
          const user = response.data;
          if (response.data.status) {
            props.func();
            toast.success("Module added successfully!!!");
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
          paddingBottom: "7px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {" "}
        <BsPlusLg />
        &nbsp;Add Module
      </Button>
      <Modal
        size="md"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color: "white" }}>
          <Modal.Title style={{  color: "white" }}>Add Module</Modal.Title>
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
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module Name *</Form.Label>
                <Form.Control
                  required
                  className="moduleName"
                  type="text"
                  controlid="moduleName"
                  placeholder="Module Name"
                  // onChange={(event) => setFirstName(event.target.value)}
                  value={form.moduleName}
                  maxLength={30}
                  onChange={(e) => setField("moduleName", e.target.value)}
                  isInvalid={!!errors.moduleName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.moduleName}
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
export default AddModule;