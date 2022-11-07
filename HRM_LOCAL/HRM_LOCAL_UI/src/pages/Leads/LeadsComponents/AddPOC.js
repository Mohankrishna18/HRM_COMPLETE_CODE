import React from 'react';
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

const AddPOC = (props) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [thirderrors, setThirdErrors] = useState("");

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
      POCName,
      details,
      description,
      status
      // companyPhoneNumber,
      // startDate,
      // endDate,
      // companyCountry,
      // companyAddress,
      // sourceName,
      // sourceEmail,
      // sourcePhoneNumber
    } = form;

    // console.log(clientName);
    // console.log(startDate);
    // console.log(endDate);
    // console.log(country);
    // console.log(address);

    const newErrors = {};

    if (!POCName || POCName === "" || !POCName.match(/^[aA-zZ\s]+$/))
      newErrors.POCName = "Please Enter POC Name";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (!details || details === "") newErrors.details = "Please Enter Details";
    if (!description || description === "") newErrors.description = "Please Enter Description";
    // if (!companyName || companyName === "" || !companyName.match(/^[aA-zZ\s]+$/))
    //   newErrors.companyName = "Please Enter Company Name";
    // if (!companyEmail || companyEmail === "") newErrors.companyEmail = "Please Enter company Email";
    // if (!companyPhoneNumber || companyPhoneNumber === "" || !companyPhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
    //   newErrors.companyPhoneNumber = "Please Enter company PhoneNumber";
    // if (!startDate || startDate === "") newErrors.startDate = "Please Enter Start Date";
    // if (!endDate || endDate === "") newErrors.endDate = "Please Enter End Date";
    // if (!companyCountry || companyCountry === "") newErrors.companyCountry = "Please Enter Company Country ";
    // if (!companyAddress || companyAddress === "") newErrors.companyAddress = "Please Enter Company Address";
    // if (!sourceName || sourceName === "" || !sourceName.match(/^[aA-zZ\s]+$/))
    //   newErrors.sourceName = "Please Enter Source Name";
    // if (!sourceEmail || sourceEmail === "") newErrors.sourceEmail = "Please Enter source Email";
    // if (!sourcePhoneNumber || sourcePhoneNumber === "" || !sourcePhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
    //   newErrors.sourcePhoneNumber = "Please Enter source PhoneNumber";
    return newErrors;
  };

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
    // e.target.reset();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      // console.log("form submitted");
      axios
        .post("/Leads/addLeads", form)
        .then((response) => {
          const user = response.data;
          console.log(user);
          if (user.status) {
            props.func();
            // console.log(user);
          } else {
            console.log("Props Not Send");
          }
          toast.success("Lead Added Successfully");
          console.log(user);
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
        <Modal.Body className="scroll">
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ padding: 10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-4">

              {/* Lead Name */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>POC Name *</Form.Label>
                <Form.Control
                  required
                  className="POCName"
                  type="text"
                  controlId="POCName"
                  placeholder="POC Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.leadName}
                  maxLength={30}
                  onChange={(e) => setField("POCName", e.target.value)}
                  isInvalid={!!errors.leadName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.POCName}
                </Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Status *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Status"
                  controlId="status"
                  value={form.status}
                  onChange={(e) => setField("status", e.target.value)}
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


              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Details *</Form.Label>
                <Form.Control
                  required
                  className="details"
                  type="text"
                  controlId="details"
                  placeholder="Details"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.details}
                  maxLength={30}
                  onChange={(e) => setField("details", e.target.value)}
                  isInvalid={!!errors.details}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.details}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Company Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Company Email"
                  controlId="companyEmail"
                  value={form.companyEmail}
                  onChange={(e) => setField("companyEmail", e.target.value)}
                  isInvalid={!!errors.companyEmail}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.companyEmail}
                </Form.Control.Feedback>
              </Form.Group>



              {/* phone number */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>company PhoneNumber</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    placeholder="company PhoneNumber"
                    controlId="companyPhoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) => setField("companyPhoneNumber", e.target.value)}
                    isInvalid={!!errors.companyPhoneNumber}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.companyPhoneNumber}

                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Company Country </Form.Label>
                <Form.Select
                  required
                  className="companyCountry"
                  type="text"
                  controlId="companyCountry"
                  placeholder="Select Country"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.companyCountry}
                  maxLength={30}
                  onChange={(e) => setField("companyCountry", e.target.value)}
                  isInvalid={!!errors.companyCountry}
                ><option>Select Country</option>

                  {countries.map((companyCountry) => (

                    <option value={companyCountry.label}>{companyCountry.label}</option>

                  ))}</Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.companyCountry}
                </Form.Control.Feedback>
              </Form.Group> */}

              {/* Address */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Description </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="description"
                  type="text"
                  controlId="description"
                  placeholder="Description"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.description}
                  maxLength={30}
                  onChange={(e) => setField("description", e.target.value)}
                  isInvalid={!!errors.description}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>


              {/* Start Date  */}
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Start Date *</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="Start Date"
                  controlId="startDate"
                  value={form.startDate}
                  onChange={(e) => setField("startDate", e.target.value)}
                  isInvalid={!!errors.startDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.startDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> */}

              {/* End date */}
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>End Date *</Form.Label>
                <Form.Control
                  required
                  type="date"
                  placeholder="End Date"
                  controlId="endDate"
                  value={form.endDate}
                  min={form.startDate}
                  onChange={(e) => setField("endDate", e.target.value)}
                  isInvalid={!!errors.endDate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.endDate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> */}

              {/* source Name */}
              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Source Name *</Form.Label>
                <Form.Control
                  required
                  className="sourceName"
                  type="text"
                  controlId="sourceName"
                  placeholder="Source Name" */}
                  {/* // onChange={(event) => setclientName(event.target.value)}
                  value={form.sourceName}
                  maxLength={30}
                  onChange={(e) => setField("sourceName", e.target.value)}
                  isInvalid={!!errors.sourceName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.sourceName}
                </Form.Control.Feedback>
              </Form.Group> */}

              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Source Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Source Email"
                  controlId="sourceEmail"
                  value={form.sourceEmail}
                  onChange={(e) => setField("sourceEmail", e.target.value)}
                  isInvalid={!!errors.sourceEmail}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.sourceEmail}
                </Form.Control.Feedback>
              </Form.Group> */}

              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Source PhoneNumber</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
                  <Form.Control
                    required
                    type="text"
                    placeholder="source PhoneNumber"
                    controlId="sourcePhoneNumber"
                    value={form.sourcePhoneNumber}
                    onChange={(e) => setField("sourcePhoneNumber", e.target.value)}
                    isInvalid={!!errors.sourcePhoneNumber}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.sourcePhoneNumber}

                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group> */}



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
    </div>
  )
}

export default AddPOC;