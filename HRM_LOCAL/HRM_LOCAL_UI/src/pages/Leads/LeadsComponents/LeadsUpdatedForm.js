import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Empty commit
const LeadsUpdatedForm = (props) => {
  console.log(props.updateOnboard);

  const [leadName, setleadName] = useState(props.updateOnboard.leadName);
  const [companyName, setcompanyName] = useState(props.updateOnboard.companyName);
  const [companyPhoneNumber, setcompanyPhoneNumber] = useState(props.updateOnboard.companyPhoneNumber);
  const [companyEmail, setcompanyEmail] = useState(props.updateOnboard.companyEmail);
  const [companyCountry, setcompanyCountry] = useState(props.updateOnboard.companyCountry);
  const [companyAddress, setcompanyAddress] = useState(props.updateOnboard.companyAddress);
  const [sourceName, setsourceName] = useState(props.updateOnboard.sourceName);
  const [sourcePhoneNumber, setsourcePhoneNumber] = useState(props.updateOnboard.sourcePhoneNumber);
  const [sourceEmail, setsourceEmail] = useState(props.updateOnboard.sourceEmail);
  const [pocName, setpocName] = useState(props.updateOnboard.pocName);
  const [pocPhoneNumber, setpocPhoneNumber] = useState(props.updateOnboard.pocPhoneNumber);
  const [pocEmail, setpocEmail] = useState(props.updateOnboard.pocEmail);
  const [status, setStatus] = useState(props.updateOnboard.status);
  const [businessValue,setBusinessValue] = useState(props.updateOnboard.businessValue);
  const [leadNotes,setleadNotes]= useState(props.updateOnboard.leadNotes);
  

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const handleClose = () => setShow();
   // useState for phone number
   const [firsterrors,setFirstErrors] = useState("");
   const [seconderrors,setSecondErrors]= useState("");
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
    const { leadName,companyName,companyEmail,companyPhoneNumber,companyCountry,sourceName,sourcePhoneNumber,pocName,pocEmail,pocPhoneNumber,status,businessValue,leadNotes } = form;
    const newErrors = {};

    if (!leadName || leadName === "" || !leadName.match(/^[aA-zZ\s]+$/))
      newErrors.leadName = "Please Enter Lead Name";
    if (!companyName || companyName === "" || !companyName.match(/^[aA-zZ\s]+$/))
      newErrors.companyName = "Please Enter Company Name";
    if (!companyEmail || companyEmail === "") newErrors.companyEmail = "Please Enter company Email";
    if (!companyPhoneNumber || companyPhoneNumber === "" || !companyPhoneNumber.match(/^((\\+[1-9]{1}[ \\-]*)|(\\([0-9]{9}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.companyPhoneNumber = "Please Enter company PhoneNumber";
    if (!companyCountry || companyCountry === "") newErrors.companyCountry = "Please Enter Company Country ";
    if (!companyAddress || companyAddress === "") newErrors.companyAddress = "Please Enter Company Address";
    if (!sourceName || sourceName === "" || !sourceName.match(/^[aA-zZ\s]+$/))
      newErrors.sourceName = "Please Enter Source Name";
    if (!sourceEmail || sourceEmail === "") newErrors.sourceEmail = "Please Enter source Email";
    if (!sourcePhoneNumber || sourcePhoneNumber === "" || !sourcePhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.sourcePhoneNumber = "Please Enter source PhoneNumber";
    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";
    if (!pocEmail || pocEmail === "") newErrors.pocEmail = "Please Enter POC Email";
    if (!pocPhoneNumber || pocPhoneNumber === "" || !pocPhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.pocPhoneNumber = "Please Enter POC PhoneNumber";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (!businessValue || businessValue === "" || !businessValue.match(/^[0-9\s]+$/))
      newErrors.businessValue = "Please Enter Business Value";
    if (!leadNotes || leadNotes === "" || !leadNotes.match(/^[0-9]+$/))
      newErrors.leadNotes = "Please Enter Lead Notes";
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
        `/Leads/updateLeadById/${props.updateOnboard.id}`,
        {
      leadName,
      companyName,
      companyEmail,
      companyPhoneNumber,
      companyAddress,
      companyCountry,
      sourceName,
      sourceEmail,
      sourcePhoneNumber,
      pocName,
      pocEmail,
      pocPhoneNumber,
      status,
      businessValue,
      leadNotes,
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
        <Row>
         <Col md="6">
          {/* lead Name */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Lead Name</Form.Label>
            <Form.Control
              required
              className="leadName"
              type="text"
              controlId="leadName"
              placeholder="Lead Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={leadName}
              onChange={(e) => setleadName(e.target.value)}
              isInvalid={!!errors.leadName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.leadName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Company/Client</Form.Label>
            <Form.Control
              required
              className="companyName" 
              type="text"
              controlId="companyName"
              placeholder="Company Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={companyName}
              onChange={(e) => setcompanyName(e.target.value)}
              isInvalid={!!errors.companyName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.companyName}
            </Form.Control.Feedback>
          </Form.Group>


          {/* email */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Company Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="text"
              controlId="companyEmail"
              placeholder="Company Email"
              value={companyEmail}
              onChange={(e) => setcompanyEmail(e.target.value)}
              isInvalid={!!errors.companyEmail}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.companyEmail}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* phone number */}
          {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              <Form.Control
                required
                type="number"
                placeholder="Phone Number"
                controlId="comapnyPhoneNumber"
                isInvalid={firsterrors}
                value={companyPhoneNumber}
                onChange={(e) => {setcompanyPhoneNumber(e.target.value);
                if(e.target.value.length>10)
                {
                  setFirstErrors("Phonenumber length should be 10 characters");
                }
                else{
                  setFirstErrors("")
                };
              }
            }
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.comapnyPhoneNumber}{firsterrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}

           {/* Address */}
           {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              name="address"
              type="text"
              controlId="companyAddress"
              placeholder="Company Address"
              value={companyAddress}
              onChange={(e) => setcompanyAddress(e.target.value)}
              isInvalid={!!errors.companyAddress}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.companyAddress}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group> */}

          {/* Country */}
          {/* <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Country</Form.Label>
            <Form.Select
              required
              name="country"
              type="text"
              controlId="companyCountry"
              placeholder="Select Country"
              value={companyCountry}
              maxLength={30}
              onChange={(e) => setcompanyCountry(e.target.value)}
              isInvalid={!!errors.companyCountry}
            ><option>Select Country</option>

              {countries.map((companyCountry) => (

                <option value={companyCountry.label}>{companyCountry.label}</option>

              ))}</Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.companyCountry}
            </Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Source Name</Form.Label>
            <Form.Control
              required
              className="sourceName"
              type="text"
              controlId="sourceName"
              placeholder="Source Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={sourceName}
              onChange={(e) => setsourceName(e.target.value)}
              isInvalid={!!errors.sourceName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.sourceName}
            </Form.Control.Feedback>
          </Form.Group>


          {/* email */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="text"
              controlId="sourceEmail"
              placeholder="Source Email"
              value={sourceEmail}
              onChange={(e) => setsourceEmail(e.target.value)}
              isInvalid={!!errors.sourceEmail}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.sourceEmail}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* phone number */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
              <Form.Control
                required
                type="number"
                placeholder="Phone Number"
                controlId="sourcePhoneNumber"
                isInvalid={seconderrors}
                value={sourcePhoneNumber}
                onChange={(e) => {setsourcePhoneNumber( e.target.value);
                if(e.target.value.length>10)
                {
                  setSecondErrors("Phonenumber length should be 10 characters");
                }
                else{
                  setSecondErrors("")
                };
              }
            }
                // onChange={(e) => setPhoneNumber(e.target.value)}
                // isInvalid={!!errors.phoneNumber}
              >
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.sourcePhoneNumber}
                {seconderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

         
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>POC Name</Form.Label>
            <Form.Control
              required
              className="pocName"
              type="text"
              controlId="pocName"
              placeholder="Poc Name"
              // onChange={(event) => setclientName(event.target.value)}
              value={pocName}
              onChange={(e) => setpocName(e.target.value)}
              isInvalid={!!errors.pocName}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.pocName}
            </Form.Control.Feedback>
          </Form.Group>


          {/* email */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="text"
              controlId="pocEmail"
              placeholder="Poc Email"
              value={pocEmail}
              onChange={(e) => setpocEmail(e.target.value)}
              isInvalid={!!errors.pocEmail}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.pocEmail}
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          {/* phone number */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
              <Form.Control
                required
                type="number"
                placeholder="Phone Number"
                controlId="pocPhoneNumber"
                isInvalid={thirderrors}
                value={pocPhoneNumber}
                onChange={(e) => {setpocPhoneNumber( e.target.value);
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
                {errors.pocPhoneNumber}
                {thirderrors}

              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
 
          {/* Status */}
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Status </Form.Label>
            <Form.Select
              required
              type="text"
              placeholder="Status"
              controlId="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              isInvalid={!!errors.status}
            >
              <option> Select Status</option>
                    <option value="Created">Created</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Approved">Approved</option>
                    <option value="Converted">Converted</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Onhold">Onhold</option>
                    <option value="Deleted">Deleted</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.status}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Business Value</Form.Label>
            <Form.Control
              required
              className="businessValue"
              type="number"
              controlId="businessValue"
              placeholder="Business Value"
              // onChange={(event) => setclientName(event.target.value)}
              value={businessValue}
              onChange={(e) => setBusinessValue(e.target.value)}
              isInvalid={!!errors.businessValue}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.businessValue}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Lead Notes</Form.Label>
            <Form.Control
              required
              as="textarea"
              className="leadNotes"
              type="text"
              controlId="leadNotes"
              placeholder="Lead Notes"
              // onChange={(event) => setclientName(event.target.value)}
              value={leadNotes}
              onChange={(e) => setleadNotes(e.target.value)}
              isInvalid={!!errors.leadNotes}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.leadNotes}
            </Form.Control.Feedback>
          </Form.Group>
          </Col>
          <Col md="1">
          <div className="vr" style={{height:"98%"}}></div>
          </Col>
          <Col md="5">

          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              style={{
                backgroundColor: "#f5896e",
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
    </>
  );
};

export default LeadsUpdatedForm;