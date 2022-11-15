import React from 'react';
import { Col, Row, Card, Container } from "react-bootstrap";
import ChangeUserDetails from './ChangeUserDetails';



const Main = () => {
    return (
        <div style={{ paddingTop: "0px" }}>
            <Card responsive className="scroll">
                <Card.Header style={{backgroundColor:"white"}}>
                    <Card.Body>
                        <Card.Title> Employee Access </Card.Title>
                        
                        {/* <Container> */}
                            <Row>
                                <Col xs={12}>
                                    <ChangeUserDetails />
                                </Col>
                            </Row>
                        {/* </Container> */}
                    </Card.Body>
                </Card.Header>
            </Card>
        </div>
    )
}



export default Main
