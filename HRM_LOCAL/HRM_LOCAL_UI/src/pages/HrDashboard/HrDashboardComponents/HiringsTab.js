import React from 'react';
import { Row, Col, Card } from "react-bootstrap"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { FcAcceptDatabase, FcAssistant, FcFlowChart } from 'react-icons/fc';


function HiringsTab() {

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <h4>Total Hirings</h4>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" >
                            <Tab label="Pre Hire" value="1" icon={<FcAcceptDatabase style={{ fontSize: "25px" }} />} />
                            <Tab label="Onboardings for Today" value="2" icon={<FcAssistant style={{ fontSize: "25px" }} />} />
                            <Tab label="Onboardings for This Month" value="3" icon={<FcFlowChart style={{ fontSize: "25px" }} />} />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Hire</TabPanel>
                    <TabPanel value="2">today</TabPanel>
                    <TabPanel value="3">Month</TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}

export default HiringsTab;