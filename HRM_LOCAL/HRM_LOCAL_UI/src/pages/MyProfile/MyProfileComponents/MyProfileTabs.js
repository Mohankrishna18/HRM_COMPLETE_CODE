import {React} from "react";
import { Tab, Tabs } from "react-bootstrap";
import EmployeeMasterCard from "../../EmployeeMaster/EmployeeMasterComponents/EmployeeMasterCard";
import ProfileAdditionalDetailsTab from "../MyProfileComponents/ProfileAdditionalDetsilsTab";

import ProfileAddressTab from "./ProfileAddressTab";
import ProfileEducationalDetailsTab from "./ProfileEducationalDetailsTab";
import ProfileEmploymentDetailsTab from "./ProfileEmploymentDetailsTab";
import ProfileExperienceTab from "./ProfileExperienceTab";
import ProfilePersonalDetailsTab from "./ProfilePersonalDetailsTab";
import ProfileProjectTab from "./ProfileProjectTab";


function MyProfileTabs() {

    return(
        <>
        <EmployeeMasterCard/>
        <Tabs
                        defaultActiveKey="Personal Details"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"  
                        color="Black"
                          fontColour="white"
                        style={{ justifyContent: "center", color: "white" , backgroundColor:"white",opacity:0.95, fontSize:"18px" ,paddingTop:5,}}
                    >
                        <Tab eventKey="Personal Details" title="Personal Details" color='white' style={{ backgroundColor: "white" ,height:30}}>
                           <ProfilePersonalDetailsTab/>
                        </Tab>
                        <Tab eventKey="Address" title="Address" style={{ backgroundColor: "white" }}>
                            <ProfileAddressTab/>
                        </Tab>
                        <Tab eventKey="Additional Details" title="Additional Details" style={{ backgroundColor: "white" }}>
                           <ProfileAdditionalDetailsTab />
                        </Tab>
                        <Tab eventKey="Employment Details" title="Employment Details" style={{ backgroundColor: "white" }}>
                             <ProfileEmploymentDetailsTab/>
                        </Tab>
                        <Tab eventKey="Educational Details" title="Educational Details" style={{ backgroundColor: "white" }}>
                           <ProfileEducationalDetailsTab/>
                        </Tab>
                        <Tab eventKey="Experience" title="Experience " style={{ backgroundColor: "white" }}>
                           <ProfileExperienceTab/>
                        </Tab>
                        <Tab eventKey="Project" title="Project" style={{ backgroundColor: "white" }}>
                            <ProfileProjectTab/>
                        </Tab>
                    </Tabs> 
  
        </>

    );
}
export default MyProfileTabs;

