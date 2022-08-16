import React from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function HrEmployeeApprove(props) {
    console.log(props.leaveID.employeeleaveId);
    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Leave  is approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let employeeleaveId = props.leaveID.employeeleaveId;
        console.log(props.leaveID);
        const obj = { leaveStatus: "Approved" };
      
        axios.put(`/leave/updateLeave/${employeeleaveId}`, obj)
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

export default HrEmployeeApprove;