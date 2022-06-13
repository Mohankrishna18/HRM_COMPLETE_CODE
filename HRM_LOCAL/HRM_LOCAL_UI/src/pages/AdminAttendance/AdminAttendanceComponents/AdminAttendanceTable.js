import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-bootstrap/Pagination'
import { TiTick } from "react-icons/ti";
import { TiTimes } from "react-icons/ti";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";
import axios from "../../../Uri";


//import inputdata from './Inputdata';
const EmpTable = () => {
    // employeeFirstName: null
    // employeeId: "ATPL00050"
    // employeeLastName: null
    // employeeMiddleName: null
    // employeeattendanceId: 1
    // punchIn: "06-06-2022 16:22:21"
    // punchOut: null


    const columns = [
        {
            title: "Employee Id",
            field: "employeeId",
            type: "text",
            headerStyle: {
                // backgroundColor: "#f0451a",
                color: "white",
            },
        },
        {
            title: "Employee Name",
            field: "employeeFirstName",
            type: "text",
            headerStyle: {
                // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "punch In ",
            field: "punchIn",
            type: "text",
            headerStyle: {
                // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        // {
        //     title: "2",
        //     field: "price",
        //     headerStyle: {
        //         //backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "3",
        //     field: "checkInDate",
        //     headerStyle: {
        //         //backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "4",
        //     field: "checkOutDate",
        //     headerStyle: {
        //         //backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "5",
        //     field: "bedId",
        //     headerStyle: {
        //        // backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "6",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "7",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "8",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "9",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "10",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "11",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "12",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "13",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "14",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "15",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "16",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "17",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "18",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "19",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "20",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "21",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "22",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "23",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "24",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "25",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "26",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "27",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "28",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "29",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
        // {
        //     title: "30",
        //     field: "dueAmount",
        //     headerStyle: {
        //       //  backgroundColor: "#1E90FF",
        //         color: "white",
        //     },
        // },
    ];

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`/attendance/getAttendanceLogByMonth/6`)
            .then((res) => {
                setData(res.data.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                // toast.error("Server Error")
            });
    }, []);

    // const obje = { createdBy: userId };


    return (
        <div className='scroll' style={{ paddingBottom: '30px' }}>

            <Grid xs={12}>
                <MaterialTable
                    title="All Employees Attendance"
                    // data={data}
                    sx={{ color: "white" }}
                    columns={columns}
                    data={data}
                    options={{
                        exportButton: true,
                        pageSize: 20,
                        actionsColumnIndex: -1,
                        grouping: true,
                        addRowPosition: "first",
                        headerStyle: {
                            backgroundColor: "#f25b1b",
                            color: "white",
                            fontSize: "15px",
                        },
                        rowStyle: {
                            fontSize: 16,
                        },
                    }}
                />
            </Grid>

        </div>
    )
}




export default EmpTable;