import React, { useState, useEffect } from 'react';
import ReusableTable from "../../Reusable/ReusableMaterialTable";
import axios from "../../../Uri";
import {forApproval} from "../HrDashboardComponents/LeavesForApprovalColumns";


function LeavesForApprovalTable() {
    const [data, setData] = useState([]);
    
    useEffect(() => {

        loadData();
        
    
    }, []);
    
    const loadData = async () => {
        const res = await axios.get("/leave/getEmployeeLeavesPendingLeavesByStatus/pending");
        setData(res.data);
        console.log(res.data);
    };

  return (
    

        <div>
            <ReusableTable
            titlee="Leaves Waiting for Approval"
            columnes={forApproval.headers}
             dataa={data}
             />
            </div>
  )
}
export default LeavesForApprovalTable;