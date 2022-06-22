import React, { useState, useEffect, useLayoutEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";
export default function RoleEditableTable() {
    const [data, setData] = useState([]);
    const [depname, setDepname] = useState([])
    const [status, setStatus] = useState({})
    useEffect(() => {
        axios.get("/user/getModuleData").then((res) => {
            console.log(res.data.data)
            setDepname(res.data.data)
        });
    }, []);
    console.log(depname)
    const loadDept = () => {

        depname.map(row => status[row.moduleName] = row.moduleName)
        console.log(status)
        setStatus(status)

    }
    useEffect(() => {
        loadDept()
    })


    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        const res = await axios.get("/user/getAllRoles");
        setData(res.data.data);
        console.log(res.data.data)


    };


    const [columns, setColumns] = useState([
        // { title: 'ID', field: 'designationId', editable: false },
        {
            title: 'Role Name', field: 'roleName', headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-1', field: 'permission1',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-2', field: 'permission2',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-3', field: 'permission3',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-4', field: 'permission4',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-5', field: 'permission5',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-6', field: 'permission6',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-7', field: 'permission7',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-8', field: 'permission8',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-9', field: 'permission9',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },
        {
            title: 'Module-10', field: 'permission10',  lookup: status, headerStyle: {

                backgroundColor: "#FE924A",

                color: "white",

            },
        },

    ]);



    return (
        <Grid>
            <MaterialTable responsive
                title=""
                columns={columns}
                data={data}
                editable={{
                    onRowAdd: newData =>

                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                console.log(newData)
                                const res = axios.post("/user/addRole", newData)
                                console.log(res)
                                setData([...data, newData]);
                                loadData();
                                

                                resolve();
                            }, 1000)
                        }),
                    onRowUpdate: (updatedRow, oldRow) =>
                        new Promise((resolve, reject) => {
                            console.log(oldRow);
                            console.log(updatedRow);
                            const index = oldRow.roleId;
                            console.log(index);
                            const updatedRows = [...data];
                            console.log(updatedRows);
                            updatedRows[oldRow.tableData.id] = updatedRow;
                            console.log(updatedRows);

                            setTimeout(() => {

                                console.log(index)
                                console.log(updatedRow)
                                const res = axios.put(`/user/UpdateRoleId/${index}`, updatedRow)
                                    .then((resp) => {
                                        console.log(resp);
                                        loadData()
                                        setData(updatedRows)
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
                                const index = oldData.roleId;
                                dataDelete.splice(index, 1);
                                const res = axios.delete(`/user/deleteRoleData/${index}`)
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
                    // paginationType:'normal',
                    // pageSize:20,
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