import React from 'react'
import { Col, Row } from 'react-bootstrap';

import Admin from './AdminAttendanceComponents/Admin'
import EmpTable from './AdminAttendanceComponents/AdminAttendanceTable';




const AdminAttendanceMain = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Admin />
                </Col>

            </Row>
        </div>
    )
}



export default AdminAttendanceMain;