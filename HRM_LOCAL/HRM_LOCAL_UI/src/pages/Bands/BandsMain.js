import React from 'react';
import { Col, Row, Card, Container } from "react-bootstrap";
import Bands from './BandsComponent/Bands'



const BandsMain = () => {
    return (
        <div style={{ paddingTop: "0px" }}>
            <Card responsive className="scroll">
                <Card.Header style={{backgroundColor:"white"}}>
                    <Card.Body>
                        <Card.Title> Bands </Card.Title>
                        
                        {/* <Container> */}
                            <Row>
                                <Col xs={12}>
                                    <Bands />
                                </Col>
                            </Row>
                        {/* </Container> */}
                    </Card.Body>
                </Card.Header>
            </Card>
        </div>
    )
}



export default BandsMain
