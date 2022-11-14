// import React from "react";

// import { Row, Col, Card, Container, Tabs, Tab } from "react-bootstrap";
// import HrEmployeesLeavesWaitingForApproval from "../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval";
// import TaskMain from "../TimeSheet/EmployeeTimesheet/TaskMain";
// import TAAHeadApproval from "./TAAHeadApproval";

// function TAAHeadMain() {
//   return (
//     <div style={{ paddingTop: "0px" }}>
//       <Card className="scroll">
        
//           <Card.Header style={{backgroundColor:"white"}}> 
//             <Card.Body>
//               <Card.Title>Approvals</Card.Title>
             
//               {/* <Container> */}
//               <Row>
//                 <Col xs={12}>
                  
//                 {/* <TAAHeadApproval /> */}
//                   <Tabs
//                     defaultActiveKey="Onboarding Approvals"
//                     id="uncontrolled-tab-example"
//                     className="mb-3"
//                     style={{
//                       justifyContent: "left",
//                       color: "white",
//                       backgroundColor: "white",
//                       fontSize: "19px",
//                       padding: 0,
//                     }}
//                   >
//                     <Tab
//                       eventKey="Onboarding Approvals"
//                       title="Onboarding Approvals"
//                       style={{ backgroundColor: "white" }}
//                     >
//                       {/* <TAAHeadApproval /> */}
//                       <HrEmployeesLeavesWaitingForApproval/>
//                     </Tab>
//                     <Tab
//                       eventKey="Leave Approvals"
//                       title="Leave Approvals"
//                       style={{ backgroundColor: "white" }}
//                     >
//                       <HrEmployeesLeavesWaitingForApproval /> 
//                     </Tab>
//                     <Tab
//                       eventKey="Timesheet Approvals"
//                       title="Timesheet Approvals"
//                       style={{ backgroundColor: "white" }}
//                     > 
//                       <TaskMain />
//                     </Tab>
//                   </Tabs>
//                 </Col>
//               </Row>
//               {/* </Container> */}
//             </Card.Body>
//           </Card.Header>
//         </Card>
    
//     </div>
//   );
// }

// export default TAAHeadMain;


import React, { memo } from "react";
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
// import HrEmployeesLeavesWaitingForApproval from "../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval";
import TaskMain from "../TimeSheet/EmployeeTimesheet/TaskMain";
import TAAHeadApproval from "./TAAHeadApproval";
import ManagerEmployeesLeavesWaitingForApproval from "../ManagerLeavesToApprove/ManagerEmployeesLeavesWaitingForApproval";


const TAAHeadMain = () => {

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
                                            <Tab label="Onboarding Approvals" value="1" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }} ></Tab>
                                            <Tab label="Leave Approvals" value="2" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}/>
                                            <Tab label="Timesheet Approvals" value="3" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }} />
                                            {/* FcConferenceCall/FcLeave/FcPositiveDynamic/FcConferenceCall/FcLeave/ */}
                                        </TabList>
                                    </Box>
                                    <TabPanel style={{ padding: "10px" }} value="1"> <TAAHeadApproval/></TabPanel>
                                    <TabPanel style={{ padding: "10px" }} value="2"><ManagerEmployeesLeavesWaitingForApproval/></TabPanel>
                                    <TabPanel style={{ padding: "10px" }} value="3"><TaskMain /></TabPanel>
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
export default TAAHeadMain;
