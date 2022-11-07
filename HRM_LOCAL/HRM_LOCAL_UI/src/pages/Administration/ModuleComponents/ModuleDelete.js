import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "../../../Uri";

const ModuleDelete = (props) => {
  console.log(props.deleteOnboard);

  const deleteuser = async () => {
    try {
      const res = await axios
        .delete(
          `/user/DeleteModuleDataByModuleID/${props.deleteOnboard.moduleId}`
        )
        .then((deletedResponse) => {
          const user = deletedResponse.data;
          console.log(deletedResponse);
          if (true) {
            props.func();
          } else {
            console.log("Props not Send");
          }
          toast.success("Module deleted successfully!!!");
          //
        });
      // console.log(res)
      // if (res.data.status) {
      //     props.func();
      // }
      // else{
      //     console.log("Props Not Send");
      //   }
      //   toast.success("User deleted successfully!!!");

      //   setTimeout(5000);
      //   handleClose();
      //   toast.error("Something Went Wrong");
    } catch (error) {
      console.log(error);
    }
    props.deleteHandleClose();
  };
  return (
    <div>
      <Row>
        <Col>
          <Row>
            <Col style={{ paddingLeft: "10px" }}>
              {" "}
              Are you sure that you want to delete{" "}
              {props.deleteOnboard.moduleName}?
            </Col>
          </Row>
          <Row style={{ paddingLeft: "40%", marginTop: "5%" }}>
            <Col>
              <Button
                onClick={deleteuser}
                style={{ backgroundColor: "#f5896e",borderColor: "#f5896e",width: "40%", height: "120%" }}
              >
                Yes
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ModuleDelete;

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

// const ModuleTable = () => {
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
//       setHoliday(res.data.data);
//     });
//   };

//   const notify = () => toast("Holiday is added");

//   const [show, setShow] = useState(false);
//   const [holiday, setHoliday] = useState([]);
//   const validationSchema = Yup.object().shape({
//     holidayTitle: Yup.string()
//       .matches(/^[aA-zZ\s]+$/, "Invalid Name ")
//       .required("holidayTitle is required"),
//     holidayDate: Yup.string().required("Holiday Date is required"),
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
//             Add Module
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
//               <Modal.Title>Add Module</Modal.Title>
//               <Modal.Header closeButton></Modal.Header>
//             </div>
//             <Modal.Body>
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <Stack gap={3}>
//                   <div className="form-group">
//                     <Stack gap={3}>
//                       <Row>
//                         <Col md={12}>
//                           <label>Module Name</label>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col md={12}>
//                           <input
//                             name="holidayTitle"
//                             type="text"
//                             {...register("holidayTitle")}
//                             className={`form-control ${
//                               errors.holidayTitle ? "is-invalid" : ""
//                             }`}
//                           />
//                           <div className="invalid-feedback">
//                             {errors.holidayTitle?.message}
//                           </div>
//                         </Col>
//                       </Row>
//                     </Stack>
//                   </div>

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
//                               color: "#F4F8F6",
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
//       <Container>
//         <Row>
//           <Col md={12}>
//             <table class="table">
//               <thead>
//                 <tr>
//                   <th scope="col">SNo</th>
//                   <th scope="col">Module Name</th>

//                 </tr>
//               </thead>

//               <tbody>
//                 {holiday &&
//                   holiday.map((h, index) => (
//                     <tr>
//                       <th scope="row">{index + 1}</th>
//                       <td>{h.holidayTitle}</td>
//                       <td>{formatDate(h.holidayDate)}</td>
//                     </tr>
//                   ))}
//               </tbody>
//             </table>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ModuleTable;
