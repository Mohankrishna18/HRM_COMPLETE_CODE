import React from 'react'
import { Form } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
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
                .then((res)=>{
                    console.log(res)
                    if(res.status ==200){
                      props.func();
                    }
                  })
                  props.handleClose;
        }

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
                                    defaultValue={data.departmentName}
                                    // onChange={(event) => setclientName(event.target.value)}
                                    value={form.departmentId}
                                    maxLength={30}
                                    onChange={(e) => setField("departmentName", e.target.value)}
                                    isInvalid={!!errors.departmentId}
                                ><option>Select Business Unit</option>

                                    {departments.map((departmentName) => (

                                        <option value={departmentName.departmentName}>{departmentName.departmentName}</option>

                                    ))}</Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.departmentId}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Designation Name </Form.Label>
                                <Form.Select
                                    required
                                    className="designationName"
                                    type="text"
                                    controlId="designationName"
                                    placeholder="Designation Name"
                                    defaultValue={data.designationName}
                                    value={form.designationName}
                                    maxLength={30}
                                    onChange={(e) => setField("designationName", e.target.value)}
                                    isInvalid={!!errors.designationName}
                                ><option>Select Designation</option>

                                {designations.map((designationsName) => (

                                    <option value={designationsName.designationsName}>{designationsName.designationsName}</option>
                                    ))}</Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.designationName}
                                </Form.Control.Feedback>
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
                                    isInvalid={!!errors.resignationDate}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.resignationDate}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
                                    isInvalid={!!errors.exitDate}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.exitDate}
                                </Form.Control.Feedback>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Status </Form.Label>
                                <Form.Select
                                    required
                                    className="status"
                                    type="text"
                                    controlId="status"
                                    placeholder="status"
                                    defaultValue={data.status}
                                    value={form.status}
                                    maxLength={30}
                                    onChange={(e) => setField("status", e.target.value)}
                                    isInvalid={!!errors.status}
                                >
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                    </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.designationName}
                                </Form.Control.Feedback>
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
