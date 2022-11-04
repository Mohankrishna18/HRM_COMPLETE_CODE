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
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaBookReader, FaBusinessTime, FaGraduationCap, FaRegAddressCard } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { GrUserExpert } from "react-icons/gr";
import { VscProject } from "react-icons/vsc";
import { AiOutlineProject } from 'react-icons/ai';


function MyProfileTabs() {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className='example'>
        <EmployeeMasterCard/>
        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{justifyContent:"center"}} >
    <TabList onChange={handleChange} value={value} sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"58px",paddingRight:0,color:"black" }}
       // textColor="secondary"
        indicatorColor="#f5896e"
        //aria-label="secondary tabs example"
         // style={{justifyContent:"center",backgroundColor:"#f5896e"}}
         >
      <Tab label="Personal Info." value="1" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<BsFillPersonLinesFill style={{ fontSize: "20px" }} />}/>
      <Tab label="Address" value="2" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaRegAddressCard style={{ fontSize: "20px" }} />} />
      <Tab label="Additional Details" value="3" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FiUserPlus style={{ fontSize: "20px" }} />}/>
      <Tab label="Employment" value="4" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<TiBusinessCard style={{ fontSize: "20px" }} />}/>
      <Tab label="Educational" value="5" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaGraduationCap style={{ fontSize: "20px" }} />}/>
      <Tab label="Experience" value="6" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<FaBusinessTime style={{ fontSize: "20px" }} />}/>
      <Tab label="Projects" value="7" style={{paddingRight: "3%", paddingLeft: "3%", fontSize: "12px"}} icon={<AiOutlineProject style={{ fontSize: "20px" }} />}/>

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
