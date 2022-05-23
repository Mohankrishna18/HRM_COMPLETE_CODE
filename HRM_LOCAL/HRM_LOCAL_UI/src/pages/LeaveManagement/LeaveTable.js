import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
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


const LeaveTable = () => {
  const [leave, setLeaveData] = useState([]);

  function formatDate(fromDate) {
    var datePart = fromDate.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "-" + month + "-" + year;
  }

  useEffect(() => {
    axios.get("leave/getAllEmployees").then((res) => {
      console.log(res.data);
      setLeaveData(res.data);
    });
  }, []);

  let leaves = {};
  const OptionsButton = () => {
    return <></>;
  };

  return (
    <div>
      <Container-fluid>
        <Table responsive="sm">
          <thead>
            <tr>
              <th align="left">Employee</th>
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
            {leave.map((h) => (
              <tr>
                <td align="left">{h.employeeId}</td>
                <td align="left">{h.leaveType}</td>
                <td align="left">{formatDate(h.fromDate)}</td>
                <td align="left">{formatDate(h.toDate)}</td>
                <td align="left">{h.numberOfDays}</td>
                <td align="left">{h.leaveReason}</td>
                {/* //  <td align='left'>{h.leaveStatus}</td> */}
                <td align="left">{<Form.Select aria-label="Default select example" size="sm">
                  {/* <option>New</option> */}

                  <option value="1">New</option>
                  <option value="2">Pending </option>
                  <option value="3">Approved </option>
                  <option value="4">Declined </option>
                </Form.Select>}</td>
                <td align="left">{<EditLeave />}</td>
                <td align="left">{<DeleteLeave />}</td>
                
                
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
