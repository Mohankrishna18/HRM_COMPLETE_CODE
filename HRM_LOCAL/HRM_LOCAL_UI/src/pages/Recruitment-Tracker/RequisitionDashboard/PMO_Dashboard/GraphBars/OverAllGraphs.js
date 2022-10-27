import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ApplicantsRecievedByDepartment from './ApplicantsRecievedByDepartment';
import ApplicantsMonthly from './ApplicatntsMonthly';
import PositionsOpenByDepartment from './PositionsOpenByDepartment';
// import { SlEnvolopeLetter } from 'react-ico';
// import {BiEnvelope} from 'react-icon/bi';


const OverAllGraphs = () => {
    return (
        <div>

            <Row>

                {/* First Graph */}
                <Col md={5}>

                    <Card>
                        <Card.Body >
                            <h4 align="center"> Positions Open By Department </h4>
                            {/* Applicant Graph */}
                            <div style={{ height: "30vh", height: "200px", }}>

                                <PositionsOpenByDepartment />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>

                <Col></Col>


                {/* Second Graph */}
                <Col sm={6} >

                    <Card>
                        <Card.Body >

                            <h4 align="center">No. Of Applicants Per Month </h4>
                            {/* we kept the graph component inside this div , to keep this graph inside card and also to give height and width  */}
                            <div style={{ height: "30vh", height: "200px", }}>
                                <ApplicantsMonthly />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>


            </Row>



            <br></br>
            <br></br>

            {/* Second Line --> Graph --> Second row */}
            <div>

                <Row>

                    <Col sm={5}>  </Col>
                    <Col></Col>
                    <Col sm={6}>
                        <Card >
                            <Card.Body>
                                <h4 align="center">Applications Recieved By Department</h4>
                                <div style={{ height: "30vh", height: "200px", }}>
                                    <ApplicantsRecievedByDepartment />
                                </div>
                                {/* <PositionsOpenByDepartment align="center" /> */}
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>

            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default OverAllGraphs;