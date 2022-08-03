import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const DesignationUpdate = (props) => {
  console.log(props.updateOnboard);

  const [departmentName, setDepartmentName] = useState(
    props.updateOnboard.departmentName
  );

  const [designationName, setDesignationName] = useState(
    props.updateOnboard.designationName
  );

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState([]);

  // const loadData = async () => {
  //   const res = await axios.get("/clientProjectMapping/getAllClients");
  //   setClients(res.data.data);
  //   console.log(res.data);
  // };

  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);

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
    const { departmentName, designationName } = form;
    const newErrors = {};

    if (
      !departmentName ||
      departmentName === "" ||
      !departmentName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.departmentName = "Please Select Client";
    if (
      !designationName ||
      designationName === "" ||
      !designationName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.designationName = "Please Enter Project Name";
    // if (!startDate || startDate === "")
    //   newErrors.startDate = "Please Select startDate";

    // if (!endDate || endDate === "")
    //   newErrors.endDate = "Please Select End Date";
    // if (!rate || rate === "" || rate.match(/[^0-9]/g))
    //   newErrors.rate = "Please Enter rate";
    // if (!status || status === "") newErrors.status = "Please select status";
    // if (!priority || priority === "")
    //   newErrors.priority = "Please Select priority";

    // if (!projectManager || projectManager === "")
    //   newErrors.projectManager = "Please Enter projectManager";
    // if (!description || description === "")
    //   newErrors.description = "Please Enter Description";
    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(
        `/designation/updateDesignations/${props.updateOnboard.designationId}`,
        {
          departmentName,
          designationName,
        }
      )
      .then((response) => {
        if (response.data) {
          props.func();
        } else {
          console.log("Props not Send");
        }
        toast.success("Designation Updated successfully");
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong");
      });
    props.handleClose();
  };

  return (
    <>
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
            <Form.Label>Business Unit Name</Form.Label>
            <Form.Control
              required
              className="departmentName"
              type="text"
              controlId="departmentName"
              placeholder="Business Unit Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={departmentName}
              maxLength={30}
              disabled
              onChange={(e) =>
                setDepartmentName("departmentName", e.target.value)
              }
              isInvalid={!!errors.departmentName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.departmentName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Designation Name</Form.Label>
            <Form.Control
              required
              className="designationName"
              type="text"
              controlId="designationName"
              placeholder="Designation Name"
              // onChange={(event) => setDesignationName(event.target.value)}
              value={designationName}
              onChange={(e) => setDesignationName(e.target.value)}
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
                backgroundColor: "#ff9b44",
                borderColor: "#ff9b44",
                // float: "right",
                marginLeft: "200px",
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


export default DesignationUpdate;
