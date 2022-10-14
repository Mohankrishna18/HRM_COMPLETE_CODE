import React, { useEffect, useState, useRef } from 'react'
import { Modal, FloatingLabel } from "react-bootstrap";
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
import StepperForm from '../RecruitmentRequestComponents/StepperForm';

export default function AddRequisition(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [firsterrors, setFirstErrors] = useState("");
  const [seconderrors, setSecondErrors] = useState("");
  const [thirderrors, setThirdErrors] = useState("");
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [departments, setDepartments] = useState([]);
  const handleClose = () => setShow();
  const handleShow = () => setShow(true);
  const [comment, setComment] = useState([]);
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
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {
    const res = await axios.get("/clientProjectMapping/getAllClients");
    setClients(res.data.data);
    console.log(res.data.data);
  };

  useEffect(() => {
    loadDepartmentsData();
  }, []);

  const loadDepartmentsData = async () => {
    const res = await axios.get("/dept/getAllDepartments");
    setDepartments(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const res = await axios.get("/clientProjectMapping/getAllProjects");
    setProjects(res.data.data);
    console.log(res.data.data);
  };

  const validateForm = () => {
    const {
      reqId,
      primaryContact,
      jobTitle,
      description,
      rrStatus,
      workflowStatus,
      positions,
      pSkills,
      sSkills,
      workLocation,
      workingHours,
      empType,
      yoe,
      rate,
      projectName,
      uploadSOW,
      uploadDesc,
      clientName,
      textAreaDesc,
      comments,
      departmentName
    } = form;

    // console.log(clientName);
    // console.log(startDate);
    // console.log(endDate);
    // console.log(country);
    // console.log(address);

    const newErrors = {};

    if (!jobTitle ||  !jobTitle.match(/^[aA-zZ\s]+$/))
      newErrors.jobTitle = "Please enter Job Title";
    if (!workLocation || workLocation === "" || !workLocation.match(/^[aA-zZ\s]+$/))
      newErrors.workLocation = "Please enter Work location";
    // if (!textAreaDesc || textAreaDesc === "" || !textAreaDesc.match(/^[aA-zZ\s]+$/))
    //   newErrors.textAreaDesc = "Please enter Job Description";
    // if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
    //   newErrors.comments = "Please enter Comments";
    if (
      !clientName ||
      clientName === "" ||
      !clientName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.clientName = "Please select Client";
    
    if (
      !projectName ||
      projectName === "" ||
      !projectName.match(/^[aA-zZ\s]+$/)
    )
      newErrors.projectName = "Please select Project";
    if (
      !rrStatus ||
      rrStatus === "" ||
      !rrStatus.match(/^[aA-zZ\s]+$/)
    )
      newErrors.rrStatus = "Please select RR status";
    if (
      !workflowStatus ||
      workflowStatus === "" ||
      !workflowStatus.match(/^[aA-zZ\s]+$/)
    )
      newErrors.workflowStatus = "Please select Workflow status";
    if (
      !empType ||
      empType === "" ||
      !empType.match(/^[aA-zZ\s]+$/)
    )
      newErrors.empType = "Please select Employment type";
      if (
        !primaryContact ||
        primaryContact === "" ||
        !primaryContact.match(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
        )
      )
    if (!pSkills || pSkills === "" || !pSkills.match(/^[aA-zZ\s]+$/))
      newErrors.pSkills = "Please enter Primary skills";
  
      if (!comments || comments === "" || !comments.match(/^[aA-zZ\s]+$/))
      newErrors.comments = "Please enter comments";
    
    return newErrors;
  };



  const [user, setUser] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    setForm("");
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // console.log(form);
      console.log("form submitted");
      axios
        .post("/recruitmentTracker/createRequisitionRequest", form)
        .then((response) => {
          const user = response.data;
          console.log(user);
          console.log(user);
          // setForm("");
          if (user.status) {
            props.func();
            // console.log(user);
          } else {
            console.log("Props Not Send");
          }
          toast.success("Requisition Request raised successfully");
          console.log(user);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };
  const postdata = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:9000/v1/addComments", form)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          axios
            .get("http://localhost:9000/v1/getAllComments/id")
            .then((resp) => {
              console.log(resp);
              setComment(resp.data);
            })
            .catch((errr) => {
              console.log(errr);
            });
        } else {
          console.log("data not post");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


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
        <MdOutlinePersonAddAlt />
        {/* <BsPlusLg />  */}
        &nbsp; Raise Requisition
      </Button>
      <Modal
        style={{ maxHeight: "1350px", maxWidth: "1550px" }}
        size="xl"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Job Requirements</Modal.Title>
        </Modal.Header>

        <Modal.Body className="scroll">
        <StepperForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
}