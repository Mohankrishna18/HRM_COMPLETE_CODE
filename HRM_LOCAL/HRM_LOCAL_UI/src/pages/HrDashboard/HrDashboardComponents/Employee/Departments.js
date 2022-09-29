import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Table, Tabs, Row, Col, Card } from "react-bootstrap";
import axios from "../../../../Uri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";


function Departments(props) {

    const [data, setData] = useState([]);
    const [departmentName, setDepartmentName] = useState([]);
    const [getDepartmentName, setGetDepartmentName] = useState([]);
    const [empData, setEmpData] = useState([]);
    const [value, setValue] = React.useState("1");
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [taa, setTaa] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/TAA")
        .then((res) => {
            setTaa(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });

    const [hr, setHr] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/Human Resource(HR)")
        .then((res) => {
            setHr(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });


    const [tag, setTag] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/TAG")
        .then((res) => {
            setTag(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });

    const [pmo, setPmo] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/PMO")
        .then((res) => {
            setPmo(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });

    const [oracle, setOracle] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/Oracle")
        .then((res) => {
            setOracle(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });
        
    const [digital, setDigital] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/Digital")
        .then((res) => {
            setDigital(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });

    const [it, setIt] = useState([]);
    axios
        .get("/emp/getEmployeesByDepartment/IT")
        .then((res) => {
            setIt(res.data.data);
            console.log(res.data.data);
        })
        .catch((err) => {
            console.log(err);
            // toast.error("Server Error")
        });

    console.log(getDepartmentName);

    useEffect(() => {
        axios
            .get("/emp/getAllEmployeeMasterData")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                // toast.error("Server Error")
            });
    }, []);
    console.log(data);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const res = await axios.get("/dept/getAllDepartments");
        setDepartmentName(res.data);
        console.log(res.data);
    };

    // to get employee data by departments
    const getEmpData = () => {
        axios
            .get(`/emp/getEmployeesByDepartment/${getDepartmentName}`)
            .then((res) => {
                setEmpData(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                console.log(err);
                // toast.error("Server Error")
            });
    }




    return (
        <>
            <Row>
                <div className="responsive" style={{ paddingTop: "5%" }}>
                    <Modal show={viewShow} onHide={viewHandleClose} size="xl">
                        <Modal.Header closeButton style={{ backgroundColor: "#FF9E14" }}>
                            <Modal.Title>Onboarding Form</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {/* <ApprovalView
            viewOnboard={viewOnboard}
            // func={pull_data}
            viewHandleClose={viewHandleClose}
          /> */}
                        </Modal.Body>
                    </Modal>

                    {/* <HRConfirmation /> */}
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Employee ID</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Join Date</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        {getDepartmentName == "" ? (

                            <tbody>
                                {empData.map((data) => (
                                    <tr>
                                        <td>{data.firstName}</td>
                                        <td>{data.employeeId}</td>
                                        <td>{data.email}</td>
                                        <td>{data.primaryPhoneNumber}</td>
                                        <td>{data.dateOfJoining}</td>
                                        <td>{data.designationName}</td>
                                        <td>
                                            <Row>
                                                <Button
                                                    variant="white "
                                                    className="rounded-pill"
                                                    onClick={(event) => {
                                                        setViewShow(true);
                                                        console.log(props);
                                                        setViewOnboard(props.data);
                                                    }}
                                                >{" "}
                                                    <AiTwotoneEdit /> Edit
                                                </Button>

                                            </Row>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : <tbody>
                            {data.map((data) => (
                                <tr>
                                    <td>{data.firstName}</td>
                                    <td>{data.employeeId}</td>
                                    <td>{data.email}</td>
                                    <td>{data.primaryPhoneNumber}</td>
                                    <td>{data.dateOfJoining}</td>
                                    <td>{data.designationName}</td>
                                    <td>
                                        <Row>
                                            <Button
                                                variant="white "
                                                className="rounded-pill"
                                                onClick={(event) => {
                                                    setViewShow(true);
                                                    console.log(props);
                                                    setViewOnboard(props.data);
                                                }}
                                            >{" "}
                                                <AiTwotoneEdit /> Edit
                                            </Button>

                                        </Row>
                                    </td>
                                </tr>
                            ))}
                        </tbody>}

                    </Table>
                </div>
            </Row>
        </>
    );
}

export default Departments;

