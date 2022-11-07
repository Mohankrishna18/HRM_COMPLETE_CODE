import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";
import countryListAllIsoData from "../../../commonComponents/Countries";
import { useParams } from "react-router-dom";

function AddressTab() {

    const params=useParams();
    console.log(params.id);

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const onboardingId = userData1.data.onboardingId;

    const [elevenerrors, setElevenErrors] = useState("");
    const [tweleveerror, setTweleveerror] = useState("");
    const [thirteenerrors, setThirteenErrors] = useState("");
    const [fourteenerror, setFourteenerror] = useState("");
    const [fifteenerrors, setFifteenErrors] = useState("");
    const [sixteenerror, setSixteenerror] = useState("");
    const [seventeenerror, setSeventeenerror] = useState("");
    const [eighteenerror, setEighteenerror] = useState("");
    const [nineteenerror, setNineteenerror] = useState("");

    const [permanentAdress, setPermanentAddress] = useState("");
    const [permanentState, setPermanentState] = useState("");
    const [permanentCountry, setPermanentCountry] = useState("");
    const [permanentPincode, setPermanentPincode] = useState("");
    const [currentAdress, setCurrentAddress] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [currentCountry, setCurrentCountry] = useState("");
    const [currentPincode, setCurrentPincode] = useState("");


    useEffect(() => {
        axios
            .get(`/emp/getEmployeeDataByOnboardingId/${params.id}`)
            .then((response) => {
                
                setPermanentAddress(response.data.data.permanentAdress);
                setPermanentState(response.data.data.permanentState);
                setPermanentCountry(response.data.data.permanentCountry);
                setPermanentPincode(response.data.data.permanentPincode);
                setCurrentAddress(response.data.data.currentAdress);
                setCurrentState(response.data.data.currentState);
                setCurrentCountry(response.data.data.currentCountry);
                setCurrentPincode(response.data.data.currentPincode);
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updateAddressInPreOnboarding/${params.id}`, {
            permanentAdress,
            permanentState,
            permanentCountry,
            permanentPincode,
            currentAdress,
            currentState,
            currentCountry,
            currentPincode,
        });
        toast.success("Form Submitted Successfully");

    };

    return (

        <div>
        {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
            <Card.Title style={{ margin: 7, textAlign: "center" }}>
                Permanent Address
            </Card.Title>
        </Card> */}


        <Form
            onSubmit={(e) => changeHandler(e)}
            style={{ padding: 10 }}
        >
            <h5 style={{ paddingLeft: 10 }}>Permanent Address :</h5>
            <Row className="mb-5">
                <Col>
                    <Form.Group as={Col} md="12" style={{ padding: 10 }}>
                        <Form.Label>Address *</Form.Label>
                        <Form.Control
                            required
                            as="textarea"
                            rows={4}
                            type="text"
                            name="permanentAdress"
                            placeholder="Address"
                            controlId="permanentAdress"
                            value={permanentAdress}
                            isInvalid={elevenerrors}
                            maxLength={125}
                            onChange={(e) => {
                                setPermanentAddress(e.target.value)

                            }}

                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {elevenerrors}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Row>
                        <Col style={{ width: 50 }}>
                            <Form.Label style={{ paddingTop: 20 }}>State * :</Form.Label>
                        </Col>
                        <Col md="7">
                            <Form.Group as={Col} style={{ padding: 10 }}>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="State"
                                    name="permanentState"
                                    controlId="permanentState"
                                    maxLength={50}
                                    isInvalid={tweleveerror}
                                    value={permanentState}
                                    onChange={(e) => {
                                        setPermanentState(e.target.value)
                                        if(!e.target.value.match(/^[a-zA-Z]+$/)){

                                            setTweleveerror(" Enter valid State");

                                        }

                                        else{

                                            setTweleveerror("")

                                        }
                                        if (permanentAdress === "") {
                                            setElevenErrors(" Address is Required");
                                        }
                                        else {
                                            setElevenErrors("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {tweleveerror}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label style={{ paddingTop: 20 }}>Country * :</Form.Label>
                        </Col>
                        <Col md="7">
                            <Form.Group as={Col} md="12" style={{ padding: 10 }}>

                                <Form.Select
                                    required
                                    type="text"
                                    placeholder="Country"
                                    name="permanentCountry"
                                    controlId="permanentCountry"
                                    maxLength={50}
                                    // options={countries}
                                    value={permanentCountry}
                                    isInvalid={thirteenerrors}
                                    onChange={(e) => {
                                        setPermanentCountry(e.target.value)
                                        if (permanentState === "") {
                                            setTweleveerror(" State is Required");
                                        }
                                        else {
                                            setTweleveerror("")
                                        }
                                    }}
                                >
                                    <option>Select Country</option>
                                    {countryListAllIsoData.map((m) => (
                                        <option >{m.name}</option>
                                    ))}

                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {thirteenerrors}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label style={{ paddingTop: 20 }}>Pincode * :</Form.Label>
                        </Col>
                        <Col md="7">
                            <Form.Group as={Col} md="12" style={{ padding: 10 }}>

                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Pincode"
                                    controlId="permanentPincode"
                                    name="permanentPincode"
                                    isInvalid={fourteenerror}
                                    value={permanentPincode}
                                    maxLength={6}
                                    size={6}
                                    onChange={(event) => {
                                        setPermanentPincode(event.target.value)
                                        if (event.target.value.length > 6 ||event.target.value.length < 6 ) {

                                            setFourteenerror(" Pincode length should be 6 characters");

                                        }

                                        else{

                                            setFourteenerror("");}
                                        if (permanentCountry === "") {
                                            setThirteenErrors("Country is Required");
                                        }
                                        else {
                                            setThirteenErrors("")
                                        }
                                    }}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {fourteenerror}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>

                {/* <Row> */}
                {/* <Card
                        style={{ marginLeft: 10, marginRight: 0, marginTop: 20, backgroundColor: "#FAFDD0" }}
                    >
                        <Card.Title style={{ margin: 7, textAlign: "center" }}>
                            Current Address
                        </Card.Title>
                    </Card> */}
                <h5 style={{ paddingLeft: 20, paddingBottom: 10 }}>Current Address :</h5>

                <Row>
                    <Col>
                        <Form.Group as={Col} md="12" style={{ paddingLeft: 10 }}>
                            <Form.Label>Address *</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={4}
                                type="text"
                                placeholder="Address"
                                controlId="currentAdress"
                                isInvalid={fifteenerrors}
                                value={currentAdress}
                                name="currentAdress"
                                maxLength={125}
                                onChange={(e) => {
                                    setCurrentAddress(e.target.value)
                                    if (permanentPincode === "") {
                                        setFourteenerror(" Pincode is Required");
                                    }
                                    else {
                                        setFourteenerror("")
                                    }
                                }}
                            ></Form.Control>
                            <Form.Control.Feedback type="invalid">
                                {fifteenerrors}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Row>
                            <Col style={{ paddingLeft: 25, paddingTop: 20 }}>
                                <Form.Label>State * :</Form.Label>
                            </Col>
                            <Col md="7" style={{ paddingLeft: 25, paddingTop: 10 }}>
                                <Form.Group as={Col} md="12" style={{ padding: 0 }}>

                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="State"
                                        name="currentState"
                                        controlId="currentState"
                                        maxLength={50}
                                        isInvalid={sixteenerror}
                                        value={currentState}
                                        onChange={(e) => {
                                            setCurrentState(e.target.value)
                                            if(!e.target.value.match(/^[a-zA-Z]+$/)){

                                                setSixteenerror(" Enter valid State");

                                            }

                                            else{

                                                setSixteenerror("")

                                            }
                                            if (currentAdress === "") {
                                                setFifteenErrors(" Address is Required");
                                            }
                                            else {
                                                setFifteenErrors("")
                                            }
                                            if (!e.target.value.match(/^[a-zA-Z]+$/)) {
                                                setSixteenerror(" State is Invalid/Required");
                                            }
                                            else {
                                                setSixteenerror("")
                                            }
                                        }}
                                    ></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {sixteenerror}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col style={{ paddingLeft: 25, paddingTop: 25 }}>
                                <Form.Label>Country * :</Form.Label>
                            </Col>
                            <Col md="7" style={{ paddingBottom: 10, paddingLeft: 25, paddingTop: 20 }}>
                                <Form.Group as={Col} md="12" >

                                    <Form.Select
                                        required
                                        type="text"
                                        placeholder="Country"
                                        //controlId="currentCountry"
                                        value={currentCountry}
                                        isInvalid={seventeenerror}
                                        maxLength={50}
                                        name="currentCountry"
                                        onChange={(e) => {
                                            setCurrentCountry(e.target.value)
                                            if (currentState === "" || !currentState.match(/^[a-zA-Z]+$/)) {
                                                setSixteenerror(" State is Invalid/Required");
                                            }
                                            else {
                                                setSixteenerror("")
                                            }
                                        }
                                        }
                                    >
                                        <option>Select Country</option>
                                        {countryListAllIsoData.map((m) => (
                                            <option >{m.name}</option>
                                        ))}


                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {seventeenerror}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Col>
                            <Col>
                            </Col>

                        </Row>
                        <Row>
                            <Col style={{ paddingLeft: 25, paddingTop: 20 }}>
                                <Form.Label>Pincode * :</Form.Label>
                            </Col>
                            <Col md="7" style={{ paddingBottom: 10, paddingLeft: 25, paddingTop: 10 }}>
                                <Form.Group as={Col} md="12" style={{ paddingBottom: 10 }}>

                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="Pincode"
                                        controlId="currentPincode"
                                        value={currentPincode}
                                        isInvalid={eighteenerror}
                                        name="currentPincode"
                                        maxLength={6}
                                        onChange={(e) => {
                                            setCurrentPincode(e.target.value)
                                            if (e.target.value.length > 6 || e.target.value.length < 6 ) {

                                                setEighteenerror(" Pincode length should be 6 characters");

                                            }

                                            else{

                                                setEighteenerror("");

                                            }
                                            if (currentCountry === "") {
                                                setSeventeenerror(" Country is Required");
                                            }
                                            else {
                                                setSeventeenerror("")
                                            }
                                        }}
                                    ></Form.Control>
                                    <Form.Control.Feedback type="invalid">
                                        {eighteenerror}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button
                className="rounded-pill" md="3"
                style={{ backgroundColor: "#f5896e", float: "right" }}
                type="submit"
                size="lg"
            >
                Next
            </Button>
                    </Col>
                </Row>
            </Row>
           
        </Form>
    </div>

    )
}
export default AddressTab;

