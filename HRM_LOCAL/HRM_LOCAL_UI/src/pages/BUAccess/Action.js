import React from 'react'
import { Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from '../../Uri';
import moment from 'moment';
import { BASE_URL } from '../../Constant';

export default function Action(props) {
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [data, setData] = useState({});
    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [reportingManager, setReportingManager] = useState("");
    const [projectName, setProjectName] = useState("");
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
    const [bands, setBands] = useState([]);
    const [empType, setEmpType] = useState([]);
    const [users, setUsers] = useState([]);
   

    useEffect(() => {
       EndPoints();
        leaveBalanceCall();
        loadEmploymentDetails();
    }, []);

    const EndPoints = () => {
        axios.get("/emp/getAllEmployeeMasterData").then((resp) => {
           setUsers(resp.data.data);
          if (resp.data.status) {
            axios.get("/dept/getAllDepartments").then((respo) => {
              setDepartments(respo.data);
              if (respo.statusText === "OK") {
                axios.get("/designation/getAllDesignations").then((respon) => {
                  setDesignations(respon.data);
                  if (respon.statusText =="OK") {
                    axios.get("/bands/getAllBands").then((respons) => {
                      setBands(respons.data.data);
                      if (respons.data.status) {
                        axios.get("/employmentType/getAllEmployments").then((response) => {
                          setEmpType(response.data.data);
                        }).catch((err) => {
                          console.log("EmploymentType error");
                        })
                      }
                    }).catch((err) => {
                      console.log("Bands Error");
                    })
                  }
                }).catch((err) => {
                  console.log("Designation Error");
                })
              }
            }).catch((err) => {
              console.log("Department Error")
            })
          }
        }).catch((err) => {
          console.log("Employee master Data Error")
        })
      }
    
   
    const leaveBalanceCall = () => {
        axios.get(`leave/leaveBalanceByEmployeeId/${props.data}`).then((res) => {
          if(res.data.leaveBalance == null){
            setLeaveBalance(0)
          }else{
            setLeaveBalance(res.data.leaveBalance);
          }
        });
      };

    const loadEmploymentDetails = async () => {
        const res = await axios.get(`/emp/getEmploymentDetails/${props.data}`);
        setData(res.data.data);  
        // console.log(res.data.data.exitDate);  
        setDepartmentName(res.data.data.departmentName);
        setDesignationName(res.data.data.designationName);
        setExitDate(moment(res.data.data.exitDate).format('YYYY-MM-DD'));
        setResignationDate(moment(res.data.data.resignationDate).format('YYYY-MM-DD'));
        setSrm(res.data.data.srm);
        setIrm(res.data.data.irm);
        setProjectName(res.data.data.projectName);    
        setConfirmationDate(moment(res.data.data.confirmationDate).format('YYYY-MM-DD'));    
        setBand(res.data.data.band);
        setEmploymentType(res.data.data.employmentType);
        setStatus(res.data.data.status);
        setPrimarySkills(res.data.data.primarySkills);
        setSecondarySkills(res.data.data.secondarySkills);
        setReportingManager(res.data.data.reportingManager);    
    };

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


    //sorting Array of Objects
    var sortedDepartments = _.sortBy(departments, 'departmentName');
    var sortedDesignations = _.sortBy(designations, 'designationName');
    var sortedUsers = _.sortBy(users, 'fullName');

    // var tempDate = new Date(resignationDate);
    // var Year1 = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');



    return (
        <>
            <Form
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
                            // defaultValue={exitDate}
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
                            // defaultValue={leaveBalance}
                            value={leaveBalance}
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