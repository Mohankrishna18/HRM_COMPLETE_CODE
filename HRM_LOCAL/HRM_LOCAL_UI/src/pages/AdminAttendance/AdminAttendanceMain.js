import React from 'react'
import NavBar from '../../NavBar/NavBar';
import Sidebar from '../../NavBar/Sidebar';
import Admin from './AdminAttendanceComponents/Admin'
import EmpTable from './AdminAttendanceComponents/AdminAttendanceTable';




const AdminAttendanceMain = () => {
return (
<div>



<Sidebar >
<Admin />
<EmpTable />
</Sidebar>
</div>
)
}



export default AdminAttendanceMain;