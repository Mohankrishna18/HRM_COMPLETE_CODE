// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { Card, Row, Tab, Tabs, Button, Modal } from "react-bootstrap";
// import { BsPlusLg } from "react-icons/bs";
// import AddProject from "./AddProject";
// import RolesTab from "./RolesTab";
// import AssignTeamMembers from "./AssignTeamMembers";
// import TeamMembersTab from "./TeamMembersTab";

// function ProjectTabs(props) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow();
//   const handleShow = () => setShow(true);
//   const [updateLoading, setUpdateLoading] = useState(false);

//   const update_loading = () => {
//     setUpdateLoading(!updateLoading);
//   };
//   return (
//     <div>
//       <Button
//         variant="warning"
//         onClick={handleShow}
//         style={{
//           backgroundColor: "#ff9b44",
//           color: "#F4F8F6",
//           float: "right",
//           borderRadius: "25px",
//           // paddingBottom: "11.5px",
//           // marginTop: "100px",
//         }}
//       >
//         {" "}
//         <BsPlusLg />
//         Add Project
//       </Button>
//       <Modal
//         size="xl"
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton style={{ backgroundColor: "#f5896e" }}>
//           <Modal.Title style={{ backgroundColor: "#FF9E14", color: "white" }}>
//             Add Project
//           </Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Tabs
//             defaultActiveKey="Add Project"
//             transition={true}
//             id="noanim-tab-example"
//             className="mb-3"
//             color="Black"
//             fontColour="white"
//             style={{
//               justifyContent: "left",
//               color: "white",
//               backgroundColor: "white",
//               opacity: 0.95,
//               fontSize: "18px",
//               padding: 0,
//             }}
//           >
//             <Tab
//               eventKey="Add Project"
//               title="Project Details"
//               color="white"
//               style={{ backgroundColor: "white", height: 800 }}
//             >
//               <AddProject fc={props.func} />
//             </Tab>
//             <Tab
//               eventKey="AssignTeamMembers"
//               title="Assign Team Members"
//               style={{ backgroundColor: "white", height: 800 }}
//             >
//               <AssignTeamMembers func={update_loading} />
//             </Tab>
//             <Tab
//               eventKey="Team Members"
//               title="Team Members"
//               style={{ backgroundColor: "white", height: 800 }}
//             >
//               <TeamMembersTab data={updateLoading} />
//             </Tab>
//           </Tabs>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default ProjectTabs;
