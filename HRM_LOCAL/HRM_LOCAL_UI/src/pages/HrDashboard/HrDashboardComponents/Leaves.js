import {React, useEffect,useState} from 'react';
import { Card, FormControl, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import MaterialTable from 'material-table'
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from '@mui/material/Tab';
import axios from "../../../Uri";
import Box from '@mui/material/Box';
import { FcAssistant, FcConferenceCall, FcLeave, FcPositiveDynamic } from "react-icons/fc";
import LeavesForApprovalTable from "../HrDashboardComponents/LeavesForApprovalTable";
import ApprovedLeavesTable from "../HrDashboardComponents/ApprovedLeavesTable";
import RejectedLeavesTable from "../HrDashboardComponents/RejectedLeavesTable";



function Leaves() {
    // useEffect(() => {
    //     axios.get(`/leave/getEmployeePendingLeavesCountByStatus/pending`).then((res) => {
    //         console.log(res.data);
    //     })
    // }, [])
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const[data,setData]=useState({})
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});

    useEffect(() => {
        axios
            .get(`/leave/getEmployeePendingLeavesCountByStatus/pending`)
            .then((response) => {
                setData(response.data)

            });
    }, []);
    console.log(data)
    useEffect(() => {
        axios
            .get(`/leave/getEmployeePendingLeavesCountByStatus/Approved`)
            .then((response) => {
                setData1(response.data)

            });
    }, []);
    console.log(data)
    useEffect(() => {
        axios
            .get(`/leave/getEmployeePendingLeavesCountByStatus/Rejected`)
            .then((response) => {
                setData2(response.data)

            });
    }, []);
    console.log(data)
   
  return (
    <div>

        <Row md={4}>
                    <Col md="2">
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h6>
                                        {" "}
                                        <Card.Title>For Approval</Card.Title>
                        
                                        {/* <Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle> */}
                                
                                        {data > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                                        
                                    </h6>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h6>
                                        {" "}
                                        <Card.Title>Approved Leaves</Card.Title>
                        
                                        {data1 > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data1}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                                        
                                    </h6>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    <Col md="2">
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h6>
                                        {" "}
                                        <Card.Title>Rejected Leaves</Card.Title>
                        
                                        {data2 > 0 ? (<Card.Subtitle className="mb-2 text-muted">{data2}</Card.Subtitle>) : (<Card.Subtitle className="mb-2 text-muted">0</Card.Subtitle>)}
                                        
                                    </h6>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    </Row>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} aria-label="lab API tabs example" >
                                            <Tab label="For Approval" value="1" style={{paddingRight:"2%"}}/>
                                            <Tab label="Approved Leaves" value="2" style={{paddingRight:"2%"}} />
                                            <Tab label="Rejected Leaves" value="3" style={{paddingRight:"2%"}}/>
                                        </TabList>
                                    </Box>
                                    <TabPanel value="1"><LeavesForApprovalTable/></TabPanel>
                                    <TabPanel value="2"><ApprovedLeavesTable/></TabPanel>
                                    <TabPanel value="3"><RejectedLeavesTable/></TabPanel>
                                </TabContext>
                            </Box>
    </div>
  )
}

export default Leaves;