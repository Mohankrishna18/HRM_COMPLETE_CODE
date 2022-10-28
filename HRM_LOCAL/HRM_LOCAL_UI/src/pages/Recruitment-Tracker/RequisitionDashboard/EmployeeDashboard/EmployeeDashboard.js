import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import './EmployeeDashboard.css';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiBriefcaseAlt } from "react-icons/bi";



const EmployeeDashboard = () => {


    return (

        <div className='fnt'>

            {/* First top row */}

            <Row >
                <Card style={{ paddingBlock: '20px' }}>
                    <Row>
                        {/* for pic */}
                        <Col sm={1}></Col>

                        {/* for name & details */}
                        <Col>
                            <h4>Welcome , John Doe</h4>

                            <h5>Monday , 20 May 2019</h5>
                        </Col>

                    </Row>
                </Card>
            </Row>


            <br></br>

            {/* Second row */}
            <Row>
                {/* Left side Content */}
               

                <Col sm={7}>
                    <Row> <h5> TODAY </h5></Row>

                    <Row>
                        <Col >
                            <Card style={{ paddingBlock: '7px' }}>
                                {/* to place the content middle of box use 'br' */}
                                <br></br>
                                <h5 style={{ color: 'red', paddingLeft: '15px' }}> <BsFillBriefcaseFill/>    Miles is off Sick today</h5>

                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <BiBriefcaseAlt/> You are away Today</h5>
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    {/* 3rd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <h5 style={{ color: '#4F4F4F', paddingLeft: '15px' }}>  are Working From Home Today</h5>
                            </Card>

                        </Col>

                    </Row>

                </Col>



                {/* Right side content */}
                <Col md={5}>
                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px' }}> PROJECTS </h6></Row>
                    <Row>
                        <Col>
                            <Card>

                                {/* 1st row */}
                                <Row>
                                    <Col align="center" style={{ paddingBlock: '10px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000" }}>71</h6>
                                        <h6>Total Tasks</h6>
                                    </Col>


                                    {/* <Col className="vl" style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: '13px', height: '40px' }}></Col> */}

                                    <Col align="center" style={{ paddingBlock: '10px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000" }}>14</h6>
                                        <h6>Pending Tasks</h6>
                                    </Col>
                                </Row>


                                {/* 2nd row */}

                                <Row>
                                    <Col align="center" >
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000" }}>2</h6>
                                        <h6>Total Projects</h6>
                                    </Col>
                                </Row>

                            </Card>
                        </Col>

                    </Row>

                    <br></br>

                    {/* leave row started */}

                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px' }}>YOUR LEAVES</h6> </Row>
                    <Row>
                        <Col>
                            <Card>

                                {/* 1st row */}
                                <Row>
                                    <Col align="center" style={{ padding: '10px',paddingLeft:'20px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000",}}>2</h6>
                                        <h6 align='center'>LEAVES TAKEN</h6>
                                    </Col>

                                    <Col></Col>


                                    {/* <Col className="vl" style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: '13px', height: '40px' }}></Col> */}

                                    <Col align="center" style={{ paddingBlock: '10px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000" }}>1</h6>
                                        <h6>REMAINING</h6>
                                    </Col>
                                </Row>


                                {/* 2nd row */}

                                <Row style={{ paddingBlock: '10px' }}>
                                    <Col align="center">
                                        <Button > Apply Leave</Button>
                                        <br></br>
                                    </Col>
                                   
                                </Row>
                                
                            </Card>
                        </Col>
                    </Row>


                </Col>
            </Row>

            {/* second row */}

            <Row>
                {/* Left side Content */}

                <Col sm={7}>
                    <Row> <h5> TOMORROW </h5></Row>

                    <Row>
                        <Col >
                            <Card style={{ paddingBlock: '7px' }}>
                                {/* to place the content middle of box use 'br' */}
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}>Richard Miles is off Sick today</h5>

                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}>You are away Today</h5>
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    {/* 3rd card
                    <Row>
                        <Col>
                            <Card style={{ height: '100%', width: '100%' }}>
                                <br></br>
                                <h4>You are Working From Home Today</h4>
                            </Card>

                        </Col>

                    </Row> */}

                </Col>



                {/* Right side content */}
                <Col md={5}>



                    <br></br>
                    <br></br>

                    {/* HOLIDAYS this month */}

                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px' }}>UPCOMING HOLIDAYS </h6> </Row>
                    <Row>
                        <Col >
                            <Card style={{ paddingBlock: '10px' }}>

                                <h6 align="center" style={{ fontSize: '18px' }} >MONDAY , 20 MAY 2019 - RAMZAN</h6>

                            </Card>
                        </Col>
                    </Row>


                </Col>
            </Row>

            {/* third row */}
            <Row>

                <Col sm={7}>
                    <Row> <h5> NEXT SEVEN DAYS </h5></Row>

                    <Row>
                        <Col >
                            <Card style={{ paddingBlock: '10px' }}>
                                {/* to place the content middle of box use 'br' */}
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}>Richard Miles is off Sick today</h5>

                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '10px' }}>
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}>You are away Today</h5>
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    {/* 3rd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '10px' }}>
                                <br></br>
                                <h5 style={{ color: '#666666', paddingLeft: '15px' }}>You are Working From Home Today</h5>
                            </Card>

                        </Col>

                    </Row>

                </Col>


            </Row>

            <br></br>


        </div >
    )
}

export default EmployeeDashboard;