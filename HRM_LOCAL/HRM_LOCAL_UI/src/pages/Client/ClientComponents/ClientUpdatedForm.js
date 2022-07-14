import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ClientUpdatedForm = (props) => {
  console.log(props.updateOnboard);

  const [clientName, setclientName] = useState(props.updateOnboard.clientName);
  const [startDate, setstartDate] = useState(props.updateOnboard.startDate);
  const [endDate, setendDate] = useState(props.updateOnboard.endDate);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [country, setcountry] = useState(props.updateOnboard.country);

  const [address, setaddress] = useState(props.updateOnboard.address);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
    const { clientName, startDate, endDate, status, country } = form;
    const newErrors = {};

    if (!clientName || clientName === "" || !clientName.match(/^[aA-zZ\s]+$/))
      newErrors.clientName = "Please Enter First Name";
    if (!startDate || startDate === "" || !startDate.match(/^[aA-zZ\s]+$/))
      newErrors.startDate = "Please Enter Last Name";
    if (!endDate || endDate === "") newErrors.endDate = "Please Enter endDate";

    newErrors.status = "Please Enter status";
    if (!country || country === "") newErrors.country = "Please Enter status";
    if (!status || status === "") newErrors.status = "Please Enter status";
    if (!address || address === "")
      newErrors.address = "Please Enter type of employement";

    return newErrors;
  };

  //testing for commit
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/clientProjectMapping/updateClientById/${props.updateOnboard.clientId}`,
        {
          clientName,
          startDate,
          endDate,
          status,

          country,
        }
      )
      .then((response) => {
        const user = response.data;
        if (response.data.status) {
          props.func();
        } else {
          console.log("Props not Send");
        }
        toast.success("Form Submitted successfully");
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
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              required
              className="clientName"
              type="text"
              controlId="clientName"
              placeholder="Client Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={clientName}
              onChange={(e) => setclientName(e.target.value)}
              isInvalid={!!errors.clientName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.clientName}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Status </Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Status"
                  controlId="status"
                  value={form.status}
                  onChange={(e) => setStatus("status", e.target.value)}
                  isInvalid={!!errors.status}
                >
                  <option> Select Status</option>
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              required
              name="startDate"
              type="date"
              controlId="startDate"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
              isInvalid={!!errors.startDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>endDate</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="endDate"
              controlId="endDate"
              value={endDate}
              onChange={(e) => setendDate(e.target.value)}
              isInvalid={!!errors.endDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              name="country"
              type="text"
              controlId="country"
              placeholder="country"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              isInvalid={!!errors.country}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              name="address"
              type="text"
              controlId="address"
              placeholder="address"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              isInvalid={!!errors.address}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.address}
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

export default ClientUpdatedForm;
