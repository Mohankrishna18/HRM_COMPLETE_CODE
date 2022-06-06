// import React, { useState, useEffect } from "react";
// import MaterialTable from "material-table";
// import { Grid } from "@mui/material";

// import axios from "../../../Uri";

// function EmployeeList() {

//   const [data, setData] = useState([]);

//   const columns = [
//     {
//       title: "Employee Id",
//       field: "employeeId",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Employee Name",
//       field: "firstName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//         title: "Email",
//         field: "email",

//         headerStyle: {
//           backgroundColor: "#FF9E14",
//           color: "white",
//         },
//       },
//     {
//       title: "Designation",
//       field: "designationName",
//       type: "text",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },

//     {
//       title: "Date of Joining",
//       field: "dateOfJoining",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//       title: "Skill set",
//       field: "primarySkills",

//       headerStyle: {
//         backgroundColor: "#FF9E14",
//         color: "white",
//       },
//     },
//     {
//         title: "Reporting Manager",
//         field: "reportingManager",

//         headerStyle: {
//           backgroundColor: "#FF9E14",
//           color: "white",
//         },
//       },

//   ];

//   useEffect(() => {
//     axios

//       .get("/emp/getAllEmployeeMasterData")

//       .then((res) => {
//         setData(res.data.data);

//         console.log(res.data.data);
//       })

//       .catch((err) => {
//         console.log(err);
//         // toast.error("Server Error")
//       });
//   }, []);

//   return (
//     <Grid container>
//       <Grid xs={12}>
//         <MaterialTable
//           title="All Employees"
//           data={data}
//           sx={{ color: "white" }}
//           columns={columns}
//           options={{
//             exportButton: true,
//             pageSize: 20,
//             actionsColumnIndex: -1,
//             grouping: true,
//             addRowPosition: "first",
//             headerStyle: {
//               backgroundColor: "#1E90FF",
//               color: "white",
//               fontSize: "15px",
//               //height: "10px",
//               //fontWeight: 'bold'
//             },
//             rowStyle: {
//               fontSize: 16,
//             },
//           }}
//         />
//       </Grid>
//     </Grid>
//   );
// }

// export default EmployeeList;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col, Table } from "react-bootstrap";
import AddEmployee from "./AddEmployee";

import { useState, useEffect } from "react";
import axios from "../../../Uri";

import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";

//scss
import style from "./styles.module.css";
//data for post
import data from "./data.json";

function AllEmployee() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [employees, setEmployees] = useState([]);

  const loadData = async () => {
    const res = await axios.get("/emp/getAllEmployeeMasterData");

    console.log(res.data.data);
    setEmployees(res.data.data);
    console.log(employees);
    console.log("hai");
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Card responsive className="scroll">
      <Card.Header>
        <Card.Body>
          <Card.Title>Employee</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            All Employees
          </Card.Subtitle>
          {/* <AddEmployee /> */}
        </Card.Body>
        <Form style={{ margin: 20 }}>
          <Row md={12}>
            <Table>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>SNO</th>
                  <th>Emp-ID</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Ph_no</th>
                  <th>Mail_Id</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr>
                    {/* <td>{designation.designationId}</td> */}
                    <th scope="row">{index + 1}</th>
                    <td>{employee.employeeId}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.designationName}</td>
                    <td>{employee.primaryPhoneNumber}</td>
                    <td>{employee.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Form>
      </Card.Header>
    </Card>
  );
}

export default AllEmployee;
