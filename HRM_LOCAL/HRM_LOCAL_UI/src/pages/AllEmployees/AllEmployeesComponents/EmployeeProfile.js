import React, { Component } from "react";

//react bootstrap components
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
//scss
import style from "./styles.module.css";
//data for post
import data from "./data.json";
import {Button, Col } from "react-bootstrap";
import EmployeeProfileTabs from "./EmployeeProfileTabs";



export default function EmployeeProfile() {

//const [show, setShow] = useState(false);
  
    return (
        <>
            <Card responsive>
                <Card.Header>
                    <Card.Body>
                        <Card.Title>Profile</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">All Employees/Profile</Card.Subtitle>

                        <Container>
                            <Row>
                                <Col>
                                    <div responsive style={{ marginTop: 30 }}  >
                                        {data.map((postData) => {
                                            console.log(postData);
                                            return (
                                                <Card key={postData.id}>
                                                    <Container>
                                                        <Row>
                                                            <Col>
                                                                <Card.Img variant="top" src={postData.image} style={{ width: '10rem', margin: 30, borderRadius: 100 }} />
                                                            </Col>
                                                            <Col>
                                                                <Card.Body style={{}}>
                                                                    <Card.Title className={style.tile} style={{ alignContent: "center" }}>
                                                                        Name:{postData.title}
                                                                    </Card.Title>
                                                                    <Card.Title className={style.para}>
                                                                        <h6> {postData.body}</h6>
                                                                    </Card.Title>
                                                                    <Card.Title className={style.para}>
                                                                        <h6>Employee ID:  {postData.userId}</h6>
                                                                    </Card.Title>
                                                                    <Card.Title className={style.para}>
                                                                        <h6>Date of Join:  {postData.date}</h6>
                                                                    </Card.Title>
                                                                    <Button style={{ backgroundColor: "#e66205" }}>Send Message</Button>
                                                                </Card.Body>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                </Col>
                                <Col>
                                    <Card style={{ marginTop: 30, paddingBottom: 5 }}>
                                        <div style={{ margin: 20, marginLeft: 100 }} >
                                            <Card.Title className={style.para}>
                                                <h6>Phone :  </h6>
                                            </Card.Title>
                                            <Card.Title className={style.para}>
                                                <h6>Email :  </h6>
                                            </Card.Title>
                                            <Card.Title className={style.para}>
                                                <h6>Address:  </h6>
                                            </Card.Title>
                                            <Card.Title className={style.para}>
                                                <h6>Gender :  </h6>
                                            </Card.Title>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        <EmployeeProfileTabs />
                   </Card.Body>
                </Card.Header>
            </Card>
        </>
    );
}

