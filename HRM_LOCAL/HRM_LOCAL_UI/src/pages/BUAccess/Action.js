import React from 'react'
import { Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from '../../Uri';
import Moment from 'react-moment';
import { BASE_URL } from '../../Constant';

export default function Action(props) {
    console.log(props);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [data, setData] = useState({});



    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [reportingManager, setReportingManager] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [client, setClient] = useState("");
    const [projectName, setProjectName] = useState("");
    const [buh, setBuh] = useState(data.buh);
    const [irmId, setirmId] = useState("");
    const [srmId, setSrmId] = useState("");
    const [leaveBalance, setLeaveBalance] = useState("");

    const [departmentName, setDepartmentName] = useState("");
   
    const [designationName, setDesignationName] = useState("");
    const [exitDate, setExitDate] = useState("");
    const [resignationDate, setResignationDate] = useState("");
    const [srm, setSrm] = useState("");
    const [irm, setIrm] = useState("");
    const [confirmationDate, setConfirmationDate] = useState("");
    const [band, setBand] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [status, setStatus] = useState("");
    const [getLeaveBalance, setGetLeaveBalance] = useState([{}]);

    //displaying date in fields
    const [resDate,setResDate] = useState("");
    const [exDate,setExDate] = useState("");
    const [confirmDate, setConfirmDate] = useState("");

    useEffect(() => {
        loadData();
        loadDesignations();
        loadEmploymentDetails();
        leaveBalanceCall();
    }, []);

   
    const leaveBalanceCall = async () => {
        await axios.get(`leave/leaveBalanceByEmployeeId/${props.data}`)
        .then((res) => {
          console.log(res.data);   
          console.log(res.data.leaveBalance);   
          setGetLeaveBalance(res.data.leaveBalance);
        });
      };

    const loadData = async () => {
        const res = await axios.get("/dept/getAllDepartments");
        // console.log(res.data)
        setDepartments(res.data);

    };

    const loadDesignations = async () => {
        const res = await axios.get("/designation/getAllDesignations");
        setDesignations(res.data);
    };


    console.log(props.data)
    const loadEmploymentDetails = async () => {
        const res = await axios.get(`/emp/getEmploymentDetails/${props.data}`);
        // console.log(res.data.data);
        setData(res.data.data);
       
        setDepartmentName(res.data.data.departmentName);
   
        setDesignationName(res.data.data.designationName);
        setExitDate(res.data.data.exitDate);
        setResignationDate(res.data.data.resignationDate);
        setSrm(res.data.data.srm);
        setIrm(res.data.data.irm);
        setProjectName(res.data.data.projectName);
       
        setConfirmationDate(res.data.data.confirmationDate);
       
        setBand(res.data.data.band);
        setEmploymentType(res.data.data.employmentType);
        setStatus(res.data.data.status);
        setPrimarySkills(res.data.data.primarySkills);
        setSecondarySkills(res.data.data.secondarySkills);
        setReportingManager(res.data.data.reportingManager);
       setLeaveBalance(res.data.data.leaveBalance);
        setBuh(res.data.data.buh);

        // setExDate(Moment(res.data.data.exitDate).format('YYYY-MM-DD'));
        // setResDate(Moment(res.data.data.resignationDate).format('YYYY-MM-DD'));
        // setConfirmDate(Moment(res.data.data.confirmationDate).format('YYYY-MM-DD'));
       
    };

    const [bands, setBands] = useState([]);
    useEffect(() => {
        axios.get("/bands/getAllBands").then((response) => {
            console.log(response.data);
            setBands(response.data.data);
        });
    }, []);

    const [empType, setEmpType] = useState([]);
    useEffect(() => {
        axios.get("/employmentType/getAllEmployments").then((response) => {
            // console.log(response.data.data);
            setEmpType(response.data.data);
        });
    }, []);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get("/emp/getAllEmployeeMasterData");
            // const result = response.data.data.sort((a, b) => a.departmentName.localCompare(b.departmentName))
            // console.log(result);
            // console.log(response.data.data);
            setUsers(response.data.data);

        };
        loadUsers();
    }, []);

    // console.log(designations.departmentName.sort());
    // const sortedKeys=Object.keys(obj).sort();

    function setField(field, value) {
        setForm({
            ...form,
            [field]: value,
        });

        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        // e.target.reset();
        axios
            .put(`/emp/updateEmploymentDetails/${props.data}`,
            {
                departmentName,
                designationName,
                exitDate,
                resignationDate,
                confirmationDate,
                employmentType,
                status,
                primarySkills,
                secondarySkills,
                reportingManager,
                irm,
                srm,
                band,
                projectName,
                leaveBalance  
            })
            .then((response) => {
                if (response.status == 200) {
                    props.func()
                    toast.success("Updated successfully!!!");
                    props.handleClose();
                }
                else {
                    toast.error("Something went Wrong");
                }
            })
            .catch((err) => {
                toast.error("went wrong");
            });

    }

   
console.log(data);

    //sorting Array of Objects
    var sortedDepartments = _.sortBy(departments, 'departmentName');
    var sortedDesignations = _.sortBy(designations, 'designationName');
    var sortedUsers = _.sortBy(users, 'fullName');

    var tempDate = new Date(confirmationDate);
    var Year1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    return (
        <>
            <Form
                // ref={forms}
                className="formone"
                style={{ padding: 10 }}
                onSubmit={handleSubmit}
            >
                <Row className="mb-4">
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Business Unit Name </Form.Label>
                        <Form.Select
                            required
                            className="departmentName"
                            type="text"
                            controlid="departmentName"
                            placeholder="Business Unit Name"
                            defaultValue={data.departmentName}
                            value={departmentName}
                            maxLength={30}
                            onChange={(e) => setDepartmentName(e.target.value)}
                        ><option>select Department</option>
                            {sortedDepartments.map((departmentName) => (
                                <option value={departmentName.departmentName}>{departmentName.departmentName}</option>
                            ))}</Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Designation Name </Form.Label>
                        <Form.Select
                            required
                            className="designationName"
                            type="text"
                            controlid="designationName"
                            placeholder="Designation Name"
                            defaultValue={data.designationName}
                            value={designationName}
                            maxLength={30}
                            onChange={(e) => setDesignationName(e.target.value)}
                        ><option>Select Designation</option>
                            {sortedDesignations.map((designationsName) => (
                                <option value={designationsName.designationName}>{designationsName.designationName}</option>
                            ))}</Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Resignation Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="Resignation Date"
                            controlid="resignationDate"
                            defaultValue={resignationDate}
                            value={resignationDate}
                            onChange={(e) => setResignationDate(e.target.value)}
                        ></Form.Control>


                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Exit Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="exitDate"
                            controlid="exitDate"
                            defaultValue={exitDate}
                            value={exitDate}
                            onChange={(e) => setExitDate(e.target.value)}

                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Status </Form.Label>
                        <Form.Select
                            required
                            className="status"
                            type="text"
                            controlid="status"
                            placeholder="status"
                            defaultValue={status}
                            value={status}
                            maxLength={30}
                            onChange={(e) => setStatus(e.target.value)}
                        ><option value="">select status</option>
                            <option value="Active">Active</option>
                            <option value="InActive">InActive</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>

                        <Form.Label>Type Of Employment </Form.Label>
                        <Form.Select
                            required
                            type="text"
                            placeholder="Type Of Employment"
                            controlid="employmentType"
                            value={employmentType}
                            defaultValue={employmentType}
                            onChange={(e) => setEmploymentType(e.target.value)}

                        >
                            <option value="">Select </option>
                            {empType.map((employmentType) => (
                                <option value={employmentType.employmentTypeName}>{employmentType.employmentTypeName}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Select Band </Form.Label>
                        <Form.Select
                            required
                            type="text"
                            placeholder="Band"
                            controlid="band"
                            value={band}
                            onChange={(e) => setBand(e.target.value)}
                        >
                            <option>Select</option>
                            {bands.map((bandss) => (
                                <option>{bandss.bandName}</option>
                            ))}
                        </Form.Select>


                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Select IRM</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            placeholder="select IRM"
                            controlid="irm"
                            value={irm}

                            onChange={(e) => setIrm(e.target.value)}
                        >
                            <option value="">Select</option>
                            {sortedUsers.map((user) => (
                                <option value={user.fullName}>
                                    {user.fullName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Select SRM</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            placeholder="select srm"
                            controlid="srm"
                            value={srm}
                            onChange={(e) => setSrm(e.target.value)}
                        >
                            <option value="">Select</option>
                            {sortedUsers.map((user) => (
                                <option value={user.fullName}>
                                    {user.fullName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Confirmation Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="confirmationDate"
                            controlid="confirmationDate"
                            defaultValue={confirmationDate}
                            value={confirmationDate}

                            onChange={(e) => setConfirmationDate(e.target.value)}

                        ></Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Leave Balance</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Leave Balance"
                            controlid="leaveBalance"
                            defaultValue={getLeaveBalance}
                            value={getLeaveBalance}
                            onChange={(e) => setLeaveBalance(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                </Row>
                <Row>
                    <Col>
                        <Button
                            style={{
                                backgroundColor: "#ff9b44",
                                borderColor: "#ff9b44",
                                float: "right",
                                width: "40%",
                                height: "120%",
                                borderRadius: "25px",
                            }}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            style={{
                                backgroundColor: "#FE924A",
                                borderColor: "#B6B6B4",
                                alignItems: "center",
                                width: "40%",
                                height: "120%",
                                borderRadius: "25px",
                            }}
                            type="cancel"
                            onClick={props.handleClose}
                        >
                            Close
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}