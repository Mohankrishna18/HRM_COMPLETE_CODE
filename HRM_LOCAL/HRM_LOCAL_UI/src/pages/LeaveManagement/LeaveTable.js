// import { React, useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// // import axios from 'axios';
// // import {Dropdown } from 'react-bootstrap/Dropdown';
// import Dropdown from "react-bootstrap/Dropdown";
// // import LeaveCard from './LeaveCard'
// import { Select } from "react-bootstrap";
// import Form from "react-bootstrap/Form";
// import { BsFillRecord2Fill } from "react-icons/bs";
// import axios from "../../Uri";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import { MdDelete } from "react-icons/md";
// import { AiFillEdit } from "react-icons/ai";
// import EditLeave from "./EditLeave";
// import DeleteLeave from "./DeleteLeave";
// import { Col } from "react-bootstrap";
// //
// //const userData1 = JSON.parse(userData);

// const LeaveTable = () => {
// const userData = sessionStorage.getItem("userdata");
// const userData1 = JSON.parse(userData);

// const employeeid = userData1.data.employeeId;
// console.log(employeeid);

// function formatDate(fromDate) {
// var datePart = fromDate.match(/\d+/g),
// year = datePart[0].substring(2), // get only two digits
// month = datePart[1],
// day = datePart[2];

// return day + "-" + month + "-" + year;
// }
// const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);

// const [leave, setLeaveData] = useState([]);
// const [enable, setEnable] = useState([]);

// useEffect(() => {
// axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
// console.log(res.data);
// setLeaveData(res.data);
// });
// }, []);
// const dispaly = (e) => {
// console.log(e.target.value);
// setEnable(e.target.value);
// };

// return (
// <div>
// <Container-fluid>
// <Table responsive="sm" Table id="data" className="table table-striped">
// <thead>
// <tr>
// {/* <th align="left">Leave Id</th>
// <th align="left">Employee</th> */}
// <th align="left"> TypeLeave</th>
// <th align="left"> From</th>
// <th align="left"> To</th>
// <th align="left"> No Of Days</th>
// <th align="left"> Reason</th>
// <th align="left"> Status</th>

// <th align ="center">Reject Reason</th>
// </tr>
// </thead>
// <tbody>
// {leave.map((h) => (
// <tr>
// {/* // <td align="left">{h.employeeleaveId}</td>
// // <td align="left">{h.employeeId}</td> */}
// <td align="left" >{h.leaveType}</td>
// <td align="left">{formatDate(h.fromDate)}</td>
// <td align="left">{formatDate(h.toDate)}</td>
// <td align="left">{h.numberOfDays}</td>
// <td align="left">{h.leaveReason}</td>
// <td align="left">{h.leaveStatus}</td>
// <td align="left">{h.rejectReason}</td>
// {h.leaveStatus == "pending" ?(<div>

// </div>):(<div></div>)}

// {/* <td align="left">{h.action}</td> */}
// </tr>
// ))}
// </tbody>
// </Table>
// </Container-fluid>
// </div>
// );
// };

// export default LeaveTable;
import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Grid from "@mui/material/Grid";
import axios from "../../Uri";
export default function EmployeeLeaveHistory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadTable();
  }, []);

  const da = JSON.parse(sessionStorage.getItem("userdata"));
  const empID = da.data.employeeId;

  const loadTable = async () => {
    const res = await axios.get(`leave/getLeaveHistoryByEmployeeid/${empID}`);
    setData(res.data);
    console.log(res.data);
  };
  const [columns, setColumns] = useState([
    { title: "Leave Type", field: "leaveType" },
    {
      title: "From",
      field: "fromDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    {
      title: "To",
      field: "toDate",
      type: "date",
      dateSetting: { locale: "en-GB" },
    },
    { title: "Number of Days", field: "numberOfDays" },
    { title: "Leave Reason", field: "leaveReason" },
    { title: "Leave Status", field: "leaveStatus" },
    { title: "Reject Reason", field: "rejectReason" },
    // { title: 'Leave Type', field: 'leaveType', type:'date'}
  ]);

  // const [data, setData] = useState([
  // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
  // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  // ]);

  return (
    <Grid>
      <MaterialTable
        title=""
        columns={columns}
        data={data}
        // editable={{
        // onRowAdd: newData =>
        // new Promise((resolve, reject) => {

        // setTimeout(() => {
        // console.log(newData)
        // const res = axios.post("/holiday/addholiday",
        // newData,
        // );
        // setData([...data, newData]);
        // loadData();

        // resolve();
        // }, 1000)
        // }),
        // onRowUpdate: (updatedRow, oldRow) =>
        // new Promise((resolve, reject) => {
        // console.log(oldRow);
        // console.log(updatedRow);
        // const index = oldRow.holidayId;
        // console.log(index);
        // const updatedRows = [...data];
        // console.log(updatedRows);
        // updatedRows[oldRow.tableData.id] = updatedRow;
        // console.log(updatedRows);

        // setTimeout(() => {
        // console.log(updatedRow)
        // const res = axios.put(`/holiday/updateHolidayById/${index}`, updatedRow)
        // .then((resp) => {
        // console.log(resp);
        // loadData()
        // })

        // .catch((err) => {
        // console.log("not updated")
        // // toast.error("Server error");
        // });

        // setData(updatedRows);
        // console.log("updated")
        // // toast.success(" Updated Successfully");
        // console.log(updatedRows);
        // resolve();
        // });
        // }),

        // onRowDelete: oldData =>
        // new Promise((resolve, reject) => {
        // setTimeout(() => {
        // console.log(oldData)
        // const dataDelete = [...data];
        // const index = oldData.holidayId;
        // dataDelete.splice(index, 1);
        // const res = axios.delete(`/holiday/deleteHoliday/${index}`)
        // .then((res) => {
        // console.log(res)
        // loadData()
        // })
        // console.log(dataDelete)
        // //setData(dataDelete);

        // resolve()
        // }, 1000)
        // }),
        // }}
        options={{
          paging: false,
          addRowPosition: "first",
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
          exportButton: true,
        }}
      />
    </Grid>
  );
}
