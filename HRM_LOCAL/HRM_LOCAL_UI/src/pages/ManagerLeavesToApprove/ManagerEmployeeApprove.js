import {React, useState} from 'react';
import {Button,Row,Col, Form} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function ManagerEmployeeApprove(props) {
    console.log(props.leaveID.employeeleaveId);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({ ...form, [field]: value });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    };

    const da = JSON.parse(sessionStorage.getItem('userdata'))
    const userType = da.data.userType;
    console.log(userType);

    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Leave  is approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let employeeleaveId = props.leaveID.employeeleaveId;
        console.log(props.leaveID);
        const obj = { leaveStatus: "Approved" };
        const form1 = Object.assign(form, obj);
        axios.put(`/leave/managerupdateLeave/${employeeleaveId}/${userType}`,form1)
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
        
            {/* <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> */}
            
            <Form role="form">
                <Form.Group md="12" style={{ padding: 0 }}>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={2}
                        className="irmApproveReason"
                        type="text"
                        controlId="irmApproveReason"
                        placeholder="Approve Reason"
                        value={form.irmApproveReason}
                        onChange={(e) => setField("irmApproveReason", e.target.value)}
                        isInvalid={!!errors.irmApproveReason}
                    ></Form.Control>
                </Form.Group>

            </Form>
            <Button variant="primary" style={{ marginTop: "5%", float: "right" }}
            onClick={ApproveHandler}
            >
            Yes
          </Button>
           
       
        
    </div>
  )
}

export default ManagerEmployeeApprove;