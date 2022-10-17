import React, { useEffect, useState } from "react";
import { Card, Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "../../../Uri";
import { toast } from "react-toastify";


function PersonalDetailsTab() {

    const userData = sessionStorage.getItem("userdata");
    const userData1 = JSON.parse(userData);
    const onboardingId = userData1.data.onboardingId;
    const empId = localStorage.getItem('item')

    const payload = {
        onboardingId,
        firstName,
        lastName,
        middleName,
        dateOfBirth,
        phoneNumber,
        secondaryPhoneNumber,
        email,
        primarySkills,
        secondarySkills,
        bloodGroup,
        gender,
        maritalStatus,
    }


    const [ferrors, setFErrors] = useState("");
    const [serror, setSerror] = useState("");
    const [thirderrors, setThirdErrors] = useState("");
    const [fourerror, setFourerror] = useState("");
    const [fiveerrors, setFiveErrors] = useState("");
    const [sixerror, setSixerror] = useState("");
    const [sevenerrors, setSevenErrors] = useState("");
    const [eighterror, setEighterror] = useState("");
    const [nineerrors, setNineErrors] = useState("");
    const [tenerror, setTenerror] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState(" ");
    const [phoneNumber, setPhoneNumber] = useState(" ");
    const [secondaryPhoneNumber, setSecondaryPhone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [primarySkills, setPrimarySkills] = useState("");
    const [secondarySkills, setSecondarySkills] = useState("");
    const [email, setEmail] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [gender, setGender] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [onboardingId1, setOnboardingId] = useState("");
    const [dateOfJoining, setDateOfJoining] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        axios
            .get(`/emp/getPersonalDetails/${empId}`) 
            .then((response) => {
                console.log(response.data);
                setStatus(response.data)
            });
    }, []);

    useEffect(() => {
        axios
            .get(`/emp/getPersonalDetails/${empId}`)
            .then((response) => {
                setOnboardingId(response.data.data.onboardingId1);
                setFirstName(response.data.data.firstName);
                setLastName(response.data.data.lastName);
                setSecondaryPhone(response.data.data.secondaryPhoneNumber);
                setEmployeeId(response.data.data.employeeId);
                setFirstName(response.data.data.firstName);
                setMiddleName(response.data.data.middleName);
                setLastName(response.data.data.lastName);
                setPhoneNumber(response.data.data.phoneNumber);
                setSecondaryPhone(response.data.data.secondaryPhoneNumber);
                setEmail(response.data.data.email);
                setDateOfBirth(response.data.data.dateOfBirth);
                setBloodGroup(response.data.data.bloodGroup);
                setGender(response.data.data.gender);
                setMaritalStatus(response.data.data.maritalStatus);
                setPrimarySkills(response.data.data.primarySkills);
                setSecondarySkills(response.data.data.secondarySkills);
            });
    }, []);

    const changeHandler = async (e) => {
        e.preventDefault();
        await axios.put(`/emp/updatePersonalDetails/${empId}`, {
            onboardingId,
            firstName,
            lastName,
            middleName,
            dateOfBirth,
            phoneNumber,
            secondaryPhoneNumber,
            email,
            primarySkills,
            secondarySkills,
            bloodGroup,
            gender,
            maritalStatus,
            status

        });
        toast.success("Form Submitted Successfully");

    };

    return (

        <div>
            {/* <Card style={{ marginLeft: 8, marginRight: 8, marginTop: 0, backgroundColor: "#FAFDD0" }}>
                <Card.Title style={{ margin: 20, textAlign: "center" }}>
                    Personal Details
                </Card.Title>
            </Card> */}

            <Form
                onSubmit={(e) => changeHandler(e)}
                style={{ padding: 10 }}
            >
                <Row className="mb-5">
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        md="6"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                            value={firstName}
                            // disabled
                            required
                            maxLength={50}
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                            type="text"
                            placeholder="Enter Name"
                            isInvalid={ferrors}
                        />
                        <Form.Control.Feedback type="invalid">
                            {ferrors}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                        <Form.Label>Middle name</Form.Label>
                        <Form.Control
                            name="middleName"
                            type="text"
                            placeholder="Middle name"
                            maxLength={50}
                            value={middleName}
                            onChange={(e) => {

                                setMiddleName(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        md="6"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                            value={lastName}
                            // disabled
                            required
                            maxLength={50}
                            onChange={(e) => {
                                if (firstName == "") {
                                    setFErrors("First Name is required")
                                }
                                else {
                                    setFErrors("")
                                }
                                setLastName(e.target.value);
                            }}
                            isInvalid={serror}
                            type="text"
                            placeholder="Enter Name"
                        />
                        <Form.Control.Feedback type="invalid">
                            {serror}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ paddingLeft: 10 }}>
                        <Form.Label>Phone Number *</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">
                                +91
                            </InputGroup.Text>
                            <Form.Control
                                required
                                type="number"
                                name="primaryPhoneNumber"
                                placeholder="Phone Number"
                                maxLength={10}
                                value={phoneNumber}
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                    if (e.target.value.length > 10) {
                                        setThirdErrors(" Phonenumber length should be 10 characters");;
                                    }
                                    if (lastName === "") {
                                        setSerror("Last Name is Required");
                                    }
                                    else {
                                        setSerror("")
                                    }
                                }}
                                isInvalid={thirderrors}
                            />
                            <Form.Control.Feedback type="invalid">
                                {thirderrors}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        className="mb-3"
                        md="6"
                        style={{ padding: 10 }}
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Emergency Phone Number </Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">
                                +91
                            </InputGroup.Text>
                            <Form.Control
                                value={secondaryPhoneNumber}
                                maxLength={10}
                                isInvalid={nineerrors}
                                onChange={(e) => {
                                    setSecondaryPhone(e.target.value);
                                    if (e.target.value.length > 10) {
                                        setNineErrors(" Phonenumber length should be 10 characters");;
                                    }
                                }}
                                type="number"
                                placeholder="Enter Phone"
                            />
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            {/* {fourtyseven} */}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            value={email}
                            isInvalid={fourerror}
                            onChange={(e) => {
                                if (primaryPhoneNumber === "") {
                                    setThirdErrors("Phone Number is Required");
                                }
                                else {
                                    setThirdErrors("")
                                }
                                setEmail(e.target.value);
                            }}
                        />
                        <Form.Control.Feedback type="invalid">
                            {fourerror}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Date of Birth *</Form.Label>
                        <Form.Control
                            // required
                            type="date"
                            name="dateOfBirth"
                            placeholder="DOB"
                            controlId="dateOfBirth"
                            value={dateOfBirth}
                            isInvalid={fiveerrors}
                            onChange={(e) => {
                                setDateOfBirth(e.target.value);
                                if (email === "") {
                                    setFourerror("Email is Required");
                                }
                                else {
                                    setFourerror("")
                                }
                                setDateOfBirth(e.target.value);
                            }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {fiveerrors}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Blood Group *</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            name="bloodGroup"
                            placeholder="Blood Group "
                            controlId="bloodGroup"
                            isInvalid={sixerror}
                            value={bloodGroup}

                            onChange={(e) => {
                                setBloodGroup(e.target.value);
                                if (dateOfBirth === "") {
                                    setFiveErrors("Email is Required");
                                }
                                else {
                                    setFiveErrors("")
                                }
                            }}
                        >
                            <option>Select</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {sixerror}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Gender *</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            name="gender"
                            placeholder="Gender "
                            controlId="gender"
                            value={gender}
                            isInvalid={sevenerrors}
                            onChange={(e) => {
                                setGender(e.target.value);
                                if (bloodGroup === "") {
                                    setSixerror(" Blood group is Required");
                                }
                                else {
                                    setSixerror("")
                                }
                            }}
                        >
                            <option>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {sevenerrors}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Marital Status *</Form.Label>
                        <Form.Select
                            required
                            type="text"
                            name="maritalStatus"
                            placeholder="Marital Status "
                            controlId="maritalStatus"
                            value={maritalStatus}
                            isInvalid={eighterror}
                            onChange={(event) => {
                                setMaritalStatus(event.target.value)
                                if (gender === "") {
                                    setSevenErrors(" Gender is Required");
                                }
                                else {
                                    setSevenErrors("")
                                }
                            }}
                        >
                            <option>Select</option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Diverced">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            {eighterror}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Primary Skills</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Primary Skills"
                            controlId="primarySkils"
                            value={primarySkills}
                            maxLength={15}
                            name="primarySkills"
                            onChange={(e) =>
                                setPrimarySkills(e.target.value)


                            }
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md="6" style={{ padding: 10 }}>
                        <Form.Label>Secondary Skills</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Secondary Skills"
                            controlId="secondarySkills"
                            value={secondarySkills}
                            maxLength={15}
                            name="secondarySkills"
                            onChange={(e) =>
                                setSecondarySkills(e.target.value)

                            }
                        ></Form.Control>
                    </Form.Group>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        <Button
                    className="rounded-pill" md="3"
                    style={{ backgroundColor: "#eb4509", float: "right" }}
                    type="submit"
                    size="lg"
                >
                    Submit
                </Button>
                        </Col>
                    </Row>
                   


                    <Row>

                    </Row>

                </Row>
               
            </Form>
        </div>
    )
}
export default PersonalDetailsTab;