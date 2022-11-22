import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { Grid } from "@mui/material";
//import { Link } from "@mui/material";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import EmployeeMasterForms from "./editmyprofileroute";



import axios from "../../../Uri";
import { ExportCSV } from "../../../commonComponents/ExportCSV";
import { Row, Stack } from "react-bootstrap";


function EmployeeList() {

    const fileName = "All Employees"
    const history = useHistory();
    const [data, setData] = useState([]);
    const [eid, setEid] = useState("");
    const myProfile = (e) => {
        console.log(e.target.innerText);
        history.push(`/app/`)
        setEid(e.target.innerText);
        localStorage.setItem('item', e.target.innerText)
        axios
            .get(`/emp/getEmployeeDataByEmployeeId/${e.target.innerText}`)
            .then((response) => {

                console.log(response.data.data);
            });
    };


    useEffect(() => {
        axios
            .get("/emp/getAllEmployeeMasterData")
            .then((res) => {
                // setData(res.data.data);
            const sata1 = res.data.data.filter(item => item.status === 'Active')
            console.log(res.data);
                setData(sata1) 
                console.log(res.data.data);
                console.log(res.data.data.employeeid);
            })
            .catch((err) => {
                console.log(err);
                // toast.error("Server Error")
            });
    }, []);

    const columns = [
        {
            title: "Employee ID",
            field: "employeeId",
            render: (rowData) => (
                <Link to="/app/editmyprofileroute" onClick={myProfile}>
                    {rowData.employeeId}
                </Link>
            ),
            type: "text",




        },
        {
            title: "Name",
            field: "firstName",
            type: "text",

        },
        {
            title: "Email",
            field: "email",

        },
        {
            title: "Business Unit",
            field: "departmentName",
            defaultGroupOrder:0,

        },
        {
            title: "Designation",
            field: "designationName",
            type: "text",

        },

        {
            title: "DOJ",
            field: "dateOfJoining",
            type: "date",
            dateSetting: { locale: "en-GB" },

        },
        {
            title: "IRM",
            field: "irm",

        },
        {
            title: "SRM",
            field: "srm",

        },

        // {
        //     title: "Reporting Manager",
        //     field: "reportingManager",



        //     headerStyle: {
        //         backgroundColor: "#FF9E14",
        //         color: "white",
        //     },
        // },
    ];

    return (
        <div className="example">
            <Grid container data1={eid}>
                <Grid xs={12}>
                    
                
                    <MaterialTable
                        title="All Employees"

                        data={data}
                        sx={{ color: "white" }}
                        columns={columns}
                        editable={{
                            onRowAdd:()=>{

                            }
                        }}
                        options={{
                            
                            // exportButton: true,
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
                        components={{
                            Action: (props) => (
                                <div>
                                    <Stack direction="horizontal" gap={4}>
                                    <ExportCSV csvData={data}  fileName={fileName}/>
    
                                    </Stack>
                                </div>
                            ),
                        }}
    
                    />
                    
                </Grid>
            </Grid></div>
    );
}



export default EmployeeList;



// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
// import { Row, Col, Table } from "react-bootstrap";



// import { useState, useEffect } from "react";
// import axios from "../../../Uri";



// import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";



// //scss
// import style from "./styles.module.css";
// //data for post
// import data from "./data.json";



// function AllEmployee() {
// const [show, setShow] = useState(false);
// const handleShow = () => setShow(true);
// const [employees, setEmployees] = useState([]);



// const loadData = async () => {
// const res = await axios.get("/emp/getAllEmployeeMasterData");



// console.log(res.data.data);
// setEmployees(res.data.data);
// console.log(employees);
// console.log("hai");
// };



// useEffect(() => {
// loadData();
// }, []);



// return (
// <Card responsive className="scroll">
// <Card.Header>
// <Card.Body>
// <Card.Title>Employee</Card.Title>
// <Card.Subtitle className="mb-2 text-muted">
// All Employees
// </Card.Subtitle>
// {/* <AddEmployee /> */}
// </Card.Body>
// <Form style={{ margin: 20 }}>
// <Row md={12}>
// <Table>
// <thead>
// <tr>
// {/* <th>#</th> */}
// <th>SNO</th>
// <th>Emp-ID</th>
// <th>Name</th>
// <th>Designation</th>
// <th>Ph_no</th>
// <th>Mail_Id</th>
// </tr>
// </thead>
// <tbody>
// {employees.map((employee, index) => (
// <tr>
// {/* <td>{designation.designationId}</td> */}
// <th scope="row">{index + 1}</th>
// <td>{employee.employeeId}</td>
// <td>{employee.firstName}</td>
// <td>{employee.designationName}</td>
// <td>{employee.primaryPhoneNumber}</td>
// <td>{employee.email}</td>
// </tr>
// ))}
// </tbody>
// </Table>
// </Row>
// </Form>
// </Card.Header>
// </Card>
// );
// }



// export default AllEmployee;

