
import React from "react";

// import { Tabs, Tab} from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PositionStatusCards from "../RR-Cards/PositionStatusCards";
import CandidateStatusCards from "../RR-Cards/CandidateStatusCards";
// import PositionsOpenByDepartment from "../GraphBars/PositionsOpenByDepartment";
import PositionGraph_Table from "../GraphBars/PositionGraph_Table";
import CandidatesGraph_Table from "../GraphBars/CandidatesGraph_Table";



const RRTabs = () => {

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div >

      <Box sx={{ width: "99%", typography: "body1" ,  }}>
        <TabContext value={value} fill >
          <Box style={{ paddingleft: "100px" ,  }}>
            <TabList 
            // to style the tab headings 
            TabIndicatorProps={{
              title:'Position',
              // tab line color
              sx: {backgroundColor:'orange'}
            }}
            // for background color of tab
            // sx={{"& button.Mui-selected " :{backgroundColor:'orange'} }} 
            onChange={handleChange} aria-label="lab API tabs example">
              <Tab  label="Position Status" value="1" style={{paddingLeft:"10px",paddingRight:"10px"}} />
              
              <Tab label="Candidate Status" value="2"  style={{paddingLeft:"10px",paddingRight:"10px"}}/>
              {/* <Tab label="Content Creator Details" value="3" /> */}
            </TabList>
          </Box>
          <TabPanel  value="1">
            {/* position cards */}
            <PositionStatusCards />
            <br></br>
            {/*  graph with AERS table */}
            <PositionGraph_Table/>
          </TabPanel>

          <TabPanel value="2">
            {/* candidate cards */}
            <CandidateStatusCards />
            <br></br>
            {/* candidate graph */}
            <CandidatesGraph_Table/>
          </TabPanel>

          {/* <TabPanel value="3">
            <ContentCreatorDetails />
          </TabPanel> */}

        </TabContext>
      </Box>

    </div>





  );

};



export default RRTabs;