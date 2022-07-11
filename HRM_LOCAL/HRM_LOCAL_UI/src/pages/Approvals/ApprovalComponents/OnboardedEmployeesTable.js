// import React, { useState, useEffect } from "react";
// import MaterialTable from "material-table";
// import { Grid } from "@mui/material";
// import { toast } from "react-toastify";

// import axios from "../../../Uri";
// import { date } from "yup";
// import { Button } from "react-bootstrap";
// import { BsPlusLg } from "react-icons/bs";
// import { Link } from "react-router-dom";

// function OnboardedEmployeesTable() {
//   const [status, setStatus] = useState({});
//   const [onboard, setOnboard] = useState([]);
//   const [designation, setDesignation] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(()=>{
//     axios.get("/dept/getAllDepartments").then((res)=>{
//       console.log(res.data)
//       setOnboard(res.data)
//     });
//   }, []);
//   console.log(onboard);

//   const loadDept=() => {
//     onboard.map(row=>status[row.departmentName]=row.departmentName)
//     console.log(status)
//     setStatus(status)
//   }
//   useEffect(()=>{
//     loadDept()
//   })

//   // useEffect(()=>{
//   //   loadData();
//   // },[]);

//     useEffect(()=>{
//       axios.get("/designation/getAllDesignations").then((res)=>{
//         console.log(res.data)
//         setDesignation(res.data)
//     });
//   },[]);
//     const loadDesignation=()=>{
//       designation.map(row=>status[row.designationName]=row.designationName)
//       console.log(status)
//       setStatus(status)
//     };
//     useEffect(() => {
//       loadDesignation()
//     })

//   const columns = [
//     {
//       title: "Onboarding Id",
//       field: "onboardingId",
//       type: "text",
//       editable:"false",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Job Title",
//       field: "jobTitle",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Designation",
//       field: "designation",
//       type: "text",
//       lookup: status,

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Department",
//       field: "department",
//       type: "text",
//       lookup:status,

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "First Name",
//       field: "firstName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Last Name",
//       field: "lastName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Email",
//       field: "email",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "PhoneNumber",
//       field: "phoneNumber",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },

//     {
//       title: "Date of Joining",
//       field: "dateOfJoining",
//         type: 'date',
//         headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Experience",
//       field: "yearsOfExperience",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },

//     {
//       title: "Primary Skills",
//       field: "primarySkills",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Secondary Skills",
//       field: "secondarySkills",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Type Of Employment",
//       field: "employmentType",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },

//   ];

//   useEffect(() => {
//     axios
//       .get("/emp/waitingForApprovelStatus")
//       .then((res) => {
//         setData(res.data.data);
//         console.log(res.data.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (

//     <div >

//     <Grid container >
//       <Grid xs={12}>
//         <MaterialTable
//           title="Onboard Employees"
//           data={data}
//           sx={{ color: "white" }}
//           columns={columns}
//           editable={{
//             // onRowAdd: newData =>

//             //     new Promise((resolve, reject) => {
//             //         setTimeout(() => {
//             //             console.log(newData)
//             //             const res = axios.post("/designation/postDesignationMaster", newData)
//             //             console.log(res)
//             //             setData([...data, newData]);
//             //             loadData();

//             //             resolve();
//             //         }, 1000)
//             //     }),
//             onRowUpdate: (updatedRow, oldRow) =>
//                 new Promise((resolve, reject) => {
//                     console.log(oldRow);
//                     console.log(updatedRow);
//                     const index = oldRow.onboardingId;
//                     console.log(index);
//                     const updatedRows = [...data];
//                     console.log(updatedRows);
//                     updatedRows[oldRow.tableData.id] = updatedRow;
//                     console.log(updatedRows);

//                     setTimeout(() => {

//                         console.log(index)
//                         console.log(updatedRow)
//                         const notify = () => toast("Employee Details was updated")
//                         const res = axios.put(`/updatedOnbordingDataById/${index}`, updatedRow)

//                             .then((resp) => {
//                                 console.log(resp);
//                                 loadData()
//                                 notify();
//                                 setData(updatedRows)
//                                 console.log("updated")
//                             })

//                             .catch((err) => {
//                                 console.log("not updated")
//                                 console.log(err)
//                                 // toast.error("Server error");
//                             });

//                         setData(updatedRows);

//                         // toast.success(" Updated Successfully");
//                         //console.log(updatedRows);
//                         resolve();
//                     });
//                 }),
//               }}

//           options={{
//             exportButton: true,
//             pageSize: 10,
//             actionsColumnIndex: -1,
//             grouping: true,
//             addRowPosition: "first",
//             headerStyle: {
//               backgroundColor: "#FF9E14",
//               color: "white",
//               fontSize: "15px",
//               //height: "10px",
//               //fontWeight: 'bold'
//             },
//             rowStyle: {
//               fontSize: 16,
//             },
//           }}
//         />
//       </Grid>
//     </Grid>
//     </div>
//   );
// }

// export default OnboardedEmployeesTable;

// // import React, { useState, useEffect } from "react";
// // import MaterialTable from "material-table";
// // import Card from "react-bootstrap/Card";
// // import Grid from "@mui/material/Grid";
// // import axios from "../../../Uri";

// // import { Button, Modal } from "react-bootstrap";
// // import ApprovalUpdateForm from "./ApprovalUpdateForm";
// // import AddOnboard from "./AddOnboard";

// // function OnboardedEmployeesTable() {

// //   const [show, setShow] = useState(false);
// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);
// //   const [updateOnboard, setUpdateOnboard] = useState({});

// //   const [data, setData] = useState([]);
// //   const [status, setStatus] = useState(false);
// //   const [onboard, setOnboard] = useState([]);
// //   const [designation, setDesignation] = useState([]);
// //   const pull_data = () => {
// //     setStatus(true);
// //   };

// //   useEffect(() => {
// //     loadData();
// //   }, [status]);

// //   const loadData = async (e) => {
// //     const response = await axios.get("/emp/waitingForApprovelStatus");
// //     setData(response.data.data);
// //     console.log(response.data);
// //   };

// //   const [columns, setColumns] = useState([
// //     {
// //       title: "Onboarding Id",
// //       field: "onboardingId",
// //       editable: false,
// //     },
// //     {
// //       title: "First Name",
// //       field: "firstName",
// //       type: "text",
// //       // validate: (rowData) => {
// //       // if (rowData.firstName === undefined || rowData.firstName === "") {
// //       // return "Please enter first name";
// //       // } else if (rowData.firstName.length < 3) {
// //       // return " first name should contain atleast 3 letters";
// //       // }else if (!rowData.firstName.match(/^[aA-zZ\s]+$/)){
// //       // return "Please enter first name"
// //       // }
// //       // return true;
// //       // },
// //     },

// //     // {
// //     //   title: "Last Name",
// //     //   field: "lastName",
// //     //   type: "text",
// //     //   // validate: (rowData) => {
// //     //   // if (rowData.lastName === undefined || rowData.lastName === "") {
// //     //   // return "Please enter Last name";
// //     //   // } else if (rowData.lastName.length < 3) {
// //     //   // return "lastName must be at least 3 characters ";
// //     //   // }
// //     //   // else if (!rowData.lastName.match(/^[aA-zZ\s]+$/)){
// //     //   // return "Please enter Last name"
// //     //   // }
// //     //   // return true;
// //     //   // },
// //     // },

// //     {
// //       title: "Email",
// //       field: "email",
// //       // validate: (rowData) => {
// //       // if (rowData.email === undefined || rowData.email === "") {
// //       // return "enter valid mail";
// //       // } else if (!rowData.email.includes("@gmail" && ".com")) {
// //       // return "enter valid email (example:chiru@gmail.com)";
// //       // }
// //       // return true;
// //       // },
// //     },

// //     {
// //       title: "Phone Number",
// //       field: "phoneNumber",
// //       type: "number",
// //       // validate: (rowData) => {
// //       // if (rowData.phoneNo === undefined || rowData.phoneNo === "") {
// //       // return "number is Required";
// //       // } else if (rowData.phoneNo.length < 10 || rowData.phoneNo.length > 10) {
// //       // return "Enter 10 digit number";
// //       // }

// //       // return true;
// //       // },
// //     },
// //     {
// //       title: "Date of Joining",
// //       field: "dateOfJoining",
// //       type: "date",
// //       // validate: (rowData) => {
// //       // if (
// //       // rowData.subscriptionStartDate === undefined ||
// //       // rowData.subscriptionStartDate === ""
// //       // ) {
// //       // return "Required";
// //       // }
// //       // return true;
// //       // },
// //     },

// //     {
// //       title: "Job Title",
// //       field: "jobTitle",

// //       // validate: (rowData) => {
// //       // if (
// //       // rowData.subscriptionEndDate === undefined ||
// //       // rowData.subscriptionEndDate === ""
// //       // ) {
// //       // return "Required";
// //       // }
// //       // return true;
// //       // },
// //     },

// //     {
// //       title: "Employeement Type",
// //       field: "employmentType",
// //       // validate: (rowData) =>
// //       // rowData.address === ""
// //       // ? { isValid: false, helperText: "Address cannot be empty" }
// //       // : true,
// //     },

// //     {
// //       title: "Experience",
// //       field: "yearsOfExperience",
// //       // validate: (rowData) => {
// //       // if (rowData.country === undefined || rowData.country === "") {
// //       // return "Required";
// //       // } else if (!rowData.country.match(/^[aA-zZ\s]+$/)) {
// //       // return " Please enter Country name";
// //       // }
// //       // return true;
// //       // },
// //     },

// //     // {
// //     //   title: "UserType",
// //     //   field: "userType",
// //     //   // validate: (rowData) => {
// //     //   // if (rowData.userType === undefined || rowData.userType === "") {
// //     //   // return "Required";
// //     //   // } else if (!rowData.userType.match(/^[aA-zZ\s]+$/)) {
// //     //   // return " Please enter UserType";
// //     //   // }
// //     //   // return true;
// //     //   // },
// //     // },
// //     // {
// //     //   title: "User Name",
// //     //   field: "userName",
// //     //   // validate: (rowData) =>
// //     //   // rowData.userName === ""
// //     //   // ? { isValid: false, helperText: "User name cannot be empty" }
// //     //   // : true,
// //     // },

// //     // {
// //     //   title: "Password",
// //     //   field: "password",
// //     //   // validate: (rowData) => {
// //     //   // if (rowData.password === undefined) {
// //     //   // return " Required";
// //     //   // } else if (
// //     //   // !rowData.password.match(
// //     //   // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,32}$/g
// //     //   // )
// //     //   // ) {
// //     //   // return " Please enter valid password (Example:Chiru@12)";
// //     //   // }
// //     //   // return true;
// //     //   // },
// //     // },
// //     // {
// //     //   title: "Client Id proof",
// //     //   field: "clientIdProof",
// //     //   // validate: (rowData) => {
// //     //   // if (rowData.clientIdProof === undefined || rowData.clientIdProof=== "") {
// //     //   // return " Required";
// //     //   // } else if (!rowData.clientIdProof.match(/^[aA-zZ\s]||[0-9\b]+$/)) {
// //     //   // return " Please enter valid Id";
// //     //   // }
// //     //   // return true;
// //     //   // },
// //     // },
// //   ]);

// //   return (
// //     <div>
// //       <Modal show={show} onHide={handleClose}>
// //       <Modal.Header closeButton>
// //           <Modal.Title>Modal heading</Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           <ApprovalUpdateForm updateOnboard={updateOnboard} />
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={handleClose}>
// //             Close
// //           </Button>
// //           <Button variant="primary" onClick={handleClose}>
// //             Save Changes
// //           </Button>
// //         </Modal.Footer>

// //       </Modal>
// //       <Card
// //         style={{
// //           paddingTop: "20px",
// //           paddingRight: "10px",
// //           paddingLeft: "10px",
// //           paddingBottom: "10px",
// //         }}
// //       >
// //         <h3 align="center" style={{ color: "orange" }}>
// //           Onboarded Employees Table
// //         </h3>
// //         <AddOnboard func={pull_data} />
// //         &nbsp;&nbsp;&nbsp; &nbsp;
// //         <Grid style={{ borderBlockEndWidth: "2px" }}>
// //           <MaterialTable
// //             title="Onboarded Employees Table"
// //             columns={columns}
// //             style={{ color: "black", fontSize: "1rem" }}
// //             data={data}
// //             editable={{
// //               // add data /form
// //               // onRowAdd: (newData) =>
// //               // new Promise((resolve, reject) => {
// //               // setTimeout(async() => {
// //               // console.log(newData);
// //               // const res = await axios.post("/client/saveClient", newData);
// //               // setData([...data, newData]);
// //               // loadData();

// //               // resolve();
// //               // }, 1000);
// //               // }),

// //               // Update/PUT data

// //               // onRowUpdate: (updatedRow, oldRow) =>
// //               //   new Promise((resolve, reject) => {
// //               //     console.log(oldRow);

// //               //     console.log(updatedRow);

// //               //     const index = oldRow.clientId;

// //               //     console.log(index);

// //               //     const updatedRows = [...data];

// //               //     console.log(updatedRows);

// //               //     updatedRows[oldRow.tableData.id] = updatedRow;

// //               //     console.log(updatedRows);

// //               //     setTimeout(() => {
// //               //       console.log(updatedRow);

// //               //       const res = axios

// //               //         .put(`/client/updateClient/${index}`, updatedRow)

// //               //         .then((resp) => {
// //               //           console.log(resp);

// //               //           loadData();
// //               //         })
// //               //         .catch((err) => {
// //               //           console.log("not updated");

// //               //           // toast.error("Server error");
// //               //         });

// //               //       setData(updatedRows);

// //               //       console.log("updated");

// //               //       // toast.success(" Updated Successfully");

// //               //       console.log(updatedRows);

// //               //       resolve();
// //               //     });
// //               //   }),

// //               // Delete Data

// //               // onRowDelete: (oldData) =>
// //               //   new Promise((resolve, reject) => {
// //               //     setTimeout(() => {
// //               //       console.log(oldData);

// //               //       const dataDelete = [...data];

// //               //       const index = oldData.clientId;

// //               //       dataDelete.splice(index, 1);

// //               //       const res = axios
// //               //         .delete(`/client/deleteclient/${index}`)
// //               //         .then((res) => {
// //               //           console.log(res);

// //               //           loadData();
// //               //         });

// //               //       console.log(dataDelete);

// //               //       //setData(dataDelete);

// //               //       resolve();
// //               //     }, 1000);
// //               //   }),
// //             }}
// //             options={{
// //               headerStyle: {
// //                 backgroundColor: "#FF9E14",
// //                 color: "white",
// //                 fontSize: "20px",
// //               },
// //               addRowPosition: "first",
// //               actionsColumnIndex: -1,
// //               grouping: true,
// //               exportButton: true,
// //             }}
// //             actions={[
// //               {
// //                 icon:"button",

// //                 tooltip: "Save User",
// //                 onClick: (event, rowData) =>
// //                   alert("You want to delete " + rowData.firstName),

// //               },
// //             ]}
// //             components={{
// //               Action: (props) => (
// //                 // <Button
// //                 //   onClick={(event) => props.action.onClick(event, props.data)}

// //                 // >
// //                 //   Delete
// //                 // </Button>
// //                 <Button
// //                 onClick={(event)=>{
// //                   setShow(true);
// //                   console.log(props);
// //                   setUpdateOnboard(props.data);
// //                 }}
// //                 >
// //                   Edit
// //                   </Button>
// //               ),
// //             }}
// //           />
// //         </Grid>
// //       </Card>
// //       {/* <Example /> */}
// //     </div>
// //   );
// // }
// // export default OnboardedEmployeesTable;

import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";

import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import ApprovalUpdateForm from "./ApprovalUpdateForm";
import AddOnboard from "./AddOnboard";
import { Tab, Tabs } from "react-bootstrap";
import AditionalDetailsTab from "./AdditionalDetailsTab";
import AddressTab from "./AddressTab";
import EducationalDetailsTab from "./EducationalDetailsTab";
import ExperienceTab from "./ExperienceTab";
import PersonalDetailsTab from "./PersonalDetailsTab";
// import ApprovalView from "./ApprovalView";

function OnboardedEmployeesTable() {
  const [show, setShow] = useState(false);
  const [viewShow, setViewShow] = useState(false);

  const handleClose = () => setShow(false);
  const viewHandleClose = () => setViewShow(false);

  const handleShow = () => setShow(false);
  const viewHandleShow = () => setShow(false);

  const [updateOnboard, setUpdateOnboard] = useState({});
  const [viewOnboard, setViewOnboard] = useState({});

  const [data, setData] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);

  const pull_dataAdd = () => {
    setAddStatus(!addStatus);
  };

  const pull_dataUpdate = () => {
    setUpdateStatus(!updateStatus);
  };

  useEffect(() => {
    loadData();
  }, [addStatus, updateStatus]);
  // useEffect(() => {
  //   loadData();
  // }, [viewStatus]);

  const loadData = async (e) => {
    const response = await axios.get("/emp/waitingForApprovelStatus");
    setData(response.data.data);
    console.log(response.data);
  };

  const [columns, setColumns] = useState([
    // {
    //   title: "Onboarding Id",
    //   field: "onboardingId",
    //   editable: false,
    // },
    {
      title: "Full Name",
      field: "firstName",
      type: "text",
    },

    {
      title: "Email",
      field: "email",
    },

    {
      title: "Phone Number",
      field: "phoneNumber",
      type: "number",
    },
    {
      title: "Date of Joining",
      field: "dateOfJoining",
      type: "date",
    },

    {
      title: "Job Title",
      field: "jobTitle",
    },

    {
      title: "Employment Type",
      field: "employmentType",
    },

    {
      title: "Experience",
      field: "yearsOfExperience",
    },
    {
      title: "Status",
      field: "status",
    },
  ]);

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApprovalUpdateForm
            updateOnboard={updateOnboard}
            func={pull_dataUpdate}
            handleClose={handleClose}
          />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      <Modal show={viewShow} onHide={viewHandleClose} size="lg">
        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
          <Modal.Title>Onboarding Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}

          <Tabs
            defaultActiveKey="Personal Details"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
            style={{
              justifyContent: "center",
              color: "white",
              backgroundColor: "white",
              fontSize: "16px",
              padding: 10,
            }}
          >
            <Tab
              eventKey="Personal Details"
              title="Personal Details"
              style={{ backgroundColor: "white" }}
            >
              <PersonalDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab>
            <Tab
              eventKey="Address"
              title="Address"
              style={{ backgroundColor: "white" }}
            >
              <AddressTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab>
            <Tab
              eventKey="Additional Details"
              title="Additional Details"
              style={{ backgroundColor: "white" }}
            >
              <AditionalDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab>
            {/* <Tab
              eventKey="Employment Details"
              title="Employment Details"
              style={{ backgroundColor: "white" }}
            >
              <EmploymentDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab> */}
            <Tab
              eventKey="Education"
              title="Education"
              style={{ backgroundColor: "white" }}
            >
              <EducationalDetailsTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab>
            <Tab
              eventKey="Experience"
              title="Experience "
              style={{ backgroundColor: "white" }}
            >
              <ExperienceTab viewOnboard={viewOnboard} viewHandleClose={viewHandleClose}/>
            </Tab>
           
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={viewHandleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>

      <Card
        style={{
          paddingTop: "20px",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>Onboardings</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Jobs / Shortlisted Candidates{" "}
              </Card.Subtitle>
            </Col>
            <Col>
              <AddOnboard func={pull_dataAdd} />
            </Col>
          </Row>
        </Card.Body>

        <Grid style={{ borderBlockEndWidth: "2px" }}>
          <MaterialTable
            title="Onboarded Shortlisted Candidates"
            columns={columns}
            style={{ color: "black", fontSize: "1rem" }}
            data={data}
            editable={{}}
            options={{
              headerStyle: {
                backgroundColor: "#FF9E14",
                color: "white",
                fontSize: "20px",
              },
              addRowPosition: "first",
              actionsColumnIndex: -1,
              // grouping: true,
              exportButton: true,
            }}
            actions={[
              {
                icon: "button",

                tooltip: "Save User",
                onClick: (event, rowData) =>
                  alert("You want to delete " + rowData.firstName),
              },
            ]}
            components={{
              Action: (props) => (
                <div>
                  {props.data.status == "80%" ? (<Stack direction="horizontal" gap={3}>
                    <Button
                      variant="info"
                      onClick={(event) => {
                        setShow(true);
                        console.log(props);
                        setUpdateOnboard(props.data);
                      }}
                    >
                      <FiEdit />
                    </Button>{" "}
                    
                    <Button
                      variant="primary"
                      onClick={(event) => {
                        setViewShow(true);
                        console.log(props);
                        setViewOnboard(props.data);
                      }}
                    >
                      <BsFillEyeFill />
                    </Button>
                  </Stack>):
                  ( <Button
                    variant="primary"
                    onClick={(event) => {
                      setViewShow(true);
                      console.log(props);
                      setViewOnboard(props.data);
                    }}
                  >
                    <BsFillEyeFill />
                  </Button>)}
                  
                </div>
              ),
            }}
          />
        </Grid>
      </Card>
      {/* <Example /> */}
    </div>
  );
}
export default OnboardedEmployeesTable;
