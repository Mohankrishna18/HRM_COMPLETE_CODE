import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";
export default function HolidayTable() {
    
    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {
        const res = await axios.get("/holiday/getAllHolidays");
        setData(res.data.data);
        console.log(res.data);
    };
    const [columns, setColumns] = useState([
        // { title: 'ID', field: 'departmentId', editable: false },
        // {title:"ID",field:"id"},
        { title: 'Holiday Title', field: 'holidayTitle', 
        validate:rowData =>{        if(rowData.holidayTitle===undefined){       return  "Holiday Title is Required"         }    else if(!rowData.holidayTitle.match(/^[aA-zZ\s]+$/)){      return" Please enter valid name"    }    return true     },
       
    },
        { title: 'Holiday Date', field: 'holidayDate', type:'date', validate:rowData=>{
            if(rowData.holidayDate===undefined || rowData.holidayDate===""){
                return "Required"
            }
            return true 
        } },

        //   {
        //     title: 'Birth Place',
        //     field: 'birthCity',
        //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        //   },
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
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                           
                          
                            setTimeout(() => {
                                console.log(newData)
                                const res = axios.post("/holiday/addholiday",
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
                            const index = oldRow.holidayId;
                            console.log(index);
                            const updatedRows = [...data];
                            console.log(updatedRows);
                            updatedRows[oldRow.tableData.id] = updatedRow;
                            console.log(updatedRows);

                            setTimeout(() => {
                                console.log(updatedRow)
                                const res = axios.put(`/holiday/updateHolidayById/${index}`, updatedRow)
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
                                const index = oldData.holidayId;
                                dataDelete.splice(index, 1);
                                const res = axios.delete(`/holiday/deleteHoliday/${index}`)
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
                    exportButton: true
                }}
            />
        </Grid>
    )
}