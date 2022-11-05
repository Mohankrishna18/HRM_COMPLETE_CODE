
import React from "react";

// import { Tabs, Tab} from "react-bootstrap";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import PocDetailsTable from "../PocDetailsTable/PocDetails";
import LeadDetailsTable from "../LeadDetailsTable/TotalLeadsTable";
import ClientMaterial from "../ClientMaterialTable/clientMaterialTable";


// import leadDetails from "../LeadDetailsTable/TotalLeadsTable";
// import CourseSummary from "../PocDetailsTable/PocDetails";
// import ContentCreatorDetails from "../ClientDetailsTable/ClientDetailsTable";



// import Sidebar from "../../components/Sidebar/Sidebar";



const CRMTabs = () => {

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div >

      <Box sx={{ width: "99%", typography: "body1" }}>
        <TabContext value={value} >
          <Box style={{paddingleft:"100px",paddingRight:'50px'}}>
            <TabList centered onChange={handleChange} sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"58px",paddingRight:0,color:"black" }}
       // textColor="secondary"
        indicatorColor="#f5896e">
              <Tab label="Client Details " value="1"  style={{paddingRight:'20px',fontSize:'18px'}} />
              <Tab label="Lead Details" value="2" style={{paddingRight:'20px' ,fontSize:'18px'}}  />
              {/* <Tab label="POC Details" value="3" style={{paddingRight:'20px',fontSize:'18px'}} /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <ClientMaterial/>
          {/* <ClientDetailsTable/> */}
          </TabPanel>

          <TabPanel value="2">
          <LeadDetailsTable/>
          </TabPanel>

          {/* <TabPanel value="3">
            <PocDetailsTable/>
          </TabPanel> */}

        </TabContext>
      </Box>

    </div>





  );

};



export default CRMTabs;