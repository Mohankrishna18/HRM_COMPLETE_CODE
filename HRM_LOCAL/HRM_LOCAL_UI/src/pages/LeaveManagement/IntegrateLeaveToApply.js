import React from 'react';
import { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../Uri";
import { FaFontAwesome } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
// import Employee from "../AllEmployees/AllEmployeesComponents/Employee";
import { toast } from "react-toastify";
import LeaveEmployee from "./LeaveToApply";
import MaterialTable from 'material-table'
import Grid from '@mui/material/Grid'



import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "react-loading-overlay";
function IntegrateLeaveToApply() {

    const [show, setShow] = useState(false);
    //const [fromDate, setFromDate] = useState(null);
    const notifySuccess = (message) => toast.success(message);
    const notifyError = (message) => toast.error(message);
    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState();



    //useState for form
    const [employeeId, setEmployeeId] = useState();
    const [leaveType, setLeavetype] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [leaveReason, setReasonForLeaves] = useState();
    const [remainingLeaves, setRemainingLeaves] = useState();
    const [numberOfDays, setNoOfDays] = useState();
    const [days, setDays] = useState();
    const [typeofleave, setTypeOfLeave] = useState([]);
    const [entitle, setEntitle] = useState([])
    const [day, setDay] = useState('')
    const [remainingdata, setRemainingData] = useState([]);
    const [count, setCount] = useState();
    const [data, setData] = useState([]);
    //const userData1 = JSON.parse(userData);
    const userData = sessionStorage.getItem("userdata");
    var array = [];


    const userData1 = JSON.parse(userData);



    const employeeid = userData1.data.employeeId;



    const [getEmployeeDetails, setGetEmployeeDetails] = useState([]);








    useEffect(() => {
        // loadData();
        axios



            .get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)



            .then((response) => {
                setGetEmployeeDetails(response.data.data);
            });
    }, []);
    useEffect(() => {
        loadData();
    }, [])
    const loadData = () => {
        axios.get("/leave/getAllleavetypes").then((res) => {
            console.log(res.data);
            setTypeOfLeave(res.data);
            console.log("hello");
            setEntitle(res.data.noOfDays)
        });
    };


    useEffect(() => {
        axios.get(`leave/getremainingleaves/${employeeid}`).then((res) => {
            console.log(res.data);
            setRemainingData(res.data);
        });
    }, []);


    useEffect(() => {
        axios.get(`leave/getLeaveHistoryByEmployeeid/${employeeid}`).then((res) => {
            console.log(res.data);
            res.data.map((m) => {
                console.log(m.numberOfDays);
                array.push(m.numberOfDays);
                console.log(array);
                let sum = 0;
                for (let i = 0; i < array.length; i++) {
                    sum += array[i];
                }
                setCount(sum);



                // const len = m.length()
                // for(i=0;i<=len;i+m.numberofdays){
                // console.log(i)
                // }
            });
            // setLeaveData(res.data);
        });
    }, []);



    useEffect(() => {
        loadDataa();
    }, []);
    const loadDataa = () => {
        axios.get(`/leave/Annual`).then((res) => {
            console.log(res.data.noOfDays);
            setEntitle(res.data.noOfDays);
        });
    };

    useEffect(() => {
        loadTable();
    }, []);

    const da = JSON.parse(sessionStorage.getItem('userdata'))
    const empID = da.data.employeeId;

    const loadTable = async () => {
        const res = await axios.get(`leave/getLeaveHistoryByEmployeeid/${empID}`);
        setData(res.data);
        console.log(res.data);
    };
    const [columns, setColumns] = useState([
        { title: 'Leave Type', field: 'leaveType' },
        { title: 'From', field: 'fromDate', type: 'date', dateSetting: { locale: "en-GB" } },
        { title: 'To', field: 'toDate', type: 'date', dateSetting: { locale: "en-GB" } },
        { title: 'Number of Days', field: 'numberOfDays' },
        { title: 'Leave Reason', field: 'leaveReason' },
        { title: 'Leave Status', field: 'leaveStatus' },
        { title: 'Reject Reason', field: 'rejectReason' },
        // { title: 'Leave Type', field: 'leaveType', type:'date'}



    ]);


    const initialValues = {
        employeeId: getEmployeeDetails.employeeId,
        leaveType,
        fromDate,
        toDate,
        leaveReason,
        remainingLeaves,
        numberOfDays,
        setDays,
    };



    const handleButtonClick = async (e) => {
        console.log("button clicked 123");
        e.preventDefault();
        console.log(initialValues);
        const data = Object.assign(initialValues, obj);
        const data1 = Object.assign(data, obj1);
        const data2 = Object.assign(data1, obj2);
        console.log(data2);
        console.log(data);
        try {
            const res = await axios.post("/leave/applyLeave", data)
            if (res.status === 200) {
                console.log("success")
                notifySuccess("Leave Applied Successfully")
                loadTable();
            }



        }
        catch (err) {
            console.log(err)
            notifyError("Leave Already Applied")
        }





    };



    const handleClose = () => {
        setShow();
    };
    const getLeaveType = () => {
        console.log("");
    };



    const handleShow = () => setShow(true);



    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    } // test it
    const a = new Date(toDate);
    const b = new Date(fromDate);
    const difference = dateDiffInDays(b, a);
    //console.log(difference + 1);
    var numberOfDay = difference + 1;
    console.log(numberOfDays);
    var remainLeaves = 12 - numberOfDay;
    console.log(remainLeaves);
    const obj = { remainingLeaves: days };
    const obj1 = { numberOfDays: day };
    const obj2 = { remainingLeaves: remainLeaves };
    console.log(obj1);
    const handleSubmit = (ee) => {
        const form = ee.currentTarget;



        if (form.checkValidity() === false) {
            ee.preventDefault();



            ee.stopPropagation();
        }



        setValidated(true);



        console.log(employeeId);
        console.log(leaveType);
        console.log(fromDate);
        console.log(toDate);
        console.log(noOfDays);
        console.log(reasonForLeaves);
        console.log(remainingLeaves);
        console.log(numberOfDays);
    };
    console.log(typeofleave)


















    return (
        <div>
            {/* <Button
    onClick={handleShow}
    style={{ backgroundColor: "#9FD5E2", float: "right",marginLeft:"100px",borderRadius:'29px',paddingTop:"9px" }}
    >
    <h4 style={{color: 'black'}}>Add Leave</h4> </Button> */}
            <Card bg="white">
                <Row>
                    <Col xs={6} md={8}>
                        <Card.Body>
                            <Card.Title>Leaves</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Dashboard/Leaves
                            </Card.Subtitle>
                        </Card.Body>
                    </Col>










                    <Col>
                        <div class="p-3">
                            <Button
                                variant="warning"
                                onClick={handleShow}
                                style={{
                                    backgroundColor: "#ff9b44",
                                    color: "#F4F8F6",
                                    float: "right",
                                    borderRadius: "25px",
                                    paddingBottom: "11.5px",
                                    paddingTop: "11.5px",
                                }}
                            >
                                {" "}
                                <BsPlusLg />
                                Apply Leave
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Row md={4}>
                    <Col>
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title>Total Entitled</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {entitle}
                                        </Card.Subtitle>
                                        {/* <Card.Text>12</Card.Text> */}
                                    </h5>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title>Remained Leaves</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {remainingdata}
                                        </Card.Subtitle>
                                        {/* <Card.Text>8 Today</Card.Text> */}
                                    </h5>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>



                    <Col>
                        <Card>
                            <Card border="warning">
                                {count == undefined ? (<Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title>Leaves Applied</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            0
                                        </Card.Subtitle>
                                        {/* <Card.Text></Card.Text> */}
                                    </h5>
                                </Card.Body>) : (<Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title>Leaves Applied</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            {count}
                                        </Card.Subtitle>
                                        {/* <Card.Text></Card.Text> */}
                                    </h5>
                                </Card.Body>)}

                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card border="warning">
                                <Card.Body>
                                    <h5>
                                        {" "}
                                        <Card.Title>Loss Of Pay</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">3</Card.Subtitle>
                                        {/* <Card.Text>12/60</Card.Text> */}
                                    </h5>
                                </Card.Body>
                            </Card>
                        </Card>
                    </Col>
                </Row>

            </Card>
            <Modal
                size="lg"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Apply Leave</Modal.Title>
                </Modal.Header>



                <Modal.Body>
                    <Form
                        noValidate
                        validated={validated}
                        style={{ padding: 10 }}
                        onSubmit={handleButtonClick}
                    >
                        <Row className="mb-5">
                            {/* <Form.Group
    as={Col}
    md="6"
    style={{ padding: 10 }}
    controlId="validationCustom01"
    >
    <Form.Label>Employee Id</Form.Label>
    <Form.Control
    required
    className="employeeId"
    type="text"
    value={getEmployeeDetails.employeeId}
    onChange={(event) =>
    setEmployeeId(getEmployeeDetails.employeeId)
    }
    />
    </Form.Group> */}
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Leave Type</Form.Label>

                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={(event) => setLeavetype(event.target.value)}
                                >
                                    <option> Select Leave</option>
                                    {typeofleave.map((leave) => (
                                        <option>{leave.leaveType}</option>
                                    ))}

                                    {/* <option value={typeofleave.leaveType}>{typeofleave.leaveType}</option> */}
                                    {/* <option value="Compensentory">Compensentory</option> */}
                                    {/* <option value="Earned Leave">Earned Leave</option> */}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>From</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date"
                                    onChange={(event) => {
                                        setFromDate(event.target.value);
                                        console.log(event.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="6"
                                style={{ padding: 15 }}
                                controlId="validationCustom02"
                            >
                                <Form.Label>To</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="To Date"
                                    onChange={(event) => {
                                        setToDate(event.target.value);
                                        console.log(event.target.value);
                                        axios.get(`/holiday/${fromDate}/${event.target.value}`).then((res) => {
                                            setDay(res.data);
                                        })
                                    }}
                                />
                            </Form.Group>



                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>No of Days</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder=""
                                    value={day}
                                    onChange={(event) => {
                                        noOfdays(event);

                                    }}
                                />
                            </Form.Group>
                            {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
    <Form.Label>Remaining Leaves</Form.Label>
    <Form.Control
    required
    type="text"
    placeholder=""
    value={remainLeaves}
    onChange={(event) => setRemainingLeaves(event.target.value)}
    />
    </Form.Group> */}
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Leave Reason</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder=""
                                    onChange={(event) => setReasonForLeaves(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Group controlId="formFileMultiple" className="mb-3">
                                    <Form.Label>
                                        Upload Doctor's Certificate for Sick/Medical Leave
                                    </Form.Label>
                                    <Form.Control type="file" multiple />
                                </Form.Group>
                            </Form.Group>
                        </Row>
                        <Button
                            style={{ backgroundColor: "#FF9B44", float: "right" }}
                            type="submit"
                            onClick={handleClose}
                        >
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {/* <LeaveEmployee/> */}




            <Grid>
                <MaterialTable
                    title=""
                    columns={columns}
                    data={data}
                    // editable={{
                    // onRowAdd: newData =>
                    // new Promise((resolve, reject) => {




                    // setTimeout(() => {
                    // console.log(newData)
                    // const res = axios.post("/holiday/addholiday",
                    // newData,
                    // );
                    // setData([...data, newData]);
                    // loadData();





                    // resolve();
                    // }, 1000)
                    // }),
                    // onRowUpdate: (updatedRow, oldRow) =>
                    // new Promise((resolve, reject) => {
                    // console.log(oldRow);
                    // console.log(updatedRow);
                    // const index = oldRow.holidayId;
                    // console.log(index);
                    // const updatedRows = [...data];
                    // console.log(updatedRows);
                    // updatedRows[oldRow.tableData.id] = updatedRow;
                    // console.log(updatedRows);





                    // setTimeout(() => {
                    // console.log(updatedRow)
                    // const res = axios.put(`/holiday/updateHolidayById/${index}`, updatedRow)
                    // .then((resp) => {
                    // console.log(resp);
                    // loadData()
                    // })





                    // .catch((err) => {
                    // console.log("not updated")
                    // // toast.error("Server error");
                    // });





                    // setData(updatedRows);
                    // console.log("updated")
                    // // toast.success(" Updated Successfully");
                    // console.log(updatedRows);
                    // resolve();
                    // });
                    // }),







                    // onRowDelete: oldData =>
                    // new Promise((resolve, reject) => {
                    // setTimeout(() => {
                    // console.log(oldData)
                    // const dataDelete = [...data];
                    // const index = oldData.holidayId;
                    // dataDelete.splice(index, 1);
                    // const res = axios.delete(`/holiday/deleteHoliday/${index}`)
                    // .then((res) => {
                    // console.log(res)
                    // loadData()
                    // })
                    // console.log(dataDelete)
                    // //setData(dataDelete);





                    // resolve()
                    // }, 1000)
                    // }),
                    // }}
                    options={{
                        paging: false,
                        addRowPosition: 'first',
                        actionsColumnIndex: -1,
                        headerStyle: {





                            backgroundColor: "#FE924A",





                            color: "white",





                        },
                        exportButton: true
                    }}
                />
            </Grid>


        </div>
    );
}

export default IntegrateLeaveToApply;