// import Button from "react-bootstrap/esm/Button";
// import { Modal } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BsPlusLg } from "react-icons/bs";
// import axios from "../../../Uri";
// import { Table, Container, Row, Col } from "react-bootstrap";
// // import EditDepartment from "./EditDepartment";
// import { MdDelete } from "react-icons/md";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
// // import Form from "react-bootstrap/Form";

// import { AiFillEdit } from "react-icons/ai";

// function DepartmentModal() {
//   const [lgShow, setLgShow] = useState(false);
//   const [departmentName, setDepartmentName] = useState("");
//   const [updateid,setUpdateid]=useState('')

//   const handleClosee = () => setLgShow(false);

//   console.log(updateid)
//   const handleSubmitt = async (e,updateid) => {
//     // e.preventDefault();
//     handleClosee();
//     console.log(departmentName);
//     //setDeptId(id)
//     console.log(e)
//     console.log(updateid)
//     try{
//       const res = await axios.put(`/dept/update/${updateid}`, { departmentName })
//     loadData();
//     }
//     catch(error){
//       console.log("Something Went wrong")
//     }
    
//     // if (res.data !== null) {
//     //   // console.log(res.data);
//     // } else {
//     //   // console.log("");
//     // }
//     // console.log(res.data);
//     notify();

//   };
//   const notify = () => toast("Department is added");
//   const [departments, setDepartments] = useState([]);

//   const [xsShow, setxsShow] = useState(false);

//   useEffect(() => {

//     loadData();

//   }, []);

//   const loadData = async () => {
//     const res = await axios.get("/dept/getAllDepartments");
//     setDepartments(res.data);
//      console.log(res.data);
//   };


//   const handleClose = () => setxsShow(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     handleClose();
//     // console.log(departmentName);
//     const res = await axios.post("/dept/postDepartmentMaster", {
//       departmentName,
//     });
//     loadData();

//     if (res.data !== null) {
//       // console.log(res.data);
//     } else {
//       // console.log("");
//     }
//     // console.log(res.data);
//     notify();


//   };

//   const deleteDepartment = async (departmentId) => {
//     console.log(departmentId)
//     await axios.delete(`/dept/deleteDepartment/${departmentId}`);
//     loadData();
//     // notify();
//   };
//   const showmodal=(departmentId)=>{
//     setLgShow(true)
//     console.log(departmentId)
//     setUpdateid(departmentId)
//   }
//   console.log(updateid)

//   return (
//     <div className="pb-5 me-3">
//       <Container-fluid>
//         <Button
//           onClick={() => setxsShow(true)}
//           className="rounded-pill"
//           variant="warning"
//           style={{
//             backgroundColor: "#FF6200",
//             color: "white",
//             float: "right",
//           }}
//         >
//           {" "}
//           <BsPlusLg /> Add Department
//         </Button>

//         <div style={{ justifyItems: "center" }}>
//           <Modal
//             size="xs"
//             show={xsShow}
//             onHide={() => setxsShow(false)}
//             aria-labelledby="example-modal-sizes-title-xs"
//             centered
//           >
//             <div class="col-md-12 text-center">
//               <Modal.Header closeButton class="btn btn-default btn-circle">
//                 <Modal.Title
//                   id="example-modal-sizes-title-lg"
//                   style={{
//                     display: "flex",
//                     justifyContent: "centered",
//                     alignItems: "centered",
//                   }}
//                 >
//                   Add Department
//                 </Modal.Title>
//               </Modal.Header>
//             </div>
//             <Modal.Body>
//               <Form>
//                 <Form.Group
//                   className="mb-3"
//                   controlid="exampleForm.ControlInput1"
//                 >
//                   <div class="col-md-12 text-center">
//                     <Form.Label>Department Name</Form.Label>
//                   </div>
//                   <Form.Control
//                     type="text"
//                     autoFocus
//                     value={departmentName}
//                     onChange={(e) => setDepartmentName(e.target.value)}
//                   />
//                 </Form.Group>
//               </Form>
//               <div class="text-center">
//                 <Button
//                   variant="warning"
//                   className="rounded-pill"
//                   style={{
//                     backgroundColor: "#FF6200",
//                     color: "white",
//                     float: "center",
//                   }}
//                   onClick={handleSubmit}
//                 >
//                   Submit
//                 </Button>
//               </div>
//             </Modal.Body>
//           </Modal>
//           <Modal
//             size="xs"
//             show={lgShow}
//             onHide={() => setLgShow(false)}
//             aria-labelledby="example-modal-sizes-title-lg"
//             centered
//           >
//             <Modal.Header closeButton>
//               <Modal.Title id="example-modal-sizes-title-lg">
//                 Edit Department
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form>
//                 <Form.Group className="mb-3" controlid="exampleForm.ControlInput1">
//                   <Form.Label>Department Name</Form.Label>
//                   <Form.Control type="text" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} autoFocus />
//                 </Form.Group>
//               </Form>
//               <div class="text-center">
//                 <Button
//                   variant="warning"
//                   className="rounded-pill"
//                   type="submit"
//                   style={{
//                     backgroundColor: "#FF6200",
//                     color: "white",
//                     float: "center",
//                   }}
//                   // onClick={handleSubmitt}
//                   onClick={handleSubmitt}
//                 >
//                   Save
//                 </Button>
//               </div>
//             </Modal.Body>
//           </Modal>
//         </div>
//       </Container-fluid>
//       <Container-fluid>
//         <Row>
//           <Col>
//             <Table responsive="sm">
//               <thead>
//                 <tr>
//                   <th>Department Id</th>
//                   <th>Department</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {departments.map((department, index) => (
//                   <tr>
//                     <th scope="row">{index + 1}</th>
//                     <td>{department.departmentName}</td>
//                     <td>
//                       {/* <EditDepartment id={department.departmentId} /> */}
//                       <Button
//                         onClick={()=>showmodal(department.departmentId)}
//                         variant="white"
//                         className="rounded-pill"
//                       >
//                         {" "}
//                         <AiFillEdit /> Edit
//                       </Button>
//                     </td>

//                     <Button
//                       className="rounded-pill"
//                       variant="white"
//                       onClick={() => deleteDepartment(department.departmentId)}
//                     >
//                       {" "}
//                       <MdDelete />
//                       Delete
//                     </Button>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container-fluid>
//     </div>
//   );
// }

// export default DepartmentModal;
