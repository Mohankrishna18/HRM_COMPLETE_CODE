import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import PMOTable from '../PMOTable';
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
                <Col md={6}>

                    {/*  className='grph'*/}
                    <Card >
                        <Card.Body  >
                            <h4 align="center">  Business Unit </h4>
                            {/* Applicant Graph */}
                            <div style={{ height: "30vh", height: "200px", }}>

                                <PositionsOpenByDepartment />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>

                {/* Verticle line */}
                <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '235px' }} ></Col>



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
            {/* <br></br> */}

            {/* Second Line --> Graph --> Second row */}
            <div>

                <Row>

                    {/* table */}
                    <Col sm={6}>
                    <PMOTable/>

                    </Col>
                    {/* <Col></Col> */}
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