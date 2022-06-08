import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../Uri";
export default function EmployeeLeaveHistory() {
    
    
    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const da = JSON.parse(sessionStorage.getItem('userdata')) 
    const empID=da.data.employeeId;
  

    const loadData = async () => {
        const res = await axios.get(`/leave/getUserByReportingManager/${empID}`);
        setData(res.data);
        console.log(res.data);
    };
    const [columns, setColumns] = useState([
        { title: 'Employee ID', field: 'employeeId' },
        { title: 'Leave Reason', field: 'leaveReason', type:'date'},
    { title: 'No.Of Days', field: 'numberOfDays', type:'date'},
    { title: 'From Date', field: 'fromDate', type:'date'},
    { title: 'To Date', field: 'toDate', type:'date'},
    { title: 'Leave Status', field: 'leaveStatus', type:'date'},
    // { title: 'Leave Type', field: 'leaveType', type:'date'}
    
    ]);
    

    // const [data, setData] = useState([
    //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    // ]);

    return (
        <Grid>
            <MaterialTable
                title=""
                columns={columns}
                data={data}
                // editable={{
                //     onRowAdd: newData =>
                //         new Promise((resolve, reject) => {
                           
                          
                //             setTimeout(() => {
                //                 console.log(newData)
                //                 const res = axios.post("/holiday/addholiday",
                //                     newData,
                //                 );
                //                 setData([...data, newData]);
                //                loadData();
                               

                //                 resolve();
                //             }, 1000)
                //         }),
                //     onRowUpdate: (updatedRow, oldRow) =>
                //         new Promise((resolve, reject) => {
                //             console.log(oldRow);
                //             console.log(updatedRow);
                //             const index = oldRow.holidayId;
                //             console.log(index);
                //             const updatedRows = [...data];
                //             console.log(updatedRows);
                //             updatedRows[oldRow.tableData.id] = updatedRow;
                //             console.log(updatedRows);

                //             setTimeout(() => {
                //                 console.log(updatedRow)
                //                 const res = axios.put(`/holiday/updateHolidayById/${index}`, updatedRow)
                //                     .then((resp) => {
                //                         console.log(resp);
                //                         loadData()
                //                     })

                //                     .catch((err) => {
                //                         console.log("not updated")
                //                         // toast.error("Server error");
                //                     });

                //                 setData(updatedRows);
                //                 console.log("updated")
                //                 // toast.success(" Updated Successfully");
                //                 console.log(updatedRows);
                //                 resolve();
                //             });
                //         }),



                //     onRowDelete: oldData =>
                //         new Promise((resolve, reject) => {
                //             setTimeout(() => {
                //                 console.log(oldData)
                //                 const dataDelete = [...data];
                //                 const index = oldData.holidayId;
                //                 dataDelete.splice(index, 1);
                //                 const res = axios.delete(`/holiday/deleteHoliday/${index}`)
                //                     .then((res) => {
                //                         console.log(res)
                //                         loadData()
                //                     })
                //                 console.log(dataDelete)
                //                 //setData(dataDelete);

                //                 resolve()
                //             }, 1000)
                //         }),
                // }}
                options={{
                    paging: false,
                    addRowPosition:'first',
                    actionsColumnIndex: -1,
                    headerStyle: {

                        backgroundColor: "#FE924A",

                        color: "white",

                    },
                    exportButton: true
                }}
            />
        </Grid>
    )
}
