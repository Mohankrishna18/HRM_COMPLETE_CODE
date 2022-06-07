import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
// import axios from 'axios';
// import {Dropdown } from 'react-bootstrap/Dropdown';

// import LeaveCard from './LeaveCard'

import axios from "../../Uri";

//
//const userData1 = JSON.parse(userData);

const LeaveTable = () => {
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

  const [leave, setLeaveData] = useState([]);
  const [enable ,setEnable] =useState([])
  

  useEffect(() => {
    axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
      console.log(res.data);
      setLeaveData(res.data);
    });
  }, []);
  const dispaly =(e)=>{
    console.log(e.target.value)
    setEnable(e.target.value)


  }

  return (
    <div>
      <Container-fluid  >
        <Table responsive="sm">
          <thead>
            <tr>
              {/* <th align="left">Leave Id</th>
              <th align="left">Employee</th> */}
              <th align="left"> Leave Type</th>
              <th align="left"> From</th>
              <th align="left"> To</th>
              <th align="left"> No Of Days</th>
              <th align="left"> Reason</th>
              <th align="left">Leave Status</th>
              {/* <th align="center"> Action</th> */}
            </tr>
          </thead>
          <tbody>
            {leave.map((h) => (
              <tr>
                {/* <td align ="left">{h.employeeleaveId}</td>
                <td align="left">{h.employeeId}</td> */}
                <td align="left">{h.leaveType}</td>
                <td align="left">{formatDate(h.fromDate)}</td>
                <td align="left">{formatDate(h.toDate)}</td>
                <td align="left">{h.numberOfDays}</td>
                <td align="left">{h.leaveReason}</td>
                <td align="left">{h.leaveStatus}</td>
                {/* //  <td align='left'>{h.leaveStatus}</td> */}
                <td align="left">
                  {
                    // <Form.Select aria-label="Default select example" size="sm" 
                    // onClick={dispaly}>
                    //   {/* <option>New</option> */}

                    //   <option value="1">Pending </option>
                    //   {/* <option value="2">Approved </option>
                    //   <option value="3">Declined </option> */}
                    // </Form.Select>
                  }
                </td>
                  {/* {enable == 1 ?(<div> <td align="left">{<EditLeave />}</td>
                <td align="left">{<DeleteLeave />}</td></div>):(<div></div>)} */}
               

                {/* <td align="left">{h.action}</td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container-fluid>
    </div>
  );
};

export default LeaveTable;