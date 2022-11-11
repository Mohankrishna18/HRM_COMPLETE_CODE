import React, { useEffect } from 'react';
import { Card, Row, Tab, Tabs } from 'react-bootstrap';
import AditionalDetailsTab from './AdditionalDetailsTab';
import AddressTab from './AddressTab';
import EducationalDetailsTab from './EducationalDetailsTab';
import EmployeeMasterCard from './EmployeeMasterCard';
// import EmploymentDetailsTab from './EmploymentDetailsTab';
import ExperienceTab from './ExperienceTab';
import PersonalDetailsTab from './PersonalDetailsTab';
import ProjectsTab from './ProjectsTab';


function EmployeeMasterTabs() {


    return (
        <div>
          
                    {/* #f99159 */}
                    <Tabs
                        defaultActiveKey="Personal Details"
                        transition={true}
                        id="noanim-tab-example"
                        className="mb-3"  
                        color="Black"
                          fontColour="white"
                        style={{ justifyContent: "center", color: "white" , backgroundColor:"white",opacity:0.95, fontSize:"18px" ,padding:0,}}
                    >
                        <Tab eventKey="Personal Details" title="Personal Details" color='white' style={{ backgroundColor: "white" ,height:30}}>
                            <PersonalDetailsTab/>
                        </Tab>
                        <Tab eventKey="Address" title="Address" style={{ backgroundColor: "white" }}>
                            <AddressTab/>
                        </Tab>
                        <Tab eventKey="Additional Details" title="Additional Details" style={{ backgroundColor: "white" }}>
                            <AditionalDetailsTab/>
                        </Tab>
                      
                        <Tab eventKey="Educational Details" title="Educational Details" style={{ backgroundColor: "white" }}>
                            <EducationalDetailsTab/>
                        </Tab>
                        <Tab eventKey="Experience" title="Experience " style={{ backgroundColor: "white" }}>
                            <ExperienceTab/>
                        </Tab>
                     
                    </Tabs> 
  

        </div>

    )
}
export default EmployeeMasterTabs;


