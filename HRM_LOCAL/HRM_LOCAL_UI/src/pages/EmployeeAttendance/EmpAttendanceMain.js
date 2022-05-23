import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Sidebar from '../../NavBar/Sidebar'
import EmpAttendance from './EmpAttendanceComponents/EmpAttendanceCard'
import EmpAttendanceForm from './EmpAttendanceComponents/EmpAttendanceForm'
import EmpAttendanceHeader from './EmpAttendanceComponents/EmpAttendanceHeader'
import EmpAttendanceTable from './EmpAttendanceComponents/EmpAttendanceTable'




const EmpAttendanceMain = () => {
return (
<div>



<Sidebar>
<EmpAttendanceHeader />
<EmpAttendanceForm />
<EmpAttendanceTable />
</Sidebar>
</div>
)
}



export default EmpAttendanceMain