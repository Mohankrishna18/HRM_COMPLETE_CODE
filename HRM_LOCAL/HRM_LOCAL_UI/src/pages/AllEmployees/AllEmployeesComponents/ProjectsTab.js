import React from "react";
import { useState } from "react";

import { Card, Container,Row,Col } from "react-bootstrap";

function ProjectsTab() {

    return (
        <div>
            <Container style={{paddingTop:20}} >
                <Row xs={2} md={4} >
                    <Col>

                        <Card >
                            <Card.Title style={{margin:20}}>
                                Title:
                            </Card.Title>
                            <Card.Body>
                               <Card.Subtitle style={{padding:10}}>
                                   DeadLine:
                               </Card.Subtitle>
                               <Card.Subtitle style={{padding:10}}>
                                   Project Lead:
                               </Card.Subtitle>
                               <Card.Subtitle style={{padding:10}}>
                                   Progress:
                               </Card.Subtitle>

                            </Card.Body>

                        </Card>
                        </Col>
                     
                </Row>

            </Container>
        </div>
    );
}
export default ProjectsTab;


