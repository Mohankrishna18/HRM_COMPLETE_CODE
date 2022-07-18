import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";

function AditionalDetailsTab() {

    // const userData = sessionStorage.getItem("userdata");
    // const userData1 = JSON.parse(userData);
    // const employeeid = userData1.data.employeeId;

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const employeeid = userData1.data.employeeId;
    const empId = localStorage.getItem('item')

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
            .get(`/emp/getAdditionalDetails/${empId}`)
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
            await axios.put(`/emp/updateAdditionalDetails/${empId}`, {
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

    return (

        <div>
            {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 12, textAlign: "center" }}>
                    Additional Details
                </Card.Title>
            </Card> */}

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Passport Number</Form.Label>
                        <Form.Control
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
                            required
                            type="number"
                            placeholder="Aadhar Card Number"
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
                        disabled
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
                        disabled
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
                        disabled
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
                        disabled
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
                                    setTwentyoneerror(" Pincode length should be 16 characters");;
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
                        disabled
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
                    style={{ backgroundColor: "#eb4509", float: "right" }}
                    type="submit"
                    size="lg"
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default AditionalDetailsTab;