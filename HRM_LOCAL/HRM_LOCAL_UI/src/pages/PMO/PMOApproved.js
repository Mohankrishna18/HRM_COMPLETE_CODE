import React, { useState ,useRef, useEffect} from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { InputGroup } from "react-bootstrap";
import {AutoCompleteComponent} from '@syncfusion/ej2-react-dropdowns';


function PMOApproved(props) {
const onboardingId = props.onboardID.onboardingId;
console.log(onboardingId);
    const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [irm, setIrm] = useState('');
  const [step, setStep] = useState(0);
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
        employmentType,
        department,
        designation,
        irm,
        srm,
        buh,
        projectName,
        client,
        reportingManager,
        band,
        jobTitle
    
    } = form;
    const newErrors = {};

    if (!designation || designation === "")
      newErrors.designation = "Please Enter Designation";
    if (!department || department === "")
      newErrors.department = "Please Enter Department";
    if (!employmentType || employmentType === "")
      newErrors.employmentType = "Please Enter type of Employeement";
    
    if (!jobTitle || jobTitle === "")
      newErrors.jobTitle = "Please Enter type of Job Title";
    if (!client || client === "") newErrors.client = "Please Select Client";
    if (!projectName || projectName === "")
      newErrors.projectName = "Please Select ProjectName";
      if (!reportingManager || reportingManager === "")
      newErrors.reportingManager = "Please Select Reporting Manager";
      if (!band || band === "")
      newErrors.band = "Please Select Band";
      if (!irm || irm === "") newErrors.irm = "Please Select irm";
      if (!srm || srm === "") newErrors.srm = "Please Select srm";
      if (!buh || buh === "") newErrors.buh = "Please Select buh";
    return newErrors;
   
  };

  const handleSubmit = (e) => {
    let onboardingId = props.onboardID.onboardingId;
    console.log(props.onboardID);
    e.preventDefault();
    // e.target.reset();
    const formErrors = validateForm();
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      console.log("Form validation error");
    } else {
      axios
        .put(`/emp/updateEmpdDetails/${onboardingId}`, form)
        .then((response) => {
          const user = response.data;
          if (user.status) {
            props.func();
          } else {
            console.log("Props Not Send");
          }
          toast.success("Employment Details Added Successfully");
          console.log(user);
          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios.get("/designation/getAllDesignations").then((response) => {
      console.log(response.data);
      setDesignations(response.data);
    });
    // .catch(() => {
    //   toast.error("data is not getting");
    // });
  }, []);

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((response) => {
      setDepartments(response.data);
    });
    // .catch(() => {
    //   toast.error("Data is not getting");
    // });
    // console.log(departments)
  }, []);

  const [reportingManager, setReportingManager] = useState([]);
  useEffect(() => {
    axios.get("/emp/getreportingmanager").then((response) => {
      console.log(response.data);
      setReportingManager(response.data.data);
    });
  }, []);

  const [bands, setBands] = useState([]);
  useEffect(() => {
    axios.get("/bands/getAllBands").then((response) => {
      console.log(response.data);
      setBands(response.data.data);
    });
  }, []);

  const [client, setClient] = useState([]);
  useEffect(() => {
    axios.get("/clientProjectMapping/getAllClients").then((response) => {
      console.log(response.data);
      setClient(response.data.data);
    });
  }, []);

  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get("/clientProjectMapping/getAllProjects").then((response) => {
      console.log(response.data);
      setProject(response.data.data);
    });
  }, []);

  const [users, setUsers] = useState({});
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/emp/getAllEmployeeMasterData");
      console.log(response.data.data);
      setUsers(response.data.data);
    };
    loadUsers();
  }, []);
  
     console.log(props.onboardID.onboardingId);
    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let onboardingId = props.onboardID.onboardingId;
        console.log(props.onboardID);
        const obj = { onboardingStatus: "PMOApproved" };
        axios.put(`/emp/updateApprovStatus/${onboardingId}`,obj)
        .then((res)=>{
            console.log(res)
            if(res.status == 200){
                props.func();
            }
            else{
                console.log('props not send')
            }
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Something wrong");
        });
        props.handleClose();
       
        notify();
      };
  return (
    <div>
        <Row>
      
     
            <Col>
            <Button variant="primary" 
            onClick={ApproveHandler}
            >
            Yes
          </Button>
            </Col>
        
        </Row>
       
        
    </div>
  )
}

export default PMOApproved;


