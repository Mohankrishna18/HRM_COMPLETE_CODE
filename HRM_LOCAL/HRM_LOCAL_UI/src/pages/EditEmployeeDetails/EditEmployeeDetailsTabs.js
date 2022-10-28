import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import EmployeePersonalDetails from './EmployeePersonalDetails';
import EmployeeAddressDetails from './EmployeeAddressDetails';
import EmployeeAditionalDetails from './EmployeeAdditionalDetails';
import EmployeeEducationalDetails from './EmployeeEducationalDetails';
import EmployeeExperienceDetails from './EmployeeExperienceDetails';
import PersonalDetailsTab from "../EmployeeMaster/EmployeeMasterComponents/PersonalDetailsTab"
import {useParams} from "react-router-dom";
import AddressTab from '../EmployeeMaster/EmployeeMasterComponents/AddressTab';
import AditionalDetailsTab from '../EmployeeMaster/EmployeeMasterComponents/AdditionalDetailsTab';
import ExperienceTab from '../EmployeeMaster/EmployeeMasterComponents/ExperienceTab';
import EducationalDetailsTab from '../EmployeeMaster/EmployeeMasterComponents/EducationalDetailsTab';
import { FiArrowLeftCircle } from 'react-icons/fi';


function EditEmployeeDetailsTabs(props) {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const params=useParams();
    console.log(params.id);

    function fnGoBack() {
        history.goBack();
      }

    return (
        <div className='example' style={{paddingTop:"10px"}}>
            {/* <button type="button" onClick={fnGoBack} style={{float:"right",border:"none",backgroundColor:"white"}}>
                    <FiArrowLeftCircle style={{ fontSize: "30px"}} />
            </button> */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ justifyContent: "center" }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" style={{ justifyContent: "center", backgroundColor: "#FFFFB4" }}>
                        <Tab label="Personal Details" value="1" />
                        <Tab label="Address Details" value="2" />
                        <Tab label="Additional Details" value="3" />
                        <Tab label="Educational Details" value="4" />
                        <Tab label="Experience Details" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1"><PersonalDetailsTab/></TabPanel>
                <TabPanel value="2"><AddressTab/></TabPanel>
                <TabPanel value="3"><AditionalDetailsTab/></TabPanel>
                <TabPanel value="4"><EducationalDetailsTab/></TabPanel>
                <TabPanel value="5"><ExperienceTab/></TabPanel>
            </TabContext>

        </div>

    );
}
export default EditEmployeeDetailsTabs;



