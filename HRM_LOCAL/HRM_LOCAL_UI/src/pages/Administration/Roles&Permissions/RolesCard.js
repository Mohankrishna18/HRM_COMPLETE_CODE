// import React, { useState } from "react";
// import { Card, ListGroup } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { Row, Col, Modal } from "react-bootstrap";
// import { BsPlusLg } from "react-icons/bs";

// function RolesCard() {
//   const [lgShow, setLgShow] = useState(false);
//   const handleClose = () => setLgShow(false);
//   return (
//     <div>
//       <Form
//         style={{ padding: 40, paddingLeft: 100, paddingTop: "35px" }}
//         as={Col}
//         md="4"
//       >
//         <Button
//           onClick={() => setLgShow(true)}
//           variant="warning"
//           style={{
//             width: "300px",
//             color: "#F4F8F6",
//             backgroundColor: "#FF9B44",
//             float: "left",
//           }}
//         >
//           {" "}
//           <BsPlusLg /> Add Role
//         </Button>
//         <Modal
//           size="ms"
//           show={lgShow}
//           onHide={() => setLgShow(false)}
//           aria-labelledby="example-modal-sizes-title-lg"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title id="example-modal-sizes-title-lg">
//               Add Role
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form className="formLabel" style={{ padding: 9 }}>
//               <Row className="mb-5">
//                 <Form.Group
//                   as={Col}
//                   md="12"
//                   style={{ padding: 7 }}
//                   controlId="validationCustom01"
//                 >
//                   <Form.Label>Role Name</Form.Label>
//                   <Form.Control required type="text" placeholder="Role name" />
//                 </Form.Group>
//               </Row>
//             </Form>

//             <div class="text-center">
//               <Button
//                 variant="warning"
//                 className="rounded-pill"
//                 style={{ color: "#F4F8F6", backgroundColor: "#FF9B44" }}
//                 onClick={handleClose}
//               >
//                 Submit
//               </Button>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </Form>

//       <Form
//         style={{ padding: 40, paddingLeft: 220, paddingTop: "35px" }}
//         as={Col}
//         md="4"
//       >
//         <Card style={{ width: "25rem", paddingTop: "20" }}>
//           <Card.Header style={{ backgroundColor: "#FF9B44 " }}>
//             Roles
//           </Card.Header>
//           <ListGroup variant="flush">
//             <ListGroup.Item>CEO                                   </ListGroup.Item>
//             <ListGroup.Item>Admin</ListGroup.Item>
//             <ListGroup.Item>Software Developer</ListGroup.Item>
//             <ListGroup.Item>Software Engineer</ListGroup.Item>
//             <ListGroup.Item>Hr Recuiter</ListGroup.Item>
//             <ListGroup.Item>Finance Analyst</ListGroup.Item>
//             <ListGroup.Item>Manager</ListGroup.Item>
//           </ListGroup>
//         </Card>
//       </Form>
//     </div>
//   );
// }

// export default RolesCard;
