
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Table, Tabs, Tab, Form, Modal } from "react-bootstrap";
import { matches } from "lodash";
import { Image } from "react-bootstrap";
import axios from "../../../Uri";
import { split } from "lodash";
import Avatar from '@mui/material/Avatar';
import PersonalDetails from "./ProfilePersonalDetailsTab";
import EditIcon from '@mui/icons-material/Edit';
import {
    Button,
    ProgressBar,

} from "react-bootstrap";
import {
    Timeline,
    BodyContent,
    Section,
    Description,
} from "vertical-timeline-component-react";

const customTheme = {
    yearColor: "#405b73",
    lineColor: "#d0cdc4",
    dotColor: "#fd7e14",
    borderDotColor: "#ced4da",
    titleColor: "#000000",
    subtitleColor: "#bf9765",
    textColor: "#262626",
};

const ProfileAdditionalDetailsTab = () => {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [eighteenerror, setEighteenerror] = useState("");
    const [nineteenerror, setNineteenerror] = useState("");
    const [twentyerror, setTwentyerror] = useState("");
    const [twentyoneerror, setTwentyoneerror] = useState("");
    const [twentytwoerror, setTwentytwoerror] = useState("");
    const [twentythreerror, setTwentythreerror] = useState("");
    const [twentyfourerror, setTwentyfourerror] = useState("");

    const [passportExpiryDate, setPassportExpiryDate] = useState("");
    const [passportNo, setPassportNo] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [aadharNumber, setAadharNumber] = useState("");
    const [uanNumber, setUanNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscCode, setIfscCode] = useState("");
    const [branch, setBranch] = useState("");
    const [band, setBand] = useState("");
    const [exitDate, setExitDate] = useState("");


    useEffect(() => {
        axios
            .get(`/emp/getAdditionalDetails/${employeeid}`)
            .then((response) => {
                setPanNumber(response.data.data.panNumber);
                setAadharNumber(response.data.data.aadharNumber);
                setUanNumber(response.data.data.uanNumber);
                setBankName(response.data.data.bankName);
                setAccountNumber(response.data.data.accountNumber);
                setIfscCode(response.data.data.ifscCode);
                setBranch(response.data.data.branch);
                setBand(response.data.data.band);
                setPassportExpiryDate(response.data.data.passportExpiryDate);
                setPassportNo(response.data.data.passportNo);
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/emp/updateAdditionalDetails/${employeeid}`, {
                panNumber,
                aadharNumber,
                uanNumber,
                bankName,
                accountNumber,
                ifscCode,
                branch,
                band,
                passportNo,
                passportExpiryDate,

            });
            toast.success("Form Submitted Successfully");
        }
        catch (error) {
            toast.error("Somethingwent Wrong");
        }
    };

    var tempDate = new Date(passportExpiryDate);
    var ped = [String(tempDate.getDate()).padStart(2, '0'), String(tempDate.getMonth() + 1).padStart(2, '0'), tempDate.getFullYear()].join('-');

    return (


        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
            <Card.Title>
                {/* <Row>
                    <Col> <h5>Additional Details :</h5></Col>
                    {/* <Col style={{float: "right",paddingLeft:"750px"}}><EditIcon onClick={handleShow}/></Col> 
                </Row> */}
            </Card.Title>
            <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                        Passport Number:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                        {passportNo}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                        Passport Expiry Date:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>

                    {passportExpiryDate ? (<Card.Subtitle style={{ color: "#999897" }}>
                        {ped}
                    </Card.Subtitle>) : (<div></div>)}

                </Col>
            </Row>
            <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                        PAN Card Number:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                        {panNumber}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                        Aadhar Card Number:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                        {aadharNumber}
                    </Card.Text>
                </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                        UAN Number:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                        {uanNumber}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                    Bank Name::
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                    {bankName}
                    </Card.Text>
                </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                    Account Number:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                    {accountNumber}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                    IFSC Code:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                    {ifscCode}
                    </Card.Text>
                </Col>
            </Row>

            <Row style={{ paddingBottom: 10, paddingLeft: 20 }}>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                    Branch:
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                    {branch}
                    </Card.Text>
                </Col>
                <Col>
                    <Card.Subtitle style={{ padding: 10 }}>
                       
                    </Card.Subtitle>{" "}
                </Col>
                <Col md={{ offset: 1 }}>
                    <Card.Text style={{ paddingBottom: 0, color: "#999897" }}>
                        
                    </Card.Text>
                </Col>
            </Row>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Additional Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(e) => changeHandler(e)}
                        style={{ padding: 10 }}
                    >
                        <Row className="mb-5">
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Passport Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Passport Number"
                                    controlId="passportNo"
                                    value={passportNo}
                                    maxLength={15}
                                    name="passportNo"
                                    onChange={(e) =>
                                        setPassportNo(e.target.value)
                                    }
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Passport Expiry Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Passport Expiry Date"
                                    controlId="passportExpiryDate"
                                    name="passportExpiryDate"
                                    value={passportExpiryDate}
                                    min={new Date()}
                                    onChange={(e) =>
                                        setPassportExpiryDate(e.target.value)
                                    }
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>PAN Card Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="PAN Card Number"
                                    controlId="panNumber"
                                    name="panNumber"
                                    maxLength={50}
                                    value={panNumber}
                                    onChange={(event) => setPanNumber(event.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Aadhar Card Number *</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Aadharcard Number"
                                    controlId="aadharNumber"
                                    name="panNumber"
                                    maxLength={12}
                                    isInvalid={nineteenerror}
                                    value={aadharNumber}
                                    onChange={(event) => {
                                        setAadharNumber(event.target.value)
                                        if (event.target.value.length > 12) {
                                            setNineteenerror(" Aadharcard Number length should be 12 characters");;
                                        }
                                        if (currentPincode === "") {
                                            setEighteenerror(" Pincode is Required");
                                        }
                                        else {
                                            setEighteenerror("")
                                        }
                                    }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {nineteenerror}
                                </Form.Control.Feedback>

                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>UAN Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="UAN Number"
                                    controlId="uanNumber"
                                    name="uanNumber"
                                    value={uanNumber}
                                    maxLength={12}
                                    onChange={(event) => setUanNumber(event.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Bank Name *</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Bank Name"
                                    controlId="bankName"
                                    name="bankName"
                                    maxLength={50}
                                    value={bankName}
                                    isInvalid={twentyerror}
                                    onChange={(event) => {
                                        setBankName(event.target.value)
                                        if (aadharNumber === "") {
                                            setNineteenerror(" Aadhar Card Number is Required");
                                        }
                                        else {
                                            setNineteenerror("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {twentyerror}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Branch Name *</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Branch Name"
                                    controlId="branchName"
                                    name="branch"
                                    maxLength={50}
                                    value={branch}
                                    isInvalid={twentythreerror}

                                    onChange={(event) => {
                                        setBranch(event.target.value)
                                        if (ifscCode === "") {
                                            setTwentytwoerror(" IFSC Code is Required");
                                        }
                                        else {
                                            setTwentytwoerror("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {twentythreerror}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>Bank Account Number *</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Account Number"
                                    controlId="accountNumber"
                                    name="accountNumber"
                                    maxLength={50}
                                    value={accountNumber}
                                    isInvalid={twentyoneerror}
                                    onChange={(event) => {
                                        setAccountNumber(event.target.value)
                                        if (event.target.value.length > 16) {
                                            setTwentyoneerror("Account Number should be 16 characters");;
                                        }
                                        if (bankName === "") {
                                            setTwentyerror(" Bank Name is Required");
                                        }
                                        else {
                                            setTwentyerror("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {twentyoneerror}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                                <Form.Label>IFSC Code *</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="IFSC Code"
                                    controlId="ifscCode"
                                    name="ifscCode"
                                    maxLength={50}
                                    value={ifscCode}
                                    isInvalid={twentytwoerror}
                                    onChange={(event) => {
                                        setIfscCode(event.target.value)
                                        if (accountNumber === "") {
                                            setTwentyoneerror(" Account Number is Required");
                                        }
                                        else {
                                            setTwentyoneerror("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {twentytwoerror}
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Button
                            className="rounded-pill" md="3"
                            style={{ backgroundColor: "#f5896e",
                            borderColor: "#f5896e", float: "right" }}
                            type="submit"
                            size="lg"
                        >
                            Submit
                        </Button>
                    </Form>

                </Modal.Body>
            </Modal>

        </div>

    );
};
export default ProfileAdditionalDetailsTab;

