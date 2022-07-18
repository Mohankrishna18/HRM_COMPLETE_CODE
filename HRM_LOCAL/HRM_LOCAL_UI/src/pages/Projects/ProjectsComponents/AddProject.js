import React from "react";
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../../Uri";
import { Row, Col } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function AddProject(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [thirderrors, setThirdErrors] = useState("");
  const [clients, setClients] = useState([]);
  const [manager,setManager] = useState([]);

// Get API's for Clients Dropdown
  useEffect(() => {
         loadData();
       }, []);
   
       const loadData = async () => {
        const res = await axios.get("/clientProjectMapping/getAllClients");
        setClients(res.data.data);
        console.log(res.data);
       
       
      };

      // Get API's for Project Manager Dropdown
      // useEffect(() => {
      //   axios.get(`/emp/getEmployeesDataForReportingManager/${employeeid}`).then((res) => {
      //     console.log(res.data);
      //     setManager(res.data);
      //   });
      // }, []);

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
      clientId,
      projectName,
      startDate,
      endDate,
      rate,
      status,
      priority,
      projectManager,
      description,
    } = form;

    const newErrors = {};

     if (!clientId || clientId === "")
      newErrors.clientId = "Please Enter Client Name";

    if (
      !projectName ||
      projectName === "" ||
      !projectName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.projectName = "Please Enter Project Name";

    if (!startDate || startDate === "")
      newErrors.startDate = "Please Enter Start Date";

    if (!endDate || endDate === "") newErrors.endDate = "Please Enter End Date";

    if (!description || description === "")
      newErrors.description = "Please Enter Location";

     
    if (!status || status === "")
    newErrors.status = "Please Enter Status";

    // if (!rate || rate === "") newErrors.rate = "Please Enter Rate";

    if (!priority || priority === "")
      newErrors.priority = "Please Enter Priority";

    if (!projectManager || projectManager === "")
      newErrors.projectManager = "Please Enter Project Manager";

    return newErrors;
  };
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
        .post("/clientProjectMapping/addProjects", form)
        .then((response) => {
          const user = response.data;
          if (user.status) {
            props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Project added Successfully");
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
          backgroundColor: "#ff9b44",
          color: "#F4F8F6",
          float: "right",
          borderRadius: "25px",
          // paddingBottom: "11.5px",
          // marginTop: "100px",
        }}
      >
        {" "}
        <BsPlusLg />
        Add New Project
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Project</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
                <Form.Label>Client Name *</Form.Label>
                <Form.Select
                  required
                  className="clientName"
                  type="text"
                  controlId="clientName"
                  placeholder="Client Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.clientId}
                  maxLength={30}
                  onChange={(e) => setField("clientId", e.target.value)}
                  isInvalid={!!errors.clientId}
                ><option>Select Client</option>

                {clients.map((client)=>(

                   <option value={client.clientId}>{client.clientName}</option>

                ))}</Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.clientId}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Project Name *</Form.Label>
                <Form.Control
                  required
                  className="projectName"
                  type="text"
                  controlId="projectName"
                  placeholder="Project Name"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.projectName}
                  maxLength={30}
                  onChange={(e) => setField("projectName", e.target.value)}
                  isInvalid={!!errors.projectName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.projectName}
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

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Rate</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Rate"
                  controlId="rate"
                  value={form.rate}
                  onChange={(e) => setField("rate", e.target.value)}
                  isInvalid={!!errors.rate}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.rate}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Priority *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="priority"
                  controlId="priority"
                  value={form.priority}
                  onChange={(e) => setField("priority", e.target.value)}
                  isInvalid={!!errors.priority}
                >
                  <option> Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>
           
              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Project Manager *</Form.Label>
                <Form.Control
                  required
                  className="projectManager"
                  type="text"
                  controlId="projectManager"
                  placeholder="Project Manager"
                  // onChange={(event) => setclientName(event.target.value)}
                  value={form.projectManager}
                  maxLength={30}
                  onChange={(e) => setField("projectManager", e.target.value)}
                  isInvalid={!!errors.projectManager}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.projectManager}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Description *</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  className="mb-3"
                  type="text"
                  placeholder="Description"
                  controlId="description"
                  value={form.description}
                  onChange={(e) => setField("description", e.target.value)}
                  isInvalid={!!errors.description}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.description}
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
export default AddProject;