import React from "react";
import { Card } from "react-bootstrap";
import { Tabs, Tab } from "react-bootstrap";
import BankStatementTab from "./BankStatementTab";
import ProfileTab from "./ProfileTab";
import ProjectsTab from "./ProjectsTab";


export default function EmployeeProfileTabs() {
  
    return (     
            <Card.Body style={{ marginTop: 15 }}>
                <Tabs className="justify-content-center">
                    <Tab eventKey="home" title="Profile">
                        <ProfileTab />
                    </Tab>
                    <Tab eventKey="profile" title="Projects">
                        <ProjectsTab />
                    </Tab>
                    <Tab eventKey="contact" title="Bank Statement" >
                        <BankStatementTab />
                    </Tab>
                </Tabs>
            </Card.Body>       
    );
}
