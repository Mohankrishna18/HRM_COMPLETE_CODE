import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";




export default function EmploymentTypes() {
const [data, setData] = useState([]);



useEffect(() => {



loadData();



}, []);



const loadData = async () => {
const res = await axios.get("/employmentType/getAllEmployments");
setData(res.data.data);
console.log(res.data.data);
};






const [columns, setColumns] = useState([
{ title: 'Employment Type', field: 'employmentTypeName' },
]);



return (
<Grid>
<MaterialTable
title=""
columns={columns}
data={data}
editable={{
onRowAdd: newData =>
new Promise((resolve, reject) => {


setTimeout(() => {
console.log(newData)
const res = axios.post("/employmentType/addEmploymentType",
newData,
);
setData([...data, newData]);
loadData();



resolve();
}, 1000)
}),
onRowUpdate: (updatedRow, oldRow) =>
new Promise((resolve, reject) => {
console.log(oldRow);
console.log(updatedRow);
const index = oldRow.employmentTypeId;
console.log(index);
const updatedRows = [...data];
console.log(updatedRows);
updatedRows[oldRow.tableData.id] = updatedRow;
console.log(updatedRows);



setTimeout(() => {
console.log(updatedRow)
const res = axios.put(`/employmentType/updateEmploymentTypeById/${index}`, updatedRow)
.then((resp) => {
console.log(resp);
loadData()
})



.catch((err) => {
console.log("not updated")
// toast.error("Server error");
});



setData(updatedRows);
console.log("updated")
// toast.success(" Updated Successfully");
console.log(updatedRows);
resolve();
});
}),





onRowDelete: oldData =>
new Promise((resolve, reject) => {
setTimeout(() => {
console.log(oldData)
const dataDelete = [...data];
const index = oldData.employmentTypeId;
dataDelete.splice(index, 1);
const res = axios.delete(`/employmentType/deleteEmploymentType/${index}`)
.then((res) => {
console.log(res)
loadData()
})
console.log(dataDelete)
//setData(dataDelete);



resolve()
}, 1000)
}),
}}
options={{
paging: false,
addRowPosition:'first',
actionsColumnIndex: -1,
headerStyle: {



backgroundColor: "#FE924A",



color: "white",



},
}}
/>
</Grid>
)
}