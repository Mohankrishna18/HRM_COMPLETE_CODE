import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function EmploymentDetailsTab(props) {

    return (

        <div>

            <Form
            >
                <Row className="mb-5">
                    
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Employment Type</Form.Label>
                        <Form.Control

                            type="text"
                            value={props.viewOnboard.employmentType}                         
                        >
                 

                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Band</Form.Label>
                        <Form.Control
                      
                            type="text"
                            placeholder="Band"
                            controlId="band"
                            name="band"
                            value={props.viewOnboard.band}
                           
                        >
                        
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Business Unit</Form.Label>
                        <Form.Control
                        
                            type="text"
                            placeholder="Department Name"
                            controlId="departmentName"
                            value={props.viewOnboard.department}
                            maxLength={25}
                            name="department"
                           >
                    
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
              
                            type="text"
                            placeholder="Designation Name"
                            controlId="designationName"
                            value={props.viewOnboard.designation}
                            maxLength={25}
                            name="designation"
                            
                        >
                     
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Immediate Reporting Manager *</Form.Label>
                        <Form.Control
                            value={props.viewOnboard.irm}
                            
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Senior Reporting Manager *</Form.Label>
                        <Form.Control
                            value={props.viewOnboard.srm}
                            
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Bussiness Unit Head *</Form.Label>
                        <Form.Control
                            value={props.viewOnboard.buh}       
                        >
                        </Form.Control>
                    </Form.Group>
                    {/* <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Project</Form.Label>
                        <Form.Select
                        disabled
                            type="text"
                            placeholder="Project"
                            controlId="project"
                            value={projectName}
                            maxLength={15}
                            name="projectName"
                            onChange={(e) =>
                                setProjectName(e.target.value)
                            }
                        >
                            <option>Select</option>
                            {project.map((p) => (
                    <option value={p.projectName}>
                        {p.projectName}
                    </option>
                  ))}                           
                        </Form.Select>
                    </Form.Group> */}
                </Row>

               
            </Form>
        </div>
    )
}
export default EmploymentDetailsTab;