import React, { useState, useEffect } from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";


 function Bands() {
    const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {
        const res = await axios.get("/bands/getAllBands");
        setData(res.data.data);
        console.log(res.data.data);
    };

  


    const [columns, setColumns] = useState([
        { title: 'Band', field: 'bandName' },
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
                                const res = axios.post("/bands/addBands",
                                    newData,
                                );
                                setData([...data, newData]);
                                toast.success("Band is added")
                               loadData();
                               

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (updatedRow, oldRow) =>
                        new Promise((resolve, reject) => {
                            console.log(oldRow);
                            console.log(updatedRow);
                            const index = oldRow.bandId;
                            console.log(index);
                            const updatedRows = [...data];
                            console.log(updatedRows);
                            updatedRows[oldRow.tableData.id] = updatedRow;
                            console.log(updatedRows);

                            setTimeout(() => {
                                console.log(updatedRow)
                                const res = axios.put(`/bands/updateBandById/${index}`, updatedRow)
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
                                toast.success(" Band Updated Successfully");
                                console.log(updatedRows);
                                resolve();
                            });
                        }),



                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                console.log(oldData)
                                const dataDelete = [...data];
                                const index = oldData.bandId;
                                dataDelete.splice(index, 1);
                                const res = axios.delete(`/bands/deleteBand/${index}`)
                                    .then((res) => {
                                        console.log(res)
                                        loadData()
                                    })
                                console.log(dataDelete)
                                //setData(dataDelete);
                                toast.success(" Band Deleted Successfully");
                                resolve()
                            }, 1000)
                        }),
                }}
                options={{
                    paging: true,
                    addRowPosition:'first',
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: "#f5896e",
                        color: "white",
                        fontSize: "12px",
                        //height: "10px",
                        //fontWeight: 'bold'
                    },
                    rowStyle: {
                        fontSize: 14,
                    },
                }}
            />
        </Grid>
    )
}

export default Bands;