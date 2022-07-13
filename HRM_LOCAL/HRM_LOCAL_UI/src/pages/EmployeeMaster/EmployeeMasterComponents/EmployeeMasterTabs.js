import React, { useEffect } from 'react';
import { Card, Row, Tab, Tabs } from 'react-bootstrap';
import AditionalDetailsTab from './AdditionalDetailsTab';
import AddressTab from './AddressTab';
import EducationalDetailsTab from './EducationalDetailsTab';
import EmployeeMasterCard from './EmployeeMasterCard';
import EmploymentDetailsTab from './EmploymentDetailsTab';
import ExperienceTab from './ExperienceTab';
import PersonalDetailsTab from './PersonalDetailsTab';
import ProjectsTab from './ProjectsTab';


function EmployeeMasterTabs() {


    return (
        <div>
            <Card className="scroll" >
                
                    <Card.Header>
                        <Card.Body>
                            <Card.Title>Edit My Profile</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Edit My Profile
                            </Card.Subtitle>
                            <EmployeeMasterCard />
                            <Card.Text style={{ marginTop: 20, color: "red" }}>
                                * All fields are mandatory. Please fill the form Correctly.
                            </Card.Text>
                        </Card.Body>
                    </Card.Header>
                
                    <Tabs
                        defaultActiveKey="Personal Details"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        style={{ justifyContent: "center", color: "white" , backgroundColor:"white", fontSize:"16px" ,padding:10}}
                    >
                        <Tab eventKey="Personal Details" title="Personal Details" style={{ backgroundColor: "white" }}>
                            <PersonalDetailsTab />
                        </Tab>
                        <Tab eventKey="Address" title="Address" style={{ backgroundColor: "white" }}>
                            <AddressTab />
                        </Tab>
                        <Tab eventKey="Additional Details" title="Additional Details" style={{ backgroundColor: "white" }}>
                            <AditionalDetailsTab />
                        </Tab>
                        <Tab eventKey="Employment Details" title="Employment Details" style={{ backgroundColor: "white" }}>
                            <EmploymentDetailsTab />
                        </Tab>
                        <Tab eventKey="Educational Details" title="Educational Details" style={{ backgroundColor: "white" }}>
                            <EducationalDetailsTab />
                        </Tab>
                        <Tab eventKey="Experience" title="Experience " style={{ backgroundColor: "white" }}>
                            <ExperienceTab />
                        </Tab>
                        {/* <Tab eventKey="Project" title="Project " style={{ backgroundColor: "white" }}>
                             <ProjectsTab/>
                        </Tab> */}
                    </Tabs> 
            </Card>

        </div>

    )
}
export default EmployeeMasterTabs;

