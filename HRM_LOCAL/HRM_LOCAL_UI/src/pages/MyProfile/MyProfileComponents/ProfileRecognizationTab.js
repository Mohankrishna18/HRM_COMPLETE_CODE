import {React, useState,useRef} from 'react';
import {Button,Row,Col, Form} from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function ProfileRecognizationTab() {
    const forms = useRef(null);

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
    console.log(form);
    const da = JSON.parse(sessionStorage.getItem('userdata'));
    const employeeId = da.data.employeeId;

    console.log(employeeId);

    const validateForm = () =>{
        const{
            probationempfeedback
        } = form;
        const newErrors ={};
        if (!probationempfeedback || probationempfeedback === "" )
        newErrors.probationempfeedback = "Please Enter FeedBack";
        return newErrors;
      }

    const ApproveHandler = (e) => {
            const formErrors = validateForm();
    
        console.log(Object.keys(formErrors).length);
    
        if (Object.keys(formErrors).length > 0) {
    
          setErrors(formErrors);
    
          console.log("Form validation error");
        }else{
            //e.prevetDefault();
            const notify = () => toast("Submitted");
           
            axios.put(`/emp/probationEmployeeFeedBack/${employeeId}`,form)
            .then((res)=>{
                console.log(res)
                if(res.status == 200){
                    // props.func();
                }
                else{
                    console.log('Not Submitted')
                }
            })
            .catch((err)=>{
                console.log(err);
                toast.error("Something wrong");
            });
            // props.handleClose();
           
            notify();
        }
        }
  return (
    <div>
         <Form role="form">
                <Form.Group md="12" style={{ padding: 0 }}>
                    <Form.Label>Probation Form</Form.Label>
                    <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        className="probationempfeedback"
                        type="text"
                        controlid="probationempfeedback"
                        placeholder=""
                        // value={probationempfeedback}
                         onChange={(e) => setField("probationempfeedback", e.target.value)}
                        isInvalid={!!errors.probationempfeedback}
                    ></Form.Control>
                    <Form.Control.Feedback>{errors.probationempfeedback}</Form.Control.Feedback>
                </Form.Group>
                <Button  style={{backgroundColor: "#f5896e",
 borderColor: "#f5896e", marginTop: "1%", float: "right" }}
            onClick={ApproveHandler}
            >
            Submit
          </Button>

            </Form>
    </div>
  )
}

export default ProfileRecognizationTab;