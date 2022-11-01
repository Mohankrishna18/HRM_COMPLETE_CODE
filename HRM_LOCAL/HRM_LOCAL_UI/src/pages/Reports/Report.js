import React, { useState, useEffect, useContext } from "react";
import axios from "../../Uri";
import moment from "moment";
import "date-fns";
//import "react-week-picker/src/lib/calendar.css";
import {
    Card,
    Container,
    Row,
    Col,
    Table,
    Tabs,
    Tab,
    Button,
    Modal,
    Form,
} from "react-bootstrap";
import { FcWebcam } from "react-icons/fc";
import { Box } from "@material-ui/core";
import {UserContext} from "./ReportsMain"

const Reports = () => {
    const {data,setData} = useContext(UserContext)
    const handleJumpToCurrentWeek = (currenDate) => {
        console.log(`current date: ${currenDate}`);
    };

    const handleWeekPick = (startDate, endDate) => {
        console.log(`${startDate} to ${endDate}`);
    };
    useEffect(() => {
        axios
            .get(`/emp/getEmployeeDataByEmployeeId/${employeeId}`)
            .then((response) => {
                setEmployeeName(response.data.data);
                console.log(response.data.data.firstName)
            }).catch((err) => {
                console.log(err)
            })
    }, []);

    const da = JSON.parse(sessionStorage.getItem("userdata"));
    const employeeId = da.data.employeeId;
    const [viewShow, setViewShow] = useState(false);
    const viewHandleClose = () => setViewShow(false);
    const [selectedYear, setSelectedYear] = useState();
    const [selectedMonth, setSelectedMonth] = useState();
    const [EmployeeName, setEmployeeName] = useState("");
    console.log(selectedMonth);
    console.log(selectedYear);
    let dates = [];
    const date = () => {
        const date1 = new Date();
        const date2 = moment(date1).format("YYYY");
        for (var input = 2020; input <= date2; input++) {
            dates.push(input);
        }
    };

    date();
    const [columns1, setColumns1] = useState([
        {
            title: "Timesheet Date",
            field: "timeSheetDate",
            type: "date",
            editable: "never",
            dateSetting: { locale: "en-GB" },
        },
        {
            title: "Total Hours",
            field: "totalHours",
            type: "text",
            editable: "never",
        },
    ]);
    const [selectedDate, setSelectedDate] = useState(
        new Date("2014-08-18T21:11:54")
    );

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(date);
    };

    return (
        <div>
            <div>
                <Row>
                    <Col md="12">
                        <Form>
                            <Form.Group>
                                <Form.Label style={{ paddingLeft: "20px" }}>Employee Id :-&nbsp;{EmployeeName.employeeId}</Form.Label>
                                {/* <Form.Control
              style={{
                width: "60%",
                height: "8%",
                padding: "9px",
                marginLeft: "10px",
                cursor: "pointer",
                borderRadius: 10,
              }}> 
            </Form.Control> */}
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Form>
                            <Form.Group>
                                <Form.Label style={{ paddingLeft: "20px", paddingTop: "30px" }}>Employee Name:-&nbsp;{EmployeeName.firstName}&nbsp;{EmployeeName.lastName}</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md="4"> <Form>
                        <Form.Group>
                            <Form.Label style={{ paddingLeft: "20px" }}>Select Year</Form.Label>
                            <Form.Select
                                style={{
                                    width: "60%",
                                    height: "8%",
                                    padding: "9px",
                                    marginLeft: "10px",
                                    cursor: "pointer",
                                    borderRadius: 10,
                                }}
                                onChange={(e) => setSelectedYear(e.target.value)}
                            >
                                <option>Select</option>
                                {dates.map((date) => (
                                    <option value={date}>{date}</option>
                                ))}

                            </Form.Select>
                        </Form.Group>
                    </Form></Col>
                    <Col md="4">
                        <Form>
                            <Form.Group>
                                <Form.Label style={{ paddingLeft: "20px" }}>Select Month</Form.Label>
                                <Form.Select
                                    style={{
                                        width: "60%",
                                        height: "8%",
                                        padding: "9px",
                                        marginLeft: "10px",
                                        cursor: "pointer",
                                        borderRadius: 10,
                                    }}
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        console.log(selectedYear);
                                        console.log(employeeId);
                                        axios
                                            .get(
                                                `/task/getTaskByEmployeeIdAndDate/${e.target.value}/${selectedYear}/${employeeId}`
                                            )
                                            .then((res) => {
                                                console.log(res);
                                                setData(res.data);
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                        // setApproval(response.data);
                                        // console.log(response);

                                        setSelectedMonth(e.target.value);
                                    }}
                                >
                                    <option>Select</option>
                                    <option value="01">January</option>
                                    <option value="02">February </option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </Form.Select>
                            </Form.Group>
                        </Form></Col>
                </Row>

            </div>
        </div>
    );
};

export default Reports;
