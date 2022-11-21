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
import { Image } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import {
    Timeline,
    BodyContent,
    Section,
    Description,
} from "vertical-timeline-component-react";

function EmployeeMasterCard() {

    const customTheme = {
        yearColor: "#405b73",
        lineColor: "#d0cdc4",
        dotColor: "#fd7e14",
        borderDotColor: "#ced4da",
        titleColor: "#000000",
        subtitleColor: "#bf9765",
        textColor: "#262626",
    };



    const userData = sessionStorage.getItem('userdata')
    //console.log(userData)
    //commit
    const userData1 = JSON.parse(userData)
    const employeeid = userData1.data.employeeId


    const [employeedetails, setEmployeeDetails] = useState([])
    const [imge, setImge] = useState({});
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
                <Row>
                    <Col>
                        <Card.Title>

                            <Col>
                                <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{
                                    height: "130px",
                                    width: "130px",
                                    borderRadius: "110px",
                                    alignItems: "center",
                                    marginTop: "30px",
                                    marginLeft: "34%"
                                }} />
                            </Col>
                            <Col style={{
                                fontSize: 20,
                                textAlign: "center",
                                paddingTop: 10,
                                paddingBottom: 0,
                                text: "bold",
                            }}>
                                {employeedetails.firstName} {employeedetails.lastName}
                            </Col>
                        </Card.Title>
                    </Col>
                    <Col>
                        <Card.Body style={{}}>
                            <Row
                                style={{
                                    paddingTop: 0,
                                    paddingBottom: 10,
                                }}
                            >
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6> Employee ID:</h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{ paddinBottom: 0,color:"#999897" }}>
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
                                    <Card.Text style={{color:"#999897"}}>
                                        {employeedetails.designationName}
                                    </Card.Text>
                                </Col>
                            </Row><Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Title style={{}}>
                                        <h6>Business Unit:</h6>
                                    </Card.Title>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{color:"#999897"}}>
                                        {employeedetails.departmentName}
                                    </Card.Text>
                                </Col>
                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>Business Unit Head: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{color:"#999897"}}>
                                        {employeedetails.buh}
                                    </Card.Text>
                                </Col>

                            </Row>
                            <Row style={{ paddingBottom: 10 }}>
                            <Col>
                                <Card.Text style={{}}>
                                    <h6>IRM: </h6>
                                </Card.Text>
                            </Col>{" "}
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{color:"#999897"}}>
                                    {employeedetails.irm}
                                </Card.Text>
                            </Col>
                        </Row>
                        </Card.Body>
                    </Col>

                    {/* <Col>
                <Timeline theme={customTheme} style={{marginTop:50}}>
                   <BodyContent>
                    
                    <Section >
                       <Description  />
                     </Section>

                     <Section >
                       <Description />
                    </Section>

                     <Section>
                       <Description  />
                     </Section>

                     <Section >
                       <Description  />
                     </Section>

                     <Section >
                       <Description  />
                    </Section>
                   </BodyContent>
                 </Timeline>
                
                </Col> */}

                    <Col>
                        <Row style={{
                            paddingTop: 15,
                            paddingBottom: 10,
                        }}>
                            <Col>
                                <Card.Title style={{}}>
                                    <h6> Years of Experience:</h6>
                                </Card.Title>
                            </Col>{" "}
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{color:"#999897"}}>
                                    {employeedetails.yearsOfExperience}
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
                                <Card.Text style={{color:"#999897"}}>
                                    {doj}
                                </Card.Text>
                            </Col>
                        </Row>
                        {/* <Row style={{ paddingBottom: 10 }}>
                            <Col>
                                <Card.Text style={{}}>
                                    <h6>Reporting Manager: </h6>
                                </Card.Text>
                            </Col>{" "}
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{color:"#999897"}}>
                                    {employeedetails.reportingManager}
                                </Card.Text>
                            </Col>
                        </Row> */}

                        <Row style={{ paddingBottom: 10 }}>
                            <Col>
                                <Card.Text style={{}}>
                                    <h6>Employment Type: </h6>
                                </Card.Text>
                            </Col>{" "}
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{color:"#999897"}}>
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
                                <Card.Text style={{color:"#999897"}}>
                                    {employeedetails.band}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10 }}>
                                <Col>
                                    <Card.Text style={{}}>
                                        <h6>SRM: </h6>
                                    </Card.Text>
                                </Col>{" "}
                                <Col md={{ offset: 1 }}>
                                    <Card.Text style={{color:"#999897"}}>
                                      {employeedetails.srm}
                                    </Card.Text>
                                </Col>
                            </Row>
                           
                    </Col>
                </Row>

            </Card>
        </Col>
        </Row>
    )
}
export default EmployeeMasterCard;