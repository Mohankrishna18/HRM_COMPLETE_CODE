import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { FcAcceptDatabase, FcAssistant, FcFlowChart } from 'react-icons/fc';
import axios from "../../../../Uri"
import AllEmployees from '../Employee/AllEmployees';
import Departments from './Departments';



function EmployeeMain(props) {

    const [data, setData] = useState([]);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        axios
            .get("/emp/getAllEmployeeMasterData")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
                console.log(res.data.data.employeeid);
            })
            .catch((err) => {
                console.log(err);
                // toast.error("Server Error")
            });
    }, []);
    console.log(data);
    console.log(data.length)

    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        axios.get("/dept/getAllDepartments").then((response) => {
            setDepartments(response.data);
        });
        console.log(departments)
        // .catch(() => {
        //   toast.error("Data is not getting");
        // });
        // console.log(departments)
    }, []);



    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                {/* <Row style={{ paddingBottom: "10px" }}>
                    <Col md="3">
                        <Card style={{ padding: "15px", textAlign: "center" }}><h5>Total Employees : {data.length}</h5></Card>
                    </Col>
                    <Col md="2">
                        <DropdownList
                            // defaultValue="Yellow"
                            data={departments.departmentName}
                        />
                    </Col>
                    {/* <Col md="2">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Onboardings For This Month</h5></Card>
                    </Col> 
                </Row> */}

                <TabContext value={value} style={{ paddingTop: "10px" }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ backgroundColor: "#ebe8e6", borderRadius: "10px" }} >
                            <Tab label="All Employees" value="1" icon={data.length} />
                            <Tab label="Department" value="2" icon={<FcAssistant style={{ fontSize: "25px" }} />} />
                            {/* <Tab label="Designation" value="3" icon={<FcFlowChart style={{ fontSize: "25px" }} />} /> */}
                        </TabList>
                    </Box>
                    <TabPanel value="1"> <AllEmployees /></TabPanel>
                    <TabPanel value="2"><Departments /></TabPanel>
                    {/* <TabPanel value="3">Designation</TabPanel> */}
                </TabContext>
            </Box>

        </div>
    )
}

export default EmployeeMain;