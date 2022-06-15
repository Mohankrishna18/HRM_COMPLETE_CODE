// import React from 'react'
// import { Card, Col, Row } from 'react-bootstrap'

// import SearchFields from './SearchFields'
// import UserTable from './UserTable'

import React, { useState, useEffect, useLayoutEffect } from 'react'
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'
import axios from "../../../Uri";
export default function UsersTable() {
  const userData = sessionStorage.getItem("userdata");

  const userData1 = JSON.parse(userData);

  const employeeid = userData1.data.employeeId;
  console.log(employeeid);
  const [data, setData] = useState([]);
  const [role, setRole] = useState([])
  const [empID, setEmpID] = useState([]);
  const [status, setStatus] = useState({})
  const [status1, setStatus1] = useState({})
  useEffect(() => {
    axios.get("/user/getAllRoles").then((res) => {
      console.log(res.data)
      setRole(res.data.data)
    });
  }, []);
  console.log(role)
  const loadDept = () => {
    role.map(row => status[row.roleName] = row.roleName)
    console.log(status)
    setStatus(status)
  }

  useEffect(() => {
    loadDept()
  })
  
  useEffect(() => {
    axios.get("/emp/getAllEmployeeMasterData").then((res) => {
      console.log(res.data)
      setEmpID(res.data.data)
    });
  }, []);

  const loadIDs = () => {

    empID.map(row => status1[row.employeeId] = row.employeeId)
    console.log(status1)
    setStatus1(status1)
  }
  useEffect(() => {
    loadIDs()
  })
  
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const res = await axios.get("/user/getUsersData");
    setData(res.data.data);
    console.log(res.data.data);
  };
  console.log(data)

  const [columns, setColumns] = useState([
  

    {
      title: 'Employee ID', field: 'employeeId', 
      validate:rowData =>{ if(rowData.employeeId===undefined){ return "Employee ID is Required" } else if(!rowData.employeeId){ return" Please enter valid name" } return true },
      lookup: status1, headerStyle: {
        backgroundColor: "#FE924A",
        color: "white",
      },
      
    },
    {
    title: 'Role', field: 'userType',
    validate:rowData=>{
      if(rowData.userType===undefined || rowData.userType===""){
      return "Required"
      }
      return true
      },
       lookup: status, headerStyle: {
      backgroundColor: "#FE924A",
      color: "white",
    },
  },
    
  ]);
  const obj = {updatedBy:employeeid}

  return (
    <Grid>
      <MaterialTable
        title="User Management"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(newData)
                const newData1 = Object.assign(newData,obj)
                const res = axios.post("/user/addUser", newData1)
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
              const index = oldRow.uId;
              console.log(index);
              const updatedRows = [...data];
              console.log(updatedRows);
              updatedRows[oldRow.tableData.id] = updatedRow;
              console.log(updatedRows);
              setTimeout(() => {
                console.log(index)
                console.log(updatedRow)
                const res = axios.put(`/user/updateUserById/${index}`, updatedRow)
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
                const index = oldData.uId;
                dataDelete.splice(index, 1);
                const res = axios.delete(`/user/deleteUserById/${index}`)
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
          addRowPosition:"first",
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


// const UserName = () => {
//     return (
//         <div>
//             <Row>
//                 <Col>
//                     <Card>
//                         <Card.Header>
//                             <Card.Body>
//                                 <Card.Title>Users</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">Administration/Users </Card.Subtitle>
//                             </Card.Body>
//                         </Card.Header>
//                     </Card>
//                     <SearchFields />
//                     <UserTable />
//                 </Col>
//             </Row>


//         </div>
//     )
// }

