
import React from 'react';

import BHUApproval from "./BUHApproval";

import { Row, Col, Card, Container } from 'react-bootstrap';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import ManagerEmployeesLeavesWaitingForApproval from '../ManagerLeavesToApprove/ManagerEmployeesLeavesWaitingForApproval';

function BUHMain() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    
    <div style={{ paddingTop: '10px' ,backgroundColor:"white"}} className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Approvals</Card.Title>
             <Row>
              <Col xs={12}>
              <ManagerEmployeesLeavesWaitingForApproval/>
              {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                                <TabContext value={value}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <TabList onChange={handleChange} 
                                                 variant="scrollable"
                                                 scrollButtons="auto" indicatorColor="#f5896e" sx={{ "& button.Mui-selected": { background: "white", color: "#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", height: "30px", color:"white" }}>
                                            <Tab label="Approval" value="1" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}  ></Tab>
                                            <Tab label="Leave Approval" value="2" style={{ paddingRight: "4%", paddingLeft: "4%", fontSize: "12px" }}  />

                       
                                        </TabList>
                                    </Box>
                                    <TabPanel style={{ padding: "10px" }} value="1"><BHUApproval/></TabPanel>
                                    <TabPanel style={{ padding: "10px" }} value="2"><ManagerEmployeesLeavesWaitingForApproval/></TabPanel>
                                  
                                </TabContext>
                            </Box> */}
               
               </Col>
             </Row>
         </Card.Body>
       </Card.Header>
   </div>
  )
}

export default BUHMain;