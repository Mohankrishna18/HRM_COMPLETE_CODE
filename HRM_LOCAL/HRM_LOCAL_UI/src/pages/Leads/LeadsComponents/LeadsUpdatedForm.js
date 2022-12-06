import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

const LeadsUpdatedForm = (props) => {
  console.log(props.updateOnboard);

  const [leadName, setleadName] = useState(props.updateOnboard.leadName);
  const [startDate, setstartDate] = useState(moment(props.updateOnboard.startDate).format('YYYY-MM-DD'));
  const [endDate, setendDate] = useState(moment(props.updateOnboard.endDate).format('YYYY-MM-DD'));
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
  const [businessValue, setBusinessValue] = useState(props.updateOnboard.businessValue);
  const [leadNotes, setleadNotes] = useState(props.updateOnboard.leadNotes);


  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const handleClose = () => setShow();
  const [comment, setComment] = useState([]);
  const [getClient, setGetClient] = useState([]);
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
    const { leadName, startDate, companyName, companyEmail,sourceName, sourcePhoneNumber, pocName,status, businessValue, leadNotes } = form;
    const newErrors = {};

    if (!leadName || leadName === "" || !leadName.match(/^[aA-zZ\s]+$/))
      newErrors.leadName = "Please Enter Lead Name";
    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";
    if (!companyName || companyName === "" || !companyName.match(/^[\d a-zA-Z0-9 ()+-._&'",:;@$]+$/))
      newErrors.companyName = "Please Enter Company Name";
    if (!companyEmail || companyEmail === "") newErrors.companyEmail = "Please Enter company Email";
    if (!sourceName || sourceName === "" || !sourceName.match(/^[aA-zZ\s]+$/))
      newErrors.sourceName = "Please Enter Source Name";
    if (!sourceEmail || sourceEmail === "") newErrors.sourceEmail = "Please Enter source Email";
    if (!sourcePhoneNumber || sourcePhoneNumber === "" || !sourcePhoneNumber.match(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/))
      newErrors.sourcePhoneNumber = "Please Enter source PhoneNumber";
    if (!pocName || pocName === "" || !pocName.match(/^[aA-zZ\s]+$/))
      newErrors.pocName = "Please Enter POC Name";
    if (!status || status === "") newErrors.status = "Please Enter Status";
    if (!businessValue || businessValue === "" || !businessValue.match(/^[0-9a-zA-Z]*$/))
      newErrors.businessValue = "Please Enter Business Value";
    if (!leadNotes || leadNotes === "" || !leadNotes.match(/^[0-9a-zA-Z]*$/))
      newErrors.leadNotes = "Please Enter Lead Notes";
    return newErrors;
  };

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get("https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code");
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

  const [user, setUser] = useState("");
  const[activeEmp,setActiveEmp]=useState([]);
  var sortedActiveEmp = _.sortBy(activeEmp,'fullName');
  let dropdown = []
const Active="Active"
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `/emp/getActiveEmployees/${Active}`
      );
      setActiveEmp(res.data.data);
      res.data.data.map((it)=>{
        dropdown.push((it.firstName))
      })
    };
    loadData();
  }, []);
const dro = dropdown.sort()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/Leads/updateLeadById/${props.updateOnboard.id}`,
        {
          leadName,
          startDate,
          endDate,
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
          toast.success("Form Submitted successfully",{autoClose:1000});
          props.func();
        } else {
          console.log("Props not Send");
        }
        setTimeout(1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something Went Wrong",{autoClose:1000});
      });
    props.handleClose();
  };

  return (
    <>
      <Form
        ref={forms}
        className="formone"
        style={{ padding: 10 }}
        onSubmit={handleSubmit}
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
                    value={leadName}
                    maxLength={50}
                    onChange={(e) => setleadName(e.target.value)}
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
                    value={startDate}
                    maxLength={30}
                    onChange={(e) => setstartDate(e.target.value)}
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
                    value={endDate}
                    maxLength={30}
                    onChange={(e) => setendDate(e.target.value)}
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
                    value={sourceName}
                    maxLength={50}
                    onChange={(e) => setsourceName(e.target.value)}
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
                    value={sourceEmail}
                    onChange={(e) => setsourceEmail(e.target.value)}
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
                    defaultValue={companyName}
                    value={companyName}
                    maxLength={100}
                    onChange={(e) => setcompanyName(e.target.value)}
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
                    {companyName}
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
                    value={companyEmail}
                    onChange={(e) => setcompanyEmail(e.target.value)}
                    isInvalid={!!errors.companyEmail}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {companyEmail}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                  <Form.Label>Source Contact*</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      required
                      type="number"
                      maxLength={10}
                      placeholder="source PhoneNumber"
                      controlid="sourcePhoneNumber"
                      value={sourcePhoneNumber}
                      onChange={(e) => {
                        setsourcePhoneNumber(e.target.value);
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
                    value={pocName}
                    maxLength={50}
                    onChange={(e) => setpocName(e.target.value)}
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
                  <Form.Label>Business Value*</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    className="businessValue"
                    type="text"
                    controlid="businessValue"
                    placeholder="Business Value"
                    value={businessValue}
                    maxLength={225}
                    onChange={(e) => setBusinessValue(e.target.value)}
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
                    value={leadNotes}
                    maxLength={225}
                    onChange={(e) => setleadNotes(e.target.value)}
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
            </Row>
      </Form>
    </>
  );
};

export default LeadsUpdatedForm;