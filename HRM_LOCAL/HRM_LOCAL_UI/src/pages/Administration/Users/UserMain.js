import React from 'react'
import { Card } from 'react-bootstrap'
import NavBar from '../../../NavBar/NavBar'
import Sidebar from '../../../NavBar/Sidebar'
import SearchFields from './SearchFields'
import UserTable from './UserTable'



const UserName =() => {
return (
<div>

<Sidebar>
<Card>
<Card.Header>
<Card.Body>
<Card.Title>Users</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Administration/Users </Card.Subtitle>
</Card.Body>
</Card.Header>
</Card>
<SearchFields />
<UserTable />
</Sidebar>
</div>
)
}



export default UserName