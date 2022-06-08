import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "../../../Uri";

const HrApprovedLeaves = () => {

    const [approvedLeave, setApprovedLeave] = useState([]);
 

    function formatDate(fromDate) {
      var datePart = fromDate.match(/\d+/g),
        year = datePart[0].substring(2), // get only two digits
        month = datePart[1],
        day = datePart[2];
  
      return day + "-" + month + "-" + year;
    }
  
    useEffect(() => {
      axios.get("leave/getAllApprovedLeaves/approved").then((res) => {
        console.log(res.data);
        setApprovedLeave(res.data);
      });
    }, []);

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
              <th align="left"> Leave Reason</th>
              <th align="left"> Status</th>
            </tr>
          </thead>
          <tbody>
            {approvedLeave.map((h) => (
              <tr>
                <td align="left">{h.employeeId}</td>
                <td align="left">{h.leaveType}</td>
                <td align="left">{formatDate(h.fromDate)}</td>
                <td align="left">{formatDate(h.toDate)}</td>
                <td align="left">{h.numberOfDays}</td>
                <td align="left">{h.leaveReason}</td>
                <td align="left">{h.leaveStatus}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container-fluid>
    </div>
  )
}

export default HrApprovedLeaves
