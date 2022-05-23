import React, { Component } from "react";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//react bootstrap components
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
//scss
import style from "./styles.module.css";
//data for post
import data from "./data.json";
export default function Employee() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row style={{ paddingLeft: 60 }}>
                <Card responsive style={{ width: '18rem' }} onClick={handleShow} >
                    {data.map((postData) => {
                        console.log(postData);
                        return (
                            <div key={postData.id}>
                                <Link to="/employees/allEmployees/EmployeeProfile">
                                    <Card.Img variant="top" src={postData.image} style={{ borderRadius: 200, height: "10rem", width: "10rem", padding: 30, marginLeft: 55, alignContent: "center" }} />
                                </Link>
                                <Card.Body>
                                    <Card.Title className={style.tile} style={{ alignContent: "center" }}>
                                        {postData.title}
                                    </Card.Title>
                                    <Card.Text className={style.para}>
                                        {postData.body}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        );
                    })}
                </Card>
            </Row>
            
        </>
    );
}

