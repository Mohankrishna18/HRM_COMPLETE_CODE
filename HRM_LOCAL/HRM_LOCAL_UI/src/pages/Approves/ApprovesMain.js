import React from 'react';
import { Col, Row, Card, Container } from "react-bootstrap";
import Approve from './ApprovesComponents/Approve';

const ApprovesMain = () => {
    return (
        <div style={{ paddingTop: "0px" ,backgroundColor:"white"}}>
            <Card responsive className="scroll" style={{backgroundColor:"white"}}>
                <Card.Header>
                    <Card.Body style={{backgroundColor:"white"}}>
                        <Card.Title> Approvals </Card.Title>
                       
                        
                            <Row>
                                <Col xs={12}>
                                    <Approve/>
                                </Col>
                            </Row>
                        
                    </Card.Body>
                </Card.Header>
            </Card>
        </div>
    )
}



export default ApprovesMain;


