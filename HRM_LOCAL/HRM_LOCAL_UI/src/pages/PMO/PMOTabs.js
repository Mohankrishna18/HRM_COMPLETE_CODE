import React from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Row, Col, Card, Container, Tabs } from 'react-bootstrap';
import AssignEmploymentDetailsMain from '../AssignEmploymentDetails/AssignEmploymentDetailsMain';
import HrEmployeesLeavesWaitingForApproval from '../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval';

import EmploymentDetailsTabbyPmo from './EmploymentDetailsTabbyPmo';
import PMOApproval from './PMOApproval';
import PMOResignationMain from './PMOResignationMain';
import ApprovalsMain from '../TimeSheet/irmApproval/ApprovalsMain';

//Empty Commit
function PMOTabs() {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ paddingTop: '0px' }}>
     

        
            <Row>
              <Col xs={12}>

                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ justifyContent: "center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ justifyContent: "center"}}>
                      <Tab label="OFFER Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="1" />
                      <Tab label="ONBOARDING APPROVALS" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="2" />
                      
                    </TabList>
                  </Box>
                  <TabPanel value="1"><PMOApproval /></TabPanel>
                 
                  
                  <TabPanel value="2"><AssignEmploymentDetailsMain /></TabPanel>
                  
                </TabContext>
                
              </Col>
            </Row>
 
        

    </div>

  )
}

export default PMOTabs;





// <Tabs
//                   defaultActiveKey="Onboarding Approvals"
//                   id="uncontrolled-tab-example"
//                   className="mb-3"
//                   style={{
//                     justifyContent: "left",
//                     color: "white",
//                     backgroundColor: "",
//                     fontSize: "19px",
//                     padding: 0,
//                   }}
//                 >
//                   <Tab
//                     eventKey="Onboarding Approvals"
//                     title="Onboarding Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <PMOApproval />
//                   </Tab>
//                   <Tab
//                     eventKey="Leave Approvals"
//                     title="Leave Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <HrEmployeesLeavesWaitingForApproval />
//                   </Tab>
//                   <Tab
//                     eventKey="Timesheet Approvals"
//                     title="Timesheet Approvals"
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <TaskMain />
//                   </Tab>
//                   <Tab
//                     eventKey="Assign Employment Details"
//                     title="Assign Employment Details "
//                     style={{ backgroundColor: "white" }}
//                   >
//                     <AssignEmploymentDetailsMain/>
//                   </Tab>
//                 </Tabs>

