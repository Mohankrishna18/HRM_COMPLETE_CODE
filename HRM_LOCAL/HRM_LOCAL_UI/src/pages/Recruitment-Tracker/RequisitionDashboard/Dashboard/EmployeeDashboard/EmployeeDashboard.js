import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const EmployeeDashboard = () => {


    return (

        <div>

            {/* First top row */}

            <Row > 
                <Card sm={12}>
                    <Col>

                        <Row>
                            <h2>Welcome , John Doe</h2>
                        </Row>
                        <Row>
                            <h4>   Monday , 20 May 2019</h4>
                        </Row>

                    </Col>

                    <Col></Col>
                </Card>
            </Row>


            <br></br>

            {/* Second row */}
            <Row>
                {/* Left side Content */}
                <Col>
                    <Row>First Row </Row>

                    <Row>Second Row</Row>

                    <Row> Third row</Row>

                </Col>

                {/* Right side content */}
                <Col>
                    <Row>

                        <h5>Projects</h5>
                        {/* 1st row */}
                        <Row>
                            <Col>
                                <Card>
                                    <Col>

                                        71
                                        <br></br>
                                        TOTAL TASKS

                                    </Col>

                                    <Col>
                                        14
                                        <br></br>
                                        PENDING TASKS
                                    </Col>
                                </Card>
                            </Col>
                        </Row>

                        {/* 2nd row */}
                        <Row>
                            <Col>
                                <h5> 2 TotalProjects</h5>

                            </Col>
                        </Row>

                    </Row>

                    {/* leave row started */}
                    <Row>
                        <h5>your leaves</h5>
                        <Col>
                            <Card>
                                <Col>5.0 Hours</Col>
                                <Col>15 hours</Col>
                            </Card>
                        </Col>


                    </Row>

                </Col>
            </Row>

            {/* third row */}
            <Row>
                {/* leftside content ==> Tomorrow & next seven days */}
                <Col>
                    {/* 1st ==> Tomorrow */}
                    <Row>
                        <h5>TOMORROW</h5>
                        <Col>2 people will be away</Col>
                    </Row>

                    {/* 2nd => Next seven days content */}
                    <Row>
                        <h5>NEXT SEVEN DAYS</h5>
                        <Col>2 people going away</Col>
                    </Row>

                    <Row>

                        <Col>Your first day is going to be on thurdsay</Col>
                    </Row>

                    <Row>

                        <Col>It's Spring bank holiday on Monday</Col>
                    </Row>


                </Col>

                {/* right side for upcoming Holiday */}
                <Col>
                    <Row>
                        <Col>
                            <Card> Mon 20 May 2019 - Ramzan</Card>
                        </Col>
                    </Row>

                </Col>


            </Row>



        </div >
    )
}

export default EmployeeDashboard