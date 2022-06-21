import { React, useState, useEffect } from "react";
import { Table,Container,Row,Card } from "react-bootstrap";
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
import Rejectleave from "./Rejectleave"

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
      <Container-fluid>
        <Table responsive="sm">
          <thead>
            <tr>
              {/* <th align="left">Leave Id</th> */}
              <th align="left">Employee Id</th>
              <th align="left">Name</th>
              <th align="left">Leave Type</th>
              <th align="left">From</th>
              <th align="left">To</th>
              <th align="left">No Of Days</th>
              <th align="left">Reason</th>
              <th align="left">Manager Approval</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {leave.map((h) => (
              <tr>
                {/* <td align="left">{h.employeeleaveId}</td> */}
                <td align="left"><div class="p-3">{h.employeeId}</div></td>
                <td align="left"><div class="p-3">{h.name}</div></td>
                <td align="left"><div class="p-3">{h.leaveType}</div></td>
                <td align="left"><div class="p-3">{formatDate(h.fromDate)}</div></td>
                <td align="left"><div class="p-3">{formatDate(h.toDate)}</div></td>
                <td align="left"><div class="p-3">{h.numberOfDays}</div></td>
                <td align="left"><div class="p-3">{h.leaveReason}</div></td>
                {/* <td align="left">{h.leaveStatus}</td> */}
                <td align="left"><div class="p-3">{h.managerApproval}</div></td>
                <td>{h.leaveStatus == "pending" ?(<div>
                  <td><Approveleave  leaveID={h.employeeleaveId}/></td><td><Rejectleave leaveID={h.employeeleaveId}/></td>
                </div>):(<div></div>)}

                <td align="left">{h.action}</td>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container-fluid>
    </div>
  );
};

export default ApproveLeaveTable;
