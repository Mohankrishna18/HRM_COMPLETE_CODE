import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RolesTab() {
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
          roleName,
        } = form;
    
        const newErrors = {};
    
        if (
          !roleName||
          roleName=== "" ||
          !roleName.match(/^[aA-zZ\s]+$/)
        )
          newErrors.roleName = "Please Enter Band Name";
    
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
            .post("/bands/addBands", form)
            .then((response) => {
              const user = response.data;
              if (user.status) {
                props.func();
              } else {
                console.log("Props Not Send");
              }
              toast.success("Band added Successfully");
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

  return (
    <div>
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
                <Form.Label>Role Name *</Form.Label>
                <Form.Control
                  required
                  className="roleName"
                  type="text"
                  controlid="roleName"
                  placeholder="Role Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.roleName}
                  maxLength={30}
                  onChange={(e) => setField("roleName", e.target.value)}
                  isInvalid={!!errors.roleName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.roleName}
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
    </div>
  )
}

export default RolesTab