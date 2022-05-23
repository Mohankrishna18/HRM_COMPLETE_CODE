import React from 'react'
import { Col, Row } from 'react-bootstrap';

import AllEmployee from './AllEmployeesComponents/AllEmployee'




const Employee = () => {
return (
<div>

<Row>
    <Col xs={12}>
    <AllEmployee/>
    </Col>
</Row>


</div>
)
}



export default Employee;