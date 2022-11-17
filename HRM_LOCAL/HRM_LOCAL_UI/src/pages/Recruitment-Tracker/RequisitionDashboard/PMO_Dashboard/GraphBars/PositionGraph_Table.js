import React from 'react'
import PMOTable from '../RR_Table/PMOTable'
import { Card, Col, Row } from 'react-bootstrap'
import PositionsOpenByDepartment from './PositionsOpenByDepartment'

const PositionGraph_Table = () => {
    return (
        <div>
            <Row>

                {/* First Graph */}
                {/* <Col md={3}>

                     className='grph'
                    <Card >
                        <Card.Body  >
                            <h6 align="center">Positions By Business Unit </h6>
                            Applicant Graph
                            <div style={{ height: "369px",}}>

                                <PositionsOpenByDepartment />
                            </div>
                        </Card.Body>
                    </Card>

                </Col> */}

                {/* Verticle line */}
                {/* <Col className='vl' style={{ paddingLeft: "0px", paddingRight: "0px", height: '416px' }} ></Col> */}



                {/* Second Graph */}
                <Col sm={13} >


                    <Card>
                       

                            <h6 align="center" style={{paddingTop: '6px'}}>  </h6>
                            {/* we kept the graph component inside this div , to keep this graph inside card and also to give height and width  */}
                            <div style={{  }}>
                                <PMOTable  />
                            </div>
                       
                    </Card>

                </Col>


            </Row>

        </div>
    )
}

export default PositionGraph_Table