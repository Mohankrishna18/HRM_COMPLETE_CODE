import { React, useState, useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from './../../Uri';
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
// import {Dropdown } from 'react-bootstrap/Dropdown';



// import LeaveCard from './LeaveCard'



//
//const userData1 = JSON.parse(userData);



const ManagerTable = () => {
  const userData = sessionStorage.getItem("userdata");
  const userData1 = JSON.parse(userData);



  const employeeid = userData1.data.employeeId;
  console.log(employeeid);



  function formatDate(fromDate) {
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];



    return day + "-" + month + "-" + year;
  }
  const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);



  const [manager, setManagerData] = useState([]);
  const [enable, setEnable] = useState([])



  useEffect(() => {
    axios.get(`/emp/getEmployeesDataForReportingManager/${employeeid}`).then((res) => {
      console.log(res.data);
      setManagerData(res.data);
    });
  }, []);
  const dispaly = (e) => {
    console.log(e.target.value)
    setEnable(e.target.value)




  }
  const [columns, setColumns] = useState([
    { title: 'EmployeeId', field: 'employeeId' },
    { title: 'FirstName', field: 'firstName', type: 'date' },
    { title: 'LastName', field: 'lastName', type: 'date' },
    { title: 'ProjectName', field: 'projectName', type: 'date' },
    { title: 'Designation', field: 'designationName', type: 'date' },
    { title: 'Email', field: 'email', type: 'date' },
    // { title: 'Leave Type', field: 'leaveType', type:'date'}



  ]);




  return (
    <Grid>
      <MaterialTable
        title=""
        columns={columns}
        data={manager}
        // <div>
        // <Card bg="white" style={{paddingTop:20, paddingLeft:30, paddingRight:30}}>
        // <Row>
        // <Col xs={6} md={8}>
        // <Card.Body>
        // <Card.Title>Manager</Card.Title>
        // <Card.Subtitle className="mb-2 text-muted">
        // Dashboard/Manager Employees History
        // </Card.Subtitle>
        // </Card.Body>
        // </Col>
        // <Col xs={6} md={4}>
        // <AddLeave />



        // <Button
        // onClick={handleShow}
        // style={{ backgroundColor: "#eb4509", float: "right" }}
        // >
        // <h4>Add Leave</h4>
        // {employee}{" "}
        // </Button>
        // </Col>
        // </Row>
        // <Container-fluid >
        // <Table responsive="sm">
        // <thead>
        // <tr>
        // <th align="left">Leave Id</th>
        // <th align="left">Employee</th>
        // <th align="left"> EmployeeId</th>
        // <th align="left">FirstName</th>
        // <th align="left">LastName</th>
        // <th align="left"> ProjectName</th>
        // <th align="left">Designation</th>
        // <th align="left">Email</th>
        // {/* <th align="center"> Action</th>
        // </tr>
        // </thead>
        // <tbody>
        // <tr>
        // <td>ATPL00066</td>
        // <td>Sravya</td>
        // <td>kotakonda</td>
        // <td>hrm</td>
        // <td>Full stack developer</td>
        // <td>Sravya.kotakonda@arshaa.com</td>
        // </tr>
        // <tr>
        // <td>ATPL00067</td>
        // <td>Mohan</td>
        // <td>Krishna Madanapu</td>
        // <td>hrm</td>
        // <td>Full stack developer</td>
        // <td>Mohankrishna.madanapu@arshaa.com</td>
        // </tr>
        // <tr>
        // <td>ATPL00076</td>
        // <td>CHETAN</td>
        // <td>BASAVA</td>
        // <td>Dep</td>
        // <td>Front end developer</td>
        // <td>chetan.basava@arshaa.com</td>
        // </tr>
        // </tbody>

        // <tbody>
        // {manager.map((h) => (
        // <tr>
        // <td align ="left">{h.employeeId}</td>
        // <td align="left">{h.firstName}</td>
        // <td align="left">{h.lastName}</td>
        // <td align="left">{h.projectName}</td>
        // <td align="left">{h.designationName}</td>
        // <td align="left">{h.email}</td>
        // </tr>
        // ))}
        // </tbody>
        // </Table>
        // </Container-fluid>
        // </Card>
        // </div>
        options={{
          paging: false,
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
  );
};



export default ManagerTable;
