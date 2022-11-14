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

function AddRole(props) {
  
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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

      
      moduleName,

    } = form;
    const newErrors = {};


    
    if (!moduleName || moduleName === "")
      newErrors.moduleName = "Please Enter a Module Name";


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

      axios
        .post("/user/addModule", form)
        .then((response) => {
          const user = response.data;
          if (response.data.status) {
            props.func();
            toast.success("Role added successfully!!!");
          }
          else {
            console.log("Props Not Send");
          }
          

          setTimeout(5000);
          handleClose();
        })
        .catch((err) => {
          toast.error("Something Went Wrong");
        });
    }
  };

  const [module, setModule] = useState([]);
  useEffect(() => {
    axios
      .get("/user/getModuleData")
      .then((response) => {
        setModule(response.data.data);
        console.log(response.data.data);
      })
      
      .catch(() => {
        toast.error("Data is not getting");
      });
  }, []);
  

  


  return (
    <div>
      <Button
        variant="warning"
        onClick={handleShow}
        style={{
          backgroundColor: "#f5896e",
                    borderColor: "#ff9b44",
          float: "right",
          borderRadius: "25px",
          paddingBottom: "7px",
          marginBottom: "20px",
          fontWeight: "bold"
        }}
      >
        {" "}
        <BsPlusLg />
        &nbsp;Add Roles & App Permissions
      </Button>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton style={{ backgroundColor: "#f5896e", color : "white" }}>
          <Modal.Title style={{ backgroundColor: "#FF9E14", color : "white" }}>Add Roles & App Permissions</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form
            ref={forms}
            className="formone"
            // noValidate
            // validated={validated}
            style={{ paddingLeft: 25, paddingRight: 25, paddingBottom:10 }}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Role Name *</Form.Label>
                <Form.Control
                  required
                  className="roleName"
                  type="text"
                  controlId="roleName"
                  placeholder="Role Name"
                  // onChange={(event) => setFirstName(event.target.value)}
                  value={form.roleName}
                  maxLength={30}
                  onChange={(e) => setField("moduleName", e.target.value)}
                  isInvalid={!!errors.roleName}
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  {errors.roleName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-1 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-1"
                  controlId="permission1"
                  value={form.permission1}
                  onChange={(e) => setField("permission1", e.target.value)}
                  isInvalid={!!errors.permission1}
                >
                  <option>Select</option>
                  
                  {module.map((module1) => (
                    <option>{module1.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission1}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-2 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-2"
                  controlId="permission2"
                  value={form.permission2}
                  onChange={(e) => setField("permission2", e.target.value)}
                  isInvalid={!!errors.permission2}
                >
                  <option>Select</option>
                  
                  {module.map((module2) => (
                    <option>{module2.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission2}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-3 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-3"
                  controlId="permission3"
                  value={form.permission3}
                  onChange={(e) => setField("permission3", e.target.value)}
                  isInvalid={!!errors.permission3}
                >
                  <option>Select</option>
                  
                  {module.map((module3) => (
                    <option>{module3.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission3}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-4 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-4"
                  controlId="permission4"
                  value={form.permission4}
                  onChange={(e) => setField("permission4", e.target.value)}
                  isInvalid={!!errors.permission4}
                >
                  <option>Select</option>
                 
                  {module.map((module4) => (
                    <option>{module4.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission4}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-5 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-5"
                  controlId="permission5"
                  value={form.permission5}
                  onChange={(e) => setField("permission5", e.target.value)}
                  isInvalid={!!errors.permission5}
                >
                  <option>Select</option>
                  
                  {module.map((module5) => (
                    <option>{module5.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission5}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-6 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-6"
                  controlId="permission6"
                  value={form.permission6}
                  onChange={(e) => setField("permission6", e.target.value)}
                  isInvalid={!!errors.permission6}
                >
                  <option>Select</option>
                  
                  {module.map((module6) => (
                    <option>{module6.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission6}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-7 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-7"
                  controlId="permission7"
                  value={form.permission7}
                  onChange={(e) => setField("permission7", e.target.value)}
                  isInvalid={!!errors.permission7}
                >
                  <option>Select</option>
                  
                  {module.map((module7) => (
                    <option>{module7.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission7}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-8 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-8"
                  controlId="permission8"
                  value={form.permission8}
                  onChange={(e) => setField("permission8", e.target.value)}
                  isInvalid={!!errors.permission8}
                >
                  <option>Select</option>
                
                  {module.map((module8) => (
                    <option>{module8.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission8}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-9 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-9"
                  controlId="permission9"
                  value={form.permission2}
                  onChange={(e) => setField("permission9", e.target.value)}
                  isInvalid={!!errors.permission9}
                >
                  <option>Select</option>
                
                  {module.map((module9) => (
                    <option>{module9.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission9}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Module-10 *</Form.Label>
                <Form.Select
                  required
                  type="text"
                  placeholder="Module-10"
                  controlId="permission10"
                  value={form.permission10}
                  onChange={(e) => setField("permission10", e.target.value)}
                  isInvalid={!!errors.permission10}
                >
                  <option>Select</option>
                  
                  {module.map((module10) => (
                    <option>{module10.moduleName}</option>
                  ))} 
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.permission10}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

            </Row>
            <Row>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#f5896e",
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
                  
                  type="close"
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
export default AddRole;




// import { React, useState, useEffect } from "react";
// import { Button, Form, Modal } from "react-bootstrap";
// import { BsPlusLg } from "react-icons/bs";
// import axios from "../../../Uri";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Stack, Container } from "react-bootstrap";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import LoadingOverlay from "react-loading-overlay";

// const AddRole = () => {
//   function formatDate(fromDate) {
//     var datePart = fromDate.match(/\d+/g),
//       year = datePart[0].substring(2), // get only two digits
//       month = datePart[1],
//       day = datePart[2];
//     return day + "-" + month + "-" + year;
//   }

//   useEffect(() => {
//     loadData();

//   }, []);

//   const loadData = async () => {
//     const res = await axios.get("/holiday/getAllHolidays").then((res) => {
//       // console.log(res.data.data);
//       setRoleName(res.data.data);
//     })

//   }


//   const notify = () => toast("Role is Added");

//   const [show, setShow] = useState(false);
//   const [roleName, setRoleName] = useState([]);
//   const [module1, setModule1] = useState([]);
//   const [module2, setModule2] = useState([]);
//   const [module3, setModule3] = useState([]);
//   const [module4, setModule4] = useState([]);
//   const [module5, setModule5] = useState([]);
//   const validationSchema = Yup.object().shape({
//     roleName: Yup.string().matches(/^[aA-zZ\s]+$/, "Invalid Name ").required("Role Name is required"),
//     // holidayDate: Yup.string().required("Holiday Date is required"),
//   });

//   const handleClose = () => {
//     setShow(false);
//     // notify();
//   };

//   const handleShow = () => {
//     setShow(true);
//   };

//   const onSubmit = async (e) => {
//     // console.log(e);
//     const res = await axios.post("/holiday/addholiday", e);
//     handleClose(); //Close when click on submit
//     loadData();
//     if (res.data !== null) {
//       // console.log(res.data);
//       notify();
//     } else {
//       // console.log("");
//     }
//   };
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//   });

//   return (
//     <div>
//       <Row>
//         <Col md={12}>
//           <Button
//             variant="warning"
//             onClick={handleShow}
//             style={{
//               backgroundColor: "#ff9b44",
//               color: "#F4F8F6",
//               float: "right",
//               borderRadius: "25px",

//             }}
//           >
//             {" "}
//             <BsPlusLg />
//             Add Role
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>

//           <Modal
//             show={show}
//             onHide={handleClose}
//             centered
//             style={{ borderRadius: "250px" }}
//           >
//             <div class="col-md-12 text-center">
//               <Modal.Title>Add Role</Modal.Title>
//               <Modal.Header closeButton></Modal.Header>
//             </div>
//             <Modal.Body>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Stack gap={3}>
//                   <div className="form-group">
//                     <Stack gap={3}>
//                       <Row>
//                         <Col md={12}>
//                           <label>Role Name</label>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={12}>
//                           <input
//                             name="roleName"
//                             type="text"
//                             {...register("roleName")}
//                             className={`form-control ${errors.roleName ? "is-invalid" : ""
//                               }`}
//                           />
//                           <div className="invalid-feedback">
//                             {errors.roleName?.message}
//                           </div>
//                         </Col>
//                       </Row>
//                     </Stack>
//                   </div>
//                   {/* <div className="form-group">
//                     <Stack gap={3}>
//                       <Row>
//                         <Col md={12}>
//                           <label>Holiday Date</label>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={12}>
//                           <input
//                             name="holidayDate"
//                             type="date"
//                             {...register("holidayDate")}
//                             className={`form-control ${errors.holidayDate ? "is-invalid" : ""
//                               }`}
//                           />
//                           <div className="invalid-feedback">
//                             {errors.holidayDate?.message}
//                           </div>
//                         </Col>
//                       </Row>
//                     </Stack>
//                   </div> */}  
//                   <Row>
//                   <Form.Group as ={Col} md="6">
//                     <Form.Label>Module-1</Form.Label>
//                     {/* <Form.Control value={module1}></Form.Control> */}
//                     <Form.Select 
//                     required
//                     type="text"
//                     value={module1}
//                     onChange={(e)=>setModule1(e.target.value)}
//                     >
//                       <option>Select</option>
//                       <option>OnBoarding Form</option>
//                       <option>All Employees</option>
//                       <option>Departments</option>
//                       <option>Designations</option>
                      
//                     </Form.Select>
//                   </Form.Group>
//                   <Form.Group as ={Col} md="6">
//                     <Form.Label>Module-2</Form.Label>
//                     <Form.Select 
//                     required
//                     type="text"
//                     value={module2}
//                     onChange={(e)=>setModule2(e.target.value)}
//                     >
//                       <option>Select</option>
//                       <option>OnBoarding Form</option>
//                       <option>All Employees</option>
//                       <option>Departments</option>
//                       <option>Designations</option>
                      
//                     </Form.Select>

//                   </Form.Group>
//                   <Form.Group as ={Col} md="6">
//                     <Form.Label>Module-3</Form.Label>
//                     <Form.Select 
//                     required
//                     type="text"
//                     value={module3}
//                     onChange={(e)=>setModule3(e.target.value)}
//                     >
//                       <option>Select</option>
//                       <option>OnBoarding Form</option>
//                       <option>All Employees</option>
//                       <option>Departments</option>
//                       <option>Designations</option>
                      
//                     </Form.Select>
//                   </Form.Group>
//                   <Form.Group as ={Col} md="6">
//                     <Form.Label>Module-4</Form.Label>
//                     <Form.Select 
//                     required
//                     type="text"
//                     value={module4}
//                     onChange={(e)=>setModule4(e.target.value)}
//                     >
//                       <option>Select</option>
//                       <option>OnBoarding Form</option>
//                       <option>All Employees</option>
//                       <option>Departments</option>
//                       <option>Designations</option>
                      
//                     </Form.Select>

//                   </Form.Group>
//                   <Form.Group as ={Col} md="6">
//                     <Form.Label>Module-5</Form.Label>
//                     <Form.Select 
//                     required
//                     type="text"
//                     value={module5}
//                     onChange={(e)=>setModule5(e.target.value)}
//                     >
//                       <option>Select</option>
//                       <option>OnBoarding Form</option>
//                       <option>All Employees</option>
//                       <option>Departments</option>
//                       <option>Designations</option>
                      
//                     </Form.Select>

//                   </Form.Group>
//                   </Row>
//                   <Stack gap={3}></Stack>
//                   <div class="d-flex justify-content-around">
//                     {/* <Modal.Footer> */}
//                     {/* <div className="form-group"> */}
//                     <div class="col-md-12 text-center">
//                       <Row>
//                         <Col md={12}>
//                           <button
//                             type="submit"
//                             className="btn btn-primary"
//                             style={{
//                               borderRadius: "25px",
//                               backgroundColor: "#ff9b44",
//                               color: "#F4F8F6"
//                             }}
//                           >
//                             Submit
//                           </button>
//                         </Col>
//                       </Row>
//                     </div>
//                     {/* </Modal.Footer> */}
//                   </div>
//                 </Stack>
//               </form>
//             </Modal.Body>
//           </Modal>

//         </Col>
//       </Row>

//         <Row>
//           <Col md={12}>
//             <table class="table">
//               <thead>
//                 <tr>
//                   <th scope="col">Role Id</th>
//                   <th scope="col">Role Name</th>
//                   <th scope="col">Module-1</th>
//                   <th scope="col">Module-2</th>
//                   <th scope="col">Module-3</th>
//                   <th scope="col">Module-4</th>
//                   <th scope="col">Module-5</th>
//                 </tr>
//               </thead>

//               {/* <tbody>
//                 {holiday && holiday.map((h, index) => (
//                   <tr>
//                     <th scope="row">{index + 1}</th>
//                     <td>{h.roleName}</td>
//                     <td>{formatDate(h.holidayDate)}</td>
//                   </tr>
//                 ))}
//               </tbody> */}
//             </table>
//           </Col>
//         </Row>

//     </div>
//   );

// };

// export default AddRole;