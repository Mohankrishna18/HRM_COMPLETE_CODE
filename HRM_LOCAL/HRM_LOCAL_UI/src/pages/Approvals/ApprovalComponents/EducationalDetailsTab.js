import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button, Accordion } from "react-bootstrap";;

function EducationalDetailsTab(props) {


    return (

        <div>

            <Form
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                <Accordion defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Post Graduation</Accordion.Header>
                                                <Accordion.Body>
                                                    <Row>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Type of Post Graduation *</Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                controlId="postgraduationType"
                                                                name="postgraduationType"
                                                                value={props.viewOnboard.postgraduationType}
                                                                maxLength={50}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>University Name </Form.Label>
                                                            <Form.Control
                                                                disable
                                                                
                                                            //    { props.viewOnboard.postgraduationBoardOfUniversity == ""  ? 'border-red' : 'border-default'}
                                                                // checke={props.viewOnboard.postgraduationBoardOfUniversity =="" ? 'border-red' : 'border-default'}
                                                                value={props.viewOnboard.postgraduationBoardOfUniversity}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Institute Name </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                controlId="postgraduationInstituteName"
                                                                value={props.viewOnboard.postgraduationInstituteName}
                                                                maxLength={50}
                                                                name="postgraduationInstituteName"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Institute City/Town </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                controlId="postgraduationInstituteCity"
                                                                value={props.viewOnboard.postgraduationInstituteCity}
                                                                maxLength={50}
                                                                name="postgraduationInstituteCity"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Course Name </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                controlId="postgraduationCourseName"
                                                                value={props.viewOnboard.postgraduationCourseName}
                                                                maxLength={50}
                                                                name="postgraduationCourseName"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Joining Year </Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                controlId="postgraduationJoiningYear"
                                                                value={props.viewOnboard.postgraduationJoiningYear}
                                                                maxLength={50}
                                                                name="postgraduationJoiningYear"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Passed-out Year</Form.Label>
                                                            <Form.Control
                                                                type="date"
                                                                controlId="postgraduationPassedYear"
                                                                value={props.viewOnboard.postgraduationPassedYear}
                                                                maxLength={50}
                                                                name="postgraduationPassedYear"
                                                            />
                                                        </Form.Group>
                                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                                            <Form.Label>Grade</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                controlId="postgraduationGrade"
                                                                value={props.viewOnboard.postgraduationGrade}
                                                                name="postgraduationGrade"

                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                Graduation Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Type of Graduation *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="graduationType"
                                                maxLength={50}
                                                name="graduationType"
                                                value={props.viewOnboard.graduationType}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>University Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="graduationBoardOfUniversity"
                                                name="graduationBoardOfUniversity"
                                                value={props.viewOnboard.graduationBoardOfUniversity}
                                            >
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Institute Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="graduationInstituteName"
                                                name="graduationInstituteName"
                                                maxLength={50}
                                                value={props.viewOnboard.graduationInstituteName}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Institute City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="graduationInstituteCity"
                                                maxLength={50}
                                                value={props.viewOnboard.graduationInstituteCity}
                                                name="graduationInstituteCity"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="graduationCourseName"
                                                maxLength={50}
                                                value={props.viewOnboard.graduationCourseName}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                // required
                                                type="date"
                                                name="graduationJoiningYear"
                                                controlId="graduationJoiningYear"
                                                maxLength={50}
                                                value={props.viewOnboard.graduationJoiningYear}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                controlId="graduationPassedYear"
                                                name="graduationPassedYear"
                                                maxLength={50}
                                                value={props.viewOnboard.graduationPassedYear}
                                                 ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="graduationGrade"
                                                value={props.viewOnboard.graduationGrade}
                                                name="graduationGrade"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 20, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                12th Grade/Intermediate Details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board * </Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="intermediateBoardOfUniversity"
                                                value={props.viewOnboard.intermediateBoardOfUniversity}
                                                maxLength={50}
                                                name="intermediateBoardOfUniversity"

                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School/College Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="intermediateCollegeName"
                                                value={props.viewOnboard.intermediateCollegeName}
                                                name="intermediateCollegeName"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School/College City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="intermediateCollegeCity"
                                                value={props.viewOnboard.intermediateCollegeCity}
                                                name="intermediateCollegeCity"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name*</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name="intermediateCourseName"
                                                controlId="intermediateCourseName"
                                                maxLength={50}
                                                value={props.viewOnboard.intermediateCourseName}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                controlId="intermediateJoiningYear"
                                                name="intermediateJoiningYear"
                                                value={props.viewOnboard.intermediateJoiningYear}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                placeholder="Passed out year"
                                                controlId="intermediatePassedYear"
                                                value={props.viewOnboard.intermediatePassedYear}
                                                name="intermediatePassedYear"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="intermediateGrade"
                                                maxLength={5}
                                                value={props.viewOnboard.intermediateGrade}
                                                name="intermediateGrade"
                                            ></Form.Control>
                                        </Form.Group>

                                        <Card
                                            style={{ marginLeft: 8, marginRight: 8, marginTop: 15, backgroundColor: "#FAFDD0" }}
                                        >
                                            <Card.Title style={{ margin: 20, textAlign: "center" }}>
                                                10th Grade details
                                            </Card.Title>
                                        </Card>

                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Board *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="sscBoardOfUniversity"
                                                maxLength={50}
                                                value={props.viewOnboard.sscBoardOfUniversity}
                                                name="sscBoardOfUniversity"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="sscSchoolName"
                                                maxLength={50}
                                                value={props.viewOnboard.sscSchoolName}
                                                name="sscSchoolName"
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>School City/Town *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="sscSchoolCity"
                                                maxLength={50}
                                                value={props.viewOnboard.sscSchoolCity}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Course Name *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="sscCourseName"
                                                maxLength={50}
                                                value={props.viewOnboard.sscCourseName}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Joining Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                name="sscJoiningYear"
                                                controlId="sscJoiningYear"
                                                value={props.viewOnboard.sscJoiningYear}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Passed-out Year *</Form.Label>
                                            <Form.Control
                                                //required
                                                type="date"
                                                name="sscPassedYear"
                                                controlId="sscPassedYear"
                                                value={props.viewOnboard.sscPassedYear}
                                            ></Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                            <Form.Label>Grade *</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                controlId="sscGrade"
                                                value={props.viewOnboard.sscGrade}
                                                maxLength={5}
                                                name="sscGrade"
                                            ></Form.Control>
                                        </Form.Group>
                    </Row>
              
            </Form>
        </div>
    )
}
export default EducationalDetailsTab;