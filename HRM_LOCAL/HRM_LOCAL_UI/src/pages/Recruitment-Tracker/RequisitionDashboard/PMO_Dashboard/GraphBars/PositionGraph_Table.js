import React from 'react'
import PMOTable from '../RR_Table/PMOTable'
import { Card, Col, Row } from 'react-bootstrap'
import PositionsOpenByDepartment from './PositionsOpenByDepartment'

const PositionGraph_Table = () => {
    return (
        <div>
            <Row>
                {/* <Col sm={1}></Col> */}

                {/* First Graph */}
                <Col  sm={12}>

                    {/* className='grph' */}
                    <Card  >
                        <Card.Body  >
                            <h6 align="center">Jobs Open By BU </h6>
                            {/* Applicant Graph */}
                            <div style={{ height: "180px", }}>

                                <PositionsOpenByDepartment />
                            </div>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <br></br>
            {/* Verticle line */}
            {/* <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '416px' }} ></Col> */}

            <Row>
                {/* Second Graph */}
                <Col sm={12} >


                    <Card>


                        <h6 align="center" style={{ paddingTop: '6px' }}>  </h6>
                        {/* we kept the graph component inside this div , to keep this graph inside card and also to give height and width  */}
                        <div style={{}}>
                            <PMOTable />
                        </div>

                    </Card>

                </Col>


            </Row>

        </div>
    )
}

export default PositionGraph_Table