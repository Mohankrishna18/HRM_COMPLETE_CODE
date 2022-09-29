import React,{useEffect, useState} from 'react';
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { FcAcceptDatabase, FcAssistant, FcFlowChart } from 'react-icons/fc';
import HRConfirmationMain from '../../HRApproval/HRConfirmationMain';
import OnboardingsToday from './OnboardingsTody';
import OnboardingsThisMonth from './OnboardingsThisMonth';
import PreHire from './PreHire';
import axios from "../../../Uri"


function HiringsTab(props) {

    const [data, setData] = useState([]);
    const [month, setMonth] = useState([]);
    const [today, setToday] = useState([]);
    const [onboardID, setOnboardID] = useState({});
    const [update, setUpdate] = useState(false);
    const [reject, setReject] = useState(false);
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        loadData();
      }, [update, onboardID, reject]);
    const onboardingStatus = "CEOApproved";
    const loadData = async () => {
    const res = await axios.get(
      `/emp/getDetailsforPMOApprovalByOnboardingStatus/${onboardingStatus}`
    );
    setData(res.data.data);
    console.log(res.data);
  };
  console.log(data.length)


  useEffect(() => {
    axios
        .get(`emp/getData`)
        .then((res) => {
            setMonth(res.data);
            console.log(res.data);
        });
}, []);

useEffect(() => {
    axios
        .get(`emp/getDataByDATE`)
        .then((res) => {
            setToday(res.data);
            console.log(res.data);
        });
}, []);
console.log(data)

    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                {/* <Row  style={{paddingBottom:"10px"}}>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Offer Released</h5><h5>{data.2}</h5></Card>
                    </Col>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Onboardings For Today</h5><h5>{today.length}</h5></Card>
                    </Col>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Onboardings For This Month</h5><h5>{month.length}</h5></Card>
                    </Col>
                </Row> */}
                
                <TabContext value={value} style={{paddingTop:"10px"}}>
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example"style={{backgroundColor:"#ebe8e6",borderRadius:"5px"}} >
                           
                            <Tab label="Offer Released" value="1"  style={{paddingRight:"2%",paddingLeft:"2%"}} icon={<FcAcceptDatabase style={{ fontSize: "25px" }} />}></Tab>
                            <Tab label="Onboardings for Today" value="2" style={{paddingRight:"2%",paddingLeft:"2%"}} icon={<FcAssistant style={{ fontSize: "25px" }} />} />
                            <Tab label="Onboardings for This Month" value="3" style={{paddingRight:"2%",paddingLeft:"2%"}} icon={<FcFlowChart style={{ fontSize: "25px" }} />} />
                        </TabList>
                    </Box>
                    <TabPanel value="1"> <PreHire/></TabPanel>
                    <TabPanel value="2"><OnboardingsToday/></TabPanel>
                    <TabPanel value="3"><OnboardingsThisMonth/></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default HiringsTab;