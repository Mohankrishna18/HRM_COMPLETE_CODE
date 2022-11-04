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
            title: "Date",
            field: "punchinDate",
            type: "date",
            headerStyle: {
                //backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "Punch In Time",
            field: "punchin",
            type: "time",
            headerStyle: {
                // backgroundColor: "#1E90FF",
                color: "white",
            },
        },
        {
            title: "Punch out Time",
            field: "punchout",
            type: "time",
            headerStyle: {
                //backgroundColor: "#1E90FF",
                color: "white",
            },
        },


    ];

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`/attendance/getAttendanceLogByMonth/7`)
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

            <Grid >
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

        </div>
    )
}


export default EmpTable;