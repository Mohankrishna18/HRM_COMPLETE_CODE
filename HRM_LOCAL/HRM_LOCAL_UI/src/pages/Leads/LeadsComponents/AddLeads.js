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

function AddLeads(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const [getClient, setGetClient] = useState([]);

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
      leadName,
      startDate,
      companyName,
      companyEmail,
      sourceName,
      sourceEmail,
      sourcePhoneNumber,
      pocName,
      status,
      businessValue,
      leadNotes,
    } = form;
    const newErrors = {};

    if (!leadName || leadName === "" || !leadName.match(/^[aA-zZ\s]+$/))
      newErrors.leadName = "Please Enter Lead Name";
    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";
    if (
      !companyName ||
      companyName === "" ||
      !companyName.match(/^[\d a-zA-Z0-9 ()+-._&'",:;@$]+$/)
    )
      newErrors.companyName = "Please Enter Company Name";
    if (!companyEmail || companyEmail === "")
      newErrors.companyEmail = "Please Enter company Email";
    if (!sourceName || sourceName === "" || !sourceName.match(/^[aA-zZ\s]+$/))
      newErrors.sourceName = "Please Enter Source Name";
    if (!sourceEmail || sourceEmail === "")
      newErrors.sourceEmail = "Please Enter source Email";
    if (
      !sourcePhoneNumber ||
      sourcePhoneNumber === "" ||
      !sourcePhoneNumber.match(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      )
    )
      newErrors.sourcePhoneNumber = "Please Enter source PhoneNumber";
    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (
      !businessValue ||
      businessValue === "" ||
      !businessValue.match(/^[\d a-zA-Z0-9 ()+-._&'",:;@$]+$/)
    )
      newErrors.businessValue = "Please Enter Business Value";
    if (!leadNotes || leadNotes === "" || !leadNotes.match(/^[\d a-zA-Z0-9 ()+-._&'",:;@$]+$/))
      newErrors.leadNotes = "Please Enter Lead Notes";
    return newErrors;
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      );
      setCountries(res.data.countries);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "/clientProjectMapping/getAllClients"
      );
      setGetClient(res.data.data);
    };
    loadData();
  }, []);
const[activeEmp,setActiveEmp]=useState([]);
var sortedActiveEmp = _.sortBy(activeEmp,'fullName');
const Active="Active"
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `/emp/getActiveEmployees/${Active}`
      );
      setActiveEmp(res.data.data);
    };
    loadData();
  }, []);


  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 1) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");
      axios
        .post("/Leads/addLeads", form)
        .then((response) => {
          const user = response.data;
          setForm("");
          if (user.status) {
            props.func();
          } else {
           console.log("props are send");
          }
          toast.success("Lead Added Successfully",{autoClose:1000});
          setTimeout(2000);
          handleClose();
        })
        .catch((err) => {
          toast.error(err,"Something Went Wrong",{autoClose:1000});
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
        }}
      >
        {" "}
        <MdOutlinePersonAddAlt />
        &nbsp; Add Lead
      </Button>
      <Modal
        style={{ maxHeight: "1350px", maxWidth: "1550px" }}
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
          <Modal.Title>Add Leads</Modal.Title>
        </Modal.Header>

        <Modal.Body className="scroll">
          <Form
            ref={forms}
            className="formone"
            style={{ padding: 10 }}
          >
            <Row>
              <Col md="12">
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Lead Name*</Form.Label>
                  <Form.Control
                    required
                    className="leadName"
                    type="text"
                    controlid="leadName"
                    placeholder="Lead Name"
                    value={form.leadName}
                    maxLength={50}
                    onChange={(e) => setField("leadName", e.target.value)}
                    isInvalid={!!errors.leadName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.leadName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Row>
                  <Col md="6">
                <Form.Group style={{ padding: 10 }}>
                  <Form.Label>Start Date*</Form.Label>
                  <Form.Control
                    required
                    className="startDate"
                    type="date"
                    controlid="startDate"
                    placeholder="Start Date"
                    value={form.startDate}
                    maxLength={30}
                    onChange={(e) => setField("startDate", e.target.value)}
                    isInvalid={!!errors.startDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.startDate}
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                <Col md="6" >
                <Form.Group style={{ padding: 10 }}>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    required
                    className="endDate"
                    type="date"
                    controlid="endDate"
                    placeholder="End Date"
                    value={form.endDate}
                    min={form.startDate}
                    maxLength={30}
                    onChange={(e) => setField("endDate", e.target.value)}
                    isInvalid={!!errors.endDate}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.endDate}
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
                </Row>
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Source Name *</Form.Label>
                  <Form.Control
                    required
                    className="sourceName"
                    type="text"
                    controlid="sourceName"
                    placeholder="Source Name"
                    value={form.sourceName}
                    maxLength={50}
                    onChange={(e) => setField("sourceName", e.target.value)}
                    isInvalid={!!errors.sourceName}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.sourceName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Source Email*</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Source Email"
                    controlid="sourceEmail"
                    value={form.sourceEmail}
                    onChange={(e) => setField("sourceEmail", e.target.value)}
                    isInvalid={!!errors.sourceEmail}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.sourceEmail}
                  </Form.Control.Feedback>
                </Form.Group>

                
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Status *</Form.Label>
                  <Form.Select
                    required
                    type="text"
                    placeholder="Status"
                    controlid="status"
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
              </Col>
              <Col md="6">
              <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Company/Client*</Form.Label>
                  <Form.Select
                    required
                    className="companyName"
                    type="text"
                    controlid="companyName"
                    placeholder="Company Name"
                    value={form.companyName}
                    maxLength={100}
                    onChange={(e) => setField("companyName", e.target.value)}
                    isInvalid={!!errors.companyName}
                  >
                    <option>Select </option>
                    {getClient.map((r) => (
                      <option value={r.clientName}>
                        {r.clientName}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.companyName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Company Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Company Email"
                    required
                    pattern=".+@gmail\.com"
                    controlid="companyEmail"
                    value={form.companyEmail}
                    onChange={(e) => setField("companyEmail", e.target.value)}
                    isInvalid={!!errors.companyEmail}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.companyEmail}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Source Contact*</Form.Label>
                  <InputGroup hasValidation>
                    {/* <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text> */}
                    <Form.Control
                      required
                      type="number"
                      maxLength={10}
                      placeholder="source PhoneNumber"
                      controlid="sourcePhoneNumber"
                      value={form.sourcePhoneNumber}
                      onChange={(e) => {
                        setField("sourcePhoneNumber", e.target.value);
                        if (e.target.value.length > 10) {
                          setSecondErrors(
                            "Phonenumber length should be 10 characters"
                          );
                        } else {
                          setSecondErrors("");
                        }
                      }}
                      isInvalid={seconderrors}
                    ></Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors.sourcePhoneNumber}
                      {seconderrors}
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>EmployeePOCName *</Form.Label>
                  <Form.Select
                    required
                    className="pocName"
                    type="text"
                    controlid="pocName"
                    placeholder="POC Name"
                    value={form.pocName}
                    maxLength={50}
                    onChange={(e) => setField("pocName", e.target.value)}
                    isInvalid={!!errors.pocName}
                  >
                    <option value="">Select</option>
                    {sortedActiveEmp.map((item) => (
                      <option value={item.fullName}>
                        {item.fullName}
                        </option>
                        ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.pocName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Row>
                <Col md="12">
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Business Value *</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    className="businessValue"
                    type="text"
                    controlid="businessValue"
                    placeholder="Business Value"
                    value={form.businessValue}
                    maxLength={225}
                    onChange={(e) => setField("businessValue", e.target.value)}
                    isInvalid={!!errors.businessValue}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.businessValue}
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="12">   
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Lead Notes*</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    className="leadNotes"
                    type="text"
                    controlid="leadNotes"
                    placeholder="lead Notes"
                    value={form.leadNotes}
                    maxLength={225}
                    onChange={(e) => setField("leadNotes", e.target.value)}
                    isInvalid={!!errors.leadNotes}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.leadNotes}
                  </Form.Control.Feedback>
                </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md="12">
                </Col>
              </Row>
            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
                    borderColor: "#f5896e",
                    float: "center",
                    width: "40%",
                    height: "120%",
                    marginLeft: "200px",
                    borderRadius: "25px",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default AddLeads;
