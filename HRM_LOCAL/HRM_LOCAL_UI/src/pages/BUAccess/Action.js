import React from 'react'
import { Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from '../../Uri';

export default function Action(props) {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [departments, setDepartments] = useState([]);
    const [designations, setDesignations] = useState([]);
    const [data, setData] = useState([]);

    const forms = useRef(null);
    console.log(props);
    console.log(props.data);
    useEffect(() => {
        loadData();
        loadDesignations();
        loadEmploymentDetails();
    }, []);


    const loadData = async () => {
        const res = await axios.get("/dept/getAllDepartments");
        setDepartments(res.data);
    };

    const loadDesignations = async () => {
        const res = await axios.get("/designation/getAllDesignations");
        setDesignations(res.data);
        console.log(res.data)
    };

    const loadEmploymentDetails = async () => {
        const res = await axios.get(`/emp/getEmploymentDetails/${props.data}`);
        setData(res.data);
        console.log(res.data)
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
            console.log(response.data.data);
            setEmpType(response.data.data);
        });
    }, []);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadUsers = async () => {
            const response = await axios.get("/emp/getAllEmployeeMasterData");
            console.log(response.data.data);
            setUsers(response.data.data);
        };
        loadUsers();
    }, []);


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
            .put(`/emp/updateEmploymentDetails/${props.data}`, form)
            // .then((res) => {
            // // console.log(res)
            // 
            //   setTimeout(5000);
            // props.handleClose;
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
                toast.error("Something went wrong");
            });
        // })

    }

    console.log(form);

    return (
        <>
            <Form
                ref={forms}
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
                            controlId="departmentName"
                            placeholder="Business Unit Name"
                            defaultValue={data.department}
                            value={form.departmentName}
                            maxLength={30}
                            onChange={(e) => setField("departmentName", e.target.value)}
                        ><option>Select Business Unit</option>
                            {departments.map((departmentName) => (
                                <option value={departmentName.departmentName}>{departmentName.departmentName}</option>
                            ))}</Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Designation Name </Form.Label>
                        <Form.Select
                            required
                            className="designationName"
                            type="text"
                            controlId="designationName"
                            placeholder="Designation Name"
                            defaultValue={data.designation}
                            value={form.designationName}
                            maxLength={30}
                            onChange={(e) => setField("designationName", e.target.value)}
                        ><option>Select Designation</option>
                            {designations.map((designationsName) => (
                                <option value={designationsName.designationName}>{designationsName.designationName}</option>
                            ))}</Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Resignation Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="Resignation Date"
                            controlId="resignationDate"
                            defaultValue={data.resignationDate}
                            value={form.resignationDate}
                            onChange={(e) => setField("resignationDate", e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Exit Date</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="exitDate"
                            controlId="exitDate"
                            defaultValue={data.exitDate}
                            value={form.exitDate}
                            onChange={(e) => setField("exitDate", e.target.value)}

                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Status </Form.Label>
                        <Form.Select
                            required
                            className="status"
                            type="text"
                            controlId="status"
                            placeholder="status"
                            // defaultValue={data.status}
                            value={form.status}
                            maxLength={30}
                            onChange={(e) => setField("status", e.target.value)}
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
                            controlId="employmentType"
                            value={form.employmentType}
                            onChange={(e) => setField("employmentType", e.target.value)}

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
                            controlId="band"
                            value={form.band}
                            onChange={(e) => setField("band", e.target.value)}
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
                            controlId="irm"
                            value={form.irm}
                            onChange={(e) => setField("irm", e.target.value)}
                        >
                            <option value="">Select</option>
                            {users.map((user) => (
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
                            controlId="srm"
                            value={form.srm}
                            onChange={(e) => setField("srm", e.target.value)}
                        >
                            <option value="">Select</option>
                            {users.map((user) => (
                                <option value={user.fullName}>
                                    {user.fullName}
                                </option>
                            ))}
                        </Form.Select>
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
