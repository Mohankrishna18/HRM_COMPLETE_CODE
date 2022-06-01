import React from 'react'
import { Col, Row } from 'react-bootstrap';

import AllEmployee from './AllEmployeesComponents/AllEmployee'
import EmployeeList from './AllEmployeesComponents/EmployeeList';




const Employee = () => {
return (
<div>

<Row>
    <Col xs={12}>
    {/* <AllEmployee/> */}
    <EmployeeList />
    </Col>
</Row>


</div>
)
}



export default Employee;