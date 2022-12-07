import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import moment from "moment";

import "react-toastify/dist/ReactToastify.css";

// Empty commit
const ClientUpdatedForm = (props) => {
  console.log(props.updateOnboard);

  const [clientName, setclientName] = useState(props.updateOnboard.clientName);
  const [email, setEmail] = useState(props.updateOnboard.email);
  const [phoneNumber, setPhoneNumber] = useState(props.updateOnboard.phoneNumber);
  const [pocName, setPocName] = useState(props.updateOnboard.pocName);

  const [startDate, setstartDate] = useState(props.updateOnboard.startDate);
  const strtdt = moment(props.updateOnboard.startDate).format("YYYY-MM-DD");

  const [endDate, setEndDate] = useState(props.updateOnboard.endDate);
  const enddt = moment(props.updateOnboard.endDate).format('YYYY-MM-DD')
  // const [companyName, setcompanyName] = useState(props.updateOnboard.companyName);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [country, setCountry] = useState(props.updateOnboard.country);
  const [address, setAddress] = useState(props.updateOnboard.address);
  // const [tag, setTag] = useState(props.updateOnboard.tag);
  const [note, setNote] = useState(props.updateOnboard.note);

  // loader
  const [loading, setLoading] = React.useState(false);
  const closeLoading = () => setLoading(!loading);

  const [errors, setErrors] = useState("");
  const [errors1, setErrors1] = useState("");
  const [errors2, setErrors2] = useState("");
  const [errors3, setErrors3] = useState("");
  const [errors4, setErrors4] = useState("");
  const [errors5, setErrors5] = useState("");




  // useState for phone number
  //   const handleClose = () => setShow();
  //   const handleShow = () => setShow(true);

  const forms = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/clientProjectMapping/updateClientById/${props.updateOnboard.clientId}`,
        {
          clientName,
          email,
          phoneNumber,
          pocName,
          startDate,
          endDate,
          status,
          address,
          country,
          // tag,
          note
        }
      )
      .then((res) => {
        // console.log(res)
        toast.success("Client Updated Successfully", {autoClose:1000})
        if (res.status == 200) {
          props.func();
        }
        else {
          // console.log("props not send")
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Something Went Wrong", {autoClose:1000});
      });
    props.handleClose();
  }


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

          {/* Client Name */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              required
              className="clientName"
              type="text"
              controlid="clientName"
              placeholder="Client Name  "
              defaultValue={clientName}
              // value={firstName}
              onChange={(e) => {
                if (
                  e.target.value == "" ||
                  !e.target.value.match(/^[\d a-zA-Z0-9 ()+-.]+$/)
                ) {
                  setErrors1("Invalid Name");
                } else if (e.target.value.length > 60) {
                  setErrors1("Too Long");
                } else {
                  setclientName(e.target.value);
                  setErrors1("");
                }
              }}
              isInvalid={!!errors1}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors1}
            </Form.Control.Feedback>
          </Form.Group>

          {/* email */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label> Email </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email "
              controlid="email"
              defaultValue={email}
              // value={emailId}
              onChange={(e) => {
                if (
                  e.target.value == "" ||
                  !e.target.value.match(/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i)
                ) {
                  setErrors2("Invalid Email");
                }
                else {
                  console.log(e.target);
                  setEmail(e.target.value);
                  setErrors2("");
                }
              }}
              isInvalid={!!errors2}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors2}
            </Form.Control.Feedback>
          </Form.Group>


          {/* phone number */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Phone#</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Phone Number"
              controlid="phoneNumber"
              defaultValue={phoneNumber}
              // value={phoneNumber}
              onChange={(e) => {
                if (
                  e.target.value == "" ||
                  !e.target.value.match(/^[\d ()+-]+$/)
                ) {
                  setErrors3("Invalid Phone Number");
                  console.log(e.target.value);
                } else if (e.target.value.length > 15) {
                  setErrors3("Too Long");
                } else {
                  setPhoneNumber(e.target.value);
                  setErrors3("");
                }
              }}
              isInvalid={!!errors3}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors3}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>



          {/* POC Name */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>POC name</Form.Label>
            <Form.Control
              required
              className="pocName"
              type="text"
              controlid="pocName"
              placeholder="POC Name  "
              defaultValue={pocName}
              // value={firstName}
              onChange={(e) => {
                if (
                  e.target.value == "" ||
                  !e.target.value.match(/^[aA-zZ ()+-]+$/)
                ) {
                  setErrors4("Invalid Name");
                } else if (e.target.value.length > 50) {
                  setErrors4("Too Long");
                } else {
                  setPocName(e.target.value);
                  setErrors4("");
                }
              }}
              isInvalid={!!errors4}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors4}
            </Form.Control.Feedback>
          </Form.Group>


          {/* start date */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              required
              // name="startDate"
              type="date"
              // disabled
              formate="dd-mm-yyyy"
              controlid="startDate"
              placeholder="Start Date"
              defaultValue={strtdt}
              // min date is end date.
              // min={endDate}
              onChange={(e) => setstartDate(e.target.value)}
            // isInvalid={!!errors5.startDate}
            ></Form.Control>
            {/* <Form.Control.Feedback type="invalid">
              {errors5.startDate}
            </Form.Control.Feedback> */}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>



          {/* end date */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              required
              type="date"
              formate="dd-mm-yyyy"
              placeholder="End Date"
              controlid="endDate"
              defaultValue={enddt}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
            // isInvalid={!!errors5.endDate}
            ></Form.Control>
            {/* <Form.Control.Feedback type="invalid">
              {errors5.endDate}
            </Form.Control.Feedback> */}
          </Form.Group>

          {/* Status */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Status </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlid="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            // isInvalid={!!errors.status}
            >
              {/* <option> Select Status</option> */}
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </Form.Select>
            {/* <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback> */}
          </Form.Group>



          {/* country */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              className="country"
              type="text"
              controlid="country"
              placeholder="Country "
              defaultValue={country}
              // value={firstName}
              onChange={(e) => {
                if (
                  e.target.value == "" ||
                  !e.target.value.match(/^[aA-zZ ()+-]+$/)
                ) {
                  setErrors5("Invalid Name");
                } else if (e.target.value.length > 30) {
                  setErrors5("Too Long");
                } else {
                  setCountry(e.target.value);
                  setErrors5("");
                }
              }}
              isInvalid={!!errors5}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors5}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Address */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              name="address"
              type="text"
              controlid="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            // isInvalid={!!errors.address}
            ></Form.Control>
            {/* <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback> */}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Tag
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              required
              name="tag"
              type="text"
              controlid="tag"
              placeholder="tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              isInvalid={!!errors.tag}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.tag}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}

          {/* Notes */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Notes</Form.Label>
            <Form.Control
              required
              name="note"
              type="text"
              controlid="note"
              placeholder="Notes"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            // isInvalid={!!errors.note}
            ></Form.Control>
            {/* <Form.Control.Feedback type="invalid">
              {errors.note}
            </Form.Control.Feedback> */}
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>


        </Row>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
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