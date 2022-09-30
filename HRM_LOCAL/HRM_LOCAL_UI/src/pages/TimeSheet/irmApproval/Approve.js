import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


import axios from "../../../Uri";

const Approve = (props) => {
  console.log(props.updateApproval);
 let employeeId = props.updateApproval.employeeId;
 let timesheetId = props.updateApproval.timesheetId;
 console.log(employeeId)
 console.log(timesheetId)
 
 const obj = { status: "Approved" };

  const ApproveHandler = (e) => {
    e.preventDefault();
    axios.put(`/timesheet/timesheetApproval/${timesheetId}/${employeeId}`, obj)
    .then((res)=>{
      console.log(res)
      if(res.status ==200){
        props.func();
      }
    })
    props.handleClose();
    // alert("Approved Successfully!");
  };

  return (
    <div>
      <Row>
        <Col>
          <Row
            style={{ paddingLeft: 180, paddingRight: 25, paddingBottom: 10 }}
          >
            <Button
              style={{
                backgroundColor: "#ff9b44",
                borderColor: "#ff9b44",
                float: "right",
                width: "40%",
                height: "120%",
                borderRadius: "25px",
              }}
              alignItems="center"
              paddingLeft=""
              type="submit"
              onClick={ApproveHandler}
            >Approve
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Approve;
