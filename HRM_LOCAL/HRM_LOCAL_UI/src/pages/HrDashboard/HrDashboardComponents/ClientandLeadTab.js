import { Box } from '@material-ui/core';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { FcConferenceCall } from "react-icons/fc";
import { React, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import LeadsCard from './Employee/LeadsTable';
import axios from "../../../Uri"
import ClientTable from './Employee/ClientsTable';
import LeadTable from './Employee/LeadsTable';

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

function ClientandLeadTab() {
    const [value, setValue] = useState('1');
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        axios
            .get(`/Leads/getAllLeads`)
            .then((res) => {
                const sata = res.data.data.filter(item => item.status === 'Approved')
                //   setData(res.data.data);
                  console.log(res.data);
                  setData1(sata)

            }).catch((err) => {
                console.log(err)
            })
    }, []);
    useEffect(() => {
        axios
            .get(`/clientProjectMapping/getAllClients`)
            .then((res) => {
                const sata1 = res.data.data.filter(item => item.status === 'Active')
                //   setData(res.data.data);
                  console.log(res.data);
                  setData(sata1)


            }).catch((err) => {
                console.log(err)
            })
    }, []);

    console.log(data.length);
    return (
        <div>
            <TabContext value={value} style={{ padingRight: "10px" }}>
                <Box sx={{ borderBottom: 0, borderColor: 'divider', width: '20%'}}>
                    <TabList onChange={handleChange} sx={{ "& button.Mui-selected": { background: "#a3c2e3", color: "black" } }} aria-label="lab API tabs example" style={{ background: "#354e69", borderRadius: "3px", height: "60px", color: "white" }}>

                        <Tab wrapped label=" Active  Clients"
                            {...a11yProps(0)} value="1" style={{ paddingRight: "3%", paddingLeft: "3%" }} icon={(data.length === 0) ? (<div style={{ paddingLeft: "6px", fontSize: "16px" }}>0</div>) : (<div style={{ paddingLeft: "6px", fontSize: "14px" }}>{data.length}</div>)} />
                        <Tab wrapped label="Active  Leads"
                            {...a11yProps(0)} value="2" style={{ paddingRight: "3%", paddingLeft: "3%" }} icon={(data1.length === 0) ? (<div style={{ paddingLeft: "6px", fontSize: "16px" }}>0</div>) : (<div style={{ paddingLeft: "6px", fontSize: "14px" }}>{data1.length}</div>)} />
                    </TabList>
                </Box>
                <TabPanel style={{ padding: "15px" }} value="1"><ClientTable /></TabPanel>
                <TabPanel style={{ padding: "15px" }} value="2"><LeadTable /></TabPanel>
            </TabContext>
        </div>
    )
}
export default ClientandLeadTab;

