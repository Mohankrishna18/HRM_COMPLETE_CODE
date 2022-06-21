import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../../Uri";export default function HrApprovedLeaves() {
const [data, setData] = useState([]);useEffect(() => {
loadData();
}, []);const loadData = async () => {
const res = await axios.get("leave/getAllApprovedLeaves/approved");
setData(res.data);
console.log(res.data);
};const [columns, setColumns] = useState([
{ title: "Employee", field: "employeeId" },
{ title: "Leave Type", field: "leaveType" },
{ title: "From Date", field: "fromDate", type: "date" },
{ title: "To Date", field: "toDate", type: "date" },
{ title: "No.Of Days", field: "numberOfDays" },
{ title: "Leave Reason", field: "leaveReason" },
{ title: "Leave Status", field: "leaveStatus" },
]);return (
<Grid>
<MaterialTable
title=""
columns={columns}
data={data}
options={{
paging: false,
addRowPosition: "first",
actionsColumnIndex: -1,
headerStyle: {
backgroundColor: "#FE924A",color: "white",
},
exportButton: true,
}}
/>
</Grid>
);
}

