//RTCards==>PMO Dashboard  => 14-oct-22

import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { BsCheck2Square, BsStopwatch } from 'react-icons/bs'
import { CgCloseO } from 'react-icons/cg'
import { useState, useEffect } from 'react'
import axios from '../../../../Uri'
import { FcApproval, FcBullish, FcManager, FcAlarmClock } from 'react-icons/fc'
import './Card.css'
import { MdOutlineMonetizationOn } from 'react-icons/md'

const Cards = () => {

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

    // count/length for In Progress position
    const data2 = positionStatus.filter((item) => item.rrfStatus === "In Progress")
    console.log(data2)

    // count/length for Pending approval position
    const data3 = positionStatus.filter((item) => item.rrfStatus === "Pending Approval")
    console.log(data3)

    // count/length for Pending Open position
    const data4 = positionStatus.filter((item) => item.rrfStatus === "Open")
    console.log(data4)

    // for Candidates Status.
    const [totalCandidatesStatus, setTotalCandidateStatus] = useState([])

    useEffect(async () => {
        axios.get("/candidate/getCandidate")
            .then((response) => {
                setTotalCandidateStatus(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(totalCandidatesStatus)


    //  **** Filter for Candidates Status ****
    // count/length for Hired Candidates

    const hired = totalCandidatesStatus.filter((item) => item.candidateStatus === "Hired")
    console.log(hired)

    // count/length for Shortlisted Candidates
    const shortlist = totalCandidatesStatus.filter((item) => item.candidateStatus === "Shortlisted")
    console.log(shortlist)

    // count/length for In Onhold Candidates
    const onhold = totalCandidatesStatus.filter((item) => item.candidateStatus === "Onhold")
    console.log(onhold)

    // count/length for Pending Rejected Candidates
    const reject = totalCandidatesStatus.filter((item) => item.candidateStatus === "Rejected")
    console.log(reject)

    // count/length for Pending Declined Candidates
    const decline = totalCandidatesStatus.filter((item) => item.candidateStatus === "Declined")
    console.log(decline)

    // count/length for Pending Declined Candidates
    const scheduld = totalCandidatesStatus.filter((item) => item.candidateStatus === "Scheduled")
    console.log(scheduld)


    return (
        <div>

            <Row>
                <Col>
                    <Row>
                        <h5>Positions Status</h5>
                        <Col sm={4}>
                            {/* <card1 */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {totalPositionData ? totalPositionData : 0} */}
                                            {data4 ? data4.length : 0}

                                        </h5>

                                        <h6 align='center' style={{ color: "#4EA000", fontSize: '18px', fontWeight: "400" }}> Open Positions </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={4}>
                            {/* card2 */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >


                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {data ? data.length : 0}


                                        </h5>


                                        <h6 align='center' style={{ color: "#008B8B", fontSize: '18px', fontWeight: "400" }}> Positions onHold </h6>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={4}>
                            {/* card3 */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >


                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {data3 ? data3.length : 0}


                                        </h5>


                                        <h6 align='center' style={{ color: "orange", fontSize: '18px', fontWeight: "400" }}> Pending Approval </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>



                        {/* Verticle line */}
                        <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '99px', columnWidth: '2px' }} ></Col>


                    </Row>

                    {/* second row downside starts */}
                    <Row>

                        <Col sm={4}>
                            {/* card4 */}
                            <Card className='box1' style={{
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

                        <Col sm={4}>
                            {/* card5 */}
                            <Card className='box1' style={{
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
                        {/* <Col ></Col>
                        <Col></Col> */}

                        {/* Verticle line */}
                        {/* <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "5px", fontSize: '-4px', height: '115px' }} ></Col> */}

                    </Row>
                </Col>
                {/*-------------------------------Left side cards ends------------------------------------------------ */}

                {/* Right side Col */}
                <Col>
                    <Row>

                        <h5  >Candidates Status</h5>


                        <Col sm={4}>

                            {/* Carndidates hired */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}
                                            {hired ? hired.length : 0}


                                        </h5>

                                        <h6 align='center' style={{ color: "green", fontWeight: "300", fontSize: '18px' }}> Candidates Hired </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={4} align="right">
                            {/* Crad5 => candidates shortlisted */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}
                                            {shortlist ? shortlist.length : 0}


                                        </h5>

                                        <h6 align='center' style={{ color: "#808080", fontWeight: "300", fontSize: '17px' }}> Candidates Shortlisted </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={4}>
                            {/* Candidates ONhold */}
                            <Card className='box' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}
                                            {scheduld ? scheduld.length : 0}
                                            

                                        </h5>

                                        <h6 align='center' style={{ color: "orange", fontWeight: "300", fontSize: '17px' }}> Scheduled Interview </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <Row>
                        {/* <Col sm={5}>
                           

                        </Col> */}

                        <Col sm={4}>
                            {/* candidates rejected */}
                            <Card className='box1' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}

                                            {onhold ? onhold.length : 0}


                                        </h5>

                                        <h6 align='center' style={{ color: "red", fontWeight: "300", fontSize: '18px' }}> Candidates OnHold </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={4}>
                            {/* candidates Declined */}
                            <Card className='box1' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {/* {clientData ? clientData.length : 0} */}
                                            {reject ? reject.length : 0}


                                        </h5>

                                        <h6 align='center' style={{ color: "#FF392E", fontWeight: "300", fontSize: '18px' }}> Candidates Rejected </h6>
                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                        <Col sm={4}>
                            {/* candidates Declined */}
                            <Card className='box1' style={{
                                //  background: "linear-gradient(to left,#4edbc3,#60aeeb,#fcb2a9)",
                                // background: "linear-gradient(to left,#f29c1d,#ffab14,#f2c618)",
                            }}>

                                <Card.Body>
                                    <div >
                                        <h5 align='center' style={{ color: "black", fontWeight: "300", fontSize: '22px' }}>
                                            {/* this will give the count or else zero(0) if nothing returns  */}
                                            {decline ? decline.length : 0}



                                        </h5>

                                        <h6 align='center' style={{ color: "#FF392E", fontWeight: "300", fontSize: '18px' }}> Candidates Declined </h6>
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
