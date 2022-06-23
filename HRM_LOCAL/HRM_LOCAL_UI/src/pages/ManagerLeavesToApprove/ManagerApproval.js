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
// import EditLeave from "./EditLeave";
// import DeleteLeave from "./DeleteLeave";
import { Col } from "react-bootstrap";
import Approve from "./ManagerApproveleave";
import Reject from "./ManagerRejectleave";

//
//const userData1 = JSON.parse(userData);

const ApproveLeaveTable= (props) => {
//   const userData = sessionStorage.getItem("userdata");
//   const userData1 = JSON.parse(userData);

//   const employeeid = userData1.data.employeeId;
//   console.log(employeeid);

  function formatDate(fromDate) {
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }
  // const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);

//   const [leave, setLeaveData] = useState([]);
  const [enable, setEnable] = useState([]);

//   useEffect(() => {
//     axios.get("/leave/getAllEmployees").then((res) => {
//       console.log(res.data);
//       setLeaveData(res.data);
//     });
//   }, []);
const [data, setData] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const da = JSON.parse(sessionStorage.getItem('userdata')) 
    const empID=da.data.employeeId;
  

    const loadData = async () => {
        const res = await axios.get(`/leave/getUserByReportingManager/${empID}`);
        // setData(res.data);
        console.log(res.data);
        const dat= res.data.filter((m)=>m.managerApproval == 'pending')
        console.log(dat)
        setData(dat);
         // res.data.map((m)=>{
         //   const app = m.filter( managerApproval === "pending")
         //   console.log(app)
 
         // })
    
    };
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
              <th align="left"> Leave Type</th>
              <th align="left"> From</th>
              <th align="left"> To</th>
              <th align="left"> No Of Days</th>
              <th align="left"> Reason</th>
              <th align="left"> Status</th>
              <th align="center"> Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((h) => (
              <tr>
                {/* <td align="left">{h.employeeleaveId}</td> */}
                <td align="left"><div class="p-2">{h.employeeId}</div></td>
                <td align="left"><div class="p-2">{h.name}</div></td>
                <td align="left"><div class="p-2">{h.leaveType}</div></td>
                <td align="left"><div class="p-2">{formatDate(h.fromDate)}</div></td>
                <td align="left"><div class="p-2">{formatDate(h.toDate)}</div></td>
                <td align="left"><div class="p-2">{h.numberOfDays}</div></td>
                <td align="left"><div class="p-2">{h.leaveReason}</div></td>
                <td align="left"><div class="p-2">{h.managerApproval}</div></td>
                <td>{h.managerApproval == "pending" ?(<div>
                  <td><Approve  leaveID={h.employeeleaveId}/></td> <td><Reject leaveID={h.employeeleaveId}/></td>
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