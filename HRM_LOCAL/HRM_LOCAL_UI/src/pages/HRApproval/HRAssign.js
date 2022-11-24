import { React, useState ,useEffect,useRef} from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Checkbox from "@mui/material/Checkbox";
import axios from "../../Uri";
import { toast } from "react-toastify";
function HRAssign(props) {
  console.log(props.onboardID.onboardingId);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [state, setState] = useState(false);
  const [buherror, setBuherrors] = useState("");
  const [deserror, setDeserror] = useState("");
  //     const [isChecked, setIsChecked] = useState(false);

  //   const handleOnChange = () => {
  //     setIsChecked(!isChecked);
  //   };
  // const [ischecked, setIsChecked] = useState(true);
  // let array=[]
  const forms = useRef(null);
  
  const [checked, setChecked] = useState({
    offerLetter: false,
    salarySlip: false,
    hikeLetter: false,
    form16: false,
    educationalDocuments: false,
    idProof: false,
    resignation: false,
  });
  // const handleChange = (event) => {
  //     setChecked(event.target.checked);
  //   };
  const handleChange = (event) => {
    setChecked({
      ...checked,
      [event.target.name]: event.target.checked,
    });
    setState(true)
    // array.push(checked)
    // let array1 =[...array]
    // console.log(array1)
  };
  
  console.log(state);
  console.log(checked);
  const {
    offerLetter,
    salarySlip,
    hikeLetter,
    form16,
    educationalDocuments,
    idProof,
    resignation,
  } = checked;

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
      department,
      designation,
      hrcomment
    } = form;

    const newErrors ={};
      if (!department || department === "" )
      newErrors.department = "Please Select Department";
    if (!designation || designation === "" )
      newErrors.designation = "Please Select Designation";
      if (!hrcomment || hrcomment === "" )
      newErrors.hrcomment = "Please Enter Comment";


      return newErrors;
    }

  const ApproveHandler = (e) => {
    // e.prevetDefault();
    const formErrors = validateForm();

    console.log(Object.keys(formErrors).length);

    if (Object.keys(formErrors).length > 0) {

      setErrors(formErrors);

      console.log("Form validation error");

    } else {
    const notify = () => toast("Approved");
    // handleClose();
    // const form1 = Object.assign(form, obj);
    let onboardingId = props.onboardID.onboardingId;
    console.log(props.onboardID);
    const obj = { onboardingStatus: "HRApproved" };
    // const form1 = Object.assign(form, obj);
    const form1 = Object.assign(checked, obj, form);
    axios
      .put(`/emp/updateApprovStatus/${onboardingId}`, form1)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          props.func();
        } else {
          console.log("props not send");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something wrong");
      });
    props.handleClose();

    notify();
    }

  };
  const [hrcomment, setHrcomment] = useState([]);
  const [designations, setDesignations] = useState([]);
  useEffect(() => {
    axios.get("/designation/getAllDesignations").then((response) => {
      console.log(response.data);
      setDesignations(response.data);
    });
    // .catch(() => {
    //   toast.error("data is not getting");
    // });
  }, []);

  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios.get("/dept/getAllDepartments").then((response) => {
      setDepartments(response.data);
    });
    console.log(departments)
    // .catch(() => {
    //   toast.error("Data is not getting");
    // });
    // console.log(departments)
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <Form role="form">
            <Form.Group lg="12" style={{ padding: 0 }}>
              <Form.Label>
                Select CheckBox after verifying the Documents
              </Form.Label>
              {/* <Form.Control
                required
                as="textarea"
                rows={2}
                className="ceoApprovalComment"
                type="text"
                controlid="ceoApprovalComment"
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
              <div style={{ paddingLeft: "15px" }}>
                <FormGroup>
                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={offerLetter}
                        onChange={handleChange}
                        name="offerLetter"
                        //   value={form.offerLetter}
                        value={checked}
                      />
                    }
                    label="Offer Letter*-Scanned copy"
                  />

                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={salarySlip}
                        onChange={handleChange}
                        name="salarySlip"
                        value={checked}
                        //   value={form.salarySlip}
                      />
                    }
                    label="Salary Slip-(Scanned copy)"
                  />

                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={hikeLetter}
                        onChange={handleChange}
                        name="hikeLetter"
                        value={checked}
                        //   value={form.hikeLetter}
                      />
                    }
                    label="Hike Letter-(Scanned copy)"
                  />
                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={form16}
                        onChange={handleChange}
                        name="form16"
                        value={checked}
                        //   value={form.form16}
                      />
                    }
                    label="Form 16-(Latest copy of Form16)"
                  />
                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={educationalDocuments}
                        onChange={handleChange}
                        name="educationalDocuments"
                        value={checked}
                        //   value={form.educationalDocuments}
                      />
                    }
                    label="Educational Documents*-(All Educational documents)"
                  />
                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={idProof}
                        onChange={handleChange}
                        name="idProof"
                        value={checked}
                        //   value={form.idProof}
                      />
                    }
                    label="ID Proof*-(PAN and Aadhar Copies)"
                  />
                  <FormControlLabel
                    style={{ paddingBottom: "7px" }}
                    control={
                      <Checkbox
                        checked={resignation}
                        onChange={handleChange}
                        name="resignation"
                        value={checked}
                        //   value={form.resignation}
                      />
                    }
                    label="Resignation"
                  />
                </FormGroup>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {checked.offerLetter === true  &&  checked.salarySlip === true && checked.educationalDocuments === true && checked.hikeLetter === true && checked.form16 === true && checked.idProof === true && checked.resignation === true? (
        <div>
          <Form>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Business Unit *</Form.Label>
                <Form.Select
                    required
                    type="text"
                    placeholder="Businees Unit"
                    controlid="department"
                    value={form.department}
                    onChange={(e) => {
                        console.log(e.target.value);
                        //empty commit
                        axios
                            .get(
                                `/designation/getDesignationByDepartment/${e.target.value}`
                            )
                            .then((response) => {
                                console.log(response.data);
                                setDesignations(response.data);
                            });
                        setField("department", e.target.value);
                    }}
                    isInvalid={!!errors.department}
                >
                    <option value="">Select </option>
                    {departments.map((departmentss) => (
                        <option value={departmentss.departmentName}>
                            {departmentss.departmentName}
                        </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.department}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Designation *</Form.Label>
                <Form.Select
                    required
                    type="text"
                    placeholder="Designation"
                    controlid="designation"
                    value={form.designation}
                    onChange={(e) => setField("designation", e.target.value)}
                    isInvalid={!!errors.designation}
                >
                    <option value="">Select</option>
                    {designations.map((designation) => (
                        <option>{designation.designationName}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.designation}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Comment *</Form.Label>
                <Form.Control 
                    required
                    type="text"
                    as="textarea"
                    placeholder="Comment"
                    controlid="hrcomment"
                    value={form.hrcomment}
                    onChange={(e) => setField("hrcomment", e.target.value)}
                    isInvalid={!!errors.hrcomment}
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.hrcomment}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Button
              
              style={{ backgroundColor: "#f5896e",
              borderColor: "#ff9b44",marginTop: "5%", float: "right" }}
              onClick={ApproveHandler}
            >
              Submit
            </Button>
          </Form>
        </div>
      ) : (
        <Form>
          <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Business Unit *</Form.Label>
                <Form.Select disabled
                    required
                    type="text"
                    placeholder="Businees Unit"
                    controlid="department"
                    value={form.department}
                    onChange={(e) => {
                        console.log(e.target.value);
                        //empty commit
                        axios
                            .get(
                                `/designation/getDesignationByDepartment/${e.target.value}`
                            )
                            .then((response) => {
                                console.log(response.data);
                                setDesignations(response.data);
                            });
                        setField("department", e.target.value);
                    }}
                    isInvalid={!!errors.department}
                >
                    <option>Select </option>
                    {departments.map((departmentss) => (
                        <option value={departmentss.departmentName}>
                            {departmentss.departmentName}
                        </option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.department}
                </Form.Control.Feedback>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Designation *</Form.Label>
                <Form.Select disabled
                    required
                    type="text"
                    placeholder="Designation"
                    controlid="designation"
                    value={form.designation}
                    onChange={(e) => setField("designation", e.target.value)}
                    isInvalid={!!errors.designation}
                >
                    <option>Select</option>
                    {designations.map((designation) => (
                        <option>{designation.designationName}</option>
                    ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {errors.designation}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                <Form.Label>Comment *</Form.Label>
                <Form.Control disabled
                    required
                    type="text"
                    as="textarea"
                    placeholder="Comment"
                    controlid="hrcomment"
                    value={form.hrcomment}
                    onChange={(e) => setField("hrcomment", e.target.value)}
                    isInvalid={!!errors.hrcomment}
                >
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    {errors.hrcomment}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>


            <Button disabled
              variant="primary"
              style={{ backgroundColor: "#f5896e",
              borderColor: "#f5896e",marginTop: "5%", float: "right" }}
              onClick={ApproveHandler}
            >
              Submit
            </Button>
          </Form>
      )}
    </div>
  );
}

export default HRAssign;
