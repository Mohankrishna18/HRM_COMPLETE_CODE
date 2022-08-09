import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ApprovalUpdateForm = (props) => {
  console.log(props.updateOnboard.onboardingId);

  const obj = { onboardingStatus: "TAAApproved" };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/emp/updateApprovStatus/${props.updateOnboard.onboardingId}`, obj);
    props.handleClose()
   }
  

  return (
    <>

      <Row style={{ paddingLeft: 180, paddingRight: 25, paddingBottom: 10 }}>
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
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Row>
    </>
  );
};

export default ApprovalUpdateForm;
