import React from 'react'
import { Card } from 'react-bootstrap'
import RolesCard from "./RolesCard"
import RolesTabs from "./RolesTabs"
import RolesPermissions from "./RolesPermissions"
import AddRole from './AddRole'
import Sidebar from '../../../NavBar/Sidebar'
import NavBar from '../../../NavBar/NavBar'

function RolesMain() {
    return (
        <div>
            <NavBar/>
            <Sidebar>
            <Card>
                <Card.Header>
                    <Card.Body>
                        <Card.Title>Roles</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Administration/Roles </Card.Subtitle>
                    </Card.Body>
                </Card.Header>
            </Card>
            <RolesCard />
            {/* <RolesPermissions /> */}
            </Sidebar>
        </div>
    )
}

export default RolesMain