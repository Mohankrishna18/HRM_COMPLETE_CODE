import React,{useEffect, useState} from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import EmployeeMasterCard from "../../EmployeeMaster/EmployeeMasterComponents/EmployeeMasterCard";
import ProfileAdditionalDetailsTab from "../MyProfileComponents/ProfileAdditionalDetsilsTab";

import ProfileAddressTab from "./ProfileAddressTab";
import ProfileEducationalDetailsTab from "./ProfileEducationalDetailsTab";
import ProfileEmploymentDetailsTab from "./ProfileEmploymentDetailsTab";
import ProfileExperienceTab from "./ProfileExperienceTab";
import ProfilePersonalDetailsTab from "./ProfilePersonalDetailsTab";
import ProfileProjectTab from "./ProfileProjectTab";


function MyProfileTabs() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className='example'>
        <EmployeeMasterCard/>
        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{justifyContent:"center"}}>
    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{justifyContent:"center",backgroundColor:"#FFFFB4"}}>
      <Tab label="Personal Details" value="1" />
      <Tab label="Address Details" value="2" />
      <Tab label="Additional Details" value="3" />
      <Tab label="Employment Details" value="4" />
      <Tab label="Educational Details" value="5" />
      <Tab label="Experience Details" value="6" />
      <Tab label="Project Details" value="7" />

    </TabList>
  </Box>
  <TabPanel value="1"><ProfilePersonalDetailsTab/></TabPanel>
  <TabPanel value="2"> <ProfileAddressTab/></TabPanel>
  <TabPanel value="3"><ProfileAdditionalDetailsTab /></TabPanel>
  <TabPanel value="4"><ProfileEmploymentDetailsTab/></TabPanel>
  <TabPanel value="5"><ProfileEducationalDetailsTab/></TabPanel>
  <TabPanel value="6"><ProfileExperienceTab/></TabPanel>
  <TabPanel value="7"><ProfileProjectTab/></TabPanel>
</TabContext>
       
        </div>

    );
}
export default MyProfileTabs;




// <Tabs
// defaultActiveKey="Personal Details"
// transition={true}
// id="noanim-tab-example"
// className="mb-3"  
// color="Black"
//   fontColour="white"
// style={{ justifyContent: "center", color: "white" , backgroundColor:"white",opacity:0.95, fontSize:"18px" ,paddingTop:5,}}
// >
// <Tab eventKey="Personal Details" title="Personal Details" color='white' style={{ backgroundColor: "white" ,height:30}}>
//    <ProfilePersonalDetailsTab/>
// </Tab>
// <Tab eventKey="Address" title="Address" style={{ backgroundColor: "white" }}>
//     <ProfileAddressTab/>
// </Tab>
// <Tab eventKey="Additional Details" title="Additional Details" style={{ backgroundColor: "white" }}>
//    <ProfileAdditionalDetailsTab />
// </Tab>
// <Tab eventKey="Employment Details" title="Employment Details" style={{ backgroundColor: "white" }}>
//      <ProfileEmploymentDetailsTab/>
// </Tab>
// <Tab eventKey="Educational Details" title="Educational Details" style={{ backgroundColor: "white" }}>
//    <ProfileEducationalDetailsTab/>
// </Tab>
// <Tab eventKey="Experience" title="Experience " style={{ backgroundColor: "white" }}>
//    <ProfileExperienceTab/>
// </Tab>
// <Tab eventKey="Project" title="Project" style={{ backgroundColor: "white" }}>
//     <ProfileProjectTab/>
// </Tab>
// </Tabs> 
