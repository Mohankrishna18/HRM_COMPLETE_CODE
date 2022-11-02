import React, { memo } from "react";
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HiringsTab from "./HiringsTab";
import { FcAssistant, FcCollaboration, FcConferenceCall, FcLeave, FcManager, FcNegativeDynamic, FcNeutralTrading, FcPositiveDynamic } from "react-icons/fc";
import AllEmployees from "./Employee/AllEmployees";
import EmployeeAttendenceMain from "../../EmployeeAttendancee/EmployeeAttendenceMain";
import ClientandLeadTab from "./ClientandLeadTab";


import ResignationTab from "./ResignationTab";
import PMO_Dashboard from "../../Recruitment-Tracker/RequisitionDashboard/PMO_Dashboard/PMO_Dashboard";
import HrProjectsTab from "./HrProjectsTab";


const HrDashboardTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Row>
                <Col>
                    <Card responsive className='example' style={{ marginTop: 0 }}>

                        <Card.Body>
                            <Card.Title> Dashboard</Card.Title>
                            {/* <Card.Subtitle className="mb-2 text-muted">
                             Dashboard
                            </Card.Subtitle> */}
                            {/* <h2 style={{ paddingTop: "1%", paddingLeft: "1%" }}>HR Manager</h2> */}
                            <Box sx={{ width: '100%', typography: 'body1', paddingTop: "15px" }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} sx={{"& button.Mui-selected":{background: "#a3c2e3",color:"black"}}} aria-label="lab API tabs example"style={{background: "#354e69",borderRadius:"3px",height:"60px",color:"white"}}>
                                            <Tab label="Hirings" value="1" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcPositiveDynamic style={{fontSize:"20px"}} />}></Tab>
                                            <Tab label="Employees" value="2" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcConferenceCall style={{fontSize:"20px"}}/>} />
                                            <Tab label="Attendance" value="3" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcLeave style={{fontSize:"20px"}}/>}/>
                                            <Tab label="Resignations" value="4" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcNegativeDynamic style={{fontSize:"20px"}} />}></Tab>
                                            <Tab label="Clients & Leads" value="5" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcManager style={{fontSize:"20px"}}/>} />
                                            <Tab label="Jobs" value="6" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcCollaboration style={{fontSize:"20px"}}/>}/>
                                            <Tab label="Projects" value="7" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"14px"}} iconPosition="start" icon={<FcNeutralTrading style={{fontSize:"20px"}}/>}/>                                            
                                        </TabList>
                                    </Box>
                                    <TabPanel style={{padding:"10px"}} value="1"><HiringsTab/></TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="2"><AllEmployees /></TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="3"><EmployeeAttendenceMain/></TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="4"><ResignationTab/> </TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="5"><ClientandLeadTab/> </TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="6"><PMO_Dashboard/> </TabPanel>
                                    <TabPanel style={{padding:"10px"}} value="7"><HrProjectsTab/> </TabPanel>
                                </TabContext>
                            </Box>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

        </div>
    );
};
export default HrDashboardTabs;
