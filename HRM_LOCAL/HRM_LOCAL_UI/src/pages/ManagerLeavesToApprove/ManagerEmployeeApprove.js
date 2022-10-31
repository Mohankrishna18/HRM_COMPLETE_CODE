import {React, useState,useRef} from 'react';
import {Button,Row,Col, Form} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function ManagerEmployeeApprove(props) {
    const forms = useRef(null);
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
    const validateForm = () =>{
        const{
            irmApproveReason
        } = form;
        const newErrors ={};
        if (!irmApproveReason || irmApproveReason === "" )
        newErrors.irmApproveReason = "Please Enter Comment";
        return newErrors;
      }
    const ApproveHandler = (e) => {
        const formErrors = validateForm();

    console.log(Object.keys(formErrors).length);

    if (Object.keys(formErrors).length > 0) {

      setErrors(formErrors);

      console.log("Form validation error");
    }else{
        // e.prevetDefault();
        const notify = () => toast("Leave  is approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let employeeleaveId = props.leaveID.employeeleaveId;
        console.log(props.leaveID);
        const obj = { leaveStatus: "Approved" };
        const form1 = Object.assign(form, obj);
        axios.put(`/leave/managerupdateLeave/${employeeleaveId}`,form1)
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
    }
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
                    <Form.Control.Feedback>{errors.irmApproveReason}</Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" style={{ marginTop: "5%", float: "right" }}
            onClick={ApproveHandler}
            >
            Yes
          </Button>

            </Form>
            
           
       
        
    </div>
  )
}

export default ManagerEmployeeApprove;