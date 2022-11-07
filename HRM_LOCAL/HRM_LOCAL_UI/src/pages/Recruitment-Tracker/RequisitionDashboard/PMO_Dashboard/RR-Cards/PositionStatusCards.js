import React from 'react'
import {  Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from '../../../../../Uri'

import SingleCard from './SingleCard'


const PositionStatusCards = () => {

    // for Position Status  card
    const [positionStatus, setPositionStatus] = useState([])

    useEffect(async () => {
        axios.get("/recruitmentTracker/getAllRequisitionRequests")
            .then((response) => {
                console.log(response.data)
                
                setPositionStatus(response.data.data)
               
            })
            .catch((err) => {
                err.error
            })
    }, [])
    console.log(positionStatus)

    // count/length for onHold position
     // count/length for onHold position
     const data = positionStatus ? positionStatus.filter((item) => item.rrfStatus === "On Hold"): 0
     // console.log(data)
 
     // count/length for Closed position
     const data1 = positionStatus ? positionStatus.filter((item) => item.rrfStatus === "Closed"):0
     // console.log(data1)
 
     // count/length for In Progress position
     const data2 = positionStatus ? positionStatus.filter((item) => item.rrfStatus === "In Progress"):0
     // console.log(data2)
 
     // count/length for Pending approval position
     const data3 = positionStatus  ? positionStatus.filter((item) => item.rrfStatus === "Pending Approval"):0
     // console.log(data3)
 
     // count/length for Pending Open position
     const data4 = positionStatus ? positionStatus.filter((item) => item.rrfStatus === "Open"):0
     // console.log(data4)

    return (
        <div>
            <Row>
                {/* <h4>Position Status</h4> */}
               {/* <Col sm={1}></Col> */}
                
                <Col sm={2} >

                    <SingleCard data={data4} name='Open'  color='#00c301'  />

                </Col>

                <Col sm={2} >
                    {/* card2 */}
                    <SingleCard data={data2} name='In Progress'   color='orange'/>

                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={data} name='On Hold ' color='#e6b400'  />

                </Col>

                <Col sm={2}>
                    {/* card2 */}
                    <SingleCard data={data1} name='Closed ' color='red' />

                </Col>

                <Col sm={2}>
                    {/* card2 */}

                    <SingleCard data={data3} name='Pending Approval'   color='#4f4f4f' />

                </Col>
                
            </Row>
           
        </div>
    )
}

export default PositionStatusCards