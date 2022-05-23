import React from 'react'
import Navbar from '../../NavBar/NavBar'
import Sidebar from '../../NavBar/Sidebar'
import TimeSheet from './TimeSheetComponents/TimeSheet'
//alignments
const TimeSheetMain = () => {
  return (
    <div>
    
      <Sidebar>
      <TimeSheet />
      </Sidebar>
    
    </div>
  )
}

export default TimeSheetMain
 