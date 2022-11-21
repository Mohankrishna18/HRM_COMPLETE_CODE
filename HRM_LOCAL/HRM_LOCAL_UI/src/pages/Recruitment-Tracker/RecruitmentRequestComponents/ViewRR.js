import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ViewRR=(props)=> {
    console.log(props.viewOnboard);
   
    


    return (
        <div className="scroll">
            <Row style={{ marginTop: 20 }}>
                <Col>
                    <Card style={{ padding: 30, paddingBottom: 20 }}>

                    <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Job ID   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.requisitionId}
                                </Card.Text>
                            </Col>
                        </Row><Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Business unit   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.departmentName}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Job Title   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.jobTitle}
                                </Card.Text>
                            </Col>
                        </Row>

                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Technology   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.technology}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Role   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.role}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Work Location   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.workLocation}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Client   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.clientName}
                                </Card.Text>
                            </Col>
                        </Row>
                        
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Project   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.projectName}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    No. of Positions   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.positions}
                                </Card.Text>
                            </Col>
                        </Row>


                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Years of Experience   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.yoe}
                                </Card.Text>
                            </Col>
                        </Row>

                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Primary Skills   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.pSkills}
                                </Card.Text>
                            </Col>
                        </Row>

                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Secondary Skills   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.sSkills}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Employment Type   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.empType}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Contact Name  :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.pocname}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Working Hours   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.workingHours}
                                </Card.Text>
                            </Col>
                        </Row>
                        

                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Rate   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.rate}
                                </Card.Text>
                            </Col>
                        </Row>

                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Educational Qualification   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.qualification}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Upload Job Requirements Document   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.uploadDoc}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Job Description   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.description}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row style={{ paddingBottom: 10, paddingLeft: 10 }}>
                            <Col>
                                <Card.Subtitle style={{ padding: 10 }}>
                                    Comments   :
                                </Card.Subtitle>{" "}
                            </Col>
                            <Col md={{ offset: 1 }}>
                                <Card.Text style={{ paddingBottom: 0 }}>
                                    {props.viewOnboard.comments}
                                </Card.Text>
                            </Col>
                        </Row>
                        {/* <Row>
                        <Col md="4"></Col>
                            <Col md="4">
                                <Button
                                    style={{
                                        backgroundColor: "#f5896e",
                                        borderColor: "#ff9b44",
                                        float: "right",
                                        width: "80%",
                                        height: "100%",
                                        borderRadius: "25px",
                                    }}
                                    type="submit"
                                    onClick={(event) => {
                                        axios.get(`/recruitmentTracker/updateWorkflowStatus/${props.viewOnboard.rrfId}`).then((res)=>{
                                            console.log(res)
                                            if(res.statusText === 'OK'){
                                                props.func()
                                            }else{
                                                console.log("Not Updated")
                                            }
                                            
                                        })
                                     
                                       
                                      }}
                                >
                                    Send to Approval
                                </Button>
                            </Col>
                            <Col md="4"></Col> */}
                            {/* <Col>
                                <Button
                                    style={{
                                        backgroundColor: "#B6B6B4",
                                        borderColor: "#B6B6B4",
                                        alignItems: "center",
                                        width: "40%",
                                        height: "100%",
                                        borderRadius: "25px",
                                    }}
                                    type="cancel"
                                    // onClick={handleClose}
                                >
                                    Cancel
                                </Button>
                            </Col> */}
                        {/* </Row> */}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ViewRR