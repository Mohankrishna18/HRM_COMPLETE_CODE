import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


import axios from "../../../Uri";

const Approve = (props) => {
  let onboardingid = props.updateOnboard.onboardingId;
  const obj = { approvedStatus: true };

  const ApproveHandler = (e) => {
    e.preventDefault();
    axios.put(`/emp/updateApprovStatus/${onboardingid}`, obj)
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
                backgroundColor: "#f5896e",
                borderColor: "#f5896e",
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
