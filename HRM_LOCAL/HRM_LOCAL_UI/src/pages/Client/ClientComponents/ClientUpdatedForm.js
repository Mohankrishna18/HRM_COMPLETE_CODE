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
  const [startDate,setstartDate]=useState(moment(props.updateOnboard.startDate).format('YYYY-MM-DD'));
  const [endDate,setEndDate]=useState(moment(props.updateOnboard.endDate).format('YYYY-MM-DD'));
  const [companyName, setcompanyName] = useState(props.updateOnboard.companyName);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [country, setCountry] = useState(props.updateOnboard.country);
  const [address, setAddress] = useState(props.updateOnboard.address);
  const [tag, setTag] = useState(props.updateOnboard.tag);
  const [note, setNote] = useState(props.updateOnboard.note);


  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

   // useState for phone number
   const [thirderrors, setThirdErrors] = useState("");
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

    if (!email || email === "") newErrors.email = "Please Enter Email";

    if (!phoneNumber || phoneNumber === "" || !phoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.phoneNumber = "Please Enter Phonenumber";

    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";

    if (!startDate || startDate === "" )
      newErrors.startDate = "Please Enter Last Name";

    if (!endDate || endDate === "") newErrors.endDate = "Please Enter endDate";

    newErrors.status = "Please Enter status";

    if (!country || country === "" || !country.match(/^[aA-zZ\s]+$/)) newErrors.country = "Please Enter status";

    if (!status || status === "") newErrors.status = "Please Enter status";

    if (!address || address === "" || !address.match(/^[aA-zZ\s]+$/))
      newErrors.address = "Please Enter type of employement";

    if (!tag || tag === "") newErrors.tag = "Please Enter Tag";

    if (!note || note === "" || !note.match(/^[aA-zZ\s]+$/)) newErrors.note = "Please Enter Note";

    return newErrors;
  };

  // Countries
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code");
      setCountries(res.data.countries);
      console.log(res.data);
    };
    loadData();
  }, []);


  
  //testing for commit
  const [user, setUser] = useState("");

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
          tag,
          note
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

          {/* Client Name */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Client / Company Name</Form.Label>
            <Form.Control
              required
              className="clientName"
              type="text"
              controlId="clientName"
              placeholder="Company Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={clientName}
              onChange={(e) => setclientName(e.target.value)}
              isInvalid={!!errors.clientName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.clientName}
            </Form.Control.Feedback>
          </Form.Group>

          {/* email */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Company Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="text"
              controlId="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* phone number */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Phone No</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                required
                type="text"
                placeholder="Phone Number"
                controlId="phoneNumber"
                isInvalid={thirderrors}
                value={phoneNumber}
                onChange={(e) => {setPhoneNumber( e.target.value);
                if(e.target.value.length>10)
                {
                  setThirdErrors("Phonenumber length should be 10 characters");
                }
                else{
                  setThirdErrors("")
                };
              }
            }
                // onChange={(e) => setPhoneNumber(e.target.value)}
                // isInvalid={!!errors.phoneNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.phoneNumber}{thirderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          {/* POC Name */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>POC Name</Form.Label>
            <Form.Control
              required
              name="pocName"
              type="text"
              controlId="pocName"
              placeholder="POC Name"
              value={pocName}
              onChange={(e) => setPocName(e.target.value)}
              isInvalid={!!errors.pocName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.pocName}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              required
              name="startDate"
              type="date"
              controlId="startDate"
              placeholder="Start Date"
              defaultValue={startDate}
              onChange={(e) => setstartDate(e.target.value)}
              isInvalid={!!errors.startDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.startDate}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> 

          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>End Date</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="endDate"
              controlId="endDate"
              defaultValue={endDate}
              min={startDate}
              onChange={(e) => setEndDate(e.target.value)}
              isInvalid={!!errors.endDate}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.endDate}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Status */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Status </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlId="status"
              value={status}
              onChange={(e) => setStatus( e.target.value)}
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

          {/* Country
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Country</Form.Label>
            <Form.Select
              required
              name="country"
              type="text"
              controlId="country"
              placeholder="Select Country"
              value={country}
              maxLength={30}
              onChange={(e) => setCountry(e.target.value)}
              isInvalid={!!errors.country}
            ><option>Select Country</option>

              {countries.map((country) => (

                <option value={country.label}>{country.label}</option>

              ))}</Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.country}
            </Form.Control.Feedback>

          </Form.Group> */}

          {/* Address */}
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              name="address"
              type="text"
              controlId="address"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              isInvalid={!!errors.address}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.address}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* Tag
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
            <Form.Label>Tag</Form.Label>
            <Form.Control
              required
              name="tag"
              type="text"
              controlId="tag"
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
              controlId="note"
              placeholder="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              isInvalid={!!errors.note}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.note}
            </Form.Control.Feedback>
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