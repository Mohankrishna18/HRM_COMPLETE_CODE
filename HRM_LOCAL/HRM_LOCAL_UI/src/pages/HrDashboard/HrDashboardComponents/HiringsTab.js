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
import { Divider } from '@mui/material';



const TabWithCount = ({ children, count }) => {
    return (
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        <Typography component="div">{children}</Typography>
        {count ? (
          <Typography
            component="div"
            variant="body2"
            sx={{ marginLeft: "0.5rem" }}
          >
            {count}
          </Typography>
        ) : null}
      </Box>
    );
  };
  
  TabWithCount.propTypes = {
    count: PropTypes.string,
    children: PropTypes.node
  };
  
  function TabPanel1(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel1.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  


export default function HiringsTab(props) {


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
            
            <Box  sx={{ width: '100%', typography: 'body1' }}>
                {/* <Row  style={{paddingBottom:"10px"}}>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Offer Released</h5><h5>{data.length}</h5></Card>
                    </Col>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Onboardings For Today</h5><h5>{today.length}</h5></Card>
                    </Col>
                    <Col md="3">
                        <Card style={{padding:"15px",textAlign:"center"}}><h5>Onboardings For This Month</h5><h5>{month.length}</h5></Card>
                    </Col>
                </Row> */}
                
                <TabContext value={value} >
                    <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} sx={{"& button.Mui-selected":{background: "linear-gradient(#e8e8e8,white,#e8e8e8)"}}} aria-label="lab API tabs example"style={{background: "linear-gradient(#FFFFB4,white,#FFFFB4)",borderRadius:"5px",fontSize:"10px" }} >
                           
                            <Tab  label={<TabWithCount  count={(data.length === 0 )?(<> 0 </>):(<>{data.length}</>)}>Offer Released</TabWithCount>}
                                        {...a11yProps(0)}
                                      value="1"  style={{paddingRight:"2%",paddingLeft:"2%"}}  icon={<FcAcceptDatabase  style={{ fontSize: "25px" }} />} />
 <Divider orientation="vertical" flexItem />

                            <Tab wrapped label={<TabWithCount count={(today.length === 0 )?(<> 0 </>):(<>{today.length}</>)}>Onboardings For Today</TabWithCount>}
                                        {...a11yProps(0)} value="2" style={{paddingRight:"2%",paddingLeft:"2%"}} icon={<FcAssistant style={{ fontSize: "25px" }} />} />
                            <Tab wrapped label={<TabWithCount count={(month.length === 0 )?(<> 0 </>):(<>{month.length}</>)}>Onboardings For This Month</TabWithCount>}
                                        {...a11yProps(0)} value="3" style={{paddingRight:"2%",paddingLeft:"2%"}} icon={<FcFlowChart style={{ fontSize: "25px" }} />} />
                        </TabList>
                    </Box>
                    <TabPanel style={{padding:"10px"}} value="1"> <PreHire/></TabPanel>
                    <TabPanel style={{padding:"10px"}} value="2"><OnboardingsToday/></TabPanel>
                    <TabPanel style={{padding:"10px"}} value="3"><OnboardingsThisMonth/></TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}
