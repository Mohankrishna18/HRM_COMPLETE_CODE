import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../Uri"
export default function CreateLeaves() {

    const [data, setData] = useState([]);



    useEffect(() => {



        loadData();



    }, []);



    const loadData = async () => {
        const res = await axios.get("/leave/getAllleavetypes");
        setData(res.data);
        console.log(res.data.data);
    };
    const [columns, setColumns] = useState([
        // { title: 'ID', field: 'departmentId', editable: false },
        // {title:"ID",field:"id"},
        {
            title: ' Leave Type', field: 'leaveType',
            // validate:rowData =>{ if(rowData.leaveType===undefined){ return "Leave Type is Required" } else if(!rowData.leaveType.match(/^[aA-zZ\s]+$/)){ return" Please enter valid leave type" } return true },

        },
        { title: 'Number Of Days', field: 'noOfDays' }
        // // validate:rowData=>{
        // if(rowData.noOfDays===undefined || rowData.noOfDays===""){
        // return "Required"
        // }
        // return true
        // } },



        // {
        // title: 'Birth Place',
        // field: 'birthCity',
        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        // },
    ]);



    // const [data, setData] = useState([
    // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    // ]);



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
                                const res = axios.post(`leave/save/leaveType`,
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
                            const index = oldRow.leaveId;
                            console.log(index);
                            const updatedRows = [...data];
                            console.log(updatedRows);
                            updatedRows[oldRow.tableData.leaveId] = updatedRow;
                            console.log(updatedRows);



                            setTimeout(() => {
                                console.log(updatedRow)
                                const res = axios.put(`/leave/put/${index}`, updatedRow)
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
                                const index = oldData.leaveId;
                                dataDelete.splice(index, 1);
                                const res = axios.delete(`leave/delete/${index}`)
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
                    paging: true,
                    addRowPosition: 'first',
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
