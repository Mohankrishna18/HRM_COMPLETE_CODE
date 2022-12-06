import React,{useEffect, useState} from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import axios from "../../../Uri";
import moment from "moment";
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
import { FaBookReader, FaBusinessTime, FaGraduationCap, FaHandshake, FaRegAddressCard } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { TiBusinessCard } from 'react-icons/ti';
import { GrUserExpert } from "react-icons/gr";
import { VscProject } from "react-icons/vsc";
import { AiOutlineProject } from 'react-icons/ai';
// import ProfileRecognizationTab from './ProfileRecognizationTab';


function MyProfileTabs(props) {
  const [data, setData] = useState();
  useEffect(() => {
      loadData();
      getOnboarding();
  }, []);

  const da = JSON.parse(sessionStorage.getItem('userdata'))
  const empID = da.data.employeeId;
  const[profile,setProfile] = useState(empID);
  

  const currentdate = new Date();
  var cd = String(currentdate.getDate()).padStart(2, '0');
  var cm = currentdate.toLocaleString([], { month: 'long' });
  var cy = currentdate.getFullYear();
  var cdd = cm+' ' + cd  + ' ' +cy;

  // console.log(currentdate);
  // const hstr = moment.utc(currentdate).format('DD-MM-YYYY')
  // console.log(hstr);
 const loadData = async () => {
      const res = await axios.get(`/emp/getDateOfJoiningByEmployeeId/${empID}`);
      setData(res.data.data);
      
  };
  const [onboardingId, setOnboardingId] = useState("");

    const getOnboarding = () => {
        axios
            .get(`/emp/getEmployeeDataByEmployeeId/${empID}`)
            .then((res) => {
                console.log(res.data.data);
                setOnboardingId(res.data.data)
            });
    }
    console.log(onboardingId)
console.log(onboardingId.onboardingId);
    const obdId = onboardingId.onboardingId;
    console.log(obdId);
  var today = new Date(data);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var mmm = today.toLocaleString([], { month: 'long' });
  var yyyy = today.getFullYear();
  var doj = mmm + ' ' + dd + ' ' + yyyy;

  var day_start = new Date(doj);
var day_end = new Date(cdd);
var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
  
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className='example'>
        <EmployeeMasterCard profile={profile}/>
        <TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{justifyContent:"center"}} >
    <TabList onChange={handleChange} value={value} sx={{ "& button.Mui-selected": { background: "white",color:"#f5896e" } }} aria-label="lab API tabs example" style={{ background: "#f5896e", borderRadius: "3px", fontSize: "10px",height:"58px",paddingRight:0,color:"black" }}
       // textColor="secondary"
       variant="scrollable"
        scrollButtons="auto"
        // aria-label="scrollable auto tabs example"
        indicatorColor="#f5896e"
        //aria-label="secondary tabs example"
         // style={{justifyContent:"center",backgroundColor:"#f5896e"}}
         >
      <Tab label="Personal Info." value="1" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<BsFillPersonLinesFill style={{ fontSize: "20px" }} />}/>
      <Tab label="Address" value="2" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FaRegAddressCard style={{ fontSize: "20px" }} />} />
      <Tab label="Additional Details" value="3" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FiUserPlus style={{ fontSize: "20px" }} />}/>
      <Tab label="Employment" value="4" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<TiBusinessCard style={{ fontSize: "20px" }} />}/>
      <Tab label="Educational" value="5" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FaGraduationCap style={{ fontSize: "20px" }} />}/>
      <Tab label="Experience" value="6" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FaBusinessTime style={{ fontSize: "20px" }} />}/>
      <Tab label="Projects" value="7" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<AiOutlineProject style={{ fontSize: "20px" }} />}/>
      { total_days >= 180 ? (<Tab label="Recognization" value="8" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FaHandshake style={{ fontSize: "20px" }} />}/>) : (<Tab label="Recognization" value="8" style={{paddingRight: "2.5%", paddingLeft: "2.5%", fontSize: "12px"}} icon={<FaHandshake style={{ fontSize: "20px" }} />}disabled/>)}

    </TabList>
  </Box>
  {/* <PMOApproved onboardID={onboardID} func={pull_data} handleClose={handleClose} /> */}

  <TabPanel value="1"><ProfilePersonalDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="2"> <ProfileAddressTab profile={profile}/></TabPanel>
  <TabPanel value="3"><ProfileAdditionalDetailsTab profile={profile} obid={obdId}/></TabPanel>
  <TabPanel value="4"><ProfileEmploymentDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="5"><ProfileEducationalDetailsTab profile={profile}/></TabPanel>
  <TabPanel value="6"><ProfileExperienceTab profile={profile}/></TabPanel>
  <TabPanel value="7"><ProfileProjectTab profile={profile}/></TabPanel>
  {/* <TabPanel value="8"><ProfileRecognizationTab/></TabPanel> */}
  <TabPanel value="8"></TabPanel>
</TabContext>
       
        </div>

    );
}
export default MyProfileTabs;