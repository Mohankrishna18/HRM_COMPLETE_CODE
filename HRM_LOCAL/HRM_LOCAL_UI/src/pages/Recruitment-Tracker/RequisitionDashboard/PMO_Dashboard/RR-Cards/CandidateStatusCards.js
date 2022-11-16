import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from '../../../../../Uri'

import SingleCard from './SingleCard'

const CandidateStatusCards = () => {

    // for Candidates Status.
    const [totalCandidatesStatus, setTotalCandidateStatus] = useState([])

    useEffect(async () => {
        axios.get("/candidate/getCandidate")
            .then((response) => {
                console.log(response)
                setTotalCandidateStatus(response.data)

            })
            .catch((err) => {
                // toast.error("data is not getting")
                err.error
            })
    }, [])
    console.log(totalCandidatesStatus)

    //   const  color= 'RED'
    // const green = "green"

    //  **** Filter for Candidates Status ****
    // count/length for Hired Candidates

    const hired = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Hired") : 0
    console.log(hired)


    // count/length for Shortlisted Candidates
    const shortlist = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Shortlisted") : 0
    console.log(shortlist)

    // count/length for In Onhold Candidates
    const onhold = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Onhold") : 0
    console.log(onhold)

    // count/length for Pending Rejected Candidates
    const reject = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Rejected") : 0
    console.log(reject)

    // count/length for Pending Declined Candidates
    const decline = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Declined") : 0
    console.log(decline)

    // count/length for Pending Declined Candidates
    const scheduld = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Scheduled") : 0
    console.log(scheduld)

    const prgrs = totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "In-Progress") : 0
    console.log(scheduld)

    return (
        <div>
            <Row>
                {/* <h4>Candidate Status</h4> */}


                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#14e715", fontSize: '18px', }}>  Hired </h6>
                    </Card>

                    <Card >
                        <h6 align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {hired ? hired.length : 0}
                            {/* 16 */}
                        </h6>
                    </Card>




                    {/* card2 */}
                    {/* <SingleCard data={hired} name='Hired'  color='#00c301' /> */}


                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "grey", fontSize: '18px', }}>  Shortlisted </h6>
                    </Card>

                    <Card >
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* {hired} */}
                            {shortlist ? shortlist.length : 0}
                        </h4>
                    </Card>



                    {/* card2 */}
                    {/* <SingleCard data={shortlist} name='Shortlisted' color='#008000' /> */}
                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#7cb342", fontSize: '18px', }}>  Scheduled </h6>
                    </Card>

                    <Card>
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {scheduld ? scheduld.length : 0}


                            {/* 16 */}
                        </h4>
                    </Card>


                    {/* card2 */}
                    {/* <SingleCard data={onhold} name='On Hold' color='#0000c4' /> */}
                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#12c700", fontSize: '18px', }}>  In Progress </h6>
                    </Card>

                    <Card >
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {prgrs ? prgrs.length : 0}


                            {/* 16 */}
                        </h4>
                    </Card>



                    {/* card2 */}
                    {/* <SingleCard data={reject} name='Rejected ' color='#ff3632' /> */}
                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#ffc107", fontSize: '18px', }}>  Onhold </h6>
                    </Card>

                    <Card >
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {onhold ? onhold.length : 0}


                            {/* 16 */}
                        </h4>
                    </Card>


                    {/* card2 */}
                    {/* <SingleCard data={decline} name='Declined  ' /> */}
                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#ff3333", fontSize: '18px', }}>  Rejected </h6>
                    </Card>

                    <Card >
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {reject ? reject.length : 0}


                            {/* 16 */}
                        </h4>
                    </Card>

                    {/* card2 */}
                    {/* <SingleCard data={scheduld} name='Scheduled' color='#329b24' /> */}
                </Col>

                <Col sm={1} style={{ width: '170px' }}>

                    <Card style={{ marginBottom: '6px' }}>
                        <h6 align='center' style={{ color: "#ff3e20", fontSize: '18px', }}>  Declined </h6>
                    </Card>

                    <Card >
                        <h4 className='efect' align='center' style={{ color: "black", fontSize: '20px', paddingTop: '6px', }}>
                            {/* this will give the count or else zero(0) if nothing returns  */}
                            {decline ? decline.length : 0}


                            {/* 16 */}
                        </h4>
                    </Card>


                    {/* card2 */}
                    {/* <SingleCard data={prgrs} name='In Progress' color='#329b24' /> */}
                </Col>

            </Row>
        </div>
    )
}

export default CandidateStatusCards


