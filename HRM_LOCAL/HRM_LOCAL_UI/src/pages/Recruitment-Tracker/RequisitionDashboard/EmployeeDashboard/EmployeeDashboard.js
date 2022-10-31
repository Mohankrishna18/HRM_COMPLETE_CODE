import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Button, Container } from 'react-bootstrap'
import './EmployeeDashboard.css';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BiBriefcaseAlt, BiHome } from "react-icons/bi";
import { FcCalendar } from "react-icons/fc"
import { FiUserPlus } from "react-icons/fi"
import Avatar from '@mui/material/Avatar';
// import './PMOCard.css'
import '../../../../App.css';



const EmployeeDashboard = () => {

    const [imge, setImge] = useState([]);


    return (

        <div className='fnt' style={{fontStyle:'Montserrat',fontFamily:"Montserrat",fontWeight:"150px" }} >


            {/* First top row */}

            <Row >
                <Card style={{ paddingBlock: '20px' }}>
                    <Row>
                        {/* for pic */}
                        <Col md="1"  >   <Avatar src={`data:image/jpeg;base64,${imge.url}`} sx={{ width: 76, height: 76 }} style={{ variant: "rounded", fontSize: '95px' }} /> </Col>



                        {/* for name & details */}
                        <Col style={{paddingLeft:"20px"}}>
                            <h3 >Welcome , John Doe</h3>

                            <h5 style={{ color: '#666666' }}>Monday , 20 May 2019</h5>
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
                        {/* thgis extra col used for taking card little bit inside   */}
                        <Col >
                            <Card style={{ paddingBlock: '7px' }}>
                                {/* to place the content middle of box use 'br' */}

                                <br></br>
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#f74260', paddingLeft: '15px' }}>
                                            <BsFillBriefcaseFill style={{ color: '#383838', fontSize: '31px', fontWeight: "1000" }} />
                                            &nbsp;&nbsp;  Richard  Miles is off Sick today

                                        </h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded",  }} />
                                    </Col>
                                </Row>


                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <BiBriefcaseAlt style={{ color: '#383838', fontSize: '31px', fontWeight: "1000" }} /> &nbsp;&nbsp;   You are away Today</h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    {/* 3rd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <Row>
                                    <Col sm={8} >
                                        <h5 style={{ color: '#4F4F4F', paddingLeft: '15px' }}> <BiHome style={{ color: '#383838', fontSize: '31px', fontWeight: "1000" }} />  &nbsp;&nbsp;  You are Working From Home Today </h5>

                                    </Col>
                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded",  }} />
                                    </Col>

                                </Row>
                            </Card>

                        </Col>

                    </Row>

                </Col>



                {/* Right side content */}
                <Col md={5}>
                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px', fontSize: '15px', fontWeight: "bold", }}> PROJECTS </h6></Row>
                    <Row>
                        <Col>
                            <Card>

                                {/* 1st row */}
                                <Row>
                                    <Col align="center" style={{ paddingBlock: '10px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000" }}>71</h6>
                                        <h6>Total Tasks</h6>
                                    </Col>


                                    {/* <Col align="center" className="vl" style={{ paddingLeft: "0px", paddingRight: "0px", paddingTop: '13px', height: '40px' , alignContent:'center'}}></Col> */}

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

                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px', fontSize: '15px', fontWeight: "bold", }}>YOUR LEAVES</h6> </Row>
                    <Row>
                        <Col>
                            <Card>

                                {/* 1st row */}
                                <Row>
                                    <Col align="center" style={{ padding: '10px', paddingLeft: '20px' }}>
                                        <h6 style={{ color: "black", fontSize: '25px', fontWeight: "1000", }}>2</h6>
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
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <BiBriefcaseAlt style={{ color: '#383838', fontSize: '31px', fontWeight: "1000" }} /> &nbsp;  &nbsp; 2 People Will Be Away Tomorrow</h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />
                                    </Col>

                                </Row>

                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '7px' }}>
                                <br></br>
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <BiBriefcaseAlt style={{ color: '#383838', fontSize: '31px', fontWeight: "1000" }} /> &nbsp; &nbsp;  You are away Tomorrow</h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />
                                    </Col>

                                </Row>
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

                    <Row> <h6 style={{ color: '#4F4F4F', paddingLeft: '15px', fontSize: '15px', fontWeight: "bold", }}>UPCOMING HOLIDAYS </h6> </Row>
                    <Row>
                        <Col  >
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
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <BiBriefcaseAlt style={{ color: '#383838', fontSize: '31px' }} />   &nbsp;   2 People are going to be away</h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />
                                    </Col>
                                </Row>

                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    {/* 2nd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '10px' }}>
                                <br></br>
                                <Row>
                                    <Col sm={8} >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}> <FiUserPlus style={{ color: '#383838', fontSize: '31px' }} />   &nbsp;   Your First Day is going to be on Thursday</h5>
                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />
                                    </Col>
                                </Row>
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    {/* 3rd card */}
                    <Row>
                        <Col>
                            <Card style={{ paddingBlock: '10px' }}>
                                <br></br>
                                <Row>
                                    <Col >
                                        <h5 style={{ color: '#666666', paddingLeft: '15px' }}>  <FcCalendar style={{ color: '#383838', fontSize: '31px' }} /> &nbsp;    It'Spring Bank Holiday on Monday </h5>

                                    </Col>

                                    <Col align="right" style={{paddingRight:"20px"}}>
                                        <Avatar src={`data:image/jpeg;base64,${imge.url}`} style={{ variant: "rounded", }} />

                                    </Col>
                                </Row>
                            </Card>

                        </Col>

                    </Row>

                </Col>


            </Row>

            <br></br>


        </div >

    )
}

export default EmployeeDashboard