import { React, useState } from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function ManagerEmployeeReject(props) {
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
    const RejectHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Leave  is Rejected");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let employeeleaveId = props.leaveID.employeeleaveId;
        console.log(props.leaveID);
        const obj = { leaveStatus: "Rejected" };
        const form1 = Object.assign(form, obj);
        axios.put(`/leave/managerupdateLeave/${employeeleaveId}`, form1)
            .then((res) => {
                axios.delete(`/leave/deleteBetweenDates/${employeeleaveId}`)
                .then((resp)=>{
                        console.log(resp)
                        if(resp.status == 200){
                            props.func();
             }
             else{
                console.log('props not send')
            } })
                console.log(res)
                if (res.status == 200) {
                    props.func();
                }
                else {
                    console.log('props not send')
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Something wrong");
            });
        props.handleClose();

        notify();
    };
    return (
        <div>
            {/* <Row>
             <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> 
            <Row> */}

            <Form role="form">
                <Form.Group md="12" style={{ padding: 0 }}>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={2}
                        className="managersRejectReason"
                        type="text"
                        controlId="managersRejectReason"
                        placeholder="Reject Reason"
                        value={form.managersRejectReason}
                        onChange={(e) => setField("managersRejectReason", e.target.value)}
                        isInvalid={!!errors.managersRejectReason}
                    ></Form.Control>
                </Form.Group>

            </Form>
            <Button variant="primary" style={{ marginTop: "5%", float: "right" }}
                onClick={RejectHandler}
            >
                Yes
            </Button>

            {/* </Row>
        </Row> */}


        </div>
    )
}

export default ManagerEmployeeReject;
