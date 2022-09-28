import React, { useEffect, useState } from "react";
import { Button, Modal, Tab, Table, Tabs, Row, Col } from "react-bootstrap";
import axios from "../../../../Uri";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";


function Departments(props) {

    const [data, setData] = useState([]);
    const [departmentName, setDepartmentName]= useState([])
    const [value, setValue] = React.useState("1");
    const [viewShow, setViewShow] = useState(false);
    const [viewOnboard, setViewOnboard] = useState({});
    const viewHandleClose = () => setViewShow(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    useEffect(() => {
        axios
            .get("/emp/getAllEmployeeMasterData")
            .then((res) => {
                setData(res.data.data);
                console.log(res.data.data);
                console.log(res.data.data.employeeid);
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



    return (
        <><Row>
            <div>
                <form>
                    <div class="form-group">
                        <Row>
                            <Col>
                                <input type="text" class="form-control" placeholder="Employee ID" />
                            </Col><Col>
                                <input type="text" class="form-control" placeholder="Employee Name" />
                            </Col><Col>

                                <select class="form-control" placeholder="Select Department">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </Col>
                            <Col>
                            <button type="button" class="btn btn-success"  style = {{ width : 300 }}>Search</button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
            </Row>
            <Row>
            <div className="responsive" style={{paddingTop : "5%"}}>
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

                    <tbody>
                        {data.map((data) => (
                            <tr>
                                <td>{data.fullName}</td>
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
                </Table>
            </div>
            </Row>
        </>
    );
}

export default Departments;
