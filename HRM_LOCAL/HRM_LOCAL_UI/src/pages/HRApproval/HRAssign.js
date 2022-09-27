import {React, useState} from 'react';
import {Button,Row,Col, Form} from "react-bootstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Checkbox from '@mui/material/Checkbox';
import axios from "../../Uri";
import { toast } from "react-toastify";
function HRAssign(props) {
    console.log(props.onboardID.onboardingId);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
//     const [isChecked, setIsChecked] = useState(false);

//   const handleOnChange = () => {
//     setIsChecked(!isChecked);
//   };
// const [ischecked, setIsChecked] = useState(true);
const [checked, setChecked] = useState({
    offerLetter: false,
    salarySlip: false, 
    hikeLetter:false,
    form16:false, 
    educationalDocuments:false,
    idProof:false,
    resignation:false
});
// const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };
  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
  };
  console.log(checked);
  const { offerLetter, salarySlip, hikeLetter,form16, educationalDocuments, idProof, resignation } = checked;

    const setField = (field, value) => {
        setForm({ ...form, [field]: value });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    };
    const ApproveHandler = (e) => {
        // e.prevetDefault();
        const notify = () => toast("Approved");
        // handleClose();
        // const form1 = Object.assign(form, obj);
        let onboardingId = props.onboardID.onboardingId;
        console.log(props.onboardID);
        const obj = { onboardingStatus: "HRApproved" };
        // const form1 = Object.assign(form, obj);
        const form1 = Object.assign(checked,obj);
        axios.put(`/emp/updateApprovStatus/${onboardingId}`,form1)
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
        <Form.Group lg="12" style={{ padding: 0 }}>
            <Form.Label>Select CheckBox after verifying the Documents</Form.Label>
            {/* <Form.Control
                required
                as="textarea"
                rows={2}
                className="ceoApprovalComment"
                type="text"
                controlId="ceoApprovalComment"
                placeholder="Approve Reason"
                value={form.ceoApprovalComment}
                onChange={(e) => setField("ceoApprovalComment", e.target.value)}
                isInvalid={!!errors.ceoApprovalComment}
            ></Form.Control> */}
            {/* <div className="topping">
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          checked={isChecked}
          onChange={handleOnChange}
        />
        Paneer
      </div> */}
       {/* <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
      </FormGroup> */}
      <div style={{ paddingLeft: '15px' }}>

      <FormGroup>
      <FormControlLabel control={
       <Checkbox 
      checked={offerLetter}
      onChange={handleChange}
      name="offerLetter"
      
    //   value={form.offerLetter}
    value={checked}
    />} label="Offer Letter*-Scanned copy"/>
    <FormControlLabel control={
       <Checkbox
      checked={salarySlip}
      onChange={handleChange}
      name="salarySlip"
      value={checked}
    //   value={form.salarySlip}
    />} label="Salary Slip-(Scanned copy)"/>
    <FormControlLabel control={
       <Checkbox
      checked={hikeLetter}
      onChange={handleChange}
      name="hikeLetter"
      value={checked}
    //   value={form.hikeLetter}
    />} label="Hike Letter-(Scanned copy)"/>
    <FormControlLabel control={
       <Checkbox
      checked={form16}
      onChange={handleChange}
      name="form16"
      value={checked}
    //   value={form.form16}
    />} label="Form 16-(Latest copy of Form16)"/>
    <FormControlLabel control={
       <Checkbox
      checked={educationalDocuments}
      onChange={handleChange}
      name="educationalDocuments"
      value={checked}
    //   value={form.educationalDocuments}
    />} label="Educational Documents*-(All Educational documents)"/>
    <FormControlLabel control={
       <Checkbox
      checked={idProof}
      onChange={handleChange}
      name="idProof"
      value={checked}
    //   value={form.idProof}
    />} label="ID Proof*-(PAN and Aadhar Copies)"/>
    <FormControlLabel control={
       <Checkbox
      checked={resignation}
      onChange={handleChange}
      name="resignation"
      value={checked}
    //   value={form.resignation}
    />} label="Resignation"/>
    
</FormGroup>
</div>
        </Form.Group>

    </Form>
    <Button variant="primary" style={{ marginTop: "5%", float: "right" }}

    onClick={ApproveHandler}
    >
    Submit
  </Button>
    </Col>
    </Row>
</Row>


  )
}

export default HRAssign