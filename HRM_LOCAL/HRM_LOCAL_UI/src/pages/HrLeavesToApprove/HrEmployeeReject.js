import { React, useState } from 'react';
import { Button, Row, Col, Form } from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";


function HrEmployeeReject(props) {
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
        const obj = { leaveStatus: "Rejected", hrApproval: "Rejected" };
        const form1 = Object.assign(form, obj);
        axios.put(`/leave/updateLeave/${employeeleaveId}`, form1)
            .then((res) => {
                axios.delete(`/leave/deleteBetweenDates/${employeeleaveId}`)
                    .then((resp) => {
                        console.log(resp)
                        if (resp.status == 200) {
                            props.func();
                        }
                        else {
                            console.log('props not send')
                        }
                    })
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
            <Row>
                {/* <Col xs={9}>
            Are You Want to Approve This Leave
            </Col> */}
                <Row>
                    <Col>
                        <Form role="form">
                            <Form.Group md="12" style={{ padding: 0 }}>
                                <Form.Label>Comment</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    rows={2}
                                    className="rejectReason"
                                    type="text"
                                    controlId="rejectReason"
                                    placeholder="Reject Reason"
                                    value={form.rejectReason}
                                    onChange={(e) => setField("rejectReason", e.target.value)}
                                    isInvalid={!!errors.rejectReason}
                                ></Form.Control>
                            </Form.Group>

                        </Form>
                        <Button variant="primary" style={{
                            backgroundColor: "#f5896e",
                            borderColor: "#ff9b44", marginTop: "5%", float: "right"
                        }}
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
