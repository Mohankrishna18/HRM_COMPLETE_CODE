import React from 'react'
import ApplicantsMonthly from './ApplicatntsMonthly'
import { Card, Col, Row } from 'react-bootstrap'
import CandidatesDetailsTable from '../RR_Table/CandidatesDetailsTable'
// import ApplicationsRecievedEachDepartment from './ApplicationsRecievedEachDepartment'

const CandidatesGraph_Table = () => {
    return (
        <div>

            <Row>

                {/* First Graph */}
                <Col md={3}>

                    {/*  className='grph'*/}
                    <Card >
                        <Card.Body  >
                            <h6 align="center">Applicants Hired Per Month </h6>
                            <div style={{ height: "450px", }}>
                                 <ApplicantsMonthly />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>

                {/* Verticle line */}
                <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '249px' }} ></Col>



                {/* Second Graph */}
                <Col sm={9} >

                    <Card>
                        {/* <Card.Body > */}

                            <h6 align="center">Candidate Details </h6>
                            {/* we kept the graph component inside this div , to keep this graph inside card and also to give height and width  */}
                            <div style={{ height: "260px", }}>
                                {/* <ApplicantsRecievedByDepartment /> */}
                                {/* <ApplicationsRecievedEachDepartment /> */}
                                <CandidatesDetailsTable/>

                            </div>
                        {/* </Card.Body> */}
                    </Card>

                </Col>


            </Row>
        </div>
    )
}

export default CandidatesGraph_Table