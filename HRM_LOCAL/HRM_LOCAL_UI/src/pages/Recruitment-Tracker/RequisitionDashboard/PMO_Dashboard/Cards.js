//RTCards==>PMO Dashboard  => 14-oct-22

import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BsCheck2Square, BsStopwatch } from 'react-icons/bs'
import { CgCloseO } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import axios from '../../../../Uri'
import { FcApproval, FcBullish, FcManager, FcAlarmClock } from 'react-icons/fc'

import { MdOutlineMonetizationOn } from 'react-icons/md'

const Cards = () => {


    let open = "Open"

    // for rrf id , card 1
    const [totalPositionData, setTotalPositionData] = useState()

    useEffect(async () => {
        axios.get("/recruitmentTracker/position")
            .then((response) => {
                setTotalPositionData(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(totalPositionData)

    // for 2nd & 3rd & 4th  card
    const [positionStatus, setPositionStatus] = useState([])

    useEffect(async () => {
        axios.get("/recruitmentTracker/getAllRequisitionRequests")
            .then((response) => {
                setPositionStatus(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                err.error
            })
    }, [])
    console.log(positionStatus)

    // count/length for onHold position
    const data = positionStatus.filter((item) => item.rrfStatus === "On Hold")
    console.log(data)

    // count/length for Closed position
    const data1 = positionStatus.filter((item) => item.rrfStatus === "Closed")
    console.log(data1)

    // count/length for Open position
    const data2 = positionStatus.filter((item) => item.rrfStatus === "In Progress")
    console.log(data2)

    // count/length for In Progress position
    const data3 = positionStatus.filter((item) => item.rrfStatus === "")
    console.log(data3)




    return (
        <div>

            <Row>
                <Col>
                    <Row>
                        <h5>Positions Status</h5>
                        <Col sm={5}>
                            {/* <card1 */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {totalPositionData ? totalPositionData : 0}
                                            
                                        </h5>

                                        <h6 align='center' style={{ color: "#4EA000", fontSize: '18px' ,fontWeight: "400" }}> Open Positions </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={5}>
                            {/* card2 */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >


                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {data ? data.length : 0}


                                        </h5>


                                        <h6 align='center' style={{ color: "#008B8B", fontSize: '18px',fontWeight: "400" }}> Positions onHold </h6>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Verticle line */}
                        <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", fontSize: '-4px', height: '95px' }} ></Col>

                    </Row>

                    {/* second row downside starts */}
                    <Row>
                        <Col sm={5}>
                            {/* <card3 */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        
                                                <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                                {data1 ? data1.length : 0}
                                                </h5>
                                            
                                        <h6 align='center' style={{ color: "red", fontSize: '18px' }}> Positions Closed </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={5}>
                            {/* card4 */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        
                                                <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                                {data2 ? data2.length : 0}
                                                </h5>
                                           
                                        <h6 align='center' style={{ color: "Orange", fontSize: '18px' }}> Positions Inprogress</h6>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Verticle line */}
                        <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", fontSize: '-4px', height: '95px' }} ></Col>

                    </Row>
                </Col>
                {/*-------------------------------Left side cards ends------------------------------------------------ */}

                {/* Right side Col */}
                <Col>
                    <Row>
                        <h5>Candidates Status</h5>
                        <Col sm={5}>
                            {/* Crad5 => candidates shortlisted */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}


                                            51
                                        </h5>

                                        <h6 align='center' style={{ color: "#808080",fontWeight: "400", fontSize: '18px' }}> Candidates Shortlisted </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={5}>
                            {/* Candidates ONhold */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}


                                            15
                                        </h5>

                                        <h6 align='center' style={{ color: "orange",fontWeight: "300", fontSize: '18px' }}> Candidates Onhold </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            {/* Carndidates hired */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}


                                            27
                                        </h5>

                                        <h6 align='center' style={{ color: "green",fontWeight: "300", fontSize: '18px' }}> Candidates Hired </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={5}>
                            {/* candidates rejected */}
                            <Card style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}


                                            05
                                        </h5>

                                        <h6 align='center' style={{ color: "red",fontWeight: "300", fontSize: '18px' }}> Candidates Rejected </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>


                </Col>
            </Row>
            <br></br>

        </div>


    )
}

export default Cards
