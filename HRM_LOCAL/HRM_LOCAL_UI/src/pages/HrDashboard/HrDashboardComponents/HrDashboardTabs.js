import React, { memo } from "react";
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import HiringsTab from "./HiringsTab";
import { FcAssistant, FcConferenceCall, FcLeave, FcPositiveDynamic } from "react-icons/fc";
import EmployeeMain from "./Employee/EmployeeeMain";


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
                            <Card.Subtitle className="mb-2 text-muted">
                                HR Dashboard
                            </Card.Subtitle>
                            <h2 style={{ paddingTop: "1%", paddingLeft: "1%" }}>HR Manager</h2>
                            <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example" style={{backgroundColor:"#c7c6c5",borderRadius:"10px"}}>
                                            <Tab label="Hirings" value="1" icon={<FcPositiveDynamic style={{fontSize:"25px"}}/>}></Tab>
                                            <Tab label="Employees" value="2" icon={<FcConferenceCall style={{fontSize:"25px"}}/>} />
                                            <Tab label="Leaves" value="3" icon={<FcLeave style={{fontSize:"25px"}}/>}/>
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1"><HiringsTab/></TabPanel>
                                    <TabPanel value="2"><EmployeeMain/></TabPanel>
                                    <TabPanel value="3">Leaves</TabPanel>
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