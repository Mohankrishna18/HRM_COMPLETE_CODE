// import React from "react";
// import ApproveLeaveTable from "./ManagerApproval";
// import EmployeeLeaveHistory from "../ManagerLeaveHistory/ManagerLeaveHistory";
// import { Row, Col, Card, Container, Tabs, Tab } from "react-bootstrap";
// import ManagerEmployeesLeavesWaitingForApproval from "./ManagerEmployeesLeavesWaitingForApproval";
// import TaskMain from "../TimeSheet/EmployeeTimesheet/TaskMain";
// import ApprovalsMain from "../TimeSheet/irmApproval/ApprovalsMain";
// import IRMResignationMain from "./IRMResignationMain";

// const ManagerLeavesToApproveMain = () => {
//   return (
//     <div style={{ paddingTop: "10px" }}>
//       <Card responsive className="scroll" style={{ backgroundColor: "white" }}>
//         <Card.Header style={{ backgroundColor: "white" }}>
//           <Card.Body style={{ backgroundColor: "white" }}>
//             <Card.Title> Approvals</Card.Title>
        
//             <Row>
//               <Col xs={12}>
//                 <Tabs
//                   defaultActiveKey="Leave Approvals"
//                   id="uncontrolled-tab-example"
//                   className="mb-3"
//                   style={{
//                     justifyContent: "left",
//                     color: "white",
//                     backgroundColor: "white",
//                     fontSize: "19px",
//                     paddingTop: 20,
//                   }}
//                 >
//                   <Tab
//                     eventKey="Leave Approvals"
//                     title="Leave/WFH Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <Card.Header style={{ backgroundColor: "white" }}>
//                       <Card.Body>
//                         <Card.Title>Leaves/WFH Waiting For Approval</Card.Title>
//                         {/* <Card.Subtitle className="mb-2 text-muted">
//                           EmployeeLeaves/WFH
//                         </Card.Subtitle> */}
//                         <Row>
//                           <Col xs={12}>
//                             <ManagerEmployeesLeavesWaitingForApproval/>
//                           </Col>
//                         </Row>
//                         <Row></Row>
//                       </Card.Body>
//                     </Card.Header>

//                   </Tab>
//                   <Tab
//                     eventKey="Timesheet Approvals"
//                     title="Timesheet Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <ApprovalsMain />
//                   </Tab>
//                   <Tab
//                     eventKey="Resignation Approvals"
//                     title="Resignation Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <Card.Header style={{ backgroundColor: "white" }}>
//                       <Card.Body>
//                         <Card.Title>Resignation Approvals</Card.Title>
//                         {/* <Container> */}
//                         <Row>
//                           <Col xs={12}>
//                             <IRMResignationMain />
//                           </Col>
//                         </Row>
//                         <Row></Row>
//                         {/* </Container> */}
//                       </Card.Body>
//                     </Card.Header>
//                   </Tab>
//                 </Tabs>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card.Header>
//       </Card>
     
//     </div>
//   );
// };

// export default ManagerLeavesToApproveMain;

import React, { memo } from "react";
import { Row, Col, Card } from "react-bootstrap"
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ManagerEmployeesLeavesWaitingForApproval from "./ManagerEmployeesLeavesWaitingForApproval";
import ApprovalsMain from "../TimeSheet/irmApproval/ApprovalsMain";
import IRMResignationMain from "./IRMResignationMain";


const ManagerLeavesToApproveMain = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div responsive className='example'>
            <Row>
                <Col>
                    {/* <Card responsive className='example' style={{ marginTop: 0 }}> */}

                        <Card.Body>
                            <Card.Title> Approvals</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">
                             Dashboard
                            </Card.Subtitle> */}
                            {/* <h2 style={{ paddingTop: "1%", paddingLeft: "1%" }}>HR Manager</h2> */}
                            <Card>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} 
                                                 variant="scrollable"
                                                 scrollButtons="auto" indicatorColor="#f5896e" sx={{ "& button.Mui-selected": { background: "white", color: "#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", height: "30px", color:"white" }}>
                                            <Tab label="Leave/WFH Approvals" value="1" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}  ></Tab>
                                            <Tab label="Timesheet Approvals" value="2" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}    />
                                            <Tab label="Resignation Approvals" value="3" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}  />
                                            {/* FcConferenceCall/FcLeave/FcPositiveDynamic/FcConferenceCall/FcLeave/ */}
                                        </TabList>
                                    </Box>
                                    <TabPanel style={{ padding: "10px" }} value="1">
                                    <Card.Header style={{ backgroundColor: "white" }}>
                      <Card.Body>
                        <Card.Title>Leaves/WFH Waiting For Approval</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">
                          EmployeeLeaves/WFH
                        </Card.Subtitle> */}
                        <Row>
                          <Col xs={12}>
                            <ManagerEmployeesLeavesWaitingForApproval/>
                          </Col>
                        </Row>
                        <Row></Row>
                      </Card.Body>
                    </Card.Header>
                                    </TabPanel>
                                    <TabPanel style={{ padding: "10px" }} value="2"> <ApprovalsMain /></TabPanel>
                                    <TabPanel style={{ padding: "10px" }} value="3"> <IRMResignationMain /></TabPanel>
                                </TabContext>
                            </Box>
                            </Card>
                        </Card.Body>
                    {/* </Card> */}

                </Col>
            </Row>

        </div>
    );
};
export default ManagerLeavesToApproveMain;
