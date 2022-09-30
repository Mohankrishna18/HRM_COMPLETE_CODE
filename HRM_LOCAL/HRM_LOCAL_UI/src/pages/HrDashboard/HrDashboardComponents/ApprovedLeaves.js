import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";

function ApprovedLeaves() {
    const [data, setData] = useState([]);
    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
      const res = await axios.get("/leave/getEmployeeLeavesPendingLeavesByStatus/Approved");
      setData(res.data);
      console.log(res.data);
    };
    const [columns, setColumns] = useState([
      { title: "EmployeeID", field: "employeeId" },
  
      { title: "Name", field: "firstName" },
  
      { title: "Department", field: "departmentName" },
  
      { title: "Designation", field: "designationName" },
  
      { title: "Leaves Reason", field: "leaveReason" },
  
      { title: "No.of Days", field: "numberOfDays" },
    ]);
  
    return (
      <div>
        <Grid>
          <MaterialTable
            title="Leaves Waiting For Approval"
            columns={columns}
            data={data}
            options={{
              paging: false,
              addRowPosition: "first",
              actionsColumnIndex: -1,
              // filtering: true,
              headerStyle: {
                backgroundColor: "#FE924A",
  
                color: "white",
              },
              exportButton: true,
            }}
          />
        </Grid>
      </div>
    );
}

export default ApprovedLeaves;