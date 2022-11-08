import React from "react";
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


function AddClient(props) {
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
      clientName,
      email,
      phoneNumber,
      pocName,
      startDate,
      endDate,
      status,
      country,
      address,
      tag,
      note



    } = form;

    // console.log(clientName);
    // console.log(startDate);
    // console.log(endDate);
    // console.log(country);
    // console.log(address);

    const newErrors = {};

    if (!clientName || clientName === "" || !clientName.match(/^[aA-zZ\s]+$/))
      newErrors.clientName = "Please Enter Client Name";

    if (!email || email === "") newErrors.email = "Please Enter Email";

    if (!phoneNumber || phoneNumber === "" || !phoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.phoneNumber = "Please Enter Phonenumber";

    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";


    // if (!startDate || startDate === "") newErrors.startDate = "Please Enter Start Date";

    // if (!endDate || endDate === "") newErrors.endDate = "Please Enter End Date";

    if (!status || status === "") newErrors.status = "Please Enter Status";

    if (!country || country === "") newErrors.country = "Please Enter Location";

    if (!address || address === "") newErrors.address = "Please Enter Address";

    // if (!tag || tag === "") newErrors.tag = "Please Enter Tag";

    if (!note || note === "") newErrors.note = "Please Enter Note";


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
        .post("/clientProjectMapping/addClients", form)
        .then((response) => {
          const user = response.data;
          console.log(user);
          if (user.status) {
            props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Client Added Successfully");
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
          fontSize: "20px",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {" "}

        <MdOutlinePersonAddAlt style={{ fontSize: "25px" }} />

        {/* <BsPlusLg />  */}
        &nbsp;
        Add Client
      </Button>
      <Modal style={{ maxHeight: "1350px", maxWidth: "1550px" }}
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title style={{color:"white"}}>Add Client/Company</Modal.Title>
        </Modal.Header>

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

              {/* Client Name */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Client / Company Name *</Form.Label>
                <Form.Control
                  required
                  className="clientName"
                  type="text"
                  controlId="clientName"
                  placeholder="Client/Company Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.clientName}
                  maxLength={30}
                  onChange={(e) => setField("clientName", e.target.value)}
                  isInvalid={!!errors.clientName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.clientName}
                </Form.Control.Feedback>
              </Form.Group>

              {/* email */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label> Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  controlId="email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.email}

                </Form.Control.Feedback>
              </Form.Group>

              {/* phone number */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Phone No</Form.Label>
                <InputGroup hasValidation>
                  {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone Number"
                    controlId="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(e) => setField("phoneNumber", e.target.value)}
                    isInvalid={!!errors.phoneNumber}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.phoneNumber}

                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              {/* POC Name */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>POC Name *</Form.Label>
                <Form.Control
                  required
                  className="pocName"
                  type="text"
                  controlId="pocName"
                  placeholder="POC Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.pocName}
                  maxLength={30}
                  onChange={(e) => setField("pocName", e.target.value)}
                  isInvalid={!!errors.pocName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.pocName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
              </Form.Group> 

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
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
              </Form.Group>

              {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Country *</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Country"
                  controlId="country"
                  value={form.country}
                  onChange={(e) => setField("country", e.target.value)}
                  isInvalid={!!errors.country}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group> */}


              {/* Status */}
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
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>



              {/* Country */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Country </Form.Label>
                <Form.Select
                  required
                  className="countries"
                  type="text"
                  controlId="countries"
                  placeholder="Select Country"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.country}
                  maxLength={30}
                  onChange={(e) => setField("country", e.target.value)}
                  isInvalid={!!errors.country}
                ><option>Select Country</option>

                  {countries.map((country) => (

                    <option value={country.label}>{country.label}</option>

                  ))}</Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.country}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Address */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Company Address </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="address"
                  type="text"
                  controlId="address"
                  placeholder="Address"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.address}
                  maxLength={60}
                  onChange={(e) => setField("address", e.target.value)}
                  isInvalid={!!errors.address}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>

              {/* Tag
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Company TAG </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="tag"
                  type="text"
                  controlId="tag"
                  placeholder="TAG"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.tag}
                  maxLength={30}
                  onChange={(e) => setField("tag", e.target.value)}
                  isInvalid={!!errors.tag}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.tag}
                </Form.Control.Feedback>
              </Form.Group> */}

              {/* Notes */}
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Company Notes </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="note"
                  type="text"
                  controlId="note"
                  placeholder="Notes/Description"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.note}
                  maxLength={60}
                  onChange={(e) => setField("note", e.target.value)}
                  isInvalid={!!errors.note}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.note}
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
export default AddClient;