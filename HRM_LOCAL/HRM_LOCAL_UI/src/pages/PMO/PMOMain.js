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
import PMOTabs from './PMOTabs';
import PMORequisitionMain from '../Recruitment-Tracker/PMORequisitionApprovals/PMORequisitionMain';

//Empty Commit
function PMOMain() {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ paddingTop: '0px' }}>
      <Card className="scroll" style={{ backgroundColor: "white" }}>

        <Card.Header style={{ backgroundColor: "white" }}>
          <Card.Body style={{ backgroundColor: "white" }}>
            <Card.Title>Approvals</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              PMO Approval
            </Card.Subtitle>
            <Row>
              <Col xs={12}>

                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ justifyContent: "center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ justifyContent: "center"}}>
                      <Tab label="Hiring" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="1" />
                      <Tab label="Leave/WFH Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="2" />
                      <Tab label="Timesheet Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="3" />
                      <Tab label="Requisition Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="4" />
                      <Tab label="Resignation Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="5" />
                    </TabList>
                  </Box>
                  <TabPanel value="1"><PMOTabs /></TabPanel>
                  <TabPanel value="2"><HrEmployeesLeavesWaitingForApproval /></TabPanel>
                  <TabPanel value="3"><ApprovalsMain /></TabPanel>
                  <TabPanel value="4"><PMORequisitionMain /></TabPanel>
                  <TabPanel value="5"><PMOResignationMain /></TabPanel>
                </TabContext>
                
              </Col>
            </Row>
 
          </Card.Body>
        </Card.Header>

      </Card>

    </div>

  )
}

export default PMOMain;





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

