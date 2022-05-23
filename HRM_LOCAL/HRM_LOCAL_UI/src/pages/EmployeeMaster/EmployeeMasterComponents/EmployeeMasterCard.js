import React, { useEffect } from 'react';
import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function EmployeeMasterCard() {

    // function formatDate(fromDate){
    //     var datePart = fromDate.match(/\d+/g),
    //       year = datePart[0].substring(2), // get only two digits
    //       month = datePart[1],
    //       day = datePart[2];
    //     return day + "-" + month + "-" + year;
    //    }

    const userData = sessionStorage.getItem('userdata')
    //console.log(userData)
    const userData1 = JSON.parse(userData)
    const employeeid = userData1.data.employeeId


    // function formatDate(dateOfJoining){
    //     var datePart = employeedetails.dateOfJoining.match(/\d+/g),  
    //       year = datePart[0].substring(4), // get only two digits 
    //       month = datePart[1],  
    //       day = datePart[2];    
    //     return day + "-" + month + "-" + year;  
    //    }
       
    // let date=employeedetails.dateOfJoining;
    // console.log(date);
    // let dateNew=`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`


    const [employeedetails, setEmployeeDetails] = useState([])
    useEffect(() => {
        axios.get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
            .then((response) => {
                setEmployeeDetails(response.data.data);
            })
    }, [])

    var today = new Date (employeedetails.dateOfJoining);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;
    console.log(today);

    return (
        <Row><Col>
            <Card>
                <Row>
                    <Col>
                        <Card.Title
                            style={{
                                fontSize: 30,
                                textAlign: "center",
                                paddingTop: 90,
                            }}>
                            {employeedetails.firstName} {employeedetails.lastName}
                        </Card.Title>
                    </Col>
                    <Col>
                        <Card.Body style={{}}>
                            <Row
                                style={{
                                    paddingTop: 20,
                                    paddingBottom: 10,
                                }}
                            >
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6> Employee ID:</h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{ paddinBottom: 0 }}>
                                        {employeedetails.employeeId}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6> Designation:</h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.designationName}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6>Date of Joining: </h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {today}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Reporting Manager: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.reportingManager}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Email: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.email}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>

            </Card>
        </Col>
        </Row>
    )
}
export default EmployeeMasterCard;