// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { Card, FormControl, Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import axios from "../Uri";
// import { FaFontAwesome } from "react-icons/fa";
// import { Row, Col } from "react-bootstrap";

// import { BsArrowBarRight, BsArrowRightCircleFill, BsPlusLg, BsReverseBackspaceReverse } from "react-icons/bs";

// import { toast } from "react-toastify";

// import MaterialTable from "material-table";
// import Grid from "@mui/material/Grid";

// import Calendar from "react-calendar";
// import moment from "moment";
// import "react-calendar/dist/Calendar.css";
// import "react-toastify/dist/ReactToastify.css";

// function ResignationMain() {

//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});
//   const [dates, setDates] = useState([]);
//   const [marks, setMarks] = useState([]);
//   const [btwnDates, setBtwnDates] = useState([]);
//   const [bdates, setBDates] = useState([]);
//   const [color, setColor] = useState([]);
//   const [state, setState] = useState(false);
//   const [show, setShow] = useState(false);

//   const [columns, setColumns] = useState([
//     { title: "Employee-ID", field: "employeeId" },
//     { title: "Resigning Employee", field: "resigningEmployee" },
//     { title: "Department", field: "resigningEmployee" },
//     { title: "Reason", field: "reason" },
//     {
//       title: "Notice Date",
//       field: "noticeDate",
//       type: "date",
//       dateSetting: { locale: "en-GB" },
//     },
//     {
//       title: "Resignation Date",
//       field: "resignationDate",
//       type: "date",
//       dateSetting: { locale: "en-GB" },
//     },

//   ]);

//   // const initialValues = {
//   //   // employeeId: getEmployeeDetails.employeeId,
//   //   leaveType,
//   //   fromDate,
//   //   toDate,
//   //   leaveReason,
//   //   remainingLeaves,
//   //   numberOfDays,
//   //   setDays,
//   // };

//   // const handleButtonClick = async (e) => {
//   //   console.log("button clicked 123");
//   //   e.preventDefault();
//   //   console.log(initialValues);
//   //   const data = Object.assign(initialValues, obj);
//   //   const data1 = Object.assign(data, obj1);
//   //   const data2 = Object.assign(data1, obj2);

//   //   console.log(data2);
//   //   console.log(data);
//   //   try {
//   //     const res = await axios.post("/leave/applyLeave", data);
//   //     console.log("response", res.data);
//   //     setBetweenDates(res.data);
//   //     if (res.status === 200) {
//   //       console.log("success");
//   //       notifySuccess("Leave Applied Successfully");
//   //       loadTable();
//   //       colorDates();
//   //     }
//   //   } catch (err) {
//   //     console.log(err);
//   //     notifyError("Leave Already Applied");
//   //   }
//   //   setDay("");
//   //   setFromDate("");
//   //   setState("");
//   //   handleClose();
//   // };

//   const handleClose = () => {
//     setShow();
//     setDay("");
//     setFromDate("");
//     setState("");
//   };

//   const handleShow = () => setShow(true);

//   return (
//     <div>

//       <Card bg="white">
//         <Row>
//           <Col xs={6} md={8}>
//             <Card.Body>
//               <Card.Title>Resignation</Card.Title>
//               <Card.Subtitle className="mb-2 text-muted">
//                 Dashboard/Resignation
//               </Card.Subtitle>
//             </Card.Body>
//           </Col>

//           <Col>
//             <div class="p-3">
//               <Button
//                 variant="warning"
//                 onClick={handleShow}
//                 style={{
//                   backgroundColor: "#ff9b44",
//                   color: "#F4F8F6",
//                   float: "right",
//                   borderRadius: "25px",
//                   paddingBottom: "11.5px",
//                   paddingTop: "11.5px",
//                 }}
//               >
//                 {" "}
//                 <BsArrowRightCircleFill style={{marginRight:"10px"}} />

//                 Apply Resignation
//               </Button>
//             </div>
//           </Col>
//         </Row>

//       </Card>
//       <Modal
//         size="lg" centered
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton style={{ backgroundColor: "#FE924A" }}>
//           <Modal.Title>Apply Resignation</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Form
//             // ref={forms}
//             className="formone"
//             style={{ padding: 10, paddingLeft: "70px", paddingRight: "70px" }}
//             // onSubmit={handleButtonClick}
//           >
//             <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                       <Form.Label>Resigning Employee *</Form.Label>
//                       <Form.Control
//                         required
//                         className="resigningEmployee"
//                         type="text"
//                         controlId="resigningEmployee"
//                         placeholder="Resigning Employee"
//                         // onChange={(event) => setFirstName(event.target.value)}
//                         // value={form.firstName}
//                         // maxLength={30}
//                         // onChange={(e) => setField("firstName", e.target.value)}
//                         // isInvalid={!!errors.firstName}
//                       ></Form.Control>
//                       {/* <Form.Control.Feedback type="invalid">
//                         {errors.firstName}
//                       </Form.Control.Feedback> */}
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                       <Form.Label>Notice Date *</Form.Label>
//                       <Form.Control
//                         required
//                         className="noticeDate"
//                         type="Date"
//                         controlId="noticeDate"
//                         placeholder="Notice Date"
//                         // onChange={(event) => setFirstName(event.target.value)}
//                         // value={form.firstName}
//                         // maxLength={30}
//                         // onChange={(e) => setField("firstName", e.target.value)}
//                         // isInvalid={!!errors.firstName}
//                       ></Form.Control>
//                       {/* <Form.Control.Feedback type="invalid">
//                         {errors.firstName}
//                       </Form.Control.Feedback> */}
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                       <Form.Label>Resignation Date *</Form.Label>
//                       <Form.Control
//                         required
//                         className="resignationDate"
//                         type="Date"
//                         controlId="resignationDate"
//                         placeholder="Resignation Date"
//                         // onChange={(event) => setFirstName(event.target.value)}
//                         // value={form.firstName}
//                         // maxLength={30}
//                         // onChange={(e) => setField("firstName", e.target.value)}
//                         // isInvalid={!!errors.firstName}
//                       ></Form.Control>
//                       {/* <Form.Control.Feedback type="invalid">
//                         {errors.firstName}
//                       </Form.Control.Feedback> */}
//                     </Form.Group>

//                     <Form.Group as={Col} md="6" style={{ padding: 10 }}>
//                       <Form.Label>Reason *</Form.Label>
//                       <Form.Control
//                         required
//                         className="reason"
//                         type="text"
//                         as="textarea"
//                         rows ={2}
//                         controlId="reason"
//                         placeholder="Reason"
//                         // onChange={(event) => setFirstName(event.target.value)}
//                         // value={form.firstName}
//                         // maxLength={30}
//                         // onChange={(e) => setField("firstName", e.target.value)}
//                         // isInvalid={!!errors.firstName}
//                       ></Form.Control>
//                       {/* <Form.Control.Feedback type="invalid">
//                         {errors.firstName}
//                       </Form.Control.Feedback> */}
//                     </Form.Group>

//               <div class="col-md-12 text-center">
//                 <Button
//                   style={{ backgroundColor: "#FF9B44", borderRadius: "15px" }}
//                   type="submit"
//                   // onClick={handleClose}
//                 >
//                   Submit
//                 </Button>
//               </div>
//               {/* </Form.Group> */}

//           </Form>
//         </Modal.Body>
//       </Modal>

//       <Grid>
//         <MaterialTable
//           title=""
//           columns={columns}
//           // data={data}
//           options={{
//             paging: true,
//             addRowPosition: "first",
//             actionsColumnIndex: -1,
//             headerStyle: {
//               backgroundColor: "#FE924A",

//               color: "white",
//             },
//             exportButton: true,
//           }}
//         />
//       </Grid>
//     </div>
//   );
// }

// export default ResignationMain;

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import AddResignation from "./AddResignation";

const ResignationMain = () => {
  return (
    <div>
      <Card bg="white">
        <Row>
          <Col>
            <Card.Body>
              <Card.Title>Resignation</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Dashboard/Resignation
              </Card.Subtitle>
            </Card.Body>
            <AddResignation />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ResignationMain;
