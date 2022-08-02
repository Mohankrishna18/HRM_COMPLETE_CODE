import React from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";

function BUHApproved(props) {
    console.log(props.onboardID.onboardingId);
    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let onboardingId = props.onboardID.onboardingId;
        console.log(props.onboardID);
        const obj = { onboardingStatus: "BUHApproved" };
        axios.put(`http://localhost:6065/emp/updateApprovStatus/${onboardingId}`,obj)
        .then((res)=>{
            console.log(res)
            if(res.status == 200){
                props.func();
            }
            else{
                console.log('props not send')
            }
        })
        .catch((err)=>{
            console.log(err);
            toast.error("Something wrong");
        });
        props.handleClose();
       
        notify();
      };
  return (
    <div>
        <Row>
            {/* <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> */}
            <Row>
            <Col>
            <Button variant="primary" 
            onClick={ApproveHandler}
            >
            Yes
          </Button>
            </Col>
            </Row>
        </Row>
       
        
    </div>
  )
}

export default BUHApproved