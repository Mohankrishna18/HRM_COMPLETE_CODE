import React from "react";
import HRConfirmation from "./HRConfirmation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {FcPositiveDynamic,  FcConferenceCall} from "react-icons/fc";
import HRResignationMain from "./HRResignationMain";
import { Card } from "react-bootstrap";

function HRConfirmationMain() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      {/* HRConfirmationMain */}
      <Card.Title> Approvals</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
               HR Approval
              </Card.Subtitle>
      <Box sx={{ width: "100%", typography: "body1", paddingTop: "15px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              
              sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"58px",paddingRight:0,color:"black" }}
              // textColor="secondary"
               indicatorColor="#f5896e"
            >
              <Tab
                label="Onboarding Employees"
                value="1"
                style={{ paddingRight: "2%", paddingLeft: "2%" }}
                
              ></Tab>
              <Tab
                label="Resignation Approvals"
                value="2"
                style={{ paddingRight: "2%", paddingLeft: "2%" }}
               
              />
            </TabList>
          </Box>
          <TabPanel style={{ padding: "10px" }} value="1">
            <HRConfirmation />
          </TabPanel>
          <TabPanel style={{ padding: "10px" }} value="2">
            <HRResignationMain />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default HRConfirmationMain;
