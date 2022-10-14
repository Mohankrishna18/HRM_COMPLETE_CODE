import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Card, FormSelect, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { SiIndeed } from 'react-icons/si';
import "react-toastify/dist/ReactToastify.css";


function ShareJobOpening(props) {
    console.log(props.viewOnboard);
    // console.log(props.firstName)


    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const forms = useRef(null);

    function setField(field, value) {
        setForm({
            ...form,
            [field]: value,
        });
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            });
    }

    const validateForm = () => {
        const {
            reqId,
            jobTitle,
            desc,
            status,
            positions,
            pSkills,
            sSkills,
            workLocation,
            workingHours,
            empType,
            yoe,
            rate,
            projectName,
            clientName,
            leadName,
            businessUnit

        } = form;


    };

    return (
        <div >
            <Row >
                <Col xs={3} >
                    <a href="https://outlook.office365.com/">
                        <Card style={{ width: '5rem', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBlock: 12 }}>
                            <SiMicrosoftoutlook style={{ color: "#0D82D9", fontSize: "2em" }} />
                            <span>Outlook</span>
                        </Card>
                    </a>
                </Col>
                <Col xs={3}>
                    <a href="https://www.linkedin.com/">
                        <Card style={{ width: '5rem', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBlock: 12 }}>
                            <BsLinkedin style={{ color: "#0A66C2", fontSize: "2em" }} />
                            <span>LinkedIn</span>
                        </Card>
                    </a>
                </Col>
                <Col xs={3}>
                    <a href="https://mail.google.com/">
                        <Card style={{ width: '5rem', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBlock: 12 }}>
                            <HiMail style={{ color: "red", fontSize: "2em" }} />
                            <span>Mail</span>
                        </Card>
                    </a>
                </Col>
                <Col xs={3}>
                    <a href="https://in.indeed.com/">
                        <Card style={{ width: '5rem', display: "flex", justifyContent: 'center', alignItems: 'center', paddingBlock: 12 }}>
                            <SiIndeed style={{ color: "#2164f4", fontSize: "2em" }} />
                            <span style={{textDecoration:'none'}}>Indeed</span>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default ShareJobOpening