import React from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Row, Col, Card, Container,Tabs } from 'react-bootstrap';
import HrEmployeesLeavesWaitingForApproval from '../HrLeavesToApprove/HrEmployeesLeavesWaitingForApproval';
import TaskMain from '../TimeSheet/EmployeeTimesheet/TaskMain';
import CEOApproval from './CEOApproval';

function CEOMain() {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ paddingTop: '0px' }}>
    <Card className="scroll">
    
       <Card.Header style={{ backgroundColor: "white"}}>
         <Card.Body>
           <Card.Title>Approvals</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
          CEO Approval
           </Card.Subtitle>{" "}
           <Row>
                <Col xs={12}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ justifyContent: "center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ justifyContent: "center"}}>
                      <Tab label="Onboarding Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="1" />
                      <Tab label="Leave Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="2" />
                      <Tab label="Timesheet Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="3" />
                    </TabList>
                  </Box>
                  <TabPanel value="1"><CEOApproval /></TabPanel>
                  <TabPanel value="2"><HrEmployeesLeavesWaitingForApproval/></TabPanel>
                  <TabPanel value="3"><TaskMain/></TabPanel>
                </TabContext>
                </Col>
              </Row>
           {/* </Container> */}
         </Card.Body>
       </Card.Header>
    
     </Card>

   </div>
  )
}

export default CEOMain;
{/* 

                  <Tabs
                    defaultActiveKey="Onboarding Approvals"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    style={{
                      justifyContent: "left",
                      color: "white",
                      backgroundColor: "white",
                      fontSize: "19px",
                      padding: 0,
                    }}
                  >
                    <Tab
                      eventKey="Onboarding Approvals"
                      title="Onboarding Approvals"
                      style={{ backgroundColor: "white" }}
                    >
                      <CEOApproval />
                    </Tab>
                    <Tab
                      eventKey="Leave Approvals"
                      title="Leave Approvals"
                      style={{ backgroundColor: "white" }}
                    >
                      <HrEmployeesLeavesWaitingForApproval/>
                    </Tab>
                    <Tab
                      eventKey="Timesheet Approvals"
                      title="Timesheet Approvals"
                      style={{ backgroundColor: "white" }}
                    >
                      <TaskMain/>
                    </Tab>
                  </Tabs> */}