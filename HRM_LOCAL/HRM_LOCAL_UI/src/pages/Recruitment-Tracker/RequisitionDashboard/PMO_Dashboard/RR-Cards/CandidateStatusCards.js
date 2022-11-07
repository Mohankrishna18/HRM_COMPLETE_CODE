import React from 'react'
import {  Col, Row } from 'react-bootstrap'
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

    const hired = hired && hired.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Hired"):0
    console.log(hired)

    // count/length for Shortlisted Candidates
    const shortlist = shortlist && shortlist.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Shortlisted"):0
    console.log(shortlist)

    // count/length for In Onhold Candidates
    const onhold = onhold && onhold.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Onhold"):0
    console.log(onhold)

    // count/length for Pending Rejected Candidates
    const reject = reject && reject.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Rejected"):0
    console.log(reject)

    // count/length for Pending Declined Candidates
    const decline = decline && decline.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Declined"):0
    console.log(decline)

    // count/length for Pending Declined Candidates
    const scheduld = scheduld && scheduld.totalCandidatesStatus ? totalCandidatesStatus.filter((item) => item.candidateStatus === "Scheduled"):0
    console.log(scheduld)



    return (
        <div>
            <Row>
                <h4>Candidate Status</h4>


                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={hired} name='Hired'  color='#00c301' />
                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={shortlist} name='Shortlisted' color='#008000' />
                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={onhold} name='On Hold' color='#0000c4' />
                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={reject} name='Rejected ' color='#ff3632' />
                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={decline} name='Declined  ' />
                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={scheduld} name='Scheduled'  color='#329b24' />
                </Col>
            </Row>
        </div>
    )
}

export default CandidateStatusCards