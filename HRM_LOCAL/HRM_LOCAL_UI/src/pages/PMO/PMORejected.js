import {React, useState} from 'react';
import {Button,Row,Col,Form} from "react-bootstrap";
import axios from "../../Uri";
import { toast } from "react-toastify";

function PMORejected(props) {
    console.log(props.onboardID.onboardingId);
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
        const notify = () => toast("Rejected");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let onboardingId = props.onboardID.onboardingId;
        console.log(props.onboardID);
        const obj = { onboardingStatus: "TAAApproved" };
        const form1 = Object.assign(form, obj);
        axios.put(`/emp/updateRejectStatus/${onboardingId}`,form1)
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
    <Row>
    {/* <Col xs={9}>
    Are You Want to Approve This Leave
    </Col> */}
    <Row>
    <Col>
    <Form role="form">
          <Form.Group as={Col} md="12" style={{ padding: 10 }}>
            <Form.Label>Comment</Form.Label>
            <Form.Control
              required
              className="comments"
              type="textarea"
              controlId="comments"
              placeholder="Comment"
              as="textarea"
              rows={2}
              value={form.comments}
              onChange={(e) => setField("comments", e.target.value)}
              isInvalid={!!errors.comments}
            ></Form.Control>
          </Form.Group>
          </Form>
    <Button  style={{ backgroundColor: "#f5896e",
 borderColor: "#ff9b44",marginTop: "5%", float: "right" }}
    onClick={RejectHandler}
    >
    Yes
  </Button>
    </Col>
    </Row>
</Row>

  )
}

export default PMORejected;
