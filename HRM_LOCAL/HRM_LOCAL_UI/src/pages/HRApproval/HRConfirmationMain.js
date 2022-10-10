import React from "react";
import HRConfirmation from "./HRConfirmation";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {FcPositiveDynamic,  FcConferenceCall} from "react-icons/fc";
import HRResignationMain from "./HRResignationMain";

function HRConfirmationMain() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* HRConfirmationMain */}

      <Box sx={{ width: "100%", typography: "body1", paddingTop: "15px" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              sx={{
                "& button.Mui-selected": {
                  background: "linear-gradient(#e8e8e8,#e8e8e8,white)",
                },
              }}
              aria-label="lab API tabs example"
              style={{
                background: "linear-gradient(#FFD57E,#ffdc89,white)",
                borderRadius: "5px",
              }}
            >
              <Tab
                label="Onboarding Employees"
                value="1"
                style={{ paddingRight: "2%", paddingLeft: "2%" }}
                icon={<FcPositiveDynamic style={{ fontSize: "25px" }} />}
              ></Tab>
              <Tab
                label="Resignation Approvals"
                value="2"
                style={{ paddingRight: "2%", paddingLeft: "2%" }}
                icon={<FcConferenceCall style={{ fontSize: "25px" }} />}
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
