import React from 'react';
import { Row, Col, Card, Container, Tabs} from 'react-bootstrap';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TaskMain from '../TimeSheet/EmployeeTimesheet/TaskMain';
// import HrEmployeesLeavesWaitingForApproval from "./HrEmployeesLeavesWaitingForApproval";
import SRMResignationMain from './SRMResignationMAin';
import ManagerEmployeesLeavesWaitingForApproval from "../ManagerLeavesToApprove/ManagerEmployeesLeavesWaitingForApproval";

const HrLeavesToApproveMain = () => {

  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ paddingTop: '0px' }}>

      <Card responsive className="scroll" >
        <Card.Header style={{ backgroundColor: "white"}}>
          <Card.Body >
            <Card.Title> Approvals </Card.Title>
            

            <Row>
              <Col xs={12}>
              <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ justifyContent: "center" }}>
                    <TabList onChange={handleChange} sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"30px",paddingRight:0,color:"black" }}
       // textColor="secondary"
        indicatorColor="#f5896e">
                      <Tab label="Leave Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="1" />
                      <Tab label="Timesheet Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="2" />
                      {/* <Tab label="Resignation Approvals" style={{paddingRight:"2%",paddingLeft:"2%",fontSize:"16px"}} value="3" /> */}
                    </TabList>
                  </Box>
                  {/* <TabPanel value="1"><HrEmployeesLeavesWaitingForApproval /></TabPanel> */}
              
                    <TabPanel value="1"><ManagerEmployeesLeavesWaitingForApproval/></TabPanel>
                  <TabPanel value="2"><TaskMain /></TabPanel>
                  {/* <TabPanel value="3"><SRMResignationMain /></TabPanel> */}
                </TabContext>  
              </Col>
            </Row>
          </Card.Body>
        </Card.Header>
      </Card>

      {/* <Card responsive className="scroll">
       <Card.Header>
         <Card.Body>
           <Card.Title>Leaves Waiting For Approval</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">
           EmployeeLeaves
           </Card.Subtitle>{" "}
             <Row>
               <Col xs={12}>
               <HrEmployeesLeavesWaitingForApproval/>
               </Col>
             </Row>
             <Row
             </Row>
         </Card.Body>
       </Card.Header>
     </Card> */}
    </div>

  )
}

export default HrLeavesToApproveMain;


// <Tabs
//                   defaultActiveKey="Leave Approvals"
//                   id="uncontrolled-tab-example"
//                   className="mb-3" 
//                   style={{ justifyContent: "left", color: "white", backgroundColor: "white", fontSize: "19px", padding: 0, }}
//                 >
//                   <Tab eventKey="Leave Approvals" title="Leave Approvals" style={{ backgroundColor: "white" }}>
//                     <HrEmployeesLeavesWaitingForApproval />
//                   </Tab>
//                   <Tab eventKey="Timesheet Approvals" title="Timesheet Approvals" style={{ backgroundColor: "white" }} >
//                     <TaskMain />
//                   </Tab>
//                 </Tabs>