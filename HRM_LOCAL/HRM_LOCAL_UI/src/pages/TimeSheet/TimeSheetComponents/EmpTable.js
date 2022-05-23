import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination'
// import Data from './Data.json'
import Edit from './Editmodel';
import Delete from './DeleteComp';
import { useEffect, useState } from 'react'
import axios from '../../../Uri';

const EmpTable = () => {
  const [fields, setFields] = useState([]);
  
useEffect(()=>{
  axios.get("/timesheet/getAllData").then((response)=>{
    console.log(response.data)
    setFields(response.data)
  })
  console.log(fields)
},[]);


//  const players=[
//           {projects: "UI development", employee: "chiru", Date: "12-23-2022" ,assignedhours:"100" ,hours:"90",Desc:"the process is going on"},
//           {projects: "Android development", employee: "nikhil", Date: "20-09-2022",assignedhours:"100",hours:"88",Desc:"the work in progress"},
//           {projects: "Fullstack development", employee: "guru", Date:"20-07-2022",assignedhours:"100",hours:"92",Desc:"do as soon as possible"},
//           {projects: "Backend development", employee: "vineela",Date: "20-03-2022",assignedhours:"100",hours:"67",Desc:"actions "}]

const renderedtable=(data, index)=>{
return (
    <tr key={index}>
    <td>{data.employee}</td>
    <td>{data.timesheetDate}</td>
    <td>{data.projects}</td>
    <td>{data.timesheet_Hours}</td>
    <td>{data.hours}</td>
    <td>{data.description}</td>
    <td><div class="hstack gap-3"><div><Edit/></div><div><Delete/></div></div></td>
    </tr>
)
}

  return (
      <div >
          <Table striped  hover responsive >
  <thead>
    <tr>
     {/* <th> {Data1.map(renderedtable1)} */}
      <th>Employee</th>
      <th>Date</th>
      <th>Projects</th>
      <th>Assigned hours</th>
      <th>Pending hours</th>
      <th>Description</th>
      <th>Action</th>
      {/* </th> */}
    </tr>
  </thead>
  <tbody>
    {fields.map(renderedtable)}
  </tbody>
 
</Table >
<Pagination style={{float:"right",color:"orange"}}>
 
  
<Pagination.Prev />
<Pagination.Ellipsis />
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Ellipsis />
<Pagination.Next />
</Pagination>

  </div>
  )
}

export default EmpTable;
