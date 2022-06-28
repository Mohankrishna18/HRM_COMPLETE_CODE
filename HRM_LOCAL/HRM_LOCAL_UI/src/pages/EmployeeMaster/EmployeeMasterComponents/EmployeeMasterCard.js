import React, { useEffect } from 'react';
import { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Image } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';

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
    const [imge, setImge] = useState([]);
    useEffect(() => {
        axios.get(`/emp/getEmployeeDataByEmployeeId/${employeeid}`)
            .then((response) => {
                setEmployeeDetails(response.data.data);
            })
    }, [])
    useEffect(() => {
        axios
          .get(`/emp/files/${employeeid}`)
          .then((response) => {
            console.log(response.data);
            setImge(response.data)
          })
          .catch((error) => {
            console.log(error);
    
            console.log("something wrong");
          });
      }, []);
    
      console.log(imge);

    var today = new Date(employeedetails.dateOfJoining);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    var doj = dd + '-' + mm + '-' + yyyy;
    console.log(doj);

    return (
        <Row><Col>
            <Card>
                <Container>
                <Row>
                    <Col>
                        <Card.Title>

                            <Col>
                            <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{
                                    height: "150px",
                                    width: "150px",
                                    borderRadius: "110px",
                                    // alignItems: "center",
                                    marginTop: "100px",
                                    marginLeft: "25%"
                                    // alignContent:"center"
                                }} />
                            </Col>
                            <Col style={{
                                fontSize: 20,
                                // textAlign: "center",
                                paddingTop: 40,
                                paddingBottom: 40,
                                text: "bold",
                                marginLeft: "24%"
                                // marginRight: "50px"
                                // alignContent:"center"
                            }}>
                                {employeedetails.firstName} {employeedetails.lastName}
                            </Col>
                        </Card.Title>
                    </Col>
                    <Col>
                        <Card.Body style={{}}>
                            <Row
                                style={{
                                    paddingTop: 20,
                                    paddingBottom: 15,
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
                            <Row style={{ paddingBottom: 15 }}>
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
                            <Row style={{ paddingBottom: 15 }}>
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6> Years of Experience:</h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.yearsOfExperience}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 15 }}>
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6>Date of Joining: </h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {doj}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 15 }}>
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
                            {/* <Row style={{ paddingBottom: 10 }}>
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
                            </Row> */}
                            <Row style={{ paddingBottom: 15 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Employment Type: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.employmentType}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Band: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.band}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Project: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.project}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Business Unit: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{}}>
                                        {employeedetails.businessUnit}
                                    </Card.Text>
                                </Col>
                            </Row>
                          
                        
                        </Card.Body>
                    </Col>
                </Row>
                </Container>
            </Card>
        </Col>
        </Row>
    )
}
export default EmployeeMasterCard;