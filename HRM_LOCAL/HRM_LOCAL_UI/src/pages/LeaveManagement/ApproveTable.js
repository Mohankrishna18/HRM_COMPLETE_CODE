import { React, useState, useEffect } from "react";
// import { Table,Container,Row,Card } from "react-bootstrap";
// import axios from 'axios';
// import {Dropdown } from 'react-bootstrap/Dropdown';
import Dropdown from "react-bootstrap/Dropdown";
// import LeaveCard from './LeaveCard'
import { Select } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsFillRecord2Fill } from "react-icons/bs";
import axios from "../../Uri";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import EditLeave from "./EditLeave";
import DeleteLeave from "./DeleteLeave";
import { Col } from "react-bootstrap";
import Approveleave from "./Approveleave";
import Rejectleave from "./Rejectleave";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//
//const userData1 = JSON.parse(userData);

const ApproveLeaveTable= (props) => {
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
  // const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);

  const [leave, setLeaveData] = useState([]);
  const [enable, setEnable] = useState([]);

  useEffect(() => {
    axios.get("/leave/getAllEmployees").then((res) => {
      console.log(res.data);
      // setLeaveData(res.data);
        const dat= res.data.filter((m)=>m.leaveStatus == 'pending')
        console.log(dat)
        setLeaveData(dat)
    });
  }, []);
  const dispaly = (e) => {
    console.log(e.target.value);
    setEnable(e.target.value);
  };

  return (
 
    <div>
      {/* <Container-fluid> */}
      <TableContainer sx={{ maxWidth: 1800 }} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                fontSize: "1rem",
                color: "rgb(255, 255, 255)",
                backgroundColor: "#fe924a"
              }
            }}
          >
              {/* <th align="left">Leave Id</th> */}
              <TableCell align="center">Employee Id</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Leave Type</TableCell>
              <TableCell align="center">From</TableCell>
              <TableCell align="center">To</TableCell>
              <TableCell align="center">No Of Days</TableCell>
              <TableCell align="center">Reason</TableCell>
              <TableCell align="center">Manager Approval</TableCell>
              <TableCell align="center">Actions</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {leave.map((h) => (
              <TableRow>
                {/* <td align="left">{h.employeeleaveId}</td> */}
                <TableCell align="center">{h.employeeId}</TableCell>
                <TableCell align="center">{h.name}</TableCell>
                <TableCell align="center">{h.leaveType}</TableCell>
                <TableCell align="center">{formatDate(h.fromDate)}</TableCell>
                <TableCell align="center">{formatDate(h.toDate)}</TableCell>
                <TableCell align="center">{h.numberOfDays}</TableCell>
                <TableCell align="center">{h.leaveReason}</TableCell>
                {/* <td align="left">{h.leaveStatus}</td> */}
                <TableCell align="center">{h.managerApproval}</TableCell>
                {h.leaveStatus == "pending" ?(<div>
                  <TableCell><Approveleave  leaveID={h.employeeleaveId}/></TableCell><TableCell><Rejectleave leaveID={h.employeeleaveId}/></TableCell>
                </div>):(<div></div>)}

                {/* <td align="left">{h.action}</td> */}
                </TableRow>
            ))}
             </TableBody>
             </Table>
        </TableContainer>
          {/* </tbody>
        </Table>
      </Container-fluid> */}
    </div>
  );
};

export default ApproveLeaveTable;
