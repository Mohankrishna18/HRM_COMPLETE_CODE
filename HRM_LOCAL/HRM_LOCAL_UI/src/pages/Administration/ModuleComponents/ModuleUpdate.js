import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ModuleUpdate = (props) => {

  console.log(props.updateOnboard);


  
  const [moduleName, setModuleName] = useState(props.updateOnboard.moduleName);

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

      
      moduleName,

    } = form;
    const newErrors = {};


    
    if (!moduleName || moduleName === "")
      newErrors.moduleName = "Please Enter Module Name";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/user/UpdateModuleById/${props.updateOnboard.moduleId}`, {

       
        moduleName,

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
        toast.success("Module updated successfully!!!");
        // console.log(user);
      })
      // .catch((err) => {
      //   console.log(err);
      //   toast.error("Something Went Wrong");

      // });
    props.handleClose();
  };

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
                <Form.Label>Module Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Module Name"
                  controlId="moduleName"
                  value={moduleName}
                  onChange={(e) => setModuleName(e.target.value)}
                  isInvalid={!!errors.moduleName}
                >
                 
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.moduleName}
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

export default ModuleUpdate;