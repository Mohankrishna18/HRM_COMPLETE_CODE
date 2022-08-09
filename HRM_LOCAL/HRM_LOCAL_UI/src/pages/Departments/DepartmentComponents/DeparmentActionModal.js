// import Button from "react-bootstrap/esm/Button";
// import Modal from "react-bootstrap/Modal";
// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";

// function ActionModal() {
//   const [xsShow, setxsShow] = useState(false);
//   const handleClose = () => setxsShow(false);

//   return (
//     <div>
//       <Button
//         onClick={() => setxsShow(true)}
//         className="rounded-pill"
//         variant="warning"
//         style={{
//           backgroundColor: "#24A0ED",
//           color: "white",
//           float: "right",
//         }}
//       >
//         Edit/Delete
//       </Button>
//       <div style={{ justifyItems: "center" }}>
//         <Modal
//           size="xs"
//           show={xsShow}
//           onHide={() => setxsShow(false)}
//           aria-labelledby="example-modal-sizes-title-xs"
//           centered
//         >
//           <Modal.Header closeButton>
//             <Modal.Title
//               id="example-modal-sizes-title-xs"
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <div justifyContent="text-center">Edit Department</div>
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group
//                 className="mb-3"
//                 controlId="exampleForm.ControlInput1"
//               >
//                 <Form.Label>Department Name</Form.Label>
//                 <Form.Control type="text" autoFocus />
//               </Form.Group>
//             </Form>
//             <div class="text-center">
//               <Button
//                 variant="warning"
//                 className="rounded-pill"
//                 style={{
//                   backgroundColor: "#006600",
//                   color: "white",
//                   float: "center",
//                 }}
//                 onClick={handleClose}
//               >
//                 Save
//               </Button>
//               <Button
//                 variant="warning"
//                 className="rounded-pill"
//                 style={{
//                   backgroundColor: "#FF6200",
//                   color: "white",
//                   float: "center",
//                 }}
//                 onClick={handleClose}
//               >
//                 Delete
//               </Button>
//             </div>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </div>
//   );
// }

// export default ActionModal;
