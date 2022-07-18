import React from 'react';
import {Button,Row,Col} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function HrEmployeeReject(props) {
    console.log(props.leaveID.employeeleaveId);
    const RejectHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Leave  is Rejected");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let employeeleaveId = props.leaveID.employeeleaveId;
        console.log(props.leaveID);
        const obj = { leaveStatus: "Rejected",hrApproval:"Rejected" };
        axios.put(`/leave/updateLeave/${employeeleaveId}`,obj)
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
            onClick={RejectHandler}
            >
            Yes
          </Button>
            </Col>
            </Row>
        </Row>
       
        
    </div>
  )
}

export default HrEmployeeReject;