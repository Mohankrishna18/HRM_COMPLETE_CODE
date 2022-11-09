import React from 'react'
import ApplicantsMonthly from './ApplicatntsMonthly'
import { Card, Col, Row } from 'react-bootstrap'
import ApplicationsRecievedEachDepartment from './ApplicationsRecievedEachDepartment'

const CandidatesGraph_Table = () => {
    return (
        <div>

            <Row>

                {/* First Graph */}
                <Col md={6}>

                    {/*  className='grph'*/}
                    <Card >
                        <Card.Body  >
                            <h6 align="center">Applicants Hired Per Month </h6>
                            <div style={{ height: "240px", }}>
                                 <ApplicantsMonthly />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>

                {/* Verticle line */}
                <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '249px' }} ></Col>



                {/* Second Graph */}
                <Col sm={6} >

                    <Card>
                        <Card.Body >

                            <h6 align="center">Applications Recieved Each Department </h6>
                            {/* we kept the graph component inside this div , to keep this graph inside card and also to give height and width  */}
                            <div style={{ height: "240px", }}>
                                {/* <ApplicantsRecievedByDepartment /> */}
                                <ApplicationsRecievedEachDepartment />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>


            </Row>
        </div>
    )
}

export default CandidatesGraph_Table